const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

const GAME_SUBCATS = ["Ählisi", "Hasap", "Arenda", "UC"];
const APP_SUBCATS = ["Ählisi", "Hasap", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
const COURSE_SUBCATS = ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal"];

function svgLogo(bg, fg, label, sub = "") {
  return `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="18" fill="${bg}"/>
    <text x="40" y="${sub ? "38" : "46"}" text-anchor="middle" fill="${fg}" font-size="${label.length > 3 ? "16" : "22"}" font-weight="900" font-family="system-ui,sans-serif">${label}</text>
    ${sub ? `<text x="40" y="57" text-anchor="middle" fill="${fg}" font-size="11" font-weight="700" opacity="0.9" font-family="system-ui,sans-serif">${sub}</text>` : ""}
  </svg>`;
}

const GAMES_CATALOG = [
  { id: "pubg-mobile", name: "PUBG Mobile", kind: "game", banner: "linear-gradient(120deg,#1e293b,#d97706)", logo: svgLogo("#f59e0b", "#111827", "PUBG", "MOBILE") },
  { id: "clash-of-clans", name: "Clash of Clans", kind: "game", banner: "linear-gradient(120deg,#14532d,#eab308)", logo: svgLogo("#15803d", "#fde047", "CoC", "CLASH") },
  { id: "minecraft", name: "Minecraft", kind: "game", banner: "linear-gradient(120deg,#166534,#4d7c0f)", logo: svgLogo("#4d7c0f", "#ecfccb", "MC", "CRAFT") },
  { id: "gta-5", name: "GTA 5", kind: "game", banner: "linear-gradient(120deg,#065f46,#10b981)", logo: svgLogo("#047857", "#a7f3d0", "GTA V", "ONLINE") },
  { id: "roblox", name: "Roblox", kind: "game", banner: "linear-gradient(120deg,#111827,#ef4444)", logo: svgLogo("#111827", "#ffffff", "◆", "ROBLOX") },
  { id: "fortnite", name: "Fortnite", kind: "game", banner: "linear-gradient(120deg,#3730a3,#7c3aed)", logo: svgLogo("#4338ca", "#ffffff", "F", "FORTNITE") },
  { id: "pubg-mobile-korea", name: "PUBG Mobile Kore", kind: "game", banner: "linear-gradient(120deg,#1e3a8a,#dc2626)", logo: svgLogo("#1d4ed8", "#fca5a5", "KR", "PUBG KR") },
  { id: "rust", name: "Rust", kind: "game", banner: "linear-gradient(120deg,#7f1d1d,#c2410c)", logo: svgLogo("#9a3412", "#fed7aa", "RUST", "") },
  { id: "call-of-duty", name: "Call of Duty", kind: "game", banner: "linear-gradient(120deg,#0f172a,#475569)", logo: svgLogo("#0f172a", "#e2e8f0", "CoD", "MOBILE") },
  { id: "far-cry", name: "Far Cry", kind: "game", banner: "linear-gradient(120deg,#7c2d12,#ea580c)", logo: svgLogo("#c2410c", "#fff7ed", "FC", "FAR CRY") },
  { id: "fifa", name: "FIFA", kind: "game", banner: "linear-gradient(120deg,#064e3b,#22c55e)", logo: svgLogo("#059669", "#dcfce7", "FC", "FOOTBALL") }
];

const APPS_CATALOG = [
  { id: "telegram", name: "Telegram", kind: "app", banner: "linear-gradient(120deg,#0369a1,#38bdf8)", logo: svgLogo("#0284c7", "#ffffff", "✈", "TELEGRAM") },
  { id: "tiktok", name: "TikTok", kind: "app", banner: "linear-gradient(120deg,#090d16,#ec4899)", logo: svgLogo("#090d16", "#ffffff", "♪", "TIKTOK") },
  { id: "youtube", name: "YouTube", kind: "app", banner: "linear-gradient(120deg,#7f1d1d,#ef4444)", logo: svgLogo("#dc2626", "#ffffff", "▶", "YOUTUBE") },
  { id: "instagram", name: "Instagram", kind: "app", banner: "linear-gradient(120deg,#831843,#f97316)", logo: svgLogo("#db2777", "#ffffff", "◎", "INSTA") },
  { id: "chatgpt", name: "ChatGPT", kind: "app", banner: "linear-gradient(120deg,#065f46,#10b981)", logo: svgLogo("#10b981", "#ffffff", "GPT", "OPENAI") },
  { id: "gemini", name: "Gemini", kind: "app", banner: "linear-gradient(120deg,#1e40af,#8b5cf6)", logo: svgLogo("#4f46e5", "#ffffff", "✦", "GEMINI") },
  { id: "microsoft", name: "Microsoft", kind: "app", banner: "linear-gradient(120deg,#1e3a8a,#0284c7)", logo: svgLogo("#2563eb", "#ffffff", "⊞", "MS") },
  { id: "apple", name: "Apple", kind: "app", banner: "linear-gradient(120deg,#1e293b,#64748b)", logo: svgLogo("#1e293b", "#ffffff", "", "APPLE") },
  { id: "steam", name: "Steam", kind: "app", banner: "linear-gradient(120deg,#0f172a,#2563eb)", logo: svgLogo("#1e3a8a", "#93c5fd", "STM", "STEAM") },
  { id: "xbox", name: "Xbox", kind: "app", banner: "linear-gradient(120deg,#14532d,#22c55e)", logo: svgLogo("#16a34a", "#ffffff", "X", "XBOX") },
  { id: "spotify", name: "Spotify", kind: "app", banner: "linear-gradient(120deg,#052e16,#16a34a)", logo: svgLogo("#16a34a", "#052e16", ")))", "SPOTIFY") },
  { id: "discord", name: "Discord", kind: "app", banner: "linear-gradient(120deg,#3730a3,#6366f1)", logo: svgLogo("#4f46e5", "#ffffff", "DC", "DISCORD") },
  { id: "microsoft-office", name: "Microsoft Office", kind: "app", banner: "linear-gradient(120deg,#9a3412,#ea580c)", logo: svgLogo("#ea580c", "#ffffff", "O365", "OFFICE") },
  { id: "epic-games", name: "Epic Games", kind: "app", banner: "linear-gradient(120deg,#090d16,#334155)", logo: svgLogo("#111827", "#ffffff", "EPIC", "GAMES") },
  { id: "runway", name: "Runway", kind: "app", banner: "linear-gradient(120deg,#115e59,#14b8a6)", logo: svgLogo("#0d9488", "#ffffff", "RWY", "RUNWAY") },
  { id: "netflix", name: "Netflix", kind: "app", banner: "linear-gradient(120deg,#450a0a,#dc2626)", logo: svgLogo("#b91c1c", "#ffffff", "N", "NETFLIX") },
  { id: "midjourney", name: "Midjourney", kind: "app", banner: "linear-gradient(120deg,#3b0764,#9333ea)", logo: svgLogo("#6d28d9", "#ffffff", "MJ", "ART AI") },
  { id: "google-play", name: "Google Play", kind: "app", banner: "linear-gradient(120deg,#064e3b,#0ea5e9)", logo: svgLogo("#059669", "#ffffff", "▷", "PLAY") },
  { id: "belet-film", name: "Belet Film", kind: "app", banner: "linear-gradient(120deg,#881337,#f43f5e)", logo: svgLogo("#e11d48", "#ffffff", "BF", "BELET") }
];

const COURSES_CATALOG = [
  { id: "trading-kurs", name: "Trading Kurs", kind: "course", banner: "linear-gradient(120deg,#0f766e,#10b981)", logo: svgLogo("#0f766e", "#ffffff", "TRD", "KURS") }
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
