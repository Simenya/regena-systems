# Regena Systems Africa Ltd: website

Static multi-page site (plain HTML, Tailwind Play CDN, a little vanilla JS). No build step is needed to run or deploy it.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page: hero, proof strip, what we build, how we work, Nakifuuma, partnership, call to action |
| `what-we-do.html` | The 8 capabilities, the connected-system idea, the viability test, makers and training |
| `evidence.html` | Baselines, service log, uptime, household evidence, Nakifuuma, sector alignment |
| `about.html` | Who we are, mission and vision, the 4Rs, systems approach, who we work with |
| `partnership.html` | Regena and CGSC, who leads each stage, CGSC services and methodology |
| `partner.html` | Partner or donate page with the form inline |
| `contact.html` | Contact details, site visit note and contact form |
| `404.html` | Not found page |

## Run locally

```bash
python -m http.server 4173
```

then open http://localhost:4173

## Editing shared parts (header, footer, popup, form)

The header, footer, head tags, partner popup and partner form are shared. Edit the file in `partials/`, then run:

```bash
node tools/sync.mjs
```

This rewrites the block between the `<!--@name-->` and `<!--@/name-->` markers on every page. Do not edit those blocks inside a page by hand, the next sync overwrites them.

## Connecting EmailJS

1. In EmailJS, add an Email Service and copy its **Service ID**.
2. Create two templates, one for the partner form and one for the contact form, and copy both **Template IDs**.
3. Copy your **Public Key** (Account, API keys).
4. Paste the values into `assets/config.js`.

Until all three are set, the forms fall back to opening the visitor's email app (`mailto:`), so nothing breaks while you set up.

Variables available in your EmailJS templates (use as `{{name}}`):

| Variable | Both forms | Notes |
|---|---|---|
| `from_name`, `from_email`, `reply_to`, `organisation`, `message` | yes | |
| `page`, `sent_at`, `form_kind`, `form_type` | yes | which page and form it came from |
| `interest`, `amount` | partner form | |
| `topic` | contact form | |

Set the template's "To email" to the address that should receive enquiries and "Reply-To" to `{{reply_to}}`.

Built in: required-field validation, a hidden honeypot field, a 30 second cooldown per browser (`cooldownSeconds` in `config.js`), and clear success and error messages.

The Partner or donate form is an enquiry. It collects no payment details. To take card or mobile money payments later, add a payment provider and link to it from `partner.html`.

## Versions

Versions are git tags. Switch between them with:

```bash
git tag                 # list versions
git checkout v1.0.0     # the original single-page site
git checkout main       # back to the latest
```

See `CHANGELOG.md` for what changed.

## Before going live

- Replace the Tailwind Play CDN with a compiled stylesheet (the CDN prints a console warning and compiles in the browser).
- Replace the two Unsplash photos (home hero and the Nakifuuma band) with licensed or owned photography. Each has a gradient fallback.
- Add `sitemap.xml`, `robots.txt` and a canonical URL once the domain is known, and a 1200 by 630 share image for `og:image`.
- Confirm the logo (taken from the CGSC and Regena overview deck), contact email and registration number with the client.
