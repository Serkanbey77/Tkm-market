:root {
  --bg: #eef2ff;
  --surface: #ffffff;
  --surface-2: #f1f5f9;
  --border: rgba(15, 23, 42, 0.1);
  --text: #0f172a;
  --muted: #64748b;
  --primary: #4f46e5;
  --primary-2: #7c3aed;
  --accent: #10b981;
  --danger: #ef4444;
}

body.dark {
  --bg: #070b14;
  --surface: #111827;
  --surface-2: #1a2438;
  --border: rgba(148, 163, 184, 0.16);
  --text: #f8fafc;
  --muted: #94a3b8;
}

* { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
body {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  padding-bottom: 86px;
  transition: background 0.2s ease, color 0.2s ease;
}

.top-head {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 12px 16px;
}
.top-inner { max-width: 980px; margin: 0 auto; }
.top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}
.brand-link {
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.02em;
}
.brand-link span { color: var(--text); }
.top-right { display: flex; align-items: center; gap: 8px; }
.db-mini {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.16);
  color: #d97706;
}
.theme-switch {
  width: 48px;
  height: 26px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: #fde68a;
  color: #1e293b;
  font-size: 13px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px;
}
body.dark .theme-switch {
  background: #1e293b;
  color: #f8fafc;
  justify-content: flex-end;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 8px 12px;
}
.search-box input {
  border: none;
  background: transparent;
  padding: 2px 4px;
  font-size: 14px;
  color: var(--text);
  width: 100%;
  outline: none;
}

.page-wrap { max-width: 980px; margin: 0 auto; padding: 14px 16px 24px; }

.promo-banner {
  border-radius: 18px;
  padding: 20px;
  background: linear-gradient(125deg, #312e81 0%, #6d28d9 52%, #db2777 100%);
  color: #fff;
  margin-bottom: 16px;
  box-shadow: 0 12px 28px rgba(79, 70, 229, 0.22);
}
.promo-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 9px;
  border-radius: 999px;
  margin-bottom: 8px;
}
.promo-banner h1 { font-size: 22px; line-height: 1.25; margin-bottom: 6px; }
.promo-banner p { font-size: 13px; opacity: 0.92; margin-bottom: 12px; }

.quick-games {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-bottom: 16px;
}
.game-chip {
  flex: 0 0 auto;
  width: 76px;
  background: transparent;
  border: none;
  color: var(--text);
  cursor: pointer;
  text-align: center;
}
.game-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 6px;
  border-radius: 16px;
  background: var(--surface);
  border: 2px solid var(--border);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 13px;
  color: var(--primary);
}
.game-chip.active .game-icon {
  border-color: var(--primary);
  background: rgba(79, 70, 229, 0.12);
}
.game-chip span {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.game-chip.active span { color: var(--primary); font-weight: 700; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 14px;
}
.item-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}
.item-img {
  width: 100%;
  height: 152px;
  object-fit: cover;
  border-radius: 12px;
  background: var(--surface-2);
  margin-bottom: 8px;
  display: block;
}
.chip-cat {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(79, 70, 229, 0.14);
  color: var(--primary);
}
.chip-escrow {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(16, 185, 129, 0.16);
  color: #059669;
  margin-left: 4px;
}
body.dark .chip-escrow { color: #6ee7b7; }

.item-title { font-size: 15px; font-weight: 700; margin: 6px 0 4px; }
.item-desc { font-size: 12px; color: var(--muted); line-height: 1.4; margin-bottom: 6px; }
.item-price-row { display: flex; align-items: baseline; gap: 8px; margin-top: 6px; }
.item-price { font-size: 17px; font-weight: 800; color: var(--accent); }
.item-old { font-size: 12px; color: var(--muted); text-decoration: line-through; }

.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
}
.muted { font-size: 12px; color: var(--muted); }
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.field label { display: block; font-size: 12px; color: var(--muted); margin-bottom: 5px; }
input, select, textarea {
  width: 100%;
  background: var(--surface-2);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 10px 12px;
  font-size: 14px;
}
input[type="file"] { padding: 7px; }

.escrow-box {
  margin-top: 12px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(79, 70, 229, 0.08);
  border: 1px dashed rgba(79, 70, 229, 0.45);
}

.btn {
  border: none;
  border-radius: 11px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
}
.btn-main { background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: #fff; }
.btn-green { background: var(--accent); color: #052015; }
.btn-soft { background: var(--surface-2); color: var(--text); border: 1px solid var(--border); }
.btn-del { background: rgba(239, 68, 68, 0.14); color: var(--danger); border: 1px solid rgba(239, 68, 68, 0.35); }
.btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }

.list-row {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.badge-status {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.16);
  color: #d97706;
}
.badge-status.ok { background: rgba(16, 185, 129, 0.16); color: #059669; }
body.dark .badge-status.ok { color: #6ee7b7; }

/* Alt Sabit Playerok Menüsü */
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 8px 10px calc(8px + env(safe-area-inset-bottom));
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}
.bnav-item {
  text-decoration: none;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 4px;
  border-radius: 12px;
}
.bnav-item .ico { font-size: 16px; line-height: 1; }
.bnav-item.active {
  color: var(--primary);
  background: rgba(79, 70, 229, 0.12);
  font-weight: 700;
}

.modal-bg {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 15, 0.72);
  backdrop-filter: blur(4px);
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.modal-bg.open { display: flex; }
.modal-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 18px;
}
.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding-bottom: 10px;
  margin-bottom: 12px;
}
.cred-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  margin-top: 10px;
  font-size: 13px;
}
.cred-card div { margin-bottom: 6px; }
.cred-card div:last-child { margin-bottom: 0; }
.preview-list { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
.preview-pic { width: 52px; height: 52px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border); }

.toast {
  position: fixed;
  bottom: 84px;
  right: 16px;
  background: #0f172a;
  color: #fff;
  border: 1px solid var(--accent);
  border-radius: 12px;
  padding: 11px 15px;
  font-size: 13px;
  z-index: 130;
  display: none;
}
