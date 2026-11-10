/* Regena Systems Africa: shared behaviour (theme, nav, dialog, reveal, counters, icons). */
(function () {
  var doc = document;
  var root = doc.documentElement;
  var cfg = window.REGENA_CONFIG || {};

  /* ---------- icons ---------- */
  var ICONS = {
    water: '<path d="M12 2.7S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.7 12 2.7Z"/>',
    sanitation: '<path d="M6 12V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2"/><path d="M4 12h16a1 1 0 0 1 1 1v1a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1a1 1 0 0 1 1-1Z"/><path d="M7 20l-1 2M17 20l1 2"/>',
    energy: '<path d="M4 13h6l-1 8 11-13h-7l1-6-11 11Z"/>',
    recovery: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    shelter: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
    food: '<path d="M12 22V12"/><path d="M12 12c0-4 2-7 6-8 0 4-2 7-6 8Z"/><path d="M12 14c0-3-2-5-6-6 0 3 2 5 6 6Z"/>',
    fabrication: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z"/>',
    training: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
    gov: '<path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/>',
    reg: '<path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    fin: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/>',
    clipboard: '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/>',
    bars: '<path d="M12 20v-6M6 20V10M18 20V4"/>',
    pulse: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M20 17v4H6.5A2.5 2.5 0 0 1 4 19.5"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    gift: '<path d="M20 12v9H4v-9"/><path d="M2 7h20v5H2z"/><path d="M12 21V7"/><path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z"/><path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    money: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z"/>',
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
    package: '<path d="m7.5 4.3 9 5.2"/><path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>'
  };
  function hydrateIcons(scope) {
    (scope || doc).querySelectorAll("[data-icon]").forEach(function (el) {
      var p = ICONS[el.getAttribute("data-icon")];
      if (!p || el.firstChild) return;
      el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;display:block" aria-hidden="true">' + p + "</svg>";
    });
  }
  hydrateIcons();

  /* ---------- theme (light is the default) ---------- */
  var toggle = doc.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("regena-theme", dark ? "dark" : "light"); } catch (e) {}
      var m = doc.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute("content", dark ? "#0C1611" : "#FAFCFA");
    });
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = doc.getElementById("menu-btn");
  var menu = doc.getElementById("mobile-menu");
  if (menuBtn && menu) {
    var mo = doc.getElementById("menu-open"), mc = doc.getElementById("menu-close");
    var setMenu = function (open) {
      menu.classList.toggle("hidden", !open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (mo) mo.classList.toggle("hidden", open);
      if (mc) mc.classList.toggle("hidden", !open);
    };
    menuBtn.addEventListener("click", function () { setMenu(menu.classList.contains("hidden")); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }

  /* ---------- nav glass on scroll ---------- */
  var navInner = doc.getElementById("nav-inner");
  function onScroll() {
    if (!navInner) return;
    var on = window.scrollY > 24;
    navInner.classList.toggle("glass", on);
    navInner.classList.toggle("shadow-lg", on);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- active nav link ---------- */
  function norm(s) { s = (s || "").split("#")[0].split("?")[0]; s = s.replace(/\.html$/, ""); return s === "" ? "index" : s; }
  var here = norm(location.pathname.split("/").pop());
  doc.querySelectorAll("[data-nav]").forEach(function (a) {
    if (norm(a.getAttribute("href")) === here) { a.setAttribute("data-active", "true"); a.setAttribute("aria-current", "page"); }
  });

  /* ---------- work-with-us dialog ---------- */
  var dlg = doc.getElementById("partner-dialog");
  // Buttons can carry data-intent="Visit Nakifuuma" to preselect "What would you like?".
  function applyIntent(scope, intent) {
    if (!intent || !scope) return;
    var sel = scope.querySelector('select[name="request"]');
    if (!sel) return;
    for (var i = 0; i < sel.options.length; i++) { if (sel.options[i].value === intent) { sel.selectedIndex = i; break; } }
  }
  doc.addEventListener("click", function (e) {
    var opener = e.target.closest ? e.target.closest("[data-open-partner]") : null;
    if (opener && dlg && typeof dlg.showModal === "function") {
      e.preventDefault();
      if (menu) menu.classList.add("hidden");
      applyIntent(dlg, opener.getAttribute("data-intent"));
      if (!dlg.open) dlg.showModal();
      var first = dlg.querySelector("input:not([type=hidden]):not([tabindex='-1']), select, textarea");
      if (first) first.focus();
      return;
    }
    if (opener && !dlg) {
      // On the partner page the form is already inline, so just bring it into view.
      var apply = doc.getElementById("apply");
      if (apply) { e.preventDefault(); if (menu) menu.classList.add("hidden"); applyIntent(apply, opener.getAttribute("data-intent")); apply.scrollIntoView({ behavior: "smooth" }); }
      return;
    }
    if (dlg && (e.target === dlg || (e.target.closest && e.target.closest("[data-close-dialog]")))) dlg.close();
  });

  /* ---------- fade up on scroll (every section) ---------- */
  // Blocks that already carry .reveal keep their own markup. Anything else directly inside a
  // section's container is tagged here, so no section appears without the effect.
  var sections = doc.querySelectorAll("main > section");
  sections.forEach(function (sec, si) {
    if (sec.id === "home") return; // the hero has its own entrance animation
    var wrap = sec.querySelector(":scope > .wrap");
    var blocks = wrap ? wrap.children : sec.children;
    Array.prototype.forEach.call(blocks, function (el, bi) {
      if (si === 0) { // page header of an inner page: animate on load, no scrolling needed
        el.classList.add("rise");
        el.style.animationDelay = bi * 0.06 + "s";
      } else if (!el.classList.contains("reveal") && !el.querySelector(".reveal")) {
        el.classList.add("reveal");
      }
    });
  });
  // Stagger siblings a little so grids cascade instead of landing in one block.
  var staggered = new Map();
  doc.querySelectorAll(".reveal").forEach(function (el) {
    if (el.style.transitionDelay) return;
    var n = staggered.get(el.parentElement) || 0;
    staggered.set(el.parentElement, n + 1);
    el.style.transitionDelay = (n % 4) * 0.06 + "s";
  });
  var reveals = doc.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- count up ---------- */
  var counters = doc.querySelectorAll("[data-count]");
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count")), t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / 1100, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { el.textContent = "0"; cio.observe(el); });
  }

  /* ---------- misc ---------- */
  doc.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  doc.querySelectorAll("select").forEach(function (sel) {
    sel.addEventListener("change", function () {
      var go = sel.options[sel.selectedIndex].getAttribute("data-goto");
      if (go) window.location.href = go;
    });
  });
  window.addEventListener("pageshow", function () { // back button: do not leave "Donate" selected
    doc.querySelectorAll("select").forEach(function (sel) { if (sel.selectedOptions[0] && sel.selectedOptions[0].getAttribute("data-goto")) sel.selectedIndex = 0; });
  });
  if (cfg.virtualTourUrl) { // once a tour link is set in config.js, the Virtual Tour button opens it
    doc.querySelectorAll("[data-virtual-tour]").forEach(function (a) { a.href = cfg.virtualTourUrl; a.target = "_blank"; a.rel = "noopener"; });
  }
  doc.querySelectorAll("img[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function () { img.style.display = "none"; img.parentElement.classList.add("img-fallback"); });
  });
})();
