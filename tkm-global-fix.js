(function () {
  const SB_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
  const SB_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

  if (!window.tkmSb && window.supabase) {
    window.tkmSb = window.supabase.createClient(SB_URL, SB_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }

  const DICT = {
    tk: {
      currency: "TMT",
      rate: 1,
      search: "Haryt, hasap ýa-da satyjy gözle...",
      secSearch: "Şu bölümde haryt gözle...",
      heroTitle: "4K Oýun, Hasap & Sanly Bazary",
      heroDesc: "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.",
      sellBtn: "⚡ Hasap / Haryt Sat",
      askBtn: "💬 Habarlaşmak / Sorag",
      popSecs: "Meşhur Bölümler",
      allLink: "Ählisi →",
      allTile: "Ählisi",
      openBtn: "Aç",
      buyBtn: "Satyn Al",
      gamesTitle: "Oýunlar",
      appsTitle: "Programmalar & Sanly Hyzmatlar",
      navHome: "Baş sahypa",
      navCats: "Bölümler",
      navExness: "Exness",
      navMsgs: "Mesajlar",
      navProfile: "Profil"
    },
    tr: {
      currency: "TRY",
      rate: 9.85,
      search: "Ürün, hesap veya satıcı ara...",
      secSearch: "Bu bölümde ürün ara...",
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
      appsTitle: "Programmalar ve Dijital Hizmetler",
      navHome: "Ana Sayfa",
      navCats: "Kategoriler",
      navExness: "Exness",
      navMsgs: "Mesajlar",
      navProfile: "Profil"
    },
    ru: {
      currency: "RUB",
      rate: 26.5,
      search: "Поиск товара, аккаунта или продавца...",
      secSearch: "Поиск в этом разделе...",
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
      navProfile: "Профиль"
    },
    en: {
      currency: "USD",
      rate: 0.285,
      search: "Search item, account or seller...",
      secSearch: "Search in this section...",
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
      navHome: "Home",
      navCats: "Categories",
      navExness: "Exness",
      navMsgs: "Messages",
      navProfile: "Profile"
    }
  };

  function getLang() {
    const l = localStorage.getItem("tkm_locale");
    return DICT[l] ? l : "tk";
  }

  function getTheme() {
    return localStorage.getItem("tkm_theme") === "light" ? "light" : "dark";
  }

  function injectStyles() {
    if (document.getElementById("tkmGlobalFixStyle")) return;
    const style = document.createElement("style");
    style.id = "tkmGlobalFixStyle";
    style.textContent = `
      .tkm-header-right {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        flex-shrink: 0;
      }
      .tkm-theme-toggle {
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
      .tkm-profile-circle {
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
      .tkm-profile-circle img {
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
    document.head.appendChild(style);
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

  function cleanHeaderAndMountAvatar() {
    const header = document.querySelector("header, .topbar, .app-header, #playerok-shell header");
    if (!header) return;

    header.querySelectorAll("a, button, span, div").forEach((el) => {
      if (el.closest(".tkm-header-right")) return;
      const txt = (el.textContent || "").trim().toLowerCase();
      if (el.children.length === 0 && (txt === "giriş et" || txt === "onlayn" || txt === "online" || txt === "supabase" || txt === "ýerli")) {
        el.style.display = "none";
      }
    });

    if (!header.querySelector(".tkm-header-right")) {
      const wrap = document.createElement("div");
      wrap.className = "tkm-header-right";
      wrap.innerHTML = `
        <button type="button" class="tkm-theme-toggle" id="tkmThemeBtn" title="Tema">🌓</button>
        <a href="profil.html" class="tkm-profile-circle" id="tkmHeaderAvatar" title="Profil">P</a>
      `;
      header.appendChild(wrap);

      document.getElementById("tkmThemeBtn").addEventListener("click", () => {
        const next = getTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("tkm_theme", next);
        applyTheme();
      });
    }

    hydrateAvatarFromSession();
  }

  async function hydrateAvatarFromSession() {
    const el = document.getElementById("tkmHeaderAvatar");
    if (!el || !window.tkmSb) return;
    try {
      const { data: { session } } = await window.tkmSb.auth.getSession();
      if (!session?.user) return;
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

  function translatePage() {
    const lang = getLang();
    const d = DICT[lang];
    document.documentElement.lang = lang;

    // Arama kutuları
    const mainSearch = document.getElementById("global-search");
    if (mainSearch) {
      const isSectionSearch = /uygulama\.html|kategoriler\.html/i.test(location.pathname);
      mainSearch.setAttribute("placeholder", isSectionSearch ? d.secSearch : d.search);
    }

    // Hero ve popüler bölüm başlıkları
    const h1 = document.querySelector(".gamer-hero h1");
    const hp = document.querySelector(".gamer-hero p");
    if (h1) h1.textContent = d.heroTitle;
    if (hp) hp.textContent = d.heroDesc;

    document.querySelectorAll("a, button, span, h2, div").forEach((el) => {
      if (el.children.length > 0) return;
      const t = (el.textContent || "").trim();

      if (t === "⚡ Hasap / Haryt Sat" || t === "⚡ Hesap / Ürün Sat" || t === "⚡ Продать Аккаунт / Товар" || t === "⚡ Sell Account / Item") {
        el.textContent = d.sellBtn;
      } else if (t === "💬 Hasap Sorag Iber" || t === "💬 Habarlaşmak / Sorag" || t === "💬 Mesaj Gönder" || t === "💬 Написать Сообщение" || t === "💬 Send Message") {
        el.textContent = d.askBtn;
      } else if (t === "Meşhur Bölümler" || t === "Popüler Bölümler" || t === "Популярные Разделы" || t === "Popular Sections") {
        el.textContent = d.popSecs;
      } else if (t === "Ählisi →" || t === "Tümü →" || t === "Все →" || t === "All →") {
        el.textContent = d.allLink;
      } else if (t === "Ählisi" || t === "Tümü" || t === "Все" || t === "All") {
        el.textContent = d.allTile;
      } else if (t === "Aç" || t === "Открыть" || t === "Open") {
        el.textContent = d.openBtn;
      } else if (t === "Satyn Al" || t === "Satın Al" || t === "Купить" || t === "Buy Now") {
        el.textContent = d.buyBtn;
      } else if (t === "Oýunlar" || t === "Oyunlar" || t === "Игры" || t === "Games") {
        el.textContent = d.gamesTitle;
      } else if (t === "Programmalar & Sanly Hyzmatlar" || t === "Programmalar ve Dijital Hizmetler" || t === "Программы и Цифровые Услуги" || t === "Software & Digital Services") {
        el.textContent = d.appsTitle;
      } else if (t === "Baş sahypa" || t === "Ana Sayfa" || t === "Главная" || t === "Home") {
        el.textContent = d.navHome;
      } else if (t === "Kategorya" || t === "Bölümler" || t === "Kategoriler" || t === "Категории" || t === "Categories") {
        el.textContent = d.navCats;
      } else if (t === "Hatlar" || t === "Mesajlar" || t === "Сообщения" || t === "Messages") {
        el.textContent = d.navMsgs;
        const link = el.closest("a");
        if (link) link.setAttribute("href", "mesajlar.html");
      } else if (t === "Giriş" || t === "Profil" || t === "Профиль" || t === "Profile") {
        el.textContent = d.navProfile;
      }

      // Para birimi dönüşümü (TMT / ₺ / ₽ / $)
      const m = t.match(/^([\d\s,.]+)\s*(TMT|₺|₽|\$)$/i);
      if (m) {
        const rawNum = parseFloat(m[1].replace(/\s+/g, "").replace(",", "."));
        if (!Number.isNaN(rawNum)) {
          const val = (rawNum * d.rate).toFixed(2);
          if (d.currency === "TMT") el.textContent = `${val} TMT`;
          else if (d.currency === "TRY") el.textContent = `${val} ₺`;
          else if (d.currency === "RUB") el.textContent = `${val} ₽`;
          else if (d.currency === "USD") el.textContent = `$${val}`;
        }
      }
    });
  }

  function runAll() {
    injectStyles();
    applyTheme();
    cleanHeaderAndMountAvatar();
    translatePage();
  }

  document.addEventListener("DOMContentLoaded", () => {
    runAll();
    setTimeout(runAll, 250);
    setTimeout(runAll, 800);

    const obs = new MutationObserver(() => {
      cleanHeaderAndMountAvatar();
      translatePage();
    });
    obs.observe(document.body, { childList: true, subtree: true });
  });
})();
