/*
  Site settings. This is the only file you need to edit to connect the forms.

  EmailJS setup (https://www.emailjs.com):
    1. Add an Email Service and copy its Service ID.
    2. Create three templates (one each for "partner", "donate" and "contact") and copy their Template IDs.
    3. Copy your Public Key from Account > API keys.
    4. Paste the three values below. Until all are filled in, the forms fall back to
       opening the visitor's email app (mailto), so nothing is lost while you set up.

  Template variables sent by both forms (use them as {{name}} in the EmailJS template):
    from_name, from_email, reply_to, organisation, message, page, sent_at, form_kind
  Extra variables, partner form only:  interest
  Extra variables, donate form only:   amount, frequency, purpose
  Extra variables, contact form only:  topic
*/
window.REGENA_CONFIG = {
  toEmail: "peter.nzabanita@gmail.com",
  // Paste a video or 360 tour link (YouTube, Vimeo, Matterport...) to make the home page
  // "Virtual Tour" button open it. While empty, the button leads to the site visit section.
  virtualTourUrl: "",
  cooldownSeconds: 30, // minimum gap between two sends from the same browser
  emailjs: {
    publicKey: "",
    serviceId: "",
    templates: {
      partner: "",
      donate: "",
      contact: ""
    }
  }
};
