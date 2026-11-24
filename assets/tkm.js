const TKM_CONFIG = {
  url: "https://piajbopfeqlyupkrsnik.supabase.co",
  key: "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH",
  bucket: "product-images"
};

function esc(str) {
  return String(str || "")
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
  clearTimeout(window.__tkmToast);
  window.__tkmToast = setTimeout(() => { el.style.display = "none"; }, 3400);
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("tkm_user_session") || "null") || {
      username: "Serkanbey77",
      role: "Satıcı & Alyjy"
    };
  } catch (_) {
    return { username: "Serkanbey77", role: "Satıcı & Alyjy" };
  }
}

function setCurrentUser(username, role) {
  const clean = String(username || "").trim() || "Serkanbey77";
  const session = { username: clean, role: role || "Satıcı & Alyjy" };
  localStorage.setItem("tkm_user_session", JSON.stringify(session));
  syncUserInputs();
  showToast(`Hasap işjeň: ${clean}`);
}

function syncUserInputs() {
  const u = getCurrentUser();
  const chip = document.getElementById("auth-chip-btn");
  if (chip) chip.textContent = `${u.username} • Giriş`;

  const sellerInput = document.getElementById("p-seller");
  if (sellerInput && !sellerInput.dataset.touched) {
    sellerInput.value = u.username;
  }
  const wSellerInput = document.getElementById("w-seller");
  if (wSellerInput && !wSellerInput.dataset.touched) {
    wSellerInput.value = u.username;
  }
}

function openAuthModal() {
  const u = getCurrentUser();
  document.getElementById("auth-username").value = u.username;
  document.getElementById("auth-role").value = u.role || "Satıcı & Alyjy";
  document.getElementById("auth-modal").classList.add("open");
}

function closeAuthModal() {
  document.getElementById("auth-modal").classList.remove("open");
}

function saveAuthForm(e) {
  e.preventDefault();
  const name = document.getElementById("auth-username").value.trim();
  const role = document.getElementById("auth-role").value;
  if (!name) {
    showToast("Ulanyjy adyny giriziň.");
    return;
  }
  setCurrentUser(name, role);
  closeAuthModal();
}

function toggleDrawer(forceOpen) {
  const drawer = document.getElementById("nav-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const next = typeof forceOpen === "boolean" ? forceOpen : !drawer.classList.contains("open");
  drawer.classList.toggle("open", next);
  backdrop.classList.toggle("open", next);
}

function setDbStatus(ok, text) {
  const el = document.getElementById("db-status-pill");
  if (!el) return;
  el.textContent = text;
  el.style.background = ok ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.16)";
  el.style.color = ok ? "#6ee7b7" : "#fcd34d";
  el.style.borderColor = ok ? "rgba(16, 185, 129, 0.35)" : "rgba(245, 158, 11, 0.35)";
}

async function sbGet(table) {
  const res = await fetch(`${TKM_CONFIG.url}/rest/v1/${table}?select=*&order=id.desc`, {
    headers: { apikey: TKM_CONFIG.key, Authorization: `Bearer ${TKM_CONFIG.key}` }
  });
  if (!res.ok) throw new Error(`${table}: ${res.status} ${await res.text()}`);
  return await res.json();
}

