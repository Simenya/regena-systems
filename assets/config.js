/*
  Site settings. This is the only file you need to edit to connect the forms.

  EmailJS setup (https://www.emailjs.com):
    1. Add an Email Service and copy its Service ID.
    2. Create two templates (one for "partner", one for "contact") and copy their Template IDs.
    3. Copy your Public Key from Account > API keys.
    4. Paste the three values below. Until all are filled in, the forms fall back to
       opening the visitor's email app (mailto), so nothing is lost while you set up.

  Template variables sent by both forms (use them as {{name}} in the EmailJS template):
    from_name, from_email, reply_to, organisation, message, page, sent_at, form_kind
  Extra variables, partner form only:  interest, amount
  Extra variables, contact form only:  topic
*/
window.REGENA_CONFIG = {
  toEmail: "peter.nzabanita@regenasystems.com",
  phone: "", // optional, e.g. "+256 700 000 000". Shown on the contact page when set.
  cooldownSeconds: 30, // minimum gap between two sends from the same browser
  emailjs: {
    publicKey: "",
    serviceId: "",
    templates: {
      partner: "",
      contact: ""
    }
  }
};
