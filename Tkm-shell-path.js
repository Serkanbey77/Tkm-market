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
      rate: 9.85,
      currency: "TRY",
      searchMain: "Oyun veya program ara...",
      searchSub: "Bu bölümde ara...",
      gamesCnt: "oyun",
      appsCnt: "program",
      okuw: "Eğitim",
      heroTitle: "4K Oyun, Hesap & Dijital Pazarı",
      heroDesc: "Oyun hesapları, programlar, Exness MT5 ve dijital hizmetler. Satın alındıktan sonra hesap açılır, çift onaydan sonra ödeme geçer.",
      sell: "⚡ Hesap / Ürün Sat",
      ask: "💬 Mesaj Gönder",
      pop: "Popüler Bölümler",
      allArrow: "Tümü →",
      all: "Tümü",
      open: "Aç",
      buy: "Satın Al",
      games: "Oyunlar",
      apps: "Programlar ve Dijital Hizmetler",
      navHome: "Keşfet",
      navCats: "Kategoriler",
      navExness: "Exness",
      navMsgs: "Mesajlar",
      navProf: "Profil"
    },
    tk: {
      rate: 1,
      currency: "TMT",
      searchMain: "Oýun ýa-da programma gözle...",
      searchSub: "Şu bölümde haryt gözle...",
      gamesCnt: "oýun",
      appsCnt: "programma",
      okuw: "Okuw",
      heroTitle: "4K Oýun, Hasap & Sanly Bazary",
      heroDesc: "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.",
      sell: "⚡ Hasap / Haryt Sat",
      ask: "💬 Habar Iber",
      pop: "Meşhur Bölümler",
      allArrow: "Ählisi →",
      all: "Ählisi",
      open: "Aç",
      buy: "Satyn Al",
      games: "Oýunlar",
      apps: "Programmalar & Sanly Hyzmatlar",
      navHome: "Gözleg",
      navCats: "Kategorya",
      navExness: "Exness",
      navMsgs: "Hatlar",
      navProf: "Profil"
    },
    ru: {
      rate: 26.5,
      currency: "RUB",
      searchMain: "Поиск игры или программы...",
      searchSub: "Поиск в этом разделе...",
      gamesCnt: "игр",
      appsCnt: "программ",
      okuw: "Обучение",
      heroTitle: "4K Игры, Аккаунты и Цифровой Маркет",
      heroDesc: "Игровые аккаунты, программы, Exness MT5 и цифровые услуги. Доступ открывается после покупки, выплата после двойного подтверждения.",
      sell: "⚡ Продать Аккаунт / Товар",
      ask: "💬 Написать Сообщение",
      pop: "Популярные Разделы",
      allArrow: "Все →",
      all: "Все",
      open: "Открыть",
      buy: "Купить",
      games: "Игры",
      apps: "Программы и Цифровые Услуги",
      navHome: "Главная",
      navCats: "Категории",
      navExness: "Exness",
      navMsgs: "Сообщения",
      navProf: "Профиль"
    },
    en: {
      rate: 0.285,
      currency: "USD",
      searchMain: "Search game or program...",
      searchSub: "Search in this section...",
      gamesCnt: "games",
      appsCnt: "apps",
      okuw: "Course",
      heroTitle: "4K Games, Accounts & Digital Market",
      heroDesc: "Game accounts, software, Exness MT5 and digital services. Credentials unlock after purchase, funds release after dual confirmation.",
      sell: "⚡ Sell Account / Item",
      ask: "💬 Send Message",
      pop: "Popular Sections",
      allArrow: "All →",
      all: "All",
      open: "Open",
      buy: "Buy Now",
      games: "Games",
      apps: "Software & Digital Services",
      navHome: "Explore",
      navCats: "Categories",
      navExness: "Exness",
      navMsgs: "Messages",
      navProf: "Profile"
    }
  };

  function getLang() {
    const l = localStorage.getItem("tkm_locale");
    return LANGS[l] ? l : "tr";
  }

  function getTheme() {
    return localStorage.getItem("tkm_theme") === "light" ? "light" : "dark";
  }

  function addPatchStyles() {
    if (document.getElementById("tkmPatchStyle")) return;
    const st = document.createElement("style");
    st.id = "tkmPatchStyle";
    st.textContent = `
      .tkm-patch-right {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        flex-shrink: 0;
      }
      .tkm-patch-theme {
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
      .tkm-patch-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #60a5fa;
        background: linear-gradient(135deg, #3b6ef6, #5b4df5);
        color: #ffffff;
        font-weight: 900;
        font-size: 14px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .tkm-patch-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `;
    document.head.appendChild(st);
  }

  function cleanDuplicatesAndMountTop() {
    // Arama kutusunun altına binmiş fazla kopya avatar/tema gruplarını temizle
    document.querySelectorAll("body > div, main > div, #playerok-shell > div").forEach((el) => {
      if (el.closest("header, .topbar, .tkm-patch-right")) return;
      const imgs = el.querySelectorAll("img");
      if (imgs.length >= 2 && el.children.length <= 4 && el.offsetHeight < 120 && !el.closest(".item-card, .cards-grid, .home-quick-5")) {
        const hasAvatarImg = Array.from(imgs).some(im => (im.src || "").includes("avatar") || (im.alt || "").toLowerCase().includes("profil"));
        if (hasAvatarImg) el.remove();
      }
    });

    const header = document.querySelector("header, .topbar, .app-header, #playerok-shell header");
    if (!header) return;

    header.querySelectorAll("a, button, span, div").forEach((el) => {
      if (el.closest(".tkm-patch-right")) return;
      const txt = (el.textContent || "").trim().toLowerCase();
      if (
        el.children.length === 0 &&
        (txt === "giriş et" || txt === "onlayn" || txt === "online" || txt === "supabase" || txt === "ýerli")
      ) {
        el.style.display = "none";
      }
    });

    if (!header.querySelector(".tkm-patch-right")) {
      const box = document.createElement("div");
      box.className = "tkm-patch-right";
      box.innerHTML = `
        <button type="button" class="tkm-patch-theme" id="tkmPatchThemeBtn" title="Tema">🌓</button>
        <a href="profil.html" class="tkm-patch-avatar" id="tkmPatchAvatar" title="Profil">P</a>
      `;
      header.appendChild(box);

      document.getElementById("tkmPatchThemeBtn").addEventListener("click", () => {
        const next = getTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("tkm_theme", next);
        document.documentElement.setAttribute("data-theme", next);
      });
    }

    loadAvatarOnce();
  }

  let avatarDone = false;
  async function loadAvatarOnce() {
    if (avatarDone || !window.tkmSb) return;
    const link = document.getElementById("tkmPatchAvatar");
    if (!link) return;
    try {
      const { data: { session } } = await window.tkmSb.auth.getSession();
      if (!session?.user) return;
      avatarDone = true;
      const { data: prof } = await window.tkmSb
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", session.user.id)
        .maybeSingle();
      const name = (prof?.full_name || session.user.email?.split("@")[0] || "P").trim();
      if (prof?.avatar_url) {
        link.innerHTML = `<img src="${prof.avatar_url}" alt="Profil" />`;
      } else {
        link.textContent = name.charAt(0).toUpperCase() || "P";
      }
    } catch (_) {}
  }

  function applyTranslations() {
    const lang = getLang();
    const c = LANGS[lang];
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-theme", getTheme());

    const map = {
      "4K Oýun, Hasap & Sanly Bazary": c.heroTitle,
      "4K Oyun, Hesap & Dijital Pazarı": c.heroTitle,
      "4K Игры, Аккаунты и Цифровой Маркет": c.heroTitle,
      "4K Games, Accounts & Digital Market": c.heroTitle,
      "⚡ Hasap / Haryt Sat": c.sell,
      "⚡ Hesap / Ürün Sat": c.sell,
      "⚡ Продать Аккаунт / Товар": c.sell,
      "⚡ Sell Account / Item": c.sell,
      "💬 Hasap Sorag Iber": c.ask,
      "💬 Habar Iber": c.ask,
      "💬 Mesaj Gönder": c.ask,
      "💬 Написать Сообщение": c.ask,
      "💬 Send Message": c.ask,
      "Meşhur Bölümler": c.pop,
      "Popüler Bölümler": c.pop,
      "Популярные Разделы": c.pop,
      "Popular Sections": c.pop,
      "Ählisi →": c.allArrow,
      "Tümü →": c.allArrow,
      "Все →": c.allArrow,
      "All →": c.allArrow,
      "Ählisi": c.all,
      "Tümü": c.all,
      "Все": c.all,
      "All": c.all,
      "Aç": c.open,
      "Открыть": c.open,
      "Open": c.open,
      "Satyn Al": c.buy,
      "Satın Al": c.buy,
      "Купить": c.buy,
      "Buy Now": c.buy,
      "Oýunlar": c.games,
      "Oyunlar": c.games,
      "Игры": c.games,
      "Games": c.games,
      "Programmalar & Sanly Hyzmatlar": c.apps,
      "Programlar ve Dijital Hizmetler": c.apps,
      "Программы и Цифровые Услуги": c.apps,
      "Software & Digital Services": c.apps,
      "Gözleg": c.navHome,
      "Keşfet": c.navHome,
      "Главная": c.navHome,
      "Explore": c.navHome,
      "Kategorya": c.navCats,
      "Kategoriler": c.navCats,
      "Категории": c.navCats,
      "Categories": c.navCats,
      "Hatlar": c.navMsgs,
      "Mesajlar": c.navMsgs,
      "Сообщения": c.navMsgs,
      "Messages": c.navMsgs,
      "Giriş": c.navProf,
      "Profil": c.navProf,
      "Профиль": c.navProf,
      "Profile": c.navProf,
      "Okuw": c.okuw,
      "Eğitim": c.okuw,
      "Обучение": c.okuw,
      "Course": c.okuw
    };

    const isSub = /uygulama\.html|kategoriler\.html/i.test(location.pathname);
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((inp) => {
      const ph = (inp.getAttribute("placeholder") || "").trim();
      if (ph.includes("gözle") || ph.includes("ara") || ph.includes("Поиск") || ph.includes("Search")) {
        inp.setAttribute("placeholder", isSub ? c.searchSub : c.searchMain);
      }
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || node.parentElement.closest("script, style")) continue;
      const orig = node.nodeValue;
      if (!orig) continue;
      const t = orig.trim();
      if (!t) continue;

      if (map[t]) {
        node.nodeValue = orig.replace(t, map[t]);
        continue;
      }

      const cnt = t.match(/^(\d+)\s+(oýun|oyun|игр|games|programma|program|программ|apps)$/i);
      if (cnt) {
        const g = /oýun|oyun|игр|games/i.test(cnt[2]);
        node.nodeValue = orig.replace(t, `${cnt[1]} ${g ? c.gamesCnt : c.appsCnt}`);
        continue;
      }

      const m = t.match(/^([\d\s,.]+)\s*(TMT|₺|₽|\$)$/i);
      if (m) {
        const n = parseFloat(m[1].replace(/\s+/g, "").replace(",", "."));
        if (!Number.isNaN(n)) {
          const val = (n * c.rate).toFixed(2);
          let out = `${val} TMT`;
          if (c.currency === "TRY") out = `${val} ₺`;
          else if (c.currency === "RUB") out = `${val} ₽`;
          else if (c.currency === "USD") out = `$${val}`;
          node.nodeValue = orig.replace(t, out);
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

  function run() {
    addPatchStyles();
    cleanDuplicatesAndMountTop();
    applyTranslations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  setInterval(run, 400);
})();
