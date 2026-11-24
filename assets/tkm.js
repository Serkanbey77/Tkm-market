const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

const GAME_SUBCATS = ["Ählisi", "Hasap", "Arenda", "UC"];
const APP_SUBCATS = ["Ählisi", "Hasap", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
const COURSE_SUBCATS = ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal"];

function makeLogo(bg, fg, title, sub = "", symbol = "") {
  return `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g_${title.replace(/[^a-zA-Z0-9]/g, "")}_${sub.replace(/[^a-zA-Z0-9]/g, "")}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg}"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="80" height="80" rx="18" fill="${bg}"/>
    ${symbol ? `<text x="40" y="34" text-anchor="middle" fill="${fg}" font-size="22" font-weight="900" font-family="system-ui,sans-serif">${symbol}</text>
    <text x="40" y="57" text-anchor="middle" fill="${fg}" font-size="11" font-weight="800" letter-spacing="0.5" font-family="system-ui,sans-serif">${title}</text>`
    : `<text x="40" y="${sub ? "39" : "46"}" text-anchor="middle" fill="${fg}" font-size="${title.length > 4 ? "14" : "18"}" font-weight="900" font-family="system-ui,sans-serif">${title}</text>
    ${sub ? `<text x="40" y="58" text-anchor="middle" fill="${fg}" font-size="10" font-weight="700" opacity="0.92" font-family="system-ui,sans-serif">${sub}</text>` : ""}`}
  </svg>`;
}

function makeBanner(c1, c2, accent, tagText, titleText) {
  return `<div style="position:relative; width:100%; border-radius:16px; overflow:hidden; background:linear-gradient(125deg, ${c1} 0%, ${c2} 100%); padding:18px 16px; color:#fff; display:flex; align-items:center; gap:14px; min-height:116px; box-shadow:0 12px 24px rgba(2,6,23,0.25);">
    <svg viewBox="0 0 260 120" preserveAspectRatio="none" style="position:absolute; inset:0; width:100%; height:100%; opacity:0.22; pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
      <circle cx="220" cy="24" r="54" fill="${accent}"/>
      <polygon points="160,120 260,10 260,120" fill="${accent}"/>
      <rect x="12" y="12" width="44" height="44" rx="10" fill="none" stroke="${accent}" stroke-width="2"/>
    </svg>
    <div id="plat-hero-logo" class="platform-hero-logo" style="position:relative; z-index:2;"></div>
    <div style="position:relative; z-index:2;">
      <div style="display:inline-block; font-size:10px; font-weight:800; padding:2px 8px; border-radius:999px; background:rgba(255,255,255,0.2); margin-bottom:5px;">${tagText}</div>
      <h1 id="plat-hero-title" style="margin:0;">${titleText}</h1>
      <p id="plat-hero-sub" style="margin:3px 0 0;"></p>
    </div>
  </div>`;
}

const GAMES_CATALOG = [
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    kind: "game",
    logo: makeLogo("#d97706", "#fef3c7", "PUBG", "MOBILE", "⌖"),
    bannerHtml: makeBanner("#1e293b", "#b45309", "#fbbf24", "BATTLE ROYALE • UC & HASAP", "PUBG Mobile")
  },
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    kind: "game",
    logo: makeLogo("#15803d", "#fef08a", "CoC", "CLASH", "⚔"),
    bannerHtml: makeBanner("#14532d", "#ca8a04", "#fde047", "KÖY & KLAN • HASAP", "Clash of Clans")
  },
  {
    id: "minecraft",
    name: "Minecraft",
    kind: "game",
    logo: makeLogo("#3f6212", "#ecfccb", "MC", "CRAFT", "▣"),
    bannerHtml: makeBanner("#14532d", "#4d7c0f", "#a3e635", "SANDBOX • HASAP & SERVER", "Minecraft")
  },
  {
    id: "gta-5",
    name: "GTA 5",
    kind: "game",
    logo: makeLogo("#047857", "#d1fae5", "GTA V", "ONLINE", "$"),
    bannerHtml: makeBanner("#064e3b", "#059669", "#6ee7b7", "OPEN WORLD • ONLINE HASAP", "GTA 5")
  },
  {
    id: "roblox",
    name: "Roblox",
    kind: "game",
    logo: makeLogo("#111827", "#ffffff", "ROBLOX", "", "◆"),
    bannerHtml: makeBanner("#111827", "#dc2626", "#fca5a5", "OYUN PLATFORMASY • HASAP", "Roblox")
  },
  {
    id: "fortnite",
    name: "Fortnite",
    kind: "game",
    logo: makeLogo("#4338ca", "#ffffff", "FORTNITE", "", "⚡"),
    bannerHtml: makeBanner("#1e1b4b", "#7c3aed", "#c4b5fd", "BATTLE ROYALE • V-BUCKS & HASAP", "Fortnite")
  },
  {
    id: "pubg-mobile-korea",
    name: "PUBG Mobile Kore",
    kind: "game",
    logo: makeLogo("#1d4ed8", "#dbeafe", "PUBG", "KOREA", "★"),
    bannerHtml: makeBanner("#172554", "#dc2626", "#93c5fd", "KORE SÜRÜMI • HASAP & UC", "PUBG Mobile Kore")
  },
  {
    id: "rust",
    name: "Rust",
    kind: "game",
    logo: makeLogo("#9a3412", "#ffedd5", "RUST", "SURVIVAL", "⚙"),
    bannerHtml: makeBanner("#450a0a", "#c2410c", "#fdba74", "SURVIVAL • STEAM HASAP", "Rust")
  },
  {
    id: "call-of-duty",
    name: "Call of Duty",
    kind: "game",
    logo: makeLogo("#0f172a", "#f8fafc", "CoD", "WARZONE", "✦"),
    bannerHtml: makeBanner("#020617", "#334155", "#94a3b8", "FPS AKSION • HASAP", "Call of Duty")
  },
  {
    id: "far-cry",
    name: "Far Cry",
    kind: "game",
    logo: makeLogo("#c2410c", "#fff7ed", "FAR CRY", "", "▲"),
    bannerHtml: makeBanner("#431407", "#ea580c", "#fed7aa", "MACERA • HASAP", "Far Cry")
  },
  {
    id: "fifa",
    name: "FIFA",
    kind: "game",
    logo: makeLogo("#059669", "#ecfdf5", "FC", "FOOTBALL", "⚽"),
    bannerHtml: makeBanner("#064e3b", "#16a34a", "#86efac", "FUTBOL • ULTIMATE HASAP", "FIFA")
  }
];

