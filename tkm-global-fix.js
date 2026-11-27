(function () {
  const SB_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
  const SB_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

  if (!window.tkmSb && window.supabase) {
    window.tkmSb = window.supabase.createClient(SB_URL, SB_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }

  const LANGS = {
    tr: {
      currency: "TRY",
      rate: 9.85,
      search: "Oyun veya program ara...",
      secSearch: "Bu bölümde ara...",
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
      navHome: "Keşfet",
      navCats: "Kategoriler",
      navExness: "Exness",
      navMsgs: "Mesajlar",
      navProfile: "Profil",
      countGamesSuffix: "oyun",
      countAppsSuffix: "program"
    },
    tk: {
      currency: "TMT",
      rate: 1,
      search: "Oýun ýa-da programma gözle...",
      secSearch: "Şu bölümde gözle...",
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
      navHome: "Gözleg",
      navCats: "Kategorya",
      navExness: "Exness",
      navMsgs: "Hatlar",
      navProfile: "Profil",
      countGamesSuffix: "oýun",
      countAppsSuffix: "programma"
    },
    ru: {
      currency: "RUB",
      rate: 26.5,
      search: "Поиск игры или программы...",
      secSearch: "Поиск в разделе...",
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
      navHome: "Главная",
      navCats: "Категории",
      navExness: "Exness",
      navMsgs: "Сообщения",
      navProfile: "Профиль",
      countGamesSuffix: "игр",
      countAppsSuffix: "программ"
    },
    en: {
      currency: "USD",
      rate: 0.285,
      search: "Search game or program...",
      secSearch: "Search in section...",
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
      navHome: "Explore",
      navCats: "Categories",
      navExness: "Exness",
      navMsgs: "Messages",
      navProfile: "Profile",
      countGamesSuffix: "games",
      countAppsSuffix: "apps"
    }
  };

  function getLang() {
    const l = localStorage.getItem("tkm_locale");
    return LANGS[l] ? l : "tr";
  }

  function getTheme() {
    return localStorage.getItem("tkm_theme") === "light" ? "light" : "dark";
  }

  function ensureStyle() {
    if (document.getElementById("tkmSyncStyle")) return;
    const s = document.createElement("style");
    s.id = "tkmSyncStyle";
    s.textContent = `
      .tkm-right-bar {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        flex-shrink: 0;
      }
      .tkm-mode-btn {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: #1b2440;
        color: #fbbf24;
        font-size: 15px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .tkm-prof-ring {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #60a5fa;
        background: linear-gradient(135deg, #3b6ef6, #5b4df5);
        color: #fff;
        font-weight: 900;
        font-size: 14px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .tkm-prof-ring img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      html[data-theme="light"] body {
        background: #f4f7fb !important;
        color: #0f172a !important;
      }
      html[data-theme="light"] .panel,
      html[data-theme="light"] .item-card,
      html[data-theme="light"] .modal-card,
      html[data-theme="light"] .card {
        background: #ffffff !important;
        color: #0f172a !important;
        border-color: rgba(15, 23, 42, 0.14) !important;
      }
    `;
    document.head.appendChild(s);
  }

  function applyTheme() {
    const t = getTheme();
    document.documentElement.setAttribute("data-theme", t);
    if (t === "light") {
      document.body.style.background = "#f4f7fb";
      document.body.style.color = "#0f172a";
    } else {
      document.body.style.background = "radial-gradient(circle at 50% 0%, #1d294d 0%, #0b0f1d 58%, #070a14 100%)";
      document.body.style.color = "#f8fafc";
    }
  }

  function syncTopBar() {
    const header = document.querySelector("header, .topbar, .app-header, #playerok-shell header");
    if (!header) return;

    header.querySelectorAll("a, button, span, div").forEach((el) => {
      if (el.closest(".tkm-right-bar")) return;
      const raw = (el.textContent || "").trim().toLowerCase();
      if (
        el.children.length === 0 &&
        (raw === "giriş et" || raw === "onlayn" || raw === "online" || raw === "supabase" || raw === "ýerli")
      ) {
        el.style.display = "none";
      }
    });

    if (!header.querySelector(".tkm-right-bar")) {
      const bar = document.createElement("div");
      bar.className = "tkm-right-bar";
      bar.innerHTML = `
        <button type="button" class="tkm-mode-btn" id="tkmThemeSwitch" title="Tema">🌓</button>
        <a href="profil.html" class="tkm-prof-ring" id="tkmTopAvatar" title="Profil">P</a>
      `;
      header.appendChild(bar);

      document.getElementById("tkmThemeSwitch").addEventListener("click", () => {
        const next = getTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("tkm_theme", next);
        applyTheme();
      });
    }

    hydrateAvatar();
  }

  let avatarHydrated = false;
  async function hydrateAvatar() {
    if (avatarHydrated || !window.tkmSb) return;
    const el = document.getElementById("tkmTopAvatar");
    if (!el) return;
    try {
      const { data: { session } } = await window.tkmSb.auth.getSession();
      if (!session?.user) return;
      avatarHydrated = true;
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

  const EXACT_MAP = {
    tr: {
      "4K Oýun, Hasap & Sanly Bazary": "4K Oyun, Hesap & Dijital Pazarı",
      "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.": "Oyun hesapları, programlar, Exness MT5 ve dijital hizmetler. Satın alındıktan sonra hesap açılır, çift onaydan sonra ödeme geçer.",
      "⚡ Hasap / Haryt Sat": "⚡ Hesap / Ürün Sat",
      "💬 Hasap Sorag Iber": "💬 Mesaj Gönder",
      "💬 Habarlaşmak / Sorag": "💬 Mesaj Gönder",
      "Meşhur Bölümler": "Popüler Bölümler",
      "Ählisi →": "Tümü →",
      "Ählisi": "Tümü",
      "Oýunlar": "Oyunlar",
      "Programmalar & Sanly Hyzmatlar": "Programlar ve Dijital Hizmetler",
      "Gözleg": "Keşfet",
      "Kategorya": "Kategoriler",
      "Hatlar": "Mesajlar",
      "Giriş": "Profil",
      "Satyn Al": "Satın Al",
      "Aç": "Aç"
    },
    tk: {
      "4K Oyun, Hesap & Dijital Pazarı": "4K Oýun, Hasap & Sanly Bazary",
      "Oyun hesapları, programlar, Exness MT5 ve dijital hizmetler. Satın alındıktan sonra hesap açılır, çift onaydan sonra ödeme geçer.": "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.",
      "⚡ Hesap / Ürün Sat": "⚡ Hasap / Haryt Sat",
      "💬 Mesaj Gönder": "💬 Habar Iber",
      "Popüler Bölümler": "Meşhur Bölümler",
      "Tümü →": "Ählisi →",
      "Tümü": "Ählisi",
      "Oyunlar": "Oýunlar",
      "Programlar ve Dijital Hizmetler": "Programmalar & Sanly Hyzmatlar",
      "Keşfet": "Gözleg",
      "Kategoriler": "Kategorya",
      "Mesajlar": "Hatlar",
      "Profil": "Giriş",
      "Satın Al": "Satyn Al",
      "Aç": "Aç"
    },
    ru: {
      "4K Oýun, Hasap & Sanly Bazary": "4K Игры, Аккаунты и Цифровой Маркет",
      "4K Oyun, Hesap & Dijital Pazarı": "4K Игры, Аккаунты и Цифровой Маркет",
      "⚡ Hasap / Haryt Sat": "⚡ Продать Аккаунт / Товар",
      "⚡ Hesap / Ürün Sat": "⚡ Продать Аккаунт / Товар",
      "💬 Hasap Sorag Iber": "💬 Написать Сообщение",
      "💬 Mesaj Gönder": "💬 Написать Сообщение",
      "Meşhur Bölümler": "Популярные Разделы",
      "Popüler Bölümler": "Популярные Разделы",
      "Ählisi →": "Все →",
      "Tümü →": "Все →",
      "Ählisi": "Все",
      "Tümü": "Все",
      "Oýunlar": "Игры",
      "Programmalar & Sanly Hyzmatlar": "Программы и Цифровые Услуги",
      "Programlar ve Dijital Hizmetler": "Программы и Цифровые Услуги",
      "Gözleg": "Главная",
      "Keşfet": "Главная",
      "Kategorya": "Категории",
      "Kategoriler": "Категории",
      "Hatlar": "Сообщения",
      "Mesajlar": "Сообщения",
      "Giriş": "Профиль",
      "Profil": "Профиль",
      "Satyn Al": "Купить",
      "Satın Al": "Купить",
      "Aç": "Открыть"
    },
    en: {
      "4K Oýun, Hasap & Sanly Bazary": "4K Games, Accounts & Digital Market",
      "4K Oyun, Hesap & Dijital Pazarı": "4K Games, Accounts & Digital Market",
      "⚡ Hasap / Haryt Sat": "⚡ Sell Account / Item",
      "⚡ Hesap / Ürün Sat": "⚡ Sell Account / Item",
      "💬 Hasap Sorag Iber": "💬 Send Message",
      "💬 Mesaj Gönder": "💬 Send Message",
      "Meşhur Bölümler": "Popular Sections",
      "Popüler Bölümler": "Popular Sections",
      "Ählisi →": "All →",
      "Tümü →": "All →",
      "Ählisi": "All",
      "Tümü": "All",
      "Oýunlar": "Games",
      "Programmalar & Sanly Hyzmatlar": "Software & Digital Services",
      "Programlar ve Dijital Hizmetler": "Software & Digital Services",
      "Gözleg": "Explore",
      "Keşfet": "Explore",
      "Kategorya": "Categories",
      "Kategoriler": "Categories",
      "Hatlar": "Messages",
      "Mesajlar": "Messages",
      "Giriş": "Profile",
      "Profil": "Profile",
      "Satyn Al": "Buy Now",
      "Satın Al": "Buy Now",
      "Aç": "Open"
    }
  };

  function translateAllTexts() {
    const lang = getLang();
    const cfg = LANGS[lang];
    const map = EXACT_MAP[lang] || {};
    document.documentElement.lang = lang;

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((inp) => {
      const ph = (inp.getAttribute("placeholder") || "").trim();
      if (
        ph.includes("gözle") ||
        ph.includes("ara") ||
        ph.includes("Поиск") ||
        ph.includes("Search")
      ) {
        inp.setAttribute("placeholder", cfg.search);
      }
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement && node.parentElement.closest("script, style, .tkm-right-bar")) continue;
      const original = node.nodeValue;
      if (!original) continue;
      const trimmed = original.trim();
      if (!trimmed) continue;

      if (map[trimmed]) {
        node.nodeValue = original.replace(trimmed, map[trimmed]);
        continue;
      }

      const numMatch = trimmed.match(/^(\d+)\s+(oýun|oyun|игр|games|programma|program|программ|apps)$/i);
      if (numMatch) {
        const isGames = /oýun|oyun|игр|games/i.test(numMatch[2]);
        const suffix = isGames ? cfg.countGamesSuffix : cfg.countAppsSuffix;
        node.nodeValue = original.replace(trimmed, `${numMatch[1]} ${suffix}`);
        continue;
      }

      const priceMatch = trimmed.match(/^([\d\s,.]+)\s*(TMT|₺|₽|\$)$/i);
      if (priceMatch) {
        const val = parseFloat(priceMatch[1].replace(/\s+/g, "").replace(",", "."));
        if (!Number.isNaN(val)) {
          const out = (val * cfg.rate).toFixed(2);
          let formatted = `${out} TMT`;
          if (cfg.currency === "TRY") formatted = `${out} ₺`;
          else if (cfg.currency === "RUB") formatted = `${out} ₽`;
          else if (cfg.currency === "USD") formatted = `$${out}`;
          node.nodeValue = original.replace(trimmed, formatted);
        }
      }
    }

    document.querySelectorAll("nav a, .bottom-nav a").forEach((a) => {
      const txt = (a.textContent || "").trim().toLowerCase();
      if (txt === "hatlar" || txt === "mesajlar" || txt === "сообщения" || txt === "messages") {
        a.setAttribute("href", "mesajlar.html");
      }
    });
  }

  function tick() {
    ensureStyle();
    applyTheme();
    syncTopBar();
    translateAllTexts();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tick);
  } else {
    tick();
  }

  setInterval(tick, 400);
})();
