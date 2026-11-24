const TKM_API = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

const GAME_SUBCATS = ["Ählisi", "Hasap", "Arenda", "UC"];
const APP_SUBCATS = ["Ählisi", "Hasap", "İzlenme", "Like", "Yorum", "Dizayn", "Reklam"];
const COURSE_SUBCATS = ["Ählisi", "Kripto Trading", "Forex & Altın", "Sinyal"];

function svgWrap(inner) {
  return `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

function bannerWrap(bgSvg, badge, title, sub, iconSvg) {
  return `<div style="position:relative; width:100%; border-radius:16px; overflow:hidden; padding:16px; color:#fff; display:flex; align-items:center; gap:14px; min-height:118px; box-shadow:0 12px 24px rgba(2,6,23,0.28);">
    <svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;" xmlns="http://www.w3.org/2000/svg">${bgSvg}</svg>
    <div id="plat-hero-logo" class="platform-hero-logo" style="position:relative; z-index:2;">${iconSvg}</div>
    <div style="position:relative; z-index:2;">
      <div style="display:inline-block; font-size:10px; font-weight:800; padding:2px 8px; border-radius:999px; background:rgba(15,23,42,0.55); border:1px solid rgba(255,255,255,0.25); margin-bottom:5px;">${badge}</div>
      <h1 id="plat-hero-title" style="margin:0; font-size:20px; text-shadow:0 2px 10px rgba(0,0,0,0.6);">${title}</h1>
      <p id="plat-hero-sub" style="margin:3px 0 0; font-size:12px; text-shadow:0 1px 6px rgba(0,0,0,0.65);">${sub}</p>
    </div>
  </div>`;
}

const LOGOS = {
  pubg: svgWrap(`
    <defs><linearGradient id="lPubg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#78350f"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lPubg)"/>
    <path d="M18 42 C18 24, 62 24, 62 42 L66 47 L14 47 Z" fill="#111827" stroke="#fde68a" stroke-width="2"/>
    <rect x="24" y="34" width="32" height="6" rx="2" fill="#fbbf24"/>
    <circle cx="40" cy="57" r="10" fill="none" stroke="#fff" stroke-width="2.2"/>
    <line x1="40" y1="44" x2="40" y2="70" stroke="#fff" stroke-width="2"/>
    <line x1="27" y1="57" x2="53" y2="57" stroke="#fff" stroke-width="2"/>
  `),
  coc: svgWrap(`
    <defs><linearGradient id="lCoc" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#16a34a"/><stop offset="100%" stop-color="#14532d"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lCoc)"/>
    <path d="M40 14 L63 23 L60 48 C58 60, 40 68, 40 68 C40 68, 22 60, 20 48 L17 23 Z" fill="#facc15" stroke="#713f12" stroke-width="2.5"/>
    <path d="M26 27 L54 53 M54 27 L26 53" stroke="#991b1b" stroke-width="5" stroke-linecap="round"/>
  `),
  mc: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#5d4037"/>
    <rect x="0" y="0" width="80" height="26" rx="18" fill="#4ade80"/>
    <rect x="0" y="16" width="80" height="12" fill="#22c55e"/>
    <rect x="14" y="36" width="16" height="16" fill="#3e2723"/>
    <rect x="48" y="34" width="18" height="18" fill="#4e342e"/>
    <rect x="28" y="54" width="22" height="14" fill="#3e2723"/>
  `),
  gta5: svgWrap(`
    <defs><linearGradient id="lGta" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#064e3b"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lGta)"/>
    <text x="40" y="42" text-anchor="middle" fill="#a7f3d0" font-size="22" font-weight="900" font-style="italic" font-family="Georgia,serif">GTA</text>
    <text x="40" y="63" text-anchor="middle" fill="#fde047" font-size="20" font-weight="900" font-family="system-ui,sans-serif">V</text>
  `),
  roblox: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#0f172a"/>
    <g transform="translate(40,40) rotate(-14)">
      <rect x="-20" y="-20" width="40" height="40" rx="5" fill="#e2e8f0"/>
      <rect x="-7" y="-7" width="14" height="14" rx="2" fill="#0f172a"/>
    </g>
  `),
  fortnite: svgWrap(`
    <defs><linearGradient id="lFn" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lFn)"/>
    <path d="M26 18 H56 L53 31 H39 V38 H51 L48 50 H39 V64 H26 Z" fill="#ffffff" stroke="#1e1b4b" stroke-width="2"/>
  `),
  pubgkr: svgWrap(`
    <defs><linearGradient id="lKr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#dc2626"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lKr)"/>
    <circle cx="40" cy="40" r="22" fill="#0f172a" stroke="#fff" stroke-width="2.5"/>
    <text x="40" y="45" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="900" font-family="system-ui,sans-serif">KR</text>
  `),
  rust: svgWrap(`
    <defs><linearGradient id="lRust" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#7c2d12"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lRust)"/>
    <circle cx="40" cy="40" r="21" fill="none" stroke="#ffedd5" stroke-width="5" stroke-dasharray="10 5"/>
    <circle cx="40" cy="40" r="9" fill="#ffedd5"/>
  `),
  cod: svgWrap(`
    <defs><linearGradient id="lCod" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#020617"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lCod)"/>
    <polygon points="40,14 64,40 40,66 16,40" fill="none" stroke="#94a3b8" stroke-width="3"/>
    <text x="40" y="45" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="900" font-family="system-ui,sans-serif">CoD</text>
  `),
  farcry: svgWrap(`
    <defs><linearGradient id="lFc" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#7c2d12"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lFc)"/>
    <polygon points="40,16 66,60 14,60" fill="#fff7ed"/>
    <polygon points="40,30 53,54 27,54" fill="#ea580c"/>
  `),
  fifa: svgWrap(`
    <defs><linearGradient id="lFifa" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#064e3b"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lFifa)"/>
    <circle cx="40" cy="40" r="21" fill="#ecfdf5" stroke="#064e3b" stroke-width="2.5"/>
    <polygon points="40,26 51,35 47,49 33,49 29,35" fill="#059669"/>
  `),
  telegram: svgWrap(`
    <defs><linearGradient id="lTg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#0284c7"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lTg)"/>
    <polygon points="16,41 63,20 53,61 39,49 28,57" fill="#ffffff"/>
    <polygon points="39,49 63,20 33,45" fill="#bae6fd"/>
  `),
  tiktok: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#090d16"/>
    <path d="M46 18 C49 25, 55 29, 62 30 V39 C57 39, 52 37, 48 34 V49 C48 58, 41 64, 32 64 C24 64, 18 58, 18 50 C18 42, 24 36, 32 36 C34 36, 36 36, 38 37 V46 C36 45, 34 45, 32 45 C29 45, 27 47, 27 50 C27 53, 29 55, 32 55 C36 55, 38 52, 38 48 V18 Z" fill="#ffffff"/>
    <path d="M44 18 H47 V48 C47 52, 44 55, 40 55" fill="none" stroke="#22d3ee" stroke-width="2"/>
    <path d="M21 47 C21 40, 27 35, 34 35" fill="none" stroke="#f43f5e" stroke-width="2"/>
  `),
  youtube: svgWrap(`
    <defs><linearGradient id="lYt" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#991b1b"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lYt)"/>
    <rect x="14" y="22" width="52" height="36" rx="10" fill="#ffffff"/>
    <polygon points="35,30 50,40 35,50" fill="#dc2626"/>
  `),
  instagram: svgWrap(`
    <defs><linearGradient id="lIg" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#ec4899"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lIg)"/>
    <rect x="20" y="20" width="40" height="40" rx="12" fill="none" stroke="#ffffff" stroke-width="4"/>
    <circle cx="40" cy="40" r="9" fill="none" stroke="#ffffff" stroke-width="3.5"/>
    <circle cx="51" cy="29" r="2.5" fill="#ffffff"/>
  `),
  chatgpt: svgWrap(`
    <defs><linearGradient id="lGpt" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lGpt)"/>
    <circle cx="40" cy="40" r="18" fill="none" stroke="#ffffff" stroke-width="3.5"/>
    <circle cx="40" cy="22" r="5" fill="#ffffff"/><circle cx="56" cy="31" r="5" fill="#ffffff"/><circle cx="56" cy="49" r="5" fill="#ffffff"/>
    <circle cx="40" cy="58" r="5" fill="#ffffff"/><circle cx="24" cy="49" r="5" fill="#ffffff"/><circle cx="24" cy="31" r="5" fill="#ffffff"/>
  `),
  gemini: svgWrap(`
    <defs><linearGradient id="lGem" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="55%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#ec4899"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lGem)"/>
    <path d="M40 16 C42 32, 48 38, 64 40 C48 42, 42 48, 40 64 C38 48, 32 42, 16 40 C32 38, 38 32, 40 16 Z" fill="#ffffff"/>
  `),
  microsoft: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#0f172a"/>
    <rect x="18" y="18" width="19" height="19" rx="2" fill="#f97316"/>
    <rect x="43" y="18" width="19" height="19" rx="2" fill="#22c55e"/>
    <rect x="18" y="43" width="19" height="19" rx="2" fill="#0ea5e9"/>
    <rect x="43" y="43" width="19" height="19" rx="2" fill="#eab308"/>
  `),
  apple: svgWrap(`
    <defs><linearGradient id="lApp" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lApp)"/>
    <circle cx="40" cy="44" r="16" fill="#ffffff"/>
    <circle cx="54" cy="40" r="8" fill="#1e293b"/>
    <ellipse cx="43" cy="22" rx="5" ry="3" transform="rotate(-25 43 22)" fill="#ffffff"/>
  `),
  steam: svgWrap(`
    <defs><linearGradient id="lStm" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lStm)"/>
    <circle cx="50" cy="30" r="11" fill="none" stroke="#7dd3fc" stroke-width="3.5"/>
    <circle cx="28" cy="52" r="9" fill="#7dd3fc"/>
    <line x1="33" y1="47" x2="43" y2="37" stroke="#7dd3fc" stroke-width="4" stroke-linecap="round"/>
  `),
  xbox: svgWrap(`
    <defs><linearGradient id="lXb" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#14532d"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lXb)"/>
    <path d="M22 22 L58 58 M58 22 L22 58" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  `),
  spotify: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#16a34a"/>
    <path d="M22 30 Q40 24 58 32" fill="none" stroke="#052e16" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M25 41 Q40 36 55 43" fill="none" stroke="#052e16" stroke-width="4" stroke-linecap="round"/>
    <path d="M28 51 Q40 47 52 52" fill="none" stroke="#052e16" stroke-width="3.5" stroke-linecap="round"/>
  `),
  discord: svgWrap(`
    <defs><linearGradient id="lDc" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#3730a3"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lDc)"/>
    <rect x="18" y="25" width="44" height="30" rx="11" fill="#ffffff"/>
    <circle cx="32" cy="40" r="4" fill="#4f46e5"/><circle cx="48" cy="40" r="4" fill="#4f46e5"/>
  `),
  office: svgWrap(`
    <defs><linearGradient id="lOfc" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#9a3412"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lOfc)"/>
    <path d="M24 24 L54 18 V62 L24 56 V24 Z" fill="#ffffff"/>
    <rect x="31" y="28" width="12" height="24" rx="2" fill="#ea580c"/>
  `),
  epic: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#111827"/>
    <path d="M24 18 H56 V56 L40 65 L24 56 Z" fill="#ffffff"/>
    <text x="40" y="45" text-anchor="middle" fill="#111827" font-size="13" font-weight="900" font-family="system-ui,sans-serif">EPIC</text>
  `),
  runway: svgWrap(`
    <defs><linearGradient id="lRwy" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#14b8a6"/><stop offset="100%" stop-color="#0f766e"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lRwy)"/>
    <polygon points="28,24 58,40 28,56" fill="#ffffff"/>
  `),
  netflix: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#141414"/>
    <path d="M24 20 H33 L47 46 V20 H56 V60 H47 L33 34 V60 H24 Z" fill="#e50914"/>
  `),
  midjourney: svgWrap(`
    <defs><linearGradient id="lMj" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#3b0764"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lMj)"/>
    <path d="M16 52 Q40 22 64 52" fill="none" stroke="#f5d0fe" stroke-width="4" stroke-linecap="round"/>
    <path d="M22 58 Q40 36 58 58" fill="none" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
  `),
  gplay: svgWrap(`
    <rect width="80" height="80" rx="18" fill="#0f172a"/>
    <polygon points="24,20 58,40 24,60" fill="#22c55e"/>
    <polygon points="24,20 42,40 24,40" fill="#38bdf8"/>
    <polygon points="24,40 42,40 24,60" fill="#facc15"/>
  `),
  belet: svgWrap(`
    <defs><linearGradient id="lBf" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f43f5e"/><stop offset="100%" stop-color="#881337"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lBf)"/>
    <circle cx="40" cy="40" r="20" fill="none" stroke="#ffffff" stroke-width="3.5"/>
    <polygon points="35,30 50,40 35,50" fill="#ffffff"/>
  `),
  trading: svgWrap(`
    <defs><linearGradient id="lTrd" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#0f766e"/></linearGradient></defs>
    <rect width="80" height="80" rx="18" fill="url(#lTrd)"/>
    <polyline points="18,52 32,38 43,46 62,24" fill="none" stroke="#ecfdf5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="50,24 62,24 62,36" fill="none" stroke="#fde047" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  `)
};

