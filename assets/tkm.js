const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

const GAME_SUBCATS = ["Ählisi", "Hasap", "Arenda", "UC / Bakiýa"];
const APP_SUBCATS = ["Ählisi", "Hasap", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
const COURSE_SUBCATS = ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal & Analiz"];

const GAMES_CATALOG = [
  { id: "pubg-mobile", name: "PUBG Mobile", badge: "PM", color: "#d97706", kind: "game" },
  { id: "clash-of-clans", name: "Clash of Clans", badge: "CoC", color: "#15803d", kind: "game" },
  { id: "minecraft", name: "Minecraft", badge: "MC", color: "#16a34a", kind: "game" },
  { id: "gta-5", name: "GTA 5", badge: "GTA", color: "#0f766e", kind: "game" },
  { id: "roblox", name: "Roblox", badge: "RBX", color: "#dc2626", kind: "game" },
  { id: "fortnite", name: "Fortnite", badge: "FN", color: "#7c3aed", kind: "game" },
  { id: "pubg-mobile-korea", name: "PUBG Mobile Kore", badge: "KR", color: "#b45309", kind: "game" },
  { id: "rust", name: "Rust", badge: "RST", color: "#b91c1c", kind: "game" },
  { id: "call-of-duty", name: "Call of Duty", badge: "CoD", color: "#334155", kind: "game" },
  { id: "far-cry", name: "Far Cry", badge: "FC", color: "#c2410c", kind: "game" },
  { id: "fifa", name: "FIFA", badge: "FC26", color: "#059669", kind: "game" }
];

const APPS_CATALOG = [
  { id: "telegram", name: "Telegram", badge: "TG", color: "#0284c7", kind: "app" },
  { id: "tiktok", name: "TikTok", badge: "TT", color: "#111827", kind: "app" },
  { id: "youtube", name: "YouTube", badge: "YT", color: "#dc2626", kind: "app" },
  { id: "instagram", name: "Instagram", badge: "IG", color: "#db2777", kind: "app" },
  { id: "chatgpt", name: "ChatGPT", badge: "GPT", color: "#10b981", kind: "app" },
  { id: "gemini", name: "Gemini", badge: "GEM", color: "#4f46e5", kind: "app" },
  { id: "microsoft", name: "Microsoft", badge: "MS", color: "#2563eb", kind: "app" },
  { id: "apple", name: "Apple", badge: "APL", color: "#475569", kind: "app" },
  { id: "steam", name: "Steam", badge: "STM", color: "#1e3a8a", kind: "app" },
  { id: "xbox", name: "Xbox", badge: "XB", color: "#16a34a", kind: "app" },
  { id: "spotify", name: "Spotify", badge: "SP", color: "#15803d", kind: "app" },
  { id: "discord", name: "Discord", badge: "DC", color: "#4f46e5", kind: "app" },
  { id: "microsoft-office", name: "Microsoft Office", badge: "OFC", color: "#ea580c", kind: "app" },
  { id: "epic-games", name: "Epic Games", badge: "EPG", color: "#1f2937", kind: "app" },
  { id: "runway", name: "Runway", badge: "RWY", color: "#0d9488", kind: "app" },
  { id: "netflix", name: "Netflix", badge: "NF", color: "#b91c1c", kind: "app" },
  { id: "midjourney", name: "Midjourney", badge: "MJ", color: "#6d28d9", kind: "app" },
  { id: "google-play", name: "Google Play", badge: "GP", color: "#059669", kind: "app" },
  { id: "belet-film", name: "Belet Film", badge: "BF", color: "#e11d48", kind: "app" }
];

const COURSES_CATALOG = [
  { id: "trading-kurs", name: "Trading Kurs", badge: "TRD", color: "#0f766e", kind: "course" }
];

const ALL_PLATFORMS = [...GAMES_CATALOG, ...APPS_CATALOG, ...COURSES_CATALOG];

function findPlatform(idOrName) {
  const key = String(idOrName || "").toLowerCase().trim();
  return ALL_PLATFORMS.find(
    x => x.id.toLowerCase() === key || x.name.toLowerCase() === key
  ) || null;
}

function getSubcatsForPlatform(platform) {
  if (!platform) return ["Ählisi", "Hasap", "Arenda", "UC / Bakiýa", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
  if (platform.kind === "game") return GAME_SUBCATS;
  if (platform.kind === "course") return COURSE_SUBCATS;
  return APP_SUBCATS;
}

function renderPlatformLogo(platform, sizeClass = "") {
  const p = platform || { badge: "TKM", color: "#4f46e5" };
  return `<div class="logo-badge ${sizeClass}" style="background:${p.color};">${esc(p.badge)}</div>`;
}

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

function getSession() {
  try {
    return JSON.parse(localStorage.getItem("tkm_auth_session") || "null");
  } catch (_) {
    return null;
  }
}

function getUser() {
  const s = getSession();
  if (s && s.username) return s;
  return { username: "Serkanbey77", role: "Satıcı & Alyjy", loggedIn: false };
}

function generateCaptchaCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
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

function mountPlayerokShell(activeTab, searchPlaceholder) {
  applySavedTheme();
  const host = document.getElementById("playerok-shell");
  if (!host) return;

  const u = getUser();
  host.innerHTML = `
    <header class="top-head">
      <div class="top-inner">
        <div class="top-row">
          <a class="brand-link" href="index.html">TKM <span>Market</span></a>
          <div class="top-right">
            <span class="db-mini" id="db-status-pill">Supabase</span>
            <a class="btn btn-soft" style="padding:6px 10px; font-size:11px; text-decoration:none;" href="profil.html">${esc(u.username)}</a>
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
      <a class="bnav-item ${activeTab === "profile" ? "active" : ""}" href="profil.html">
        <span class="ico">👤</span><span>Profil</span>
      </a>
    </nav>
  `;

  syncUserFields();
}
