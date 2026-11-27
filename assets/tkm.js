const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

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
  "exness-account": ["Ählisi", "MT5 Hasap", "Ýatyrmak / Çykarmak", "Kâr Çekimi"],
  "trading-kurs": ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal"]
};

const TKM_SITE_LANGS = {
  tk: {
    code: "tk",
    currency: "TMT",
    rate: 1,
    gamesWord: "oýun",
    appsWord: "programma",
    map: {
      "Gözleg": "Gözleg",
      "Kategorya": "Kategorya",
      "Hatlar": "Hatlar",
      "Giriş": "Giriş",
      "Profil": "Profil",
      "Satmak": "Satmak",
      "4K Oýun, Hasap & Sanly Bazary": "4K Oýun, Hasap & Sanly Bazary",
      "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.": "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.",
      "⚡ Hasap / Haryt Sat": "⚡ Hasap / Haryt Sat",
      "💬 Hasap Sorag Iber": "💬 Hasap Sorag Iber",
      "Meşhur Bölümler": "Meşhur Bölümler",
      "Ählisi →": "Ählisi →",
      "Ählisi": "Ählisi",
      "Oýunlar": "Oýunlar",
      "Programmalar & Sanly Hyzmatlar": "Programmalar & Sanly Hyzmatlar",
      "Aç": "Aç",
      "Satyn Al": "Satyn Al",
      "Okuw": "Okuw"
    }
  },
  tr: {
    code: "tr",
    currency: "TRY",
    rate: 9.85,
    gamesWord: "oyun",
    appsWord: "program",
    map: {
      "Gözleg": "Keşfet",
      "Kategorya": "Kategoriler",
      "Hatlar": "Mesajlar",
      "Giriş": "Profil",
      "Profil": "Profil",
      "Satmak": "Satış Yap",
      "4K Oýun, Hasap & Sanly Bazary": "4K Oyun, Hesap & Dijital Pazarı",
      "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.": "Oyun hesapları, programlar, Exness MT5 ve dijital hizmetler. Satın alındıktan sonra hesap açılır, çift onaydan sonra ödeme geçer.",
      "⚡ Hasap / Haryt Sat": "⚡ Hesap / Ürün Sat",
      "💬 Hasap Sorag Iber": "💬 Mesaj Gönder",
      "Meşhur Bölümler": "Popüler Bölümler",
      "Ählisi →": "Tümü →",
      "Ählisi": "Tümü",
      "Oýunlar": "Oyunlar",
      "Programmalar & Sanly Hyzmatlar": "Programlar ve Dijital Hizmetler",
      "Aç": "Aç",
      "Satyn Al": "Satın Al",
      "Okuw": "Eğitim"
    }
  },
  en: {
    code: "en",
    currency: "USD",
    rate: 0.285,
    gamesWord: "games",
    appsWord: "apps",
    map: {
      "Gözleg": "Explore",
      "Kategorya": "Categories",
      "Hatlar": "Messages",
      "Giriş": "Profile",
      "Profil": "Profile",
      "Satmak": "Sell",
      "4K Oýun, Hasap & Sanly Bazary": "4K Games, Accounts & Digital Market",
      "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.": "Game accounts, software, Exness MT5 and digital services. Access unlocks after purchase, payout after dual confirmation.",
      "⚡ Hasap / Haryt Sat": "⚡ Sell Account / Item",
      "💬 Hasap Sorag Iber": "💬 Send Message",
      "Meşhur Bölümler": "Popular Sections",
      "Ählisi →": "All →",
      "Ählisi": "All",
      "Oýunlar": "Games",
      "Programmalar & Sanly Hyzmatlar": "Software & Digital Services",
      "Aç": "Open",
      "Satyn Al": "Buy Now",
      "Okuw": "Course"
    }
  },
  ru: {
    code: "ru",
    currency: "RUB",
    rate: 26.5,
    gamesWord: "игр",
    appsWord: "программ",
    map: {
      "Gözleg": "Главная",
      "Kategorya": "Категории",
      "Hatlar": "Сообщения",
      "Giriş": "Профиль",
      "Profil": "Профиль",
      "Satmak": "Продажа",
      "4K Oýun, Hasap & Sanly Bazary": "4K Игры, Аккаунты и Цифровой Маркет",
      "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.": "Игровые аккаунты, программы, Exness MT5 и цифровые услуги. Доступ открывается после покупки, выплата после двойного подтверждения.",
      "⚡ Hasap / Haryt Sat": "⚡ Продать Аккаунт / Товар",
      "💬 Hasap Sorag Iber": "💬 Написать Сообщение",
      "Meşhur Bölümler": "Популярные Разделы",
      "Ählisi →": "Все →",
      "Ählisi": "Все",
      "Oýunlar": "Игры",
      "Programmalar & Sanly Hyzmatlar": "Программы и Цифровые Услуги",
      "Aç": "Открыть",
      "Satyn Al": "Купить",
      "Okuw": "Обучение"
    }
  }
};

