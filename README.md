# Regena Systems Africa Ltd: website

Static multi-page site (plain HTML, Tailwind Play CDN, a little vanilla JS). No build step is needed to run or deploy it.
Live: https://simenya.github.io/regena-systems/

Layout and components are the v2.2.1 template (floating glass nav, full-bleed hero, cards, banded sections). Wording, diagrams and palette follow the client's "Website Copy (Revised)" (Nov 2026): Forest, Leaf, Amber, Mist and Ink. Fonts: Poppins for body and headlines, Inter for smaller titles and labels (see `partials/head.html`, `assets/tailwind.config.js` and `assets/styles.css`). Light theme by default with a dark toggle.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home: hero, six ways in, the circular idea, proof band, what we build, people, partnership, call to action |
| `what-we-do.html` | Integrated community engineering, circular and regenerative systems, the viability test, living labs and learning, local enterprise development |
| `nakifuuma.html` | The working farm, how we measure (service and circular measures), where we fit in Uganda's circular economy agenda |
| `who-its-for.html` | Funders, communities and enterprises, students and researchers, environmentalists and circular economists |
| `about.html` | Our story and purpose, mission and vision, the 4Rs, founder and leadership |
| `governance.html` | Governance and accountability, roles and interests |
| `insights.html` | Insights and resources |
| `partnership.html` | Regena and CGSC side by side, who leads each stage, CGSC services and ten-stage method |
| `back-a-project.html` | Four ways to back a project |
| `work-with-us.html` | The enquiry form (the nav button opens the same form as a popup on every other page) |
| `contact.html` | Contact details, site visit, the same enquiry form |
| `404.html` | Not found |
| `evidence.html`, `donate.html`, `partner.html` | Small redirect pages so old links still work |

## Run locally

```bash
python -m http.server 4173
```

then open http://localhost:4173

## Editing shared parts (header, footer, popup, form)

The head tags, header, footer, popup and enquiry form are shared. Edit the file in `partials/`, then run:

```bash
node tools/sync.mjs
```

This rewrites the block between the `<!--@name-->` and `<!--@/name-->` markers on every page. Do not edit those blocks inside a page by hand, the next sync overwrites them.

## Connecting EmailJS

1. In EmailJS, add an Email Service and copy its **Service ID**.
2. Create one template for the enquiry form and copy its **Template ID**.
3. Copy your **Public Key** (Account, API keys).
4. Paste the values into `assets/config.js`.

Until all are set, the form falls back to opening the visitor's email app (`mailto:`), so nothing breaks while you set up.

Variables available in the EmailJS template (use as `{{name}}`): `from_name`, `from_email`, `reply_to`, `organisation`, `message`, `who` (the "I am a..." choice), `request` (the "What would you like?" choice), `page`, `sent_at`, `form_kind`, `form_type`.

Set the template's "To email" to the address that should receive enquiries and "Reply-To" to `{{reply_to}}`.

Built in: required-field validation, a hidden honeypot field, a 30 second cooldown per browser (`cooldownSeconds` in `config.js`), and clear success and error messages. Buttons can preselect "What would you like?" with `data-intent="Visit Nakifuuma"`.

## Deploy (GitHub Pages)

A GitHub Actions workflow (`.github/workflows/pages.yml`) publishes the site on every push to `main`. It copies only the `*.html` files and `assets/`, so the README, partials and tools are not exposed. In the repo, **Settings**, **Pages**, **Source** must be **GitHub Actions**. You can also run it by hand from the **Actions** tab. All links are relative, so the site works from the `/regena-systems/` sub-path.

## Versions

Versions are git tags. Switch between them with:

```bash
git tag                 # list versions
git checkout v2.2.1     # the earlier light-blue version (previous wording)
git checkout v3.0.0     # the first green build (different section layouts)
git checkout main       # back to the latest
```

See `CHANGELOG.md` for what changed.

## Before launch (from the client's checklist)

Nothing in square brackets in the client copy has been published. These still need the client:

- Company mailbox: the site shows `peter.nzabanita@regenasystems.com` (the address in the client's overview deck). Confirm it exists, or replace it here, in `partials/footer.html`, `contact.html` (generated) and `assets/config.js`.
- Registration number for the footer legal line (left out for now).
- Confirm "6 connected systems" are operating at Nakifuuma, or change the number on the home page.
- Real Nakifuuma photographs for the home hero and the Nakifuuma page. The supplied irrigation photo is used until then, with an accurate caption, because the copy asks for real photographs only and no stock images.
- Director portraits (initials are used for now), and Prof. Amadei's approval of his bio and the roles table.
- Greenville Lounge and Fundiwa row of the roles table: kept out until the client confirms the wording.
- "Invest" route on Back a project: held back until legal advice (the page lists four ways, not five).
- Luganda version of the communities section, and any training partner line: held back.
- Privacy notice page (the forms collect personal data) and the consent line's link to it.
- Confirm CGSC's exact legal name.
- Replace the Tailwind Play CDN with a compiled stylesheet (the CDN prints a console warning and compiles in the browser).
- Add `sitemap.xml`, `robots.txt`, a canonical URL once the domain is known, and a 1200 by 630 share image for `og:image`.
