const TKM_SUPABASE_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
const TKM_SUPABASE_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

const tkmSb = window.supabase.createClient(TKM_SUPABASE_URL, TKM_SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

const TKM_LOCALE_CONFIG = {
  tk: {
    lang: "tk",
    label: "Türkmençe (TMT)",
    currency: "TMT",
    rateFromTmt: 1,
    strings: {
      home: "Baş sahypa",
      market: "Bildiriş bazary",
      categories: "Bölümler",
      wallet: "Gapjyk",
      profile: "Profil",
      viewProfile: "Profili gör ›",
      balance: "Balansyňyz",
      withdrawable: "Çekip boljak balans",
      verified: "✓ Tassyklanan profil",
      unverified: "Tassyklama garaşylýar",
      verifyBtn: "🛡️ Şahsyýeti tassykla",
      deposit: "Balans ýükle",
      withdraw: "Pul çek",
      addListing: "+ Bildiriş goş",
      controlCenter: "Dolandyryş merkezi",
      orders: "Sargytlarym",
      myListings: "Bildirişlerim",
      soldListings: "Satan bildirişlerim",
      cart: "Sebedim",
      langCurrency: "Dil we walýuta",
      logout: "Çykmak",
      searchPlaceholder: "Haryt, hasap ýa-da satyjy gözle..."
    }
  },
  tr: {
    lang: "tr",
    label: "Türkçe (TRY)",
    currency: "TRY",
    rateFromTmt: 9.85,
    strings: {
      home: "Ana Sayfa",
      market: "İlan Pazarı",
      categories: "Kategoriler",
      wallet: "Cüzdan",
      profile: "Profil",
      viewProfile: "Profili Gör ›",
      balance: "Bakiyeniz",
      withdrawable: "Çekilebilir Bakiye",
      verified: "✓ Doğrulanmış Profil",
      unverified: "Doğrulama Bekleniyor",
      verifyBtn: "🛡️ Kimlik Doğrula",
      deposit: "Bakiye Yükle",
      withdraw: "Para Çek",
      addListing: "+ İlan Ekle",
      controlCenter: "Kontrol Merkezi",
      orders: "Siparişlerim",
      myListings: "İlanlarım",
      soldListings: "Sattığım İlanlar",
      cart: "Sepetim",
      langCurrency: "Dil ve Para Birimi",
      logout: "Çıkış Yap",
      searchPlaceholder: "Ürün, hesap veya satıcı ara..."
    }
  },
  ru: {
    lang: "ru",
    label: "Русский (RUB)",
    currency: "RUB",
    rateFromTmt: 26.5,
    strings: {
      home: "Главная",
      market: "Маркет",
      categories: "Категории",
      wallet: "Кошелёк",
      profile: "Профиль",
      viewProfile: "Открыть профиль ›",
      balance: "Ваш баланс",
      withdrawable: "Доступно к выводу",
      verified: "✓ Подтверждённый профиль",
      unverified: "Требуется проверка",
      verifyBtn: "🛡️ Подтвердить профиль",
      deposit: "Пополнить",
      withdraw: "Вывести",
      addListing: "+ Добавить товар",
      controlCenter: "Центр управления",
      orders: "Мои заказы",
      myListings: "Мои объявления",
      soldListings: "Проданные товары",
      cart: "Корзина",
      langCurrency: "Язык и валюта",
      logout: "Выйти",
      searchPlaceholder: "Поиск товара, аккаунта или продавца..."
    }
  },
  en: {
    lang: "en",
    label: "English (USD)",
    currency: "USD",
    rateFromTmt: 0.285,
    strings: {
      home: "Home",
      market: "Listings",
      categories: "Categories",
      wallet: "Wallet",
      profile: "Profile",
      viewProfile: "View Profile ›",
      balance: "Your Balance",
      withdrawable: "Withdrawable Balance",
      verified: "✓ Verified Profile",
      unverified: "Verification Pending",
      verifyBtn: "🛡️ Verify Account",
      deposit: "Deposit",
      withdraw: "Withdraw",
      addListing: "+ Add Listing",
      controlCenter: "Control Center",
      orders: "My Orders",
      myListings: "My Listings",
      soldListings: "Sold Listings",
      cart: "My Cart",
      langCurrency: "Language & Currency",
      logout: "Log Out",
      searchPlaceholder: "Search item, account or seller..."
    }
  }
};

function tkmGetLocale() {
  const saved = localStorage.getItem("tkm_locale");
  return TKM_LOCALE_CONFIG[saved] ? saved : "tk";
}

function tkmSetLocale(code) {
  if (!TKM_LOCALE_CONFIG[code]) return;
  localStorage.setItem("tkm_locale", code);
  tkmApplyLocaleAndTheme();
}

function tkmFmtMoney(tmtAmount) {
  const loc = TKM_LOCALE_CONFIG[tkmGetLocale()];
  const converted = (Number(tmtAmount || 0) * loc.rateFromTmt).toFixed(2);
  if (loc.currency === "TMT") return `${converted} TMT`;
  if (loc.currency === "TRY") return `${converted} ₺`;
  if (loc.currency === "USD") return `$${converted}`;
  return `${converted} ₽`;
}

function tkmGetTheme() {
  return localStorage.getItem("tkm_theme") === "light" ? "light" : "dark";
}

function tkmToggleTheme() {
  const next = tkmGetTheme() === "dark" ? "light" : "dark";
  localStorage.setItem("tkm_theme", next);
  tkmApplyLocaleAndTheme();
}

function tkmApplyLocaleAndTheme() {
  const theme = tkmGetTheme();
  document.documentElement.setAttribute("data-theme", theme);
  document.body.classList.toggle("light-mode", theme === "light");
  document.body.classList.toggle("dark-mode", theme === "dark");

  if (theme === "light") {
    document.body.style.background = "#f4f7fb";
    document.body.style.color = "#0f172a";
  } else {
    document.body.style.background = "radial-gradient(circle at 50% 0%, #1d294d 0%, #0b0f1d 58%, #070a14 100%)";
    document.body.style.color = "#f8fafc";
  }

  const loc = TKM_LOCALE_CONFIG[tkmGetLocale()];
  document.documentElement.lang = loc.lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (loc.strings[key]) el.textContent = loc.strings[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (loc.strings[key]) el.setAttribute("placeholder", loc.strings[key]);
  });

  // Ana sayfadaki eski "Giriş Et" ve "Onlayn" rozetlerini gizle
  document.querySelectorAll("header button, header a, .topbar button, .topbar a, nav a").forEach((node) => {
    const txt = (node.textContent || "").trim().toLowerCase();
    if (txt === "giriş et" || txt === "onlayn" || txt === "online") {
      node.style.display = "none";
    }
  });
}

