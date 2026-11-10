/*
  Site settings. This is the only file you need to edit to connect the forms.

  EmailJS setup (https://www.emailjs.com):
    1. Add an Email Service and copy its Service ID.
    2. Create one template for the "enquiry" form and copy its Template ID. The same form is used on the
       Work with us page, the popup and the Contact page.
    3. Copy your Public Key from Account > API keys.
    4. Paste the three values below. Until all are filled in, the forms fall back to
       opening the visitor's email app (mailto), so nothing is lost while you set up.

  Template variables sent by the form (use them as {{name}} in the EmailJS template):
    from_name, from_email, reply_to, organisation, message, page, sent_at, form_kind,
    who      ("I am a..." choice)
    request  ("What would you like?" choice)
*/
window.REGENA_CONFIG = {
  toEmail: "peter.nzabanita@regenasystems.com",
  // Paste a video or 360 tour link (YouTube, Vimeo, Matterport...) to make the home page
  // "Virtual Tour" button open it (button not used on the current home page).
  virtualTourUrl: "",
  cooldownSeconds: 30, // minimum gap between two sends from the same browser
  emailjs: {
    publicKey: "",
    serviceId: "",
    templates: {
      enquiry: ""
    }
  }
};
