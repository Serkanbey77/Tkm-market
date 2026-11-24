const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

const GAME_SUBCATS = ["Ählisi", "Hasap", "Arenda", "UC"];
const APP_SUBCATS = ["Ählisi", "Hasap", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
const COURSE_SUBCATS = ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal"];

const GAMES_CATALOG = [
  { id: "pubg-mobile", name: "PUBG Mobile", kind: "game", tag: "BATTLE ROYALE • UC & HASAP", color: "#d97706" },
  { id: "clash-of-clans", name: "Clash of Clans", kind: "game", tag: "KÖY & KLAN • HASAP", color: "#15803d" },
  { id: "minecraft", name: "Minecraft", kind: "game", tag: "SANDBOX • HASAP & SERVER", color: "#4d7c0f" },
  { id: "gta-5", name: "GTA 5", kind: "game", tag: "OPEN WORLD • ONLINE HASAP", color: "#059669" },
  { id: "roblox", name: "Roblox", kind: "game", tag: "OYUN PLATFORMASY • HASAP", color: "#dc2626" },
  { id: "fortnite", name: "Fortnite", kind: "game", tag: "BATTLE ROYALE • V-BUCKS & HASAP", color: "#7c3aed" },
  { id: "pubg-mobile-korea", name: "PUBG Mobile Kore", kind: "game", tag: "KORE SÜRÜMI • HASAP & UC", color: "#2563eb" },
  { id: "rust", name: "Rust", kind: "game", tag: "SURVIVAL • STEAM HASAP", color: "#ea580c" },
  { id: "call-of-duty", name: "Call of Duty", kind: "game", tag: "FPS AKSION • HASAP", color: "#334155" },
  { id: "far-cry", name: "Far Cry", kind: "game", tag: "MACERA • HASAP", color: "#f97316" },
  { id: "fifa", name: "FIFA", kind: "game", tag: "FUTBOL • ULTIMATE HASAP", color: "#16a34a" }
];

const APPS_CATALOG = [
  { id: "telegram", name: "Telegram", kind: "app", tag: "KANAL • HASAP • BOT", color: "#0284c7" },
  { id: "tiktok", name: "TikTok", kind: "app", tag: "HASAP • İZLENME • LIKE • REKLAM", color: "#ec4899" },
  { id: "youtube", name: "YouTube", kind: "app", tag: "KANAL • İZLENME • ABONE", color: "#dc2626" },
  { id: "instagram", name: "Instagram", kind: "app", tag: "HASAP • LIKE • YORUM • DIZAYN", color: "#db2777" },
  { id: "chatgpt", name: "ChatGPT", kind: "app", tag: "AI HASAP • ABONELIK", color: "#10b981" },
  { id: "gemini", name: "Gemini", kind: "app", tag: "GOOGLE AI • HASAP", color: "#6366f1" },
  { id: "microsoft", name: "Microsoft", kind: "app", tag: "WINDOWS • HESAP & AÇAR", color: "#2563eb" },
  { id: "apple", name: "Apple", kind: "app", tag: "APPLE ID • ICLOUD & HYZMAT", color: "#475569" },
  { id: "steam", name: "Steam", kind: "app", tag: "OYUN DÜKANY • HASAP & BAKIÝA", color: "#1d4ed8" },
  { id: "xbox", name: "Xbox", kind: "app", tag: "GAME PASS • HASAP", color: "#16a34a" },
  { id: "spotify", name: "Spotify", kind: "app", tag: "PREMIUM • HASAP", color: "#15803d" },
  { id: "discord", name: "Discord", kind: "app", tag: "NITRO • SERVER • HASAP", color: "#4f46e5" },
  { id: "microsoft-office", name: "Microsoft Office", kind: "app", tag: "WORD • EXCEL • 365 HASAP", color: "#ea580c" },
  { id: "epic-games", name: "Epic Games", kind: "app", tag: "EPIC HASAP • OYUNLAR", color: "#111827" },
  { id: "runway", name: "Runway", kind: "app", tag: "VIDEO AI • HASAP & KREDIT", color: "#0d9488" },
  { id: "netflix", name: "Netflix", kind: "app", tag: "KINO & SERIAL • HASAP", color: "#b91c1c" },
  { id: "midjourney", name: "Midjourney", kind: "app", tag: "SURAT AI • HASAP", color: "#7c3aed" },
  { id: "google-play", name: "Google Play", kind: "app", tag: "ANDROID • BAKIÝA & HASAP", color: "#059669" },
  { id: "belet-film", name: "Belet Film", kind: "app", tag: "BELET FILM • HASAP", color: "#e11d48" }
];

const COURSES_CATALOG = [
  { id: "trading-kurs", name: "Trading Kurs", kind: "course", tag: "TEHNIKI ANALIZ & OKUW", color: "#0d9488" }
];

const ALL_PLATFORMS = [...GAMES_CATALOG, ...APPS_CATALOG, ...COURSES_CATALOG];

function findPlatform(idOrName) {
  const k = String(idOrName || "").toLowerCase().trim();
  return ALL_PLATFORMS.find(p => p.id.toLowerCase() === k || p.name.toLowerCase() === k) || null;
}

function getSubcatsForPlatform(plat) {
  if (!plat) return ["Ählisi", "Hasap", "Arenda", "UC", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
  if (plat.kind === "game") return GAME_SUBCATS;
  if (plat.kind === "course") return COURSE_SUBCATS;
  return APP_SUBCATS;
}

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMediaImg(slug, folder, cls, altText, fallbackColor) {
  const base = `assets/${folder}/${slug}`;
  return `<img class="${cls}" src="${base}.jpg" data-exts="png,webp" data-base="${base}" alt="${esc(altText)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;background:${fallbackColor || "#1e293b"};" onerror="const exts=(this.dataset.exts||'').split(',');const next=exts.shift();if(next){this.dataset.exts=exts.join(',');this.src=this.dataset.base+'.'+next;}else{this.style.display='none';}" />`;
}

function renderPlatformLogoImg(plat) {
  return renderMediaImg(plat.id, "logos", "platform-logo-img", plat.name, plat.color);
}

function renderPlatformBannerHtml(plat) {
  const subText = plat.kind === "game"
    ? "Hasap • Arenda • UC"
    : (plat.kind === "course"
        ? "Kripto Trading • Forex & Altın • Sinyal"
        : "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam");

  return `<div style="position:relative; width:100%; border-radius:16px; overflow:hidden; min-height:132px; display:flex; align-items:center; gap:14px; padding:16px; color:#fff; background:linear-gradient(120deg, #0f172a 0%, ${plat.color} 100%); box-shadow:0 12px 24px rgba(2,6,23,0.28);">
    <div style="position:absolute; inset:0; opacity:0.38; pointer-events:none;">
      ${renderMediaImg(plat.id, "banners", "platform-banner-bg", plat.name + " banner", plat.color)}
    </div>
    <div style="position:absolute; inset:0; background:linear-gradient(90deg, rgba(2,6,23,0.78) 0%, rgba(2,6,23,0.35) 100%); pointer-events:none;"></div>
    <div class="platform-hero-logo" style="position:relative; z-index:2; width:66px; height:66px; border-radius:16px; overflow:hidden; border:2px solid rgba(255,255,255,0.45); flex-shrink:0;">
      ${renderPlatformLogoImg(plat)}
    </div>
    <div style="position:relative; z-index:2;">
      <div style="display:inline-block; font-size:10px; font-weight:800; padding:2px 8px; border-radius:999px; background:rgba(255,255,255,0.18); margin-bottom:5px;">${esc(plat.tag)}</div>
      <h1 style="margin:0; font-size:20px;">${esc(plat.name)}</h1>
      <p style="margin:3px 0 0; font-size:12px; opacity:0.92;">${esc(subText)}</p>
    </div>
  </div>`;
}

function showToast(msg) {
  let el = document.getElementById("tkm-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "tkm-toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(() => { el.style.display = "none"; }, 3200);
}

function applySavedTheme() {
  document.body.classList.toggle("dark", localStorage.getItem("tkm_theme") === "dark");
}

function toggleTheme() {
  const next = !document.body.classList.contains("dark");
  document.body.classList.toggle("dark", next);
  localStorage.setItem("tkm_theme", next ? "dark" : "light");
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("tkm_auth_session") || "null") || { username: "Serkanbey77" };
  } catch (_) {
    return { username: "Serkanbey77" };
  }
}

function syncUserFields() {
  const u = getUser();
  const pSeller = document.getElementById("p-seller");
  if (pSeller && !pSeller.dataset.edited) pSeller.value = u.username;
  const wSeller = document.getElementById("w-seller");
  if (wSeller && !wSeller.dataset.edited) wSeller.value = u.username;
  const mSender = document.getElementById("m-sender");
  if (mSender && !mSender.dataset.edited) mSender.value = u.username;
}

function setDbPill(ok, text) {
  const el = document.getElementById("db-status-pill");
  if (!el) return;
  el.textContent = text;
  el.style.background = ok ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.16)";
  el.style.color = ok ? "#059669" : "#d97706";
}