const GAMES_CATALOG = [
  { id: "pubg-mobile", name: "PUBG Mobile", kind: "game", logo: LOGOS.pubg, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#1e293b"/><circle cx="265" cy="60" r="68" fill="#d97706" opacity="0.55"/><rect x="180" y="18" width="110" height="84" rx="12" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.45"/>`, "BATTLE ROYALE • UC & HASAP", "PUBG Mobile", "Hasap • Arenda • UC", LOGOS.pubg) },
  { id: "clash-of-clans", name: "Clash of Clans", kind: "game", logo: LOGOS.coc, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#14532d"/><circle cx="270" cy="55" r="72" fill="#ca8a04" opacity="0.55"/><polygon points="210,105 275,15 320,105" fill="#fde047" opacity="0.2"/>`, "KÖY & KLAN • HASAP", "Clash of Clans", "Hasap • Arenda • UC", LOGOS.coc) },
  { id: "minecraft", name: "Minecraft", kind: "game", logo: LOGOS.mc, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#3f6212"/><rect x="210" y="15" width="36" height="36" fill="#4ade80" opacity="0.4"/><rect x="246" y="51" width="36" height="36" fill="#a3e635" opacity="0.35"/>`, "SANDBOX • HASAP & SERVER", "Minecraft", "Hasap • Arenda • UC", LOGOS.mc) },
  { id: "gta-5", name: "GTA 5", kind: "game", logo: LOGOS.gta5, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#064e3b"/><circle cx="265" cy="58" r="66" fill="#10b981" opacity="0.45"/>`, "OPEN WORLD • ONLINE HASAP", "GTA 5", "Hasap • Arenda • UC", LOGOS.gta5) },
  { id: "roblox", name: "Roblox", kind: "game", logo: LOGOS.roblox, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#111827"/><circle cx="268" cy="60" r="65" fill="#dc2626" opacity="0.45"/>`, "OYUN PLATFORMASY • HASAP", "Roblox", "Hasap • Arenda • UC", LOGOS.roblox) },
  { id: "fortnite", name: "Fortnite", kind: "game", logo: LOGOS.fortnite, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#1e1b4b"/><circle cx="268" cy="58" r="68" fill="#7c3aed" opacity="0.55"/>`, "BATTLE ROYALE • V-BUCKS & HASAP", "Fortnite", "Hasap • Arenda • UC", LOGOS.fortnite) },
  { id: "pubg-mobile-korea", name: "PUBG Mobile Kore", kind: "game", logo: LOGOS.pubgkr, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#172554"/><circle cx="268" cy="58" r="68" fill="#dc2626" opacity="0.45"/>`, "KORE SÜRÜMI • HASAP & UC", "PUBG Mobile Kore", "Hasap • Arenda • UC", LOGOS.pubgkr) },
  { id: "rust", name: "Rust", kind: "game", logo: LOGOS.rust, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#431407"/><circle cx="268" cy="58" r="68" fill="#ea580c" opacity="0.45"/>`, "SURVIVAL • STEAM HASAP", "Rust", "Hasap • Arenda • UC", LOGOS.rust) },
  { id: "call-of-duty", name: "Call of Duty", kind: "game", logo: LOGOS.cod, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#020617"/><circle cx="268" cy="58" r="68" fill="#475569" opacity="0.45"/>`, "FPS AKSION • HASAP", "Call of Duty", "Hasap • Arenda • UC", LOGOS.cod) },
  { id: "far-cry", name: "Far Cry", kind: "game", logo: LOGOS.farcry, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#431407"/><circle cx="268" cy="58" r="68" fill="#f97316" opacity="0.45"/>`, "MACERA • HASAP", "Far Cry", "Hasap • Arenda • UC", LOGOS.farcry) },
  { id: "fifa", name: "FIFA", kind: "game", logo: LOGOS.fifa, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#064e3b"/><circle cx="268" cy="58" r="68" fill="#22c55e" opacity="0.45"/>`, "FUTBOL • ULTIMATE HASAP", "FIFA", "Hasap • Arenda • UC", LOGOS.fifa) }
];

const APPS_CATALOG = [
  { id: "telegram", name: "Telegram", kind: "app", logo: LOGOS.telegram, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#0c4a6e"/><circle cx="268" cy="58" r="68" fill="#38bdf8" opacity="0.45"/>`, "KANAL • HASAP • BOT", "Telegram", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.telegram) },
  { id: "tiktok", name: "TikTok", kind: "app", logo: LOGOS.tiktok, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#090d16"/><circle cx="255" cy="52" r="62" fill="#ec4899" opacity="0.45"/><circle cx="285" cy="68" r="54" fill="#22d3ee" opacity="0.35"/>`, "HASAP • İZLENME • LIKE • REKLAM", "TikTok", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.tiktok) },
  { id: "youtube", name: "YouTube", kind: "app", logo: LOGOS.youtube, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#450a0a"/><circle cx="268" cy="58" r="68" fill="#ef4444" opacity="0.5"/>`, "KANAL • İZLENME • ABONE", "YouTube", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.youtube) },
  { id: "instagram", name: "Instagram", kind: "app", logo: LOGOS.instagram, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#831843"/><circle cx="268" cy="58" r="68" fill="#f97316" opacity="0.5"/>`, "HASAP • LIKE • YORUM • DIZAYN", "Instagram", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.instagram) },
  { id: "chatgpt", name: "ChatGPT", kind: "app", logo: LOGOS.chatgpt, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#064e3b"/><circle cx="268" cy="58" r="68" fill="#10b981" opacity="0.5"/>`, "AI HASAP • ABONELIK", "ChatGPT", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.chatgpt) },
  { id: "gemini", name: "Gemini", kind: "app", logo: LOGOS.gemini, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#1e1b4b"/><circle cx="268" cy="58" r="68" fill="#8b5cf6" opacity="0.5"/>`, "GOOGLE AI • HASAP", "Gemini", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.gemini) },
  { id: "microsoft", name: "Microsoft", kind: "app", logo: LOGOS.microsoft, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#172554"/><circle cx="268" cy="58" r="68" fill="#2563eb" opacity="0.5"/>`, "WINDOWS • HESAP & AÇAR", "Microsoft", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.microsoft) },
  { id: "apple", name: "Apple", kind: "app", logo: LOGOS.apple, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#0f172a"/><circle cx="268" cy="58" r="68" fill="#64748b" opacity="0.45"/>`, "APPLE ID • ICLOUD & HYZMAT", "Apple", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.apple) },
  { id: "steam", name: "Steam", kind: "app", logo: LOGOS.steam, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#0f172a"/><circle cx="268" cy="58" r="68" fill="#2563eb" opacity="0.5"/>`, "OYUN DÜKANY • HASAP & BAKIÝA", "Steam", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.steam) },
  { id: "xbox", name: "Xbox", kind: "app", logo: LOGOS.xbox, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#052e16"/><circle cx="268" cy="58" r="68" fill="#22c55e" opacity="0.5"/>`, "GAME PASS • HASAP", "Xbox", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.xbox) },
  { id: "spotify", name: "Spotify", kind: "app", logo: LOGOS.spotify, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#052e16"/><circle cx="268" cy="58" r="68" fill="#16a34a" opacity="0.55"/>`, "PREMIUM • HASAP", "Spotify", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.spotify) },
  { id: "discord", name: "Discord", kind: "app", logo: LOGOS.discord, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#312e81"/><circle cx="268" cy="58" r="68" fill="#6366f1" opacity="0.5"/>`, "NITRO • SERVER • HASAP", "Discord", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.discord) },
  { id: "microsoft-office", name: "Microsoft Office", kind: "app", logo: LOGOS.office, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#7c2d12"/><circle cx="268" cy="58" r="68" fill="#ea580c" opacity="0.5"/>`, "WORD • EXCEL • 365 HASAP", "Microsoft Office", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.office) },
  { id: "epic-games", name: "Epic Games", kind: "app", logo: LOGOS.epic, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#090d16"/><circle cx="268" cy="58" r="68" fill="#475569" opacity="0.45"/>`, "EPIC HASAP • OYUNLAR", "Epic Games", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.epic) },
  { id: "runway", name: "Runway", kind: "app", logo: LOGOS.runway, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#134e4a"/><circle cx="268" cy="58" r="68" fill="#14b8a6" opacity="0.5"/>`, "VIDEO AI • HASAP & KREDIT", "Runway", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.runway) },
  { id: "netflix", name: "Netflix", kind: "app", logo: LOGOS.netflix, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#450a0a"/><circle cx="268" cy="58" r="68" fill="#dc2626" opacity="0.5"/>`, "KINO & SERIAL • HASAP", "Netflix", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.netflix) },
  { id: "midjourney", name: "Midjourney", kind: "app", logo: LOGOS.midjourney, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#2e1065"/><circle cx="268" cy="58" r="68" fill="#8b5cf6" opacity="0.55"/>`, "SURAT AI • HASAP", "Midjourney", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.midjourney) },
  { id: "google-play", name: "Google Play", kind: "app", logo: LOGOS.gplay, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#064e3b"/><circle cx="268" cy="58" r="68" fill="#22c55e" opacity="0.45"/>`, "ANDROID • BAKIÝA & HASAP", "Google Play", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.gplay) },
  { id: "belet-film", name: "Belet Film", kind: "app", logo: LOGOS.belet, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#4c0519"/><circle cx="268" cy="58" r="68" fill="#f43f5e" opacity="0.5"/>`, "BELET FILM • HASAP", "Belet Film", "Hasap • İzlenme • Like • Yorum • Dizayn • Reklam", LOGOS.belet) }
];

const COURSES_CATALOG = [
  { id: "trading-kurs", name: "Trading Kurs", kind: "course", logo: LOGOS.trading, bannerHtml: bannerWrap(`<rect width="320" height="120" fill="#042f2e"/><circle cx="268" cy="58" r="68" fill="#10b981" opacity="0.5"/>`, "TEHNIKI ANALIZ & OKUW", "Trading Kurs", "Kripto Trading • Forex & Altın • Sinyal", LOGOS.trading) }
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
