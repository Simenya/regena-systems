# Changelog

## v2.1.0

Client feedback round.

- Home: "How we work" now sits right after "Why Regena". The four counters (animated count-up) and the "Read the evidence" and "Plan a visit" buttons moved under it, and the separate Nakifuuma band was removed. The hero's second button is now "Learn more" and scrolls to "Why Regena".
- Every section fades up on scroll (auto-applied, opacity and transform only). Inner-page headers animate on load.
- Navigation: added Home. Added a Donate button next to Partner with us. The desktop menu now appears from 1280px up, with the hamburger below that.
- New Donate page (`donate.html`) with amount chips, frequency, purpose and a pledge form on its own EmailJS template. The Partner form no longer has a donation option.
- Contact form topics now include Partner and Donate. Choosing Donate goes straight to the Donate page.
- Contact details now read: Kampala, Uganda, peter.nzabanita@gmail.com, Tel +256-784290258 (page, footer and mail links).
- Removed the registration number everywhere and the "Our partner" block at the foot of the contact page.

## v2.0.0

Multi-page rebuild, so no single page has to carry everything.

- Split into 7 pages plus a 404: Home, What we do, Evidence, About, Partnership, Partner or donate, Contact.
- Landing page kept, refined for a more minimal feel: one-line intro, a quiet list of the six systems, a light proof strip instead of heavy cards, shorter sections that link to detail pages.
- Added content that was missing: mission and vision, the 4Rs, systems-based approach, who we work with, what sets the practice apart, the CGSC partnership (who leads each stage, CGSC services, ten-stage methodology) and sector alignment.
- Partner or donate: a popup available from every page (nav button) and a full page, using one shared form.
- Contact form and a site visit prompt.
- Forms are wired for EmailJS through `assets/config.js`, with validation, honeypot, cooldown and a `mailto:` fallback until EmailJS is configured.
- Shared header, footer, popup and form live in `partials/` and are synced into every page with `node tools/sync.mjs`.
- CSS and JS moved out of the page into `assets/`.
- Light theme remains the default, with the dark toggle.
- Copy deliberately leaves out "Nexus Thinking" (flagged in the overview notes as easy to confuse with an unrelated methodology) and uses the correct company name, Regena Systems Africa Ltd.

## v1.0.0

Original single-page site: hero, stats, capabilities, viability test, evidence, Nakifuuma, sector alignment, 4Rs, partners and contact call to action.
