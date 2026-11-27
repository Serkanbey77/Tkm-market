(function () {
  const SUPABASE_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

  if (!window.tkmSb && window.supabase) {
    window.tkmSb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }

  const I18N = {
    tr: {
      currency: "TRY",
      rate: 9.85,
      back: "Geri",
      searchMain: "Oyun veya program ara...",
      searchSection: "Bu bölümde ara...",
      navHome: "Keşfet",
      navCats: "Kategoriler",
      navExness: "Exness",
      navMsgs: "Mesajlar",
      navProfile: "Profil",
      heroTitle: "4K Oyun, Hesap & Dijital Pazarı",
      heroDesc: "Oyun hesapları, programlar, Exness MT5 ve dijital hizmetler. Satın alındıktan sonra hesap açılır, çift onaydan sonra ödeme geçer.",
      sellBtn: "⚡ Hesap / Ürün Sat",
      askBtn: "💬 Mesaj Gönder",
      popSecs: "Popüler Bölümler",
      allLink: "Tümü →",
      allTile: "Tümü",
      openBtn: "Aç",
      buyBtn: "Satın Al",
      gamesTitle: "Oyunlar",
      appsTitle: "Programlar ve Dijital Hizmetler",
      emptyMarket: "Henüz ilan yok. İlan ekleyebilir veya Mesajlar bölümünden iletişime geçebilirsin."
    },
    tk: {
      currency: "TMT",
      rate: 1,
      back: "Yza",
      searchMain: "Oýun ýa-da programma gözle...",
      searchSection: "Şu bölümde haryt gözle...",
      navHome: "Gözleg",
      navCats: "Kategorya",
      navExness: "Exness",
      navMsgs: "Hatlar",
      navProfile: "Profil",
      heroTitle: "4K Oýun, Hasap & Sanly Bazary",
      heroDesc: "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.",
      sellBtn: "⚡ Hasap / Haryt Sat",
      askBtn: "💬 Habar Iber",
      popSecs: "Meşhur Bölümler",
      allLink: "Ählisi →",
      allTile: "Ählisi",
      openBtn: "Aç",
      buyBtn: "Satyn Al",
      gamesTitle: "Oýunlar",
      appsTitle: "Programmalar & Sanly Hyzmatlar",
      emptyMarket: "Heniz haryt ýok. Täze haryt goşup ýa-da hat ibere bilersiňiz."
    },
    ru: {
      currency: "RUB",
      rate: 26.5,
      back: "Назад",
      searchMain: "Поиск игры или программы...",
      searchSection: "Поиск в этом разделе...",
      navHome: "Главная",
      navCats: "Категории",
      navExness: "Exness",
      navMsgs: "Сообщения",
      navProfile: "Профиль",
      heroTitle: "4K Игры, Аккаунты и Цифровой Маркет",
      heroDesc: "Игровые аккаунты, программы, Exness MT5 и цифровые услуги. Доступ открывается после покупки, выплата после двойного подтверждения.",
      sellBtn: "⚡ Продать Аккаунт / Товар",
      askBtn: "💬 Написать Сообщение",
      popSecs: "Популярные Разделы",
      allLink: "Все →",
      allTile: "Все",
      openBtn: "Открыть",
      buyBtn: "Купить",
      gamesTitle: "Игры",
      appsTitle: "Программы и Цифровые Услуги",
      emptyMarket: "Товаров пока нет. Вы можете добавить объявление или написать сообщение."
    },
    en: {
      currency: "USD",
      rate: 0.285,
      back: "Back",
      searchMain: "Search game or program...",
      searchSection: "Search in this section...",
      navHome: "Explore",
      navCats: "Categories",
      navExness: "Exness",
      navMsgs: "Messages",
      navProfile: "Profile",
      heroTitle: "4K Games, Accounts & Digital Market",
      heroDesc: "Game accounts, software, Exness MT5 and digital services. Credentials unlock after purchase, funds release after dual confirmation.",
      sellBtn: "⚡ Sell Account / Item",
      askBtn: "💬 Send Message",
      popSecs: "Popular Sections",
      allLink: "All →",
      allTile: "All",
      openBtn: "Open",
      buyBtn: "Buy Now",
      gamesTitle: "Games",
      appsTitle: "Software & Digital Services",
      emptyMarket: "No listings yet. Add a listing or send a message."
    }
  };

  window.tkmGetLocale = function () {
    const l = localStorage.getItem("tkm_locale");
    return I18N[l] ? l : "tr";
  };

  window.tkmSetLocale = function (code) {
    if (!I18N[code]) return;
    localStorage.setItem("tkm_locale", code);
    window.tkmApplyAll();
  };

  window.tkmGetTheme = function () {
    return localStorage.getItem("tkm_theme") === "light" ? "light" : "dark";
  };

  window.tkmToggleTheme = function () {
    const next = window.tkmGetTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("tkm_theme", next);
    window.tkmApplyAll();
  };

  window.tkmFmtMoney = function (tmtAmount) {
    const cfg = I18N[window.tkmGetLocale()];
    const num = (Number(tmtAmount || 0) * cfg.rate).toFixed(2);
    if (cfg.currency === "TMT") return `${num} TMT`;
    if (cfg.currency === "TRY") return `${num} ₺`;
    if (cfg.currency === "RUB") return `${num} ₽`;
    return `$${num}`;
  };

  window.esc = function (s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  window.showToast = function (msg) {
    let t = document.getElementById("tkmToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "tkmToast";
      t.style.cssText =
        "position:fixed;bottom:76px;left:50%;transform:translateX(-50%);background:#1e293b;color:#fff;padding:10px 16px;border-radius:10px;font-size:13px;font-weight:700;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.35);display:none;";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = "block";
    clearTimeout(window._tkmToastTimer);
    window._tkmToastTimer = setTimeout(() => { t.style.display = "none"; }, 2600);
  };

  window.setDbPill = function () {
    // Eski "Onlayn" / "Supabase" rozetleri kasten pasif
  };

  window.getUser = function () {
    try {
      return JSON.parse(localStorage.getItem("tkm_local_user") || "null") || { username: "Serkanbey77" };
    } catch (_) {
      return { username: "Serkanbey77" };
    }
  };

  window.sbGet = async function (table) {
    if (!window.tkmSb) return [];
    const { data, error } = await window.tkmSb.from(table).select("*").order("id", { ascending: false });
    if (error) throw error;
    return data || [];
  };

  window.sbInsert = async function (table, payload) {
    if (!window.tkmSb) throw new Error("Supabase bağlı değil");
    const { data, error } = await window.tkmSb.from(table).insert(payload).select("*").single();
    if (error) throw error;
    return data;
  };

  window.getImages = function (item) {
    if (!item) return [];
    if (Array.isArray(item.images)) return item.images.filter(Boolean);
    if (typeof item.images === "string" && item.images.trim()) {
      try {
        const parsed = JSON.parse(item.images);
        if (Array.isArray(parsed)) return parsed.filter(Boolean);
      } catch (_) {}
      return [item.images.trim()];
    }
    return [];
  };

  const PLATFORMS = [
    { id: "pubg-mobile", name: "PUBG Mobile", cat: "game", color1: "#f59e0b", color2: "#b45309", code: "PUBG" },
    { id: "clash-of-clans", name: "Clash of Clans", cat: "game", color1: "#eab308", color2: "#15803d", code: "COC" },
    { id: "minecraft", name: "Minecraft", cat: "game", color1: "#22c55e", color2: "#166534", code: "MC" },
    { id: "gta-5", name: "GTA 5", cat: "game", color1: "#16a34a", color2: "#065f46", code: "V" },
    { id: "roblox", name: "Roblox", cat: "game", color1: "#334155", color2: "#0f172a", code: "RBLX" },
    { id: "fortnite", name: "Fortnite", cat: "game", color1: "#3b82f6", color2: "#1d4ed8", code: "FN" },
    { id: "pubg-mobile-kore", name: "PUBG Mobile Kore", cat: "game", color1: "#ef4444", color2: "#991b1b", code: "KR" },
    { id: "rust", name: "Rust", cat: "game", color1: "#dc2626", color2: "#7f1d1d", code: "RUST" },
    { id: "call-of-duty", name: "Call of Duty", cat: "game", color1: "#475569", color2: "#1e293b", code: "COD" },
    { id: "far-cry", name: "Far Cry", cat: "game", color1: "#0f172a", color2: "#334155", code: "FC" },
    { id: "fifa", name: "FIFA", cat: "game", color1: "#10b981", color2: "#047857", code: "FC25" },
    { id: "telegram", name: "Telegram", cat: "app", color1: "#38bdf8", color2: "#0284c7", code: "TG" },
    { id: "tiktok", name: "TikTok", cat: "app", color1: "#111827", color2: "#ec4899", code: "TT" },
    { id: "youtube", name: "YouTube", cat: "app", color1: "#ef4444", color2: "#b91c1c", code: "YT" },
    { id: "instagram", name: "Instagram", cat: "app", color1: "#f97316", color2: "#db2777", code: "IG" },
    { id: "exness", name: "Exness", cat: "app", color1: "#f59e0b", color2: "#111827", code: "MT5" }
  ];

  window.findPlatform = function (id) {
    return PLATFORMS.find(p => p.id === id) || null;
  };

  window.artLogo = function (c1, c2, _sub, label) {
    return `<div style="width:100%;height:100%;background:linear-gradient(135deg,${c1},${c2});color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:11px;letter-spacing:.3px;">${window.esc(label || "TKM")}</div>`;
  };

  window.renderLogoWithAsset = function (p) {
    if (!p) return "";
    return window.artLogo(p.color1 || "#3b82f6", p.color2 || "#1d4ed8", "", p.code || p.name?.slice(0, 3));
  };

  function ensureShellStyle() {
    if (document.getElementById("tkmUnifiedStyle")) return;
    const st = document.createElement("style");
    st.id = "tkmUnifiedStyle";
    st.textContent = `
      .tkm-shell-header {
        position: sticky; top: 0; z-index: 40;
        background: rgba(15, 21, 38, 0.94); backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(148, 163, 184, 0.16);
        padding: 10px 14px;
      }
      .tkm-header-row {
        max-width: 960px; margin: 0 auto;
        display: flex; align-items: center; justify-content: space-between; gap: 10px;
      }
      .tkm-header-left { display: flex; align-items: center; gap: 8px; min-width: 0; }
      .tkm-back-btn {
        border: 1px solid rgba(148, 163, 184, 0.25); background: #1b2440; color: #f8fafc;
        border-radius: 10px; padding: 6px 10px; font-size: 12px; font-weight: 800; cursor: pointer;
      }
      .tkm-brand {
        text-decoration: none; font-weight: 900; font-size: 17px; color: #fff; white-space: nowrap;
      }
      .tkm-brand span { color: #60a5fa; }
      .tkm-right-group { display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0; }
      .tkm-theme-btn {
        width: 34px; height: 34px; border-radius: 50%;
        border: 1px solid rgba(148, 163, 184, 0.35); background: #1b2440; color: #fbbf24;
        font-size: 15px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
      }
      .tkm-avatar-btn {
        width: 36px; height: 36px; border-radius: 50%; overflow: hidden;
        border: 2px solid #60a5fa; background: linear-gradient(135deg, #3b6ef6, #5b4df5);
        color: #fff; font-weight: 900; font-size: 14px; text-decoration: none;
        display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .tkm-avatar-btn img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .tkm-search-wrap { max-width: 960px; margin: 8px auto 0; }
      .tkm-search-input {
        width: 100%; padding: 10px 13px; border-radius: 12px;
        border: 1px solid rgba(148, 163, 184, 0.22); background: #0d1324; color: #f8fafc;
        font-size: 14px; outline: none;
      }
      .tkm-bottom-nav {
        position: fixed; left: 0; right: 0; bottom: 0; z-index: 40;
        display: grid; grid-template-columns: repeat(5, 1fr);
        background: rgba(15, 21, 38, 0.97); border-top: 1px solid rgba(148, 163, 184, 0.16);
        padding: 8px 4px; backdrop-filter: blur(12px);
      }
      .tkm-bottom-nav a {
        text-decoration: none; color: #94a3b8; text-align: center;
        font-size: 11px; font-weight: 700; padding: 3px 2px;
      }
      .tkm-bottom-nav a.active { color: #60a5fa; }
      html[data-theme="light"] body { background: #f4f7fb !important; color: #0f172a !important; }
      html[data-theme="light"] .tkm-shell-header,
      html[data-theme="light"] .tkm-bottom-nav {
        background: rgba(255, 255, 255, 0.96) !important;
        border-color: rgba(15, 23, 42, 0.12) !important;
      }
      html[data-theme="light"] .tkm-brand { color: #0f172a !important; }
      html[data-theme="light"] .tkm-search-input {
        background: #eef2f7 !important; color: #0f172a !important; border-color: rgba(15, 23, 42, 0.14) !important;
      }
      html[data-theme="light"] .panel,
      html[data-theme="light"] .item-card,
      html[data-theme="light"] .modal-card,
      html[data-theme="light"] .card {
        background: #ffffff !important; color: #0f172a !important; border-color: rgba(15, 23, 42, 0.14) !important;
      }
    `;
    document.head.appendChild(st);
  }

  window.mountPlayerokShell = function (mode = "search", placeholder = "", showBack = false) {
    ensureShellStyle();
    const shell = document.getElementById("playerok-shell");
    const cfg = I18N[window.tkmGetLocale()];
    const path = location.pathname.toLowerCase();

    const activeHome = path.endsWith("/") || path.endsWith("index.html") ? "active" : "";
    const activeCats = path.includes("kategoriler") ? "active" : "";
    const activeExness = location.search.includes("exness") ? "active" : "";
    const activeMsgs = path.includes("mesajlar") ? "active" : "";
    const activeProf = path.includes("profil") ? "active" : "";

    const searchHtml = mode === "search"
      ? `<div class="tkm-search-wrap"><input id="global-search" class="tkm-search-input" type="search" placeholder="${window.esc(placeholder || cfg.searchMain)}" /></div>`
      : "";

    if (shell) {
      shell.innerHTML = `
        <header class="tkm-shell-header">
          <div class="tkm-header-row">
            <div class="tkm-header-left">
              ${showBack ? `<button type="button" class="tkm-back-btn" onclick="history.back()">← <span data-i18n="back">${window.esc(cfg.back)}</span></button>` : ""}
              <a class="tkm-brand" href="index.html">TKM <span>Market</span></a>
            </div>
            <div class="tkm-right-group">
              <button type="button" class="tkm-theme-btn" id="tkmShellThemeBtn" title="Tema">🌓</button>
              <a href="profil.html" class="tkm-avatar-btn" id="tkmShellAvatar" title="Profil">P</a>
            </div>
          </div>
          ${searchHtml}
        </header>
        <nav class="tkm-bottom-nav">
          <a href="index.html" class="${activeHome}" data-i18n="navHome">${window.esc(cfg.navHome)}</a>
          <a href="kategoriler.html" class="${activeCats}" data-i18n="navCats">${window.esc(cfg.navCats)}</a>
          <a href="uygulama.html?slug=exness" class="${activeExness}" data-i18n="navExness">${window.esc(cfg.navExness)}</a>
          <a href="mesajlar.html" class="${activeMsgs}" data-i18n="navMsgs">${window.esc(cfg.navMsgs)}</a>
          <a href="profil.html" class="${activeProf}" data-i18n="navProfile">${window.esc(cfg.navProfile)}</a>
        </nav>
      `;

      document.getElementById("tkmShellThemeBtn")?.addEventListener("click", () => {
        window.tkmToggleTheme();
      });
    }

    hydrateAvatarOnce();
    window.tkmApplyAll();
  };

  let avatarFetched = false;
  async function hydrateAvatarOnce() {
    if (avatarFetched || !window.tkmSb) return;
    const el = document.getElementById("tkmShellAvatar");
    if (!el) return;
    try {
      const { data: { session } } = await window.tkmSb.auth.getSession();
      if (!session?.user) return;
      avatarFetched = true;
      const { data: prof } = await window.tkmSb
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", session.user.id)
        .maybeSingle();
      const name = (prof?.full_name || session.user.email?.split("@")[0] || "P").trim();
      if (prof?.avatar_url) {
        el.innerHTML = `<img src="${prof.avatar_url}" alt="Profil" />`;
      } else {
        el.textContent = name.charAt(0).toUpperCase() || "P";
      }
    } catch (_) {}
  }

  window.tkmApplyAll = function () {
    const lang = window.tkmGetLocale();
    const cfg = I18N[lang];
    const theme = window.tkmGetTheme();

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-theme", theme);

    const searchInput = document.getElementById("global-search");
    if (searchInput) {
      const isSec = /uygulama\.html|kategoriler\.html/i.test(location.pathname);
      searchInput.setAttribute("placeholder", isSec ? cfg.searchSection : cfg.searchMain);
    }

    const phraseMap = {
      "4K Oýun, Hasap & Sanly Bazary": cfg.heroTitle,
      "4K Oyun, Hesap & Dijital Pazarı": cfg.heroTitle,
      "4K Игры, Аккаунты и Цифровой Маркет": cfg.heroTitle,
      "4K Games, Accounts & Digital Market": cfg.heroTitle,
      "⚡ Hasap / Haryt Sat": cfg.sellBtn,
      "⚡ Hesap / Ürün Sat": cfg.sellBtn,
      "⚡ Продать Аккаунт / Товар": cfg.sellBtn,
      "⚡ Sell Account / Item": cfg.sellBtn,
      "💬 Hasap Sorag Iber": cfg.askBtn,
      "💬 Habar Iber": cfg.askBtn,
      "💬 Mesaj Gönder": cfg.askBtn,
      "💬 Написать Сообщение": cfg.askBtn,
      "💬 Send Message": cfg.askBtn,
      "Meşhur Bölümler": cfg.popSecs,
      "Popüler Bölümler": cfg.popSecs,
      "Популярные Разделы": cfg.popSecs,
      "Popular Sections": cfg.popSecs,
      "Ählisi →": cfg.allLink,
      "Tümü →": cfg.allLink,
      "Все →": cfg.allLink,
      "All →": cfg.allLink,
      "Ählisi": cfg.allTile,
      "Tümü": cfg.allTile,
      "Все": cfg.allTile,
      "All": cfg.allTile,
      "Aç": cfg.openBtn,
      "Открыть": cfg.openBtn,
      "Open": cfg.openBtn,
      "Satyn Al": cfg.buyBtn,
      "Satın Al": cfg.buyBtn,
      "Купить": cfg.buyBtn,
      "Buy Now": cfg.buyBtn,
      "Oýunlar": cfg.gamesTitle,
      "Oyunlar": cfg.gamesTitle,
      "Игры": cfg.gamesTitle,
      "Games": cfg.gamesTitle,
      "Programmalar & Sanly Hyzmatlar": cfg.appsTitle,
      "Programlar ve Dijital Hizmetler": cfg.appsTitle,
      "Программы и Цифровые Услуги": cfg.appsTitle,
      "Software & Digital Services": cfg.appsTitle,
      "Gözleg": cfg.navHome,
      "Keşfet": cfg.navHome,
      "Главная": cfg.navHome,
      "Explore": cfg.navHome,
      "Kategorya": cfg.navCats,
      "Kategoriler": cfg.navCats,
      "Категории": cfg.navCats,
      "Categories": cfg.navCats,
      "Hatlar": cfg.navMsgs,
      "Mesajlar": cfg.navMsgs,
      "Сообщения": cfg.navMsgs,
      "Messages": cfg.navMsgs,
      "Giriş": cfg.navProfile,
      "Profil": cfg.navProfile,
      "Профиль": cfg.navProfile,
      "Profile": cfg.navProfile
    };

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || node.parentElement.closest("script, style")) continue;
      const orig = node.nodeValue;
      if (!orig) continue;
      const t = orig.trim();
      if (!t) continue;

      if (phraseMap[t]) {
        node.nodeValue = orig.replace(t, phraseMap[t]);
        continue;
      }

      const moneyMatch = t.match(/^([\d\s,.]+)\s*(TMT|₺|₽|\$)$/i);
      if (moneyMatch) {
        const val = parseFloat(moneyMatch[1].replace(/\s+/g, "").replace(",", "."));
        if (!Number.isNaN(val)) {
          const out = (val * cfg.rate).toFixed(2);
          let formatted = `${out} TMT`;
          if (cfg.currency === "TRY") formatted = `${out} ₺`;
          else if (cfg.currency === "RUB") formatted = `${out} ₽`;
          else if (cfg.currency === "USD") formatted = `$${out}`;
          node.nodeValue = orig.replace(t, formatted);
        }
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.tkmApplyAll();
    setTimeout(window.tkmApplyAll, 300);
  });
})();
