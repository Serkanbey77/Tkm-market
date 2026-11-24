const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

/* Her oyuna ve uygulamaya ÖZGÜ alt kategoriler */
const PLATFORM_SUBCATS = {
  "pubg-mobile": ["Ählisi", "Hasap", "Arenda", "UC"],
  "pubg-mobile-korea": ["Ählisi", "Hasap", "Arenda", "UC"],
  "clash-of-clans": ["Ählisi", "Hasap", "Elmas"],
  "gta-5": ["Ählisi", "Hasap"],
  "minecraft": ["Ählisi", "Hasap", "Server / Realm"],
  "roblox": ["Ählisi", "Hasap", "Robux"],
  "fortnite": ["Ählisi", "Hasap", "V-Bucks"],
  "rust": ["Ählisi", "Hasap", "Arenda"],
  "call-of-duty": ["Ählisi", "Hasap", "CP"],
  "far-cry": ["Ählisi", "Hasap"],
  "fifa": ["Ählisi", "Hasap", "Coins"],
  "tiktok": ["Ählisi", "Hasap", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"],
  "telegram": ["Ählisi", "Hasap", "Kanal / Grup", "İzlenme", "Reklam", "Bot"],
  "youtube": ["Ählisi", "Hasap", "İzlenme", "Abone", "Like", "Dizayn"],
  "instagram": ["Ählisi", "Hasap", "Takipçi", "Like", "Yorum", "Dizayn", "Reklam"],
  "chatgpt": ["Ählisi", "Hasap", "Plus Abonelik"],
  "gemini": ["Ählisi", "Hasap", "Advanced"],
  "microsoft": ["Ählisi", "Hasap", "Lisans"],
  "apple": ["Ählisi", "Apple ID", "iCloud"],
  "steam": ["Ählisi", "Hasap", "Bakiýa / Kod"],
  "xbox": ["Ählisi", "Hasap", "Game Pass"],
  "spotify": ["Ählisi", "Hasap", "Premium"],
  "discord": ["Ählisi", "Hasap", "Nitro", "Server"],
  "microsoft-office": ["Ählisi", "Hasap", "Office 365"],
  "epic-games": ["Ählisi", "Hasap", "Oýun"],
  "runway": ["Ählisi", "Hasap", "Kredit"],
  "netflix": ["Ählisi", "Hasap", "Profil"],
  "midjourney": ["Ählisi", "Hasap", "Plan"],
  "google-play": ["Ählisi", "Hasap", "Karta / Bakiýa"],
  "belet-film": ["Ählisi", "Hasap", "Abonelik"],
  "trading-kurs": ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal"]
};

function artLogo(c1, c2, badge, label, shapeType = "ring") {
  const shapes = {
    ring: `<circle cx="40" cy="36" r="14" fill="none" stroke="#fff" stroke-width="3.2"/><circle cx="40" cy="36" r="4" fill="#fde047"/>`,
    shield: `<path d="M40 16 L57 23 L54 43 C52 53, 40 59, 40 59 C40 59, 28 53, 26 43 L23 23 Z" fill="rgba(255,255,255,0.22)" stroke="#fff" stroke-width="2.5"/>`,
    diamond: `<polygon points="40,16 58,36 40,56 22,36" fill="rgba(255,255,255,0.24)" stroke="#fff" stroke-width="2.5"/>`,
    play: `<polygon points="33,22 55,36 33,50" fill="#fff"/>`,
    wave: `<path d="M20 42 Q30 24 40 42 T60 42" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>`,
    chart: `<polyline points="22,48 33,36 43,42 58,24" fill="none" stroke="#fde047" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>`
  };
  return `<svg class="svg-fallback" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g_${badge.replace(/\W/g,"")}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#g_${badge.replace(/\W/g,"")})"/>
    ${shapes[shapeType] || shapes.ring}
    <text x="40" y="69" text-anchor="middle" fill="#fff" font-size="10" font-weight="900" letter-spacing="0.4" font-family="system-ui,sans-serif">${label}</text>
  </svg>`;
}

const GAMES_CATALOG = [
  { id: "pubg-mobile", name: "PUBG Mobile", kind: "game", color: "#d97706", tag: "HASAP • ARENDA • UC", svg: artLogo("#f59e0b", "#78350f", "PM", "PUBG", "ring") },
  { id: "clash-of-clans", name: "Clash of Clans", kind: "game", color: "#15803d", tag: "HASAP • ELMAS", svg: artLogo("#22c55e", "#14532d", "COC", "CLASH", "shield") },
  { id: "minecraft", name: "Minecraft", kind: "game", color: "#4d7c0f", tag: "HASAP • SERVER / REALM", svg: artLogo("#84cc16", "#365314", "MC", "CRAFT", "diamond") },
  { id: "gta-5", name: "GTA 5", kind: "game", color: "#059669", tag: "HASAP", svg: artLogo("#10b981", "#064e3b", "GTA5", "GTA V", "ring") },
  { id: "roblox", name: "Roblox", kind: "game", color: "#dc2626", tag: "HASAP • ROBUX", svg: artLogo("#ef4444", "#111827", "RBX", "ROBLOX", "diamond") },
  { id: "fortnite", name: "Fortnite", kind: "game", color: "#7c3aed", tag: "HASAP • V-BUCKS", svg: artLogo("#8b5cf6", "#1e1b4b", "FN", "FORTNITE", "shield") },
  { id: "pubg-mobile-korea", name: "PUBG Mobile Kore", kind: "game", color: "#2563eb", tag: "HASAP • ARENDA • UC", svg: artLogo("#3b82f6", "#991b1b", "PKR", "PUBG KR", "ring") },
  { id: "rust", name: "Rust", kind: "game", color: "#ea580c", tag: "HASAP • ARENDA", svg: artLogo("#f97316", "#431407", "RST", "RUST", "ring") },
  { id: "call-of-duty", name: "Call of Duty", kind: "game", color: "#334155", tag: "HASAP • CP", svg: artLogo("#475569", "#020617", "COD", "CoD", "shield") },
  { id: "far-cry", name: "Far Cry", kind: "game", color: "#f97316", tag: "HASAP", svg: artLogo("#fb923c", "#431407", "FC", "FAR CRY", "diamond") },
  { id: "fifa", name: "FIFA", kind: "game", color: "#16a34a", tag: "HASAP • COINS", svg: artLogo("#22c55e", "#052e16", "FIFA", "FC", "ring") }
];

const APPS_CATALOG = [
  { id: "telegram", name: "Telegram", kind: "app", color: "#0284c7", tag: "HASAP • KANAL • İZLENME • REKLAM", svg: artLogo("#38bdf8", "#0369a1", "TG", "TELEGRAM", "play") },
  { id: "tiktok", name: "TikTok", kind: "app", color: "#ec4899", tag: "HASAP • İZLENME • LIKE • YORUM • DIZAYN • REKLAM", svg: artLogo("#ec4899", "#090d16", "TT", "TIKTOK", "wave") },
  { id: "youtube", name: "YouTube", kind: "app", color: "#dc2626", tag: "HASAP • İZLENME • ABONE • LIKE • DIZAYN", svg: artLogo("#ef4444", "#450a0a", "YT", "YOUTUBE", "play") },
  { id: "instagram", name: "Instagram", kind: "app", color: "#db2777", tag: "HASAP • TAKIPÇI • LIKE • YORUM • DIZAYN • REKLAM", svg: artLogo("#f43f5e", "#7e22ce", "IG", "INSTA", "ring") },
  { id: "chatgpt", name: "ChatGPT", kind: "app", color: "#10b981", tag: "HASAP • PLUS ABONELIK", svg: artLogo("#10b981", "#064e3b", "GPT", "ChatGPT", "ring") },
  { id: "gemini", name: "Gemini", kind: "app", color: "#6366f1", tag: "HASAP • ADVANCED", svg: artLogo("#818cf8", "#1e1b4b", "GEM", "GEMINI", "diamond") },
  { id: "microsoft", name: "Microsoft", kind: "app", color: "#2563eb", tag: "HASAP • LISANS", svg: artLogo("#3b82f6", "#172554", "MS", "MICROSOFT", "diamond") },
  { id: "apple", name: "Apple", kind: "app", color: "#475569", tag: "APPLE ID • ICLOUD", svg: artLogo("#64748b", "#0f172a", "APL", "APPLE", "ring") },
  { id: "steam", name: "Steam", kind: "app", color: "#1d4ed8", tag: "HASAP • BAKIÝA / KOD", svg: artLogo("#2563eb", "#0f172a", "STM", "STEAM", "ring") },
  { id: "xbox", name: "Xbox", kind: "app", color: "#16a34a", tag: "HASAP • GAME PASS", svg: artLogo("#22c55e", "#052e16", "XB", "XBOX", "diamond") },
  { id: "spotify", name: "Spotify", kind: "app", color: "#15803d", tag: "HASAP • PREMIUM", svg: artLogo("#16a34a", "#052e16", "SP", "SPOTIFY", "wave") },
  { id: "discord", name: "Discord", kind: "app", color: "#4f46e5", tag: "HASAP • NITRO • SERVER", svg: artLogo("#6366f1", "#312e81", "DC", "DISCORD", "shield") },
  { id: "microsoft-office", name: "Microsoft Office", kind: "app", color: "#ea580c", tag: "HASAP • OFFICE 365", svg: artLogo("#f97316", "#7c2d12", "OFC", "OFFICE", "diamond") },
  { id: "epic-games", name: "Epic Games", kind: "app", color: "#111827", tag: "HASAP • OÝUN", svg: artLogo("#374151", "#090d16", "EPG", "EPIC", "shield") },
  { id: "runway", name: "Runway", kind: "app", color: "#0d9488", tag: "HASAP • KREDIT", svg: artLogo("#14b8a6", "#134e4a", "RWY", "RUNWAY", "play") },
  { id: "netflix", name: "Netflix", kind: "app", color: "#b91c1c", tag: "HASAP • PROFIL", svg: artLogo("#dc2626", "#450a0a", "NF", "NETFLIX", "play") },
  { id: "midjourney", name: "Midjourney", kind: "app", color: "#7c3aed", tag: "HASAP • PLAN", svg: artLogo("#8b5cf6", "#2e1065", "MJ", "MIDJRN", "wave") },
  { id: "google-play", name: "Google Play", kind: "app", color: "#059669", tag: "HASAP • KARTA / BAKIÝA", svg: artLogo("#10b981", "#064e3b", "GP", "PLAY", "play") },
  { id: "belet-film", name: "Belet Film", kind: "app", color: "#e11d48", tag: "HASAP • ABONELIK", svg: artLogo("#f43f5e", "#4c0519", "BF", "BELET", "play") }
];

const COURSES_CATALOG = [
  { id: "trading-kurs", name: "Trading Kurs", kind: "course", color: "#0d9488", tag: "KRIPTO TRADING • FOREX • SINYAL", svg: artLogo("#10b981", "#042f2e", "TRD", "TRADING", "chart") }
];

const ALL_PLATFORMS = [...GAMES_CATALOG, ...APPS_CATALOG, ...COURSES_CATALOG];

function findPlatform(idOrName) {
  const k = String(idOrName || "").toLowerCase().trim();
  return ALL_PLATFORMS.find(p => p.id.toLowerCase() === k || p.name.toLowerCase() === k) || null;
}

function getSubcatsForPlatform(plat) {
  if (!plat) return ["Ählisi", "Hasap"];
  return PLATFORM_SUBCATS[plat.id] || ["Ählisi", "Hasap"];
}

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderLogoWithAsset(plat) {
  const base = `assets/logos/${plat.id}`;
  return `${plat.svg}<img class="custom-asset" src="${base}.jpg" data-exts="png,webp" data-base="${base}" alt="${esc(plat.name)}" loading="lazy" onerror="const e=(this.dataset.exts||'').split(',');const n=e.shift();if(n){this.dataset.exts=e.join(',');this.src=this.dataset.base+'.'+n;}else{this.remove();}" />`;
}

function renderBannerWithAsset(plat) {
  const subs = getSubcatsForPlatform(plat).filter(x => x !== "Ählisi").join(" • ");
  const base = `assets/banners/${plat.id}`;
  return `<div style="position:relative; width:100%; border-radius:18px; overflow:hidden; min-height:132px; display:flex; align-items:center; gap:14px; padding:16px; color:#fff; background:linear-gradient(120deg, #0f172a 0%, ${plat.color} 100%); border:1px solid rgba(255,255,255,0.22); box-shadow:0 0 24px rgba(99,102,241,0.3);">
    <img src="${base}.jpg" data-exts="png,webp" data-base="${base}" alt="${esc(plat.name)}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.35; pointer-events:none;" onerror="const e=(this.dataset.exts||'').split(',');const n=e.shift();if(n){this.dataset.exts=e.join(',');this.src=this.dataset.base+'.'+n;}else{this.remove();}" />
    <div style="position:absolute; inset:0; background:linear-gradient(90deg, rgba(2,6,23,0.82) 0%, rgba(2,6,23,0.35) 100%); pointer-events:none;"></div>
    <div class="platform-hero-logo" style="z-index:2;">${renderLogoWithAsset(plat)}</div>
    <div style="position:relative; z-index:2;">
      <div style="display:inline-block; font-size:10px; font-weight:800; padding:2px 8px; border-radius:999px; background:rgba(255,255,255,0.18); margin-bottom:5px;">${esc(plat.tag)}</div>
      <h1 style="margin:0; font-size:20px;">${esc(plat.name)}</h1>
      <p style="margin:3px 0 0; font-size:12px; opacity:0.92;">${esc(subs)}</p>
    </div>
  </div>`;
}

function mountSnowEffect() {
  if (document.getElementById("tkm-snow")) return;
  const layer = document.createElement("div");
  layer.id = "tkm-snow";
  layer.className = "snow-layer";
  for (let i = 0; i < 18; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = "❄";
    flake.style.left = `${(i * 5.7) % 100}%`;
    flake.style.fontSize = `${10 + (i % 4) * 4}px`;
    flake.style.animationDuration = `${7 + (i % 6) * 2}s`;
    flake.style.animationDelay = `${-(i % 5) * 1.4}s`;
    layer.appendChild(flake);
  }
  document.body.appendChild(layer);
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
  const saved = localStorage.getItem("tkm_theme");
  const isDark = saved === null ? true : saved === "dark";
  document.body.classList.toggle("dark", isDark);
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
  el.style.background = ok ? "rgba(16, 185, 129, 0.16)" : "rgba(245, 158, 11, 0.16)";
  el.style.color = ok ? "#34d399" : "#fbbf24";
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
  mountSnowEffect();
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
            <a class="brand-link" href="index.html">TKM Market</a>
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
