(function () {
  const SB_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
  const SB_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

  if (!window.tkmSb && window.supabase) {
    window.tkmSb = window.supabase.createClient(SB_URL, SB_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }

  const MAP = {
    tr: {
      rate: 9.85,
      cur: "TRY",
      gamesCnt: "oyun",
      appsCnt: "program",
      texts: {
        "Oýun ýa-da programma gözle...": "Oyun veya program ara...",
        "Şu bölümde haryt gözle...": "Bu bölümde ara...",
        "4K Oýun, Hasap & Sanly Bazary": "4K Oyun, Hesap & Dijital Pazarı",
        "Oýun hasaplary, programmalar, Exness MT5 we sanly hyzmatlar. Satyn alnandan soň hasap açylýar, iki tassykdan soň pul geçýär.": "Oyun hesapları, programlar, Exness MT5 ve dijital hizmetler. Satın alındıktan sonra hesap açılır, çift onaydan sonra ödeme geçer.",
        "⚡ Hasap / Haryt Sat": "⚡ Hesap / Ürün Sat",
        "💬 Hasap Sorag Iber": "💬 Mesaj Gönder",
        "💬 Habar Iber": "💬 Mesaj Gönder",
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
        "Aç": "Aç",
        "Okuw": "Eğitim"
      }
    },
    tk: {
      rate: 1,
      cur: "TMT",
      gamesCnt: "oýun",
      appsCnt: "programma",
      texts: {
        "Oyun veya program ara...": "Oýun ýa-da programma gözle...",
        "Bu bölümde ara...": "Şu bölümde haryt gözle...",
        "4K Oyun, Hesap & Dijital Pazarı": "4K Oýun, Hasap & Sanly Bazary",
        "⚡ Hesap / Ürün Sat": "⚡ Hasap / Haryt Sat",
        "💬 Mesaj Gönder": "💬 Habar Iber",
        "Popüler Bölümler": "Meşhur Bölümler",
        "Tümü →": "Ählisi →",
        "Tümü": "Ählisi",
        "Programlar ve Dijital Hizmetler": "Programmalar & Sanly Hyzmatlar",
        "Keşfet": "Gözleg",
        "Kategoriler": "Kategorya",
        "Mesajlar": "Hatlar",
        "Satın Al": "Satyn Al",
        "Eğitim": "Okuw"
      }
    },
    ru: {
      rate: 26.5,
      cur: "RUB",
      gamesCnt: "игр",
      appsCnt: "программ",
      texts: {
        "Oýun ýa-da programma gözle...": "Поиск игры или программы...",
        "Oyun veya program ara...": "Поиск игры или программы...",
        "Şu bölümde haryt gözle...": "Поиск в разделе...",
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
        "Oyunlar": "Игры",
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
        "Aç": "Открыть",
        "Okuw": "Обучение",
        "Eğitim": "Обучение"
      }
    },
    en: {
      rate: 0.285,
      cur: "USD",
      gamesCnt: "games",
      appsCnt: "apps",
      texts: {
        "Oýun ýa-da programma gözle...": "Search game or program...",
        "Oyun veya program ara...": "Search game or program...",
        "Şu bölümde haryt gözle...": "Search in section...",
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
        "Oyunlar": "Games",
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
        "Aç": "Open",
        "Okuw": "Course",
        "Eğitim": "Course"
      }
    }
  };

  function getLang() {
    const l = localStorage.getItem("tkm_locale");
    return MAP[l] ? l : "tr";
  }

  function getTheme() {
    return localStorage.getItem("tkm_theme") === "light" ? "light" : "dark";
  }

  function styleOnce() {
    if (document.getElementById("tkmCleanTopStyle")) return;
    const s = document.createElement("style");
    s.id = "tkmCleanTopStyle";
    s.textContent = `
      .tkm-clean-right {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        flex-shrink: 0;
      }
      .tkm-clean-theme {
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
      .tkm-clean-avatar {
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
      .tkm-clean-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `;
    document.head.appendChild(s);
  }

  function fixTopAndDuplicates() {
    // Arama kutusunun altına binmiş fazla ikon gruplarını kaldır
    document.querySelectorAll("div").forEach((el) => {
      if (el.closest("header, .topbar, .tkm-clean-right, .item-card, .cards-grid")) return;
      const imgs = el.querySelectorAll("img");
      if (imgs.length >= 2 && el.children.length <= 4 && el.offsetHeight < 110) {
        const isProf = Array.from(imgs).some(im => (im.src || "").includes("avatar") || (im.alt || "").toLowerCase().includes("profil"));
        if (isProf) el.remove();
      }
    });

    const header = document.querySelector("header, .topbar, .app-header, #playerok-shell header");
    if (!header) return;

    header.querySelectorAll("a, button, span, div").forEach((el) => {
      if (el.closest(".tkm-clean-right")) return;
      const t = (el.textContent || "").trim().toLowerCase();
      if (el.children.length === 0 && (t === "giriş et" || t === "onlayn" || t === "online" || t === "supabase" || t === "ýerli")) {
        el.style.display = "none";
      }
    });

    if (!header.querySelector(".tkm-clean-right")) {
      const box = document.createElement("div");
      box.className = "tkm-clean-right";
      box.innerHTML = `
        <button type="button" class="tkm-clean-theme" id="tkmCleanThemeBtn" title="Tema">🌓</button>
        <a href="profil.html" class="tkm-clean-avatar" id="tkmCleanAvatar" title="Profil">P</a>
      `;
      header.appendChild(box);

      document.getElementById("tkmCleanThemeBtn").addEventListener("click", () => {
        const next = getTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("tkm_theme", next);
        document.documentElement.setAttribute("data-theme", next);
      });
    }

    hydrateOnce();
  }

  let done = false;
  async function hydrateOnce() {
    if (done || !window.tkmSb) return;
    const link = document.getElementById("tkmCleanAvatar");
    if (!link) return;
    try {
      const { data: { session } } = await window.tkmSb.auth.getSession();
      if (!session?.user) return;
      done = true;
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

  function applyLang() {
    const lang = getLang();
    const cfg = MAP[lang];
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-theme", getTheme());

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((inp) => {
      const ph = (inp.getAttribute("placeholder") || "").trim();
      if (cfg.texts[ph]) inp.setAttribute("placeholder", cfg.texts[ph]);
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || node.parentElement.closest("script, style")) continue;
      const orig = node.nodeValue;
      if (!orig) continue;
      const t = orig.trim();
      if (!t) continue;

      if (cfg.texts[t]) {
        node.nodeValue = orig.replace(t, cfg.texts[t]);
        continue;
      }

      const cnt = t.match(/^(\d+)\s+(oýun|oyun|игр|games|programma|program|программ|apps)$/i);
      if (cnt) {
        const g = /oýun|oyun|игр|games/i.test(cnt[2]);
        node.nodeValue = orig.replace(t, `${cnt[1]} ${g ? cfg.gamesCnt : cfg.appsCnt}`);
      }
    }
  }

  function tick() {
    styleOnce();
    fixTopAndDuplicates();
    applyLang();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tick);
  } else {
    tick();
  }
  setInterval(tick, 450);
})();