async function sbInsert(table, payload) {
  const res = await fetch(`${TKM_CONFIG.url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: TKM_CONFIG.key,
      Authorization: `Bearer ${TKM_CONFIG.key}`,
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
  const res = await fetch(`${TKM_CONFIG.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: {
      apikey: TKM_CONFIG.key,
      Authorization: `Bearer ${TKM_CONFIG.key}`,
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
  const res = await fetch(`${TKM_CONFIG.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: { apikey: TKM_CONFIG.key, Authorization: `Bearer ${TKM_CONFIG.key}` }
  });
  if (!res.ok) throw new Error(`${table} delete: ${res.status} ${await res.text()}`);
}

async function sbUploadFiles(files) {
  const urls = [];
  for (const file of files) {
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
    const path = `products/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const res = await fetch(`${TKM_CONFIG.url}/storage/v1/object/${TKM_CONFIG.bucket}/${path}`, {
      method: "POST",
      headers: {
        apikey: TKM_CONFIG.key,
        Authorization: `Bearer ${TKM_CONFIG.key}`,
        "Content-Type": file.type || "image/jpeg",
        "x-upsert": "true"
      },
      body: file
    });
    if (!res.ok) throw new Error(`Storage: ${res.status} ${await res.text()}`);
    urls.push(`${TKM_CONFIG.url}/storage/v1/object/public/${TKM_CONFIG.bucket}/${path}`);
  }
  return urls;
}

function getImages(item) {
  const arr = [];
  if (Array.isArray(item.image_urls)) {
    for (const u of item.image_urls) {
      if (typeof u === "string" && /^https?:\/\//i.test(u.trim())) arr.push(u.trim());
    }
  }
  if (!arr.length && typeof item.image_url === "string" && /^https?:\/\//i.test(item.image_url.trim())) {
    arr.push(item.image_url.trim());
  }
  return arr;
}

function mountShell(activePage) {
  const shell = document.getElementById("tkm-shell");
  if (!shell) return;

  shell.innerHTML = `
    <div class="topbar">
      <div class="ticker-group">
        <span><strong>XAU/USD:</strong><em>$2,740.00</em></span>
        <span><strong>BTC/USD:</strong><em>$96,450.00</em></span>
        <span><strong>XAG/USD:</strong><em>$31.40</em></span>
      </div>
      <div class="db-pill" id="db-status-pill">Supabase: Barlanýlýr...</div>
    </div>

    <header class="site-header">
      <div class="nav-inner">
        <div class="nav-left">
          <button class="hamburger-btn" type="button" aria-label="Menü" onclick="toggleDrawer()">☰</button>
          <a class="brand" href="index.html">
            <span class="brand-mark">TM</span>
            <span>TKM <b>Market</b></span>
          </a>
          <nav class="desktop-links">
            <a class="nav-link ${activePage === "market" ? "active" : ""}" href="index.html">Bazar &amp; Kripto</a>
            <a class="nav-link ${activePage === "seller" ? "active" : ""}" href="satyjy.html">Satyjy Paneli</a>
            <a class="nav-link ${activePage === "orders" ? "active" : ""}" href="sargytlar.html">Sargytlar &amp; Escrow</a>
          </nav>
        </div>
        <button class="auth-chip" id="auth-chip-btn" type="button" onclick="openAuthModal()">Giriş / Üye Ol</button>
      </div>
    </header>

    <div class="drawer-backdrop" id="drawer-backdrop" onclick="toggleDrawer(false)"></div>
    <aside class="drawer" id="nav-drawer">
      <div class="drawer-head">
        <strong>TKM Menü</strong>
        <button class="btn btn-ghost" type="button" onclick="toggleDrawer(false)">✕</button>
      </div>
      <a class="drawer-item ${activePage === "market" ? "active" : ""}" href="index.html">
        <span>Bazar &amp; Kripto</span><span>→</span>
      </a>
      <a class="drawer-item ${activePage === "seller" ? "active" : ""}" href="satyjy.html">
        <span>Satyjy Paneli</span><span>→</span>
      </a>
      <a class="drawer-item ${activePage === "orders" ? "active" : ""}" href="sargytlar.html">
        <span>Sargytlar &amp; Escrow</span><span>→</span>
      </a>
      <button class="btn btn-primary" type="button" style="margin-top:8px;" onclick="toggleDrawer(false); openAuthModal();">
        Giriş Yap / Üye Ol
      </button>
    </aside>

    <div class="modal-bg" id="auth-modal">
      <div class="modal-box">
        <div class="modal-top">
          <h3>Giriş Yap / Hasap Aç</h3>
          <button class="btn btn-ghost" type="button" onclick="closeAuthModal()">Ýap</button>
        </div>
        <form onsubmit="saveAuthForm(event)">
          <div class="field">
            <label>Ulanyjy ady (Satyjy / Alyjy ady)</label>
            <input id="auth-username" type="text" placeholder="Mysal: Serkanbey77" required />
          </div>
          <div class="field" style="margin-top:12px;">
            <label>Hasap görnüşi</label>
            <select id="auth-role">
              <option value="Satıcı & Alyjy">Satıcı &amp; Alyjy</option>
              <option value="Diňe Alyjy">Diňe Alyjy</option>
              <option value="Diňe Satyjy">Diňe Satyjy</option>
            </select>
          </div>
          <div class="row-actions" style="margin-top:14px;">
            <button class="btn btn-primary" type="submit" style="flex:1;">Hasaba Gir / Ýatda Sakla</button>
          </div>
        </form>
      </div>
    </div>
  `;

  syncUserInputs();
}