async function tkmRequireSession(redirectIfGuest = false) {
  const { data: { session } } = await tkmSb.auth.getSession();
  if (!session?.user) {
    if (redirectIfGuest) window.location.href = "profil.html";
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
    el.innerHTML = `<img src="${profile.avatar_url}" alt="Profil" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;" />`;
  } else {
    el.textContent = label;
  }
}

async function tkmMountHeaderControls(containerId = "headerRightControls") {
  let box = document.getElementById(containerId);
  if (!box) {
    const header = document.querySelector("header, .topbar");
    if (header) {
      box = document.createElement("div");
      box.id = containerId;
      header.appendChild(box);
    }
  }
  if (!box) return;

  const user = await tkmRequireSession(false);
  let prof = null;
  if (user) prof = await tkmGetOrCreateProfile(user);

  const label = (prof?.full_name || user?.email?.split("@")[0] || "P").trim().charAt(0).toUpperCase();
  const avatarHtml = prof?.avatar_url
    ? `<img src="${prof.avatar_url}" alt="Profil" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" />`
    : label;

  box.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;">
      <button type="button" onclick="tkmToggleTheme()" title="Tema" style="width:34px;height:34px;border-radius:50%;border:1px solid rgba(148,163,184,0.28);background:#1b2440;color:#fbbf24;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;">🌓</button>
      <a href="profil.html" title="Profil" style="width:36px;height:36px;border-radius:50%;overflow:hidden;border:2px solid #60a5fa;background:linear-gradient(135deg,#3b6ef6,#5b4df5);color:#fff;font-weight:900;font-size:14px;text-decoration:none;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${avatarHtml}</a>
    </div>
  `;
  tkmApplyLocaleAndTheme();
}

async function tkmAddToCart(itemTitle, priceTmt) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false };
  const { error } = await tkmSb.from("cart_items").insert({
    user_id: user.id,
    item_title: String(itemTitle || "Dijital Ürün").trim(),
    price_tmt: Number(priceTmt || 0) > 0 ? Number(priceTmt) : 1
  });
  return { ok: !error, error: error?.message || "" };
}

async function tkmRemoveFromCart(cartId) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false };
  const { error } = await tkmSb.from("cart_items").delete().eq("id", cartId).eq("user_id", user.id);
  return { ok: !error };
}

async function tkmBuyFromCartItem(cartItem) {
  const user = await tkmRequireSession(true);
  if (!user) return { ok: false, error: "Giriş gerekli" };
  const prof = await tkmGetOrCreateProfile(user);
  const amount = Number(cartItem.price_tmt || 0);
  const currentBal = Number(prof?.balance_tmt || 0);
  if (currentBal < amount) {
    return { ok: false, error: `Yetersiz bakiye (${tkmFmtMoney(currentBal)}).` };
  }
  const newBal = Number((currentBal - amount).toFixed(2));
  const { error: balErr } = await tkmSb.from("profiles").update({ balance_tmt: newBal }).eq("id", user.id);
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
  if (!user) return { ok: false };
  const price = Number(priceTmt || 0);
  if (!title || price <= 0) return { ok: false, error: "Başlık ve fiyat girin." };
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
  if (!user) return { ok: false };
  const { error } = await tkmSb.from("listings").delete().eq("id", listingId).eq("user_id", user.id);
  return { ok: !error };
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
        let w = img.width, h = img.height;
        if (w > h && w > maxSide) { h = Math.round((h * maxSide) / w); w = maxSide; }
        else if (h > maxSide) { w = Math.round((w * maxSide) / h); h = maxSide; }
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  tkmApplyLocaleAndTheme();
  tkmMountHeaderControls();
});
