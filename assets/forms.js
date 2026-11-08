/* Regena Systems Africa: form handling (EmailJS, with a mailto fallback).
   Forms opt in with <form data-form="partner"> or <form data-form="contact">.
   Settings live in assets/config.js. */
(function () {
  var cfg = window.REGENA_CONFIG || {};
  var ej = cfg.emailjs || {};
  var SDK = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
  var COOLDOWN_KEY = "regena-last-send";
  var sdk = null;

  function configured(kind) {
    return !!(ej.publicKey && ej.serviceId && ej.templates && ej.templates[kind]);
  }

  function loadSdk() {
    if (window.emailjs) return Promise.resolve();
    if (sdk) return sdk;
    sdk = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = SDK;
      s.onload = resolve;
      s.onerror = function () { sdk = null; reject(new Error("Could not load the EmailJS library")); };
      document.head.appendChild(s);
    });
    return sdk;
  }

  function status(form, state, text) {
    var el = form.querySelector("[data-status]");
    if (!el) return;
    el.textContent = text || "";
    el.setAttribute("data-state", state || "");
    el.hidden = !text;
  }

  function collect(form, kind) {
    var out = {};
    new FormData(form).forEach(function (v, k) { if (k !== "website") out[k] = String(v).trim(); });
    out.reply_to = out.from_email || "";
    out.form_kind = kind;
    out.page = location.href;
    out.sent_at = new Date().toISOString();
    return out;
  }

  function mailto(params, kind) {
    var skip = { page: 1, form_kind: 1, sent_at: 1, reply_to: 1, consent: 1 };
    var lines = Object.keys(params).filter(function (k) { return !skip[k] && params[k]; })
      .map(function (k) { return k.replace(/_/g, " ") + ": " + params[k]; });
    var subject = (kind === "partner" ? "Partnership or donation enquiry" : "Website enquiry") + " from " + (params.from_name || "a visitor");
    return "mailto:" + (cfg.toEmail || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
  }

  function cooldownLeft() {
    try {
      var last = parseInt(localStorage.getItem(COOLDOWN_KEY) || "0", 10);
      var wait = (cfg.cooldownSeconds || 30) * 1000;
      return Math.max(0, Math.ceil((last + wait - Date.now()) / 1000));
    } catch (e) { return 0; }
  }

  document.addEventListener("submit", function (e) {
    var form = e.target.closest ? e.target.closest("form[data-form]") : null;
    if (!form) return;
    e.preventDefault();

    var kind = form.getAttribute("data-form");
    var btn = form.querySelector('button[type="submit"]');

    if (!form.checkValidity()) { form.reportValidity(); return; }

    // Honeypot: real people never fill this hidden field.
    if (form.elements.website && form.elements.website.value) {
      status(form, "ok", "Thank you. We will be in touch.");
      form.reset();
      return;
    }

    var left = cooldownLeft();
    if (left > 0) { status(form, "error", "Please wait " + left + " seconds before sending another message."); return; }

    var params = collect(form, kind);

    if (!configured(kind)) {
      console.warn("[Regena] EmailJS is not configured for the '" + kind + "' form. Falling back to mailto. Edit assets/config.js.");
      status(form, "info", "Opening your email app with your message ready to send.");
      window.location.href = mailto(params, kind);
      return;
    }

    var original = btn ? btn.innerHTML : "";
    if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }
    status(form, "info", "Sending your message...");

    loadSdk()
      .then(function () { return window.emailjs.send(ej.serviceId, ej.templates[kind], params, { publicKey: ej.publicKey }); })
      .then(function () {
        try { localStorage.setItem(COOLDOWN_KEY, String(Date.now())); } catch (err) {}
        var name = params.from_name ? ", " + params.from_name.split(" ")[0] : "";
        status(form, "ok", "Thank you" + name + ". Your message has been sent and we will reply soon.");
        form.reset();
      })
      .catch(function (err) {
        console.error("[Regena] EmailJS send failed", err);
        status(form, "error", "Sorry, your message could not be sent. Please try again, or email " + (cfg.toEmail || "us") + " directly.");
      })
      .then(function () {
        if (btn) { btn.disabled = false; btn.innerHTML = original; }
      });
  });
})();