const APPS_CATALOG = [
  {
    id: "telegram",
    name: "Telegram",
    kind: "app",
    logo: makeLogo("#0284c7", "#ffffff", "TELEGRAM", "", "✈"),
    bannerHtml: makeBanner("#0c4a6e", "#0284c7", "#7dd3fc", "KANAL • HASAP • BOT", "Telegram")
  },
  {
    id: "tiktok",
    name: "TikTok",
    kind: "app",
    logo: makeLogo("#090d16", "#ffffff", "TIKTOK", "", "♪"),
    bannerHtml: makeBanner("#090d16", "#be185d", "#f472b6", "HASAP • İZLENME • LIKE • REKLAM", "TikTok")
  },
  {
    id: "youtube",
    name: "YouTube",
    kind: "app",
    logo: makeLogo("#dc2626", "#ffffff", "YOUTUBE", "", "▶"),
    bannerHtml: makeBanner("#450a0a", "#dc2626", "#fca5a5", "KANAL • İZLENME • ABONE", "YouTube")
  },
  {
    id: "instagram",
    name: "Instagram",
    kind: "app",
    logo: makeLogo("#db2777", "#ffffff", "INSTA", "", "◎"),
    bannerHtml: makeBanner("#831843", "#ea580c", "#fbcfe8", "HASAP • LIKE • YORUM • DIZAYN", "Instagram")
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    kind: "app",
    logo: makeLogo("#059669", "#ffffff", "ChatGPT", "PLUS", "✳"),
    bannerHtml: makeBanner("#064e3b", "#10b981", "#6ee7b7", "AI HASAP • ABONELIK", "ChatGPT")
  },
  {
    id: "gemini",
    name: "Gemini",
    kind: "app",
    logo: makeLogo("#4f46e5", "#ffffff", "GEMINI", "AI", "✦"),
    bannerHtml: makeBanner("#1e1b4b", "#6366f1", "#c7d2fe", "GOOGLE AI • HASAP", "Gemini")
  },
  {
    id: "microsoft",
    name: "Microsoft",
    kind: "app",
    logo: makeLogo("#2563eb", "#ffffff", "MS", "CLOUD", "⊞"),
    bannerHtml: makeBanner("#172554", "#2563eb", "#93c5fd", "WINDOWS • HESAP & AÇAR", "Microsoft")
  },
  {
    id: "apple",
    name: "Apple",
    kind: "app",
    logo: makeLogo("#1e293b", "#ffffff", "APPLE", "ID", ""),
    bannerHtml: makeBanner("#0f172a", "#475569", "#cbd5e1", "APPLE ID • ICLOUD & HYZMAT", "Apple")
  },
  {
    id: "steam",
    name: "Steam",
    kind: "app",
    logo: makeLogo("#1e3a8a", "#e0f2fe", "STEAM", "", "◈"),
    bannerHtml: makeBanner("#0f172a", "#1d4ed8", "#7dd3fc", "OYUN DÜKANY • HASAP & BAKIÝA", "Steam")
  },
  {
    id: "xbox",
    name: "Xbox",
    kind: "app",
    logo: makeLogo("#15803d", "#ffffff", "XBOX", "GAME", "X"),
    bannerHtml: makeBanner("#052e16", "#16a34a", "#86efac", "GAME PASS • HASAP", "Xbox")
  },
  {
    id: "spotify",
    name: "Spotify",
    kind: "app",
    logo: makeLogo("#16a34a", "#052e16", "SPOTIFY", "", "♫"),
    bannerHtml: makeBanner("#052e16", "#15803d", "#4ade80", "PREMIUM • HASAP", "Spotify")
  },
  {
    id: "discord",
    name: "Discord",
    kind: "app",
    logo: makeLogo("#4f46e5", "#ffffff", "DISCORD", "", "❖"),
    bannerHtml: makeBanner("#312e81", "#6366f1", "#a5b4fc", "NITRO • SERVER • HASAP", "Discord")
  },
  {
    id: "microsoft-office",
    name: "Microsoft Office",
    kind: "app",
    logo: makeLogo("#ea580c", "#ffffff", "OFFICE", "365", "▤"),
    bannerHtml: makeBanner("#7c2d12", "#ea580c", "#fdba74", "WORD • EXCEL • 365 HASAP", "Microsoft Office")
  },
  {
    id: "epic-games",
    name: "Epic Games",
    kind: "app",
    logo: makeLogo("#111827", "#ffffff", "EPIC", "GAMES", "▣"),
    bannerHtml: makeBanner("#090d16", "#374151", "#e5e7eb", "EPIC HASAP • OYUNLAR", "Epic Games")
  },
  {
    id: "runway",
    name: "Runway",
    kind: "app",
    logo: makeLogo("#0d9488", "#ffffff", "RUNWAY", "AI", "▶"),
    bannerHtml: makeBanner("#134e4a", "#0d9488", "#5eead4", "VIDEO AI • HASAP & KREDIT", "Runway")
  },
  {
    id: "netflix",
    name: "Netflix",
    kind: "app",
    logo: makeLogo("#b91c1c", "#ffffff", "NETFLIX", "", "N"),
    bannerHtml: makeBanner("#450a0a", "#dc2626", "#fca5a5", "KINO & SERIAL • HASAP", "Netflix")
  },
  {
    id: "midjourney",
    name: "Midjourney",
    kind: "app",
    logo: makeLogo("#6d28d9", "#ffffff", "MIDJRN", "AI", "✦"),
    bannerHtml: makeBanner("#2e1065", "#7c3aed", "#ddd6fe", "SURAT AI • HASAP", "Midjourney")
  },
  {
    id: "google-play",
    name: "Google Play",
    kind: "app",
    logo: makeLogo("#059669", "#ffffff", "PLAY", "STORE", "▷"),
    bannerHtml: makeBanner("#064e3b", "#0284c7", "#7dd3fc", "ANDROID • BAKIÝA & HASAP", "Google Play")
  },
  {
    id: "belet-film",
    name: "Belet Film",
    kind: "app",
    logo: makeLogo("#e11d48", "#ffffff", "BELET", "FILM", "◉"),
    bannerHtml: makeBanner("#4c0519", "#e11d48", "#fda4af", "BELET FILM • HASAP", "Belet Film")
  }
];

const COURSES_CATALOG = [
  {
    id: "trading-kurs",
    name: "Trading Kurs",
    kind: "course",
    logo: makeLogo("#0f766e", "#ffffff", "TRADING", "KURS", "📈"),
    bannerHtml: makeBanner("#042f2e", "#0d9488", "#5eead4", "TEHNIKI ANALIZ & OKUW", "Trading Kurs")
  }
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
