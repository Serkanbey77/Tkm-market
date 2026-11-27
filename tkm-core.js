const TKM_SUPABASE_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
const TKM_SUPABASE_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

const tkmSb = window.supabase.createClient(TKM_SUPABASE_URL, TKM_SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

function tkmFmtTmt(val) {
  return `${Number(val || 0).toFixed(2)} TMT`;
}

async function tkmRequireSession(redirectIfGuest = false) {
  const { data: { session } } = await tkmSb.auth.getSession();
  if (!session?.user) {
    if (redirectIfGuest) {
      window.location.href = "profil.html";
    }
    return null;
  }
  return session.user;
}

async function tkmGetOrCreateProfile(user) {
  const cleanEmail = (user.email || "").trim().toLowerCase();
  const { data: existing } = await tkmSb
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (existing) return existing;

  const fallbackName = (user.user_metadata?.full_name || cleanEmail.split("@")[0] || "TKM Üyesi").trim();
  const { data: created } = await tkmSb
    .from("profiles")
    .upsert({
      id: user.id,
      email: cleanEmail,
      full_name: fallbackName,
      phone: user.user_metadata?.phone || "",
      address: "",
      avatar_url: "",
      is_verified: false,
      balance_tmt: 0,
      withdrawable_tmt: 0
    }, { onConflict: "id" })
    .select("*")
    .single();

  return created;
}

function tkmRenderAvatar(el, profile, fallbackText = "T") {
  if (!el) return;
  const label = (profile?.full_name || fallbackText || "T").trim().charAt(0).toUpperCase() || "T";
  if (profile?.avatar_url) {
    el.innerHTML = `<img src="${profile.avatar_url}" alt="Profil Fotoğrafı" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;" />`;
  } else {
    el.textContent = label;
  }
}

async function tkmAddToCart(itemTitle, priceTmt) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false, error: "Giriş gerekli" };
  const cleanPrice = Number(priceTmt || 0);
  const { error } = await tkmSb.from("cart_items").insert({
    user_id: user.id,
    item_title: String(itemTitle || "Dijital Ürün").trim(),
    price_tmt: cleanPrice > 0 ? cleanPrice : 1
  });
  return { ok: !error, error: error?.message || "" };
}

async function tkmRemoveFromCart(cartId) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false };
  const { error } = await tkmSb.from("cart_items").delete().eq("id", cartId).eq("user_id", user.id);
  return { ok: !error, error: error?.message || "" };
}

async function tkmBuyFromCartItem(cartItem) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false, error: "Giriş gerekli" };

  const prof = await tkmGetOrCreateProfile(user);
  const amount = Number(cartItem.price_tmt || 0);
  const currentBal = Number(prof?.balance_tmt || 0);

  if (currentBal < amount) {
    return { ok: false, error: `Yetersiz TMT bakiye (${tkmFmtTmt(currentBal)}). Önce bakiye yükleyin.` };
  }

  const newBal = Number((currentBal - amount).toFixed(2));
  const { error: balErr } = await tkmSb
    .from("profiles")
    .update({ balance_tmt: newBal, updated_at: new Date().toISOString() })
    .eq("id", user.id);
  if (balErr) return { ok: false, error: balErr.message };

  const { error: ordErr } = await tkmSb.from("orders").insert({
    buyer_id: user.id,
    seller_id: user.id,
    listing_title: cartItem.item_title,
    amount_tmt: amount,
    status: "Tamamlandı"
  });
  if (ordErr) return { ok: false, error: ordErr.message };

  await tkmSb.from("cart_items").delete().eq("id", cartItem.id).eq("user_id", user.id);
  return { ok: true, newBalance: newBal };
}

async function tkmCreateListing(title, category, priceTmt) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false, error: "Giriş gerekli" };
  const price = Number(priceTmt || 0);
  if (!title || price <= 0) return { ok: false, error: "Geçerli başlık ve TMT fiyat girin." };

  const { error } = await tkmSb.from("listings").insert({
    user_id: user.id,
    title: title.trim(),
    category: category || "Oyun Hesap",
    price_tmt: price,
    status: "active"
  });
  return { ok: !error, error: error?.message || "" };
}

async function tkmDeleteListing(listingId) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false, error: "Giriş gerekli" };
  const { error } = await tkmSb.from("listings").delete().eq("id", listingId).eq("user_id", user.id);
  return { ok: !error, error: error?.message || "" };
}

async function tkmUploadAvatarFile(file, userId) {
  if (!file) return "";
  try {
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = `${userId}/avatar.${ext}`;
    const { error } = await tkmSb.storage.from("avatars").upload(path, file, { upsert: true });
    if (!error) {
      const { data } = tkmSb.storage.from("avatars").getPublicUrl(path);
      if (data?.publicUrl) return `${data.publicUrl}?t=${Date.now()}`;
    }
  } catch (_) {}

  return await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSide = 256;
        let w = img.width;
        let h = img.height;
        if (w > h && w > maxSide) { h = Math.round((h * maxSide) / w); w = maxSide; }
        else if (h > maxSide) { w = Math.round((w * maxSide) / h); h = maxSide; }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