function getSiteLang() {
  const saved = localStorage.getItem("tkm_locale");
  return TKM_SITE_LANGS[saved] ? saved : "tk";
}

function formatConvertedPrice(tmtVal) {
  const cfg = TKM_SITE_LANGS[getSiteLang()];
  const num = Number(tmtVal || 0);
  if (cfg.currency === "TMT") return `${num.toLocaleString()} TMT`;
  const val = (num * cfg.rate).toFixed(2);
  if (cfg.currency === "TRY") return `${val} ₺`;
  if (cfg.currency === "USD") return `$${val}`;
  return `${val} ₽`;
}

function applySiteLanguage() {
  const cfg = TKM_SITE_LANGS[getSiteLang()];
  document.documentElement.lang = cfg.code;

  const searchInp = document.getElementById("global-search");
  if (searchInp) {
    if (cfg.code === "tr") searchInp.placeholder = "Ürün, hesap veya satıcı ara...";
    else if (cfg.code === "en") searchInp.placeholder = "Search item, account or seller...";
    else if (cfg.code === "ru") searchInp.placeholder = "Поиск товара, аккаунта или продавца...";
    else searchInp.placeholder = "Haryt, hasap ýa-da satyjy gözle...";
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.parentElement || node.parentElement.closest("script, style")) continue;
    const raw = node.nodeValue;
    if (!raw) continue;
    const trimmed = raw.trim();
    if (!trimmed) continue;

    if (cfg.map[trimmed]) {
      node.nodeValue = raw.replace(trimmed, cfg.map[trimmed]);
      continue;
    }

    const cnt = trimmed.match(/^(\d+)\s+(oýun|oyun|games|игр|programma|program|apps|программ)$/i);
    if (cnt) {
      const isGame = /^(oýun|oyun|games|игр)$/i.test(cnt[2]);
      node.nodeValue = raw.replace(trimmed, `${cnt[1]} ${isGame ? cfg.gamesWord : cfg.appsWord}`);
      continue;
    }

    const priceMatch = trimmed.match(/^([\d\s,.]+)\s*(TMT|₺|\$|₽)$/i);
    if (priceMatch && cfg.currency !== "TMT") {
      const baseNum = parseFloat(priceMatch[1].replace(/\s+/g, "").replace(",", "."));
      if (!Number.isNaN(baseNum)) {
        const val = (baseNum * cfg.rate).toFixed(2);
        const out = cfg.currency === "TRY" ? `${val} ₺` : cfg.currency === "USD" ? `$${val}` : `${val} ₽`;
        node.nodeValue = raw.replace(trimmed, out);
      }
    }
  }
}

