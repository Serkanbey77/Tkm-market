(function () {
  const SUPABASE_URL = "https://piajbopfeqlyupkrsnik.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_gQFoj3SUxW-TUMjYmTGrIg_5_6hwBAH";

  const pageStart = Date.now();
  const pagePath = window.location.pathname || "/";
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop";

  let sessionId = sessionStorage.getItem("tkm_sid");
  if (!sessionId) {
    sessionId = "sid_" + Math.random().toString(36).substring(2, 12) + "_" + Date.now();
    sessionStorage.setItem("tkm_sid", sessionId);
  }

  function sendEvent(eventType, durationSec = 0, meta = {}) {
    const payload = {
      session_id: sessionId,
      event_type: eventType,
      page_path: pagePath,
      referrer: document.referrer || "direct",
      duration_sec: durationSec,
      device_type: isMobile,
      meta: meta
    };

    fetch(`${SUPABASE_URL}/rest/v1/site_events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  }

  sendEvent("page_view", 0);

  let leftSent = false;
  function handleLeave() {
    if (leftSent) return;
    leftSent = true;
    const seconds = Math.round((Date.now() - pageStart) / 1000);
    sendEvent("page_leave", seconds);
  }

  window.addEventListener("pagehide", handleLeave);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") handleLeave();
  });

  window.trackTkmAction = function (actionName, extraMeta = {}) {
    sendEvent(actionName, Math.round((Date.now() - pageStart) / 1000), extraMeta);
  };
})();