async function sbGet(table) {
  const res = await fetch(`${TKM_API.url}/rest/v1/${table}?select=*&order=id.desc`, {
    headers: { apikey: TKM_API.key, Authorization: `Bearer ${TKM_API.key}` }
  });
  if (!res.ok) throw new Error(`${table}: ${res.status} ${await res.text()}`);
  return await res.json();
}

async function sbInsert(table, payload) {
  const res = await fetch(`${TKM_API.url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: TKM_API.key,
      Authorization: `Bearer ${TKM_API.key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`${table} insert: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  return Array.isArray(rows) ? rows[0] : rows;
}

async function sbPatch(table, id, payload) {
  const res = await fetch(`${TKM_API.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: {
      apikey: TKM_API.key,
      Authorization: `Bearer ${TKM_API.key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`${table} update: ${res.status} ${await res.text()}`);
  const rows = await res.json();
  return Array.isArray(rows) && rows[0] ? rows[0] : payload;
}

async function sbDelete(table, id) {
  const res = await fetch(`${TKM_API.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: { apikey: TKM_API.key, Authorization: `Bearer ${TKM_API.key}` }
  });
  if (!res.ok) throw new Error(`${table} delete: ${res.status} ${await res.text()}`);
}

async function sbUpload(files) {
  const urls = [];
  for (const f of files) {
    const ext = (f.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
    const path = `products/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const res = await fetch(`${TKM_API.url}/storage/v1/object/${TKM_API.bucket}/${path}`, {
      method: "POST",
      headers: {
        apikey: TKM_API.key,
        Authorization: `Bearer ${TKM_API.key}`,
        "Content-Type": f.type || "image/jpeg",
        "x-upsert": "true"
      },
      body: f
    });
    if (!res.ok) throw new Error(`Storage: ${res.status} ${await res.text()}`);
    urls.push(`${TKM_API.url}/storage/v1/object/public/${TKM_API.bucket}/${path}`);
  }
  return urls;
}

function getImages(item) {
  const out = [];
  if (Array.isArray(item.image_urls)) {
    for (const u of item.image_urls) {
      if (typeof u === "string" && /^https?:\/\//i.test(u.trim())) out.push(u.trim());
    }
  }
  if (!out.length && typeof item.image_url === "string" && /^https?:\/\//i.test(item.image_url.trim())) {
    out.push(item.image_url.trim());
  }
  return out;
}

function mountPlayerokShell(activeTab, searchPlaceholder, showBackArrow = false) {
  applySavedTheme();
  const host = document.getElementById("playerok-shell");
  if (!host) return;

  const backHtml = showBackArrow
    ? `<button class="back-btn" type="button" aria-label="Yza" onclick="history.length > 1 ? history.back() : (location.href='kategoriler.html')">←</button>`
    : "";

  host.innerHTML = `
    <header class="top-head">
      <div class="top-inner">
        <div class="top-row">
          <div style="display:flex; align-items:center; gap:8px;">
            ${backHtml}
            <a class="brand-link" href="index.html">TKM <span>Market</span></a>
          </div>
          <div class="top-right">
            <span class="db-mini" id="db-status-pill">Supabase</span>
            <button class="theme-switch" type="button" title="Tema" onclick="toggleTheme()">☀/☾</button>
          </div>
        </div>
        ${searchPlaceholder ? `
          <div class="search-box">
            <span>⌕</span>
            <input id="global-search" type="text" placeholder="${esc(searchPlaceholder)}" />
          </div>
        ` : ""}
      </div>
    </header>

    <nav class="bottom-nav">
      <a class="bnav-item ${activeTab === "search" ? "active" : ""}" href="index.html">
        <span class="ico">⌕</span><span>Gözleg</span>
      </a>
      <a class="bnav-item ${activeTab === "catalog" ? "active" : ""}" href="kategoriler.html">
        <span class="ico">⊞</span><span>Kategorýa</span>
      </a>
      <a class="bnav-item ${activeTab === "messages" ? "active" : ""}" href="mesajlar.html">
        <span class="ico">✉</span><span>Hatlar</span>
      </a>
      <a class="bnav-item ${activeTab === "sell" ? "active" : ""}" href="satyjy.html">
        <span class="ico">＋</span><span>Satmak</span>
      </a>
      <a class="bnav-item ${activeTab === "orders" ? "active" : ""}" href="sargytlar.html">
        <span class="ico">🛡</span><span>Emanet</span>
      </a>
    </nav>
  `;

  syncUserFields();
}