function artLogo(c1, c2, badge, label, motif = "ring") {
  const motifs = {
    ring: `<circle cx="40" cy="35" r="15" fill="rgba(255,255,255,0.14)" stroke="#fff" stroke-width="3"/><circle cx="40" cy="35" r="5" fill="#fde047"/>`,
    shield: `<path d="M40 15 L58 22 L55 43 C53 53, 40 60, 40 60 C40 60, 27 53, 25 43 L22 22 Z" fill="rgba(255,255,255,0.22)" stroke="#fff" stroke-width="2.5"/>`,
    diamond: `<polygon points="40,15 59,35 40,55 21,35" fill="rgba(255,255,255,0.22)" stroke="#fff" stroke-width="2.5"/>`,
    play: `<circle cx="40" cy="35" r="15" fill="rgba(255,255,255,0.18)"/><polygon points="35,26 51,35 35,44" fill="#fff"/>`,
    wave: `<path d="M18 42 Q29 22 40 42 T62 42" fill="none" stroke="#fff" stroke-width="3.8" stroke-linecap="round"/>`,
    chart: `<polyline points="20,48 32,35 43,42 60,22" fill="none" stroke="#fde047" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="22" r="4" fill="#34d399"/>`
  };
  return `<svg class="svg-fallback" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g_${badge.replace(/\W/g,"")}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#g_${badge.replace(/\W/g,"")})"/>
    ${motifs[motif] || motifs.ring}
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

const EXNESS_CATALOG = [
  { id: "exness-account", name: "Exness Account", kind: "exness", color: "#eab308", tag: "EXNESS METATRADER 5 • YATYRMAK & ÇYKARYŞ", svg: artLogo("#facc15", "#0f172a", "MT5", "EXNESS", "chart") }
];

const COURSES_CATALOG = [
  { id: "trading-kurs", name: "Trading Kurs", kind: "course", color: "#0d9488", tag: "KRIPTO TRADING • FOREX • SINYAL", svg: artLogo("#10b981", "#042f2e", "TRD", "TRADING", "chart") }
];

const ALL_PLATFORMS = [...GAMES_CATALOG, ...APPS_CATALOG, ...EXNESS_CATALOG, ...COURSES_CATALOG];

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

function renderMediaAsset(opts) {
  const fallbackHtml = opts.fallbackHtml || "";
  const imgList = (opts.images || []).filter(Boolean);
  const vidList = (opts.videos || []).filter(Boolean);

  let imgTag = "";
  if (imgList.length) {
    const firstImg = imgList[0];
    const restImg = imgList.slice(1).join("|");
    imgTag = `<img class="custom-asset" src="${esc(firstImg)}" data-cands="${esc(restImg)}" alt="${esc(opts.alt || "")}" loading="lazy" onerror="var l=(this.dataset.cands||'').split('|').filter(Boolean);var n=l.shift();if(n){this.dataset.cands=l.join('|');this.src=n;}else{this.style.display='none';}" />`;
  }

  let vidTag = "";
  if (vidList.length) {
    const firstVid = vidList[0];
    const restVid = vidList.slice(1).join("|");
    vidTag = `<video class="custom-asset custom-video" src="${esc(firstVid)}" data-vcands="${esc(restVid)}" autoplay loop muted playsinline preload="metadata" onerror="var l=(this.dataset.vcands||'').split('|').filter(Boolean);var n=l.shift();if(n){this.dataset.vcands=l.join('|');this.src=n;}else{this.style.display='none';}"></video>`;
  }

  return `${fallbackHtml}${imgTag}${vidTag}`;
}

function renderLogoWithAsset(plat) {
  const candidates = [
    `assets/logos/${plat.id}.jpg`,
    `assets/logos/${plat.id}.JPG`,
    `assets/logos/${plat.id}.jpeg`,
    `assets/logos/${plat.id}.JPEG`,
    `assets/logos/${plat.id}.png`,
    `assets/logos/${plat.id}.PNG`,
    `assets/logos/${plat.id}.webp`,
    `assets/logos/${plat.id}.jpg.JPG`,
    `assets/logos/${plat.id}.png.PNG`,
    `assets/logos/assets:logos:${plat.id}.jpg`,
    `assets/logos/assets:logos:${plat.id}.jpg.JPG`,
    `assets/logos/assets:logos:${plat.id}.jpg.JPEG`,
    `assets/logos/assets:logos:${plat.id}.jpg.PNG`,
    `assets/logos/assets:logos:${plat.id}.jpeg.JPEG`,
    `assets/logos/assets:logos:${plat.id}.png`,
    `assets/logos/assets:logos:${plat.id}.png.PNG`
  ];
  return renderMediaAsset({
    fallbackHtml: plat.svg,
    images: candidates,
    alt: plat.name
  });
}

function renderBannerWithAsset(plat) {
  const subs = getSubcatsForPlatform(plat).filter(x => x !== "Ählisi").join(" • ");
  const localBase = `assets/banners/${plat.id}`;
  const localBanner = `<img src="${localBase}.jpg" data-exts="JPG,jpeg,JPEG,png,PNG,webp" data-base="${localBase}" alt="${esc(plat.name)}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.42; pointer-events:none;" onerror="var e=(this.dataset.exts||'').split(',');var n=e.shift();if(n){this.dataset.exts=e.join(',');this.src=this.dataset.base+'.'+n;}else{this.style.display='none';}" />`;

  return `<div style="position:relative; width:100%; border-radius:18px; overflow:hidden; min-height:132px; display:flex; align-items:center; gap:14px; padding:16px; color:#fff; background:linear-gradient(120deg, #090d1e 0%, ${plat.color} 100%); border:1.5px solid rgba(255,255,255,0.25); box-shadow:0 0 24px rgba(139,92,246,0.32);">
    ${localBanner}
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

function getUserSession() {
  try {
    return JSON.parse(localStorage.getItem("tkm_auth_session") || "null");
  } catch (_) {
    return null;
  }
}

function getUser() {
  const s = getUserSession();
  if (s && s.username) return s;
  return {
    username: "Myhman",
    role: "buyer",
    loggedIn: false,
    emailVerified: false,
    phone: "",
    email: "",
    address: ""
  };
}

function isUserLoggedIn() {
  const s = getUserSession();
  return Boolean(s && s.loggedIn && s.username && s.emailVerified && s.phone);
}

function requireVerifiedUser(redirectTo = "profil.html") {
  if (!isUserLoggedIn()) {
    showToast("İlki şahsy hasaba girip telefon we e-poçtaňyzy tassyklap beriň!");
    location.href = redirectTo;
    return false;
  }
  return true;
}

function enforceSellerOnlyPage() {
  if (!requireVerifiedUser("profil.html")) return false;
  const u = getUser();
  if (u.role !== "seller") {
    showToast("Satyn alyjy hasaby diňe satyn alyp biler; haryt goşmak üçin satyjy hasaby gerek!");
    location.href = "index.html";
    return false;
  }
  return true;
}

function syncUserFields() {
  const u = getUser();
  const pSeller = document.getElementById("p-seller");
  if (pSeller && !pSeller.dataset.edited && u.loggedIn) pSeller.value = u.username;
  const wSeller = document.getElementById("w-seller");
  if (wSeller && !wSeller.dataset.edited && u.loggedIn) wSeller.value = u.username;
  const mSender = document.getElementById("m-sender");
  if (mSender && !mSender.dataset.edited && u.loggedIn) mSender.value = u.username;
}

function setDbPill() {
  // Eski Supabase / Onlayn rozeti gizli tutulur
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

async function refreshTopBalancePill() {
  const pill = document.getElementById("top-balance-pill");
  if (!pill) return;
  const session = getUser();
  if (!session.loggedIn || !session.username) {
    pill.style.display = "none";
    return;
  }
  pill.style.display = "inline-flex";
  pill.href = "profil.html";
  const u = session.username.toLowerCase();

  let orders = [];
  let deposits = [];
  let withdrawals = [];

  try { orders = await sbGet("orders"); } catch (_) {}
  try {
    deposits = await sbGet("deposits");
    localStorage.setItem("tkm_deposits_cache", JSON.stringify(deposits));
  } catch (_) {
    try { deposits = JSON.parse(localStorage.getItem("tkm_deposits_cache") || "[]"); } catch (__) {}
  }
  try {
    withdrawals = await sbGet("withdrawals");
    localStorage.setItem("tkm_withdrawals_cache", JSON.stringify(withdrawals));
  } catch (_) {
    try { withdrawals = JSON.parse(localStorage.getItem("tkm_withdrawals_cache") || "[]"); } catch (__) {}
  }

  let released = 0, dep = 0, wd = 0;
  for (const o of orders) {
    if (String(o.seller || "").toLowerCase() === u && o.seller_confirmed && o.buyer_confirmed) {
      released += Number(o.price_tmt || 0);
    }
  }
  for (const d of deposits) {
    if (String(d.username || "").toLowerCase() === u && d.status !== "rejected") {
      dep += Number(d.amount_tmt || 0);
    }
  }
  for (const w of withdrawals) {
    if (String(w.seller || "").toLowerCase() === u && w.status !== "rejected") {
      wd += Number(w.amount_tmt || 0);
    }
  }

  const bal = Math.max(0, released + dep - wd);
  pill.textContent = formatConvertedPrice(bal);
}

function hydrateTopProfileAvatar() {
  const av = document.getElementById("shell-top-avatar");
  if (!av) return;
  const u = getUser();
  const label = (u.username || "P").trim().charAt(0).toUpperCase() || "P";
  if (u.avatar_url) {
    av.innerHTML = `<img src="${esc(u.avatar_url)}" alt="Profil" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" />`;
  } else {
    av.textContent = label;
  }
}

function mountPlayerokShell(activeTab, searchPlaceholder, showBackArrow = false) {
  try {
    applySavedTheme();
    mountSnowEffect();
    const host = document.getElementById("playerok-shell");
    if (!host) return;

    const user = getUser();
    const isSeller = Boolean(user && user.loggedIn && user.role === "seller");

    const backHtml = showBackArrow
      ? `<button class="back-btn" type="button" aria-label="Yza" onclick="history.length > 1 ? history.back() : (location.href='kategoriler.html')">←</button>`
      : "";

    const exnessPlat = findPlatform("exness-account");
    const exnessNavLogo = exnessPlat
      ? renderLogoWithAsset(exnessPlat)
      : artLogo("#facc15", "#0f172a", "MT5", "MT5", "chart");

    const searchNavLogo = renderMediaAsset({
      fallbackHtml: artLogo("#38bdf8", "#1d4ed8", "NAV1", "GÖZLEG", "ring"),
      videos: [
        "assets/logos/assets:logos:anamenu.mp4.mov",
        "assets/logos/anamenu.mp4.mov",
        "assets/logos/anamenu.mp4",
        "assets/logos/anamenu.mov"
      ],
      images: [
        "assets/logos/assets:logos:anamenu.jpg.JPG",
        "assets/logos/anamenu.jpg"
      ],
      alt: "Gözleg"
    });

    const catalogNavLogo = renderMediaAsset({
      fallbackHtml: artLogo("#a855f7", "#4c1d95", "NAV2", "KAT", "diamond"),
      images: [
        "assets/logos/assets:logos:catalog.jpg.JPG",
        "assets/logos/catalog.jpg.JPG",
        "assets/logos/catalog.jpg",
        "assets/logos/catalog.png"
      ],
      alt: "Kategorýa"
    });

    const profileNavLogo = renderMediaAsset({
      fallbackHtml: artLogo("#f472b6", "#831843", "NAV6", "PROF", "shield"),
      images: [
        "assets/logos/assets:logos:withdrawl.jpg.JPG",
        "assets/logos/withdrawl.jpg.JPG",
        "assets/logos/withdrawl.jpg",
        "assets/logos/withdrawl.png"
      ],
      alt: "Profil"
    });

    const navItems = [
      { key: "search", href: "index.html", label: "Gözleg", logo: searchNavLogo },
      { key: "catalog", href: "kategoriler.html", label: "Kategorýa", logo: catalogNavLogo },
      { key: "exness", href: "uygulama.html?slug=exness-account", label: "Exness", logo: exnessNavLogo },
      { key: "messages", href: "mesajlar.html", label: "Hatlar", logo: artLogo("#22d3ee", "#0e7490", "NAV4", "HAT", "play") }
    ];

    if (isSeller) {
      navItems.push({
        key: "sell",
        href: "satyjy.html",
        label: "Satmak",
        logo: artLogo("#34d399", "#065f46", "NAV5", "SAT", "shield")
      });
    }

    navItems.push({
      key: "profile",
      href: "profil.html",
      label: user && user.loggedIn ? "Profil" : "Giriş",
      logo: profileNavLogo
    });

    const navStyle = navItems.length === 5
      ? "grid-template-columns: repeat(5, 1fr);"
      : "grid-template-columns: repeat(6, 1fr);";

    const navHtml = navItems.map(item => `
      <a class="bnav-item ${activeTab === item.key ? "active" : ""}" href="${item.href}">
        <span class="bnav-logo-box">${item.logo}</span>
        <span>${esc(item.label)}</span>
      </a>
    `).join("");

    host.innerHTML = `
      <header class="top-head">
        <div class="top-inner">
          <div class="top-row">
            <div style="display:flex; align-items:center; gap:8px;">
              ${backHtml}
              <a class="brand-link" href="index.html">TKM Market</a>
            </div>
            <div class="top-right" style="display:flex;align-items:center;gap:8px;">
              <a class="bal-pill" id="top-balance-pill" href="profil.html" title="Bakiýe" style="display:none;"></a>
              <button class="theme-switch" type="button" title="Tema" onclick="toggleTheme(); applySiteLanguage();">☀/☾</button>
              <a id="shell-top-avatar" href="profil.html" title="Profil" style="width:34px;height:34px;border-radius:50%;overflow:hidden;border:2px solid #60a5fa;background:linear-gradient(135deg,#3b6ef6,#5b4df5);color:#fff;font-weight:900;font-size:13px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">P</a>
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

      <nav class="bottom-nav" style="${navStyle}">
        ${navHtml}
      </nav>
    `;

    syncUserFields();
    hydrateTopProfileAvatar();
    refreshTopBalancePill();
    applySiteLanguage();
    setTimeout(applySiteLanguage, 200);
    setInterval(applySiteLanguage, 600);
  } catch (err) {
    console.error("Shell mount error:", err);
  }
}
