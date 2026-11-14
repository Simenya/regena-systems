# Changelog

## v3.3.0

- Home hero: headline is now "Turning Local Resources into Lasting Community Value", with "Recover Resources. Generate Income. Sustain Communities." under it and the new "Together, we turn local resources..." paragraph. Added an "In partnership with Common Ground Solutions Center" line (bold, links to commongroundsolutionscenter.net).
- New menu: Home, About Us, What We Do, Evidence (Demonstrations & Evidence), Insights & Resources, Get Involved (Partner & Get Involved), Contact, plus Work with us. Dropdowns show the full section name as a heading. Desktop menu from 1280px; below that the hamburger with the full names.
- New pages: `governance.html` (Governance and accountability: legal facts, evidence and accountability, commitments, roles and interests table moved here) and `insights.html` (Insights and resources: the deeper why and the 5Ps, resource links, field notes).
- What we do is now four sections: Integrated community engineering, Circular and regenerative systems, Living labs and learning, Local enterprise development (content from the joint CGSC and Regena overview deck).
- About: new "Our story and purpose" section. Nakifuuma: sector alignment with the Kigali Symposium 2026 pillars. Partnership: CGSC name links to its website.
- Footer: CGSC name bold and linked; columns now About us, Explore, Get involved, Contact.

## v3.2.0

- Cleaner menu: Home, What we do (dropdown: What we do, Who it's for), Nakifuuma, About (dropdown: About Regena, Leadership, Roles and interests, Partnership), Contact, plus the Back a project and Work with us buttons. Dropdowns open on hover and click, close on outside click or Escape, work from the keyboard, and highlight their parent on the pages inside them. The desktop menu now shows from 1024px; on phones the groups fold open and closed.
- Landing label above the headline now reads "Circular Economy Engineering" (the "Uganda" part is dropped).
- Short intro lines under section titles that previously went straight to cards or diagrams (Start where you are, What we build, People, Proof, Capabilities, Viability test, Operators, How we measure, Where we fit, 4Rs, Leadership, Roles, The two companies, Who leads each stage, CGSC services, Ways to help), plus a lead on the About page header. All wording is drawn from the client copy; no new claims.

## v3.1.0

Back to the v2.2.1 template, with only the content, diagrams and colours updated from the client's revised copy.

- Restored the v2.2.1 look and structure: floating glass nav with mono uppercase links, full-bleed hero with the photo behind the text, bordered cards with icon boxes, banded sections, the dark Nakifuuma band, the rounded call-to-action band, the page headers with the grid background and the pill tags.
- New wording and pages from the client copy (Home, What we do, Nakifuuma, Who it's for, About, Partnership, Back a project, Work with us, Contact), now laid out with the v2.2.1 section patterns.
- Diagrams from the client's visual pack: circular loop, four-step viability test, colour-coded "who leads at each stage" rows with a key, dark forest stats band.
- Green palette (Forest, Leaf, Amber, Mist, Ink) applied to the template tokens. Dark mode kept.
- Menu now has the seven items from the client copy and the Back a project and Work with us buttons; the desktop menu shows from 1280px up.
- Unfinished client items are still held back (see the README checklist).


## v3.0.0

Rebuilt from the client's "Website Copy (Revised)".

- New positioning and wording throughout: "Circular economy engineering", "We turn waste into the income that keeps water, energy and food running."
- New look: Forest, Leaf, Amber, Mist and Ink palette, Poppins, amber "Work with us" button and outlined "Back a project" button. Light is still the default, with the dark toggle.
- New menu: Home, What we do, Nakifuuma, Who it's for, About, Partnership, Contact, plus the two buttons. Under 1280px it collapses to the hamburger.
- New pages: Nakifuuma (with how we measure and where we fit), Who it's for (four audiences), Back a project, Work with us. Evidence, Donate and Partner pages are replaced by redirects.
- New visuals: circular loop diagram (a numbered list on phones), four-step viability test, colour-coded "who leads at each stage" rows with a key, dark forest stats band with the "commitments, not results" note.
- One enquiry form everywhere (popup, Work with us page, Contact page) with "I am a..." and "What would you like?" dropdowns. Buttons preselect the request. Thank-you message promises a reply within five working days.
- Contact details now use the company email address instead of Gmail. No registration number is shown.
- Held back on purpose because the client copy marks them unfinished: bracketed placeholders, the Invest route, the Luganda section, the optional training-partner line, the Greenville and Fundiwa row, "Read more" links without a destination, director portraits and the privacy notice link. See the README checklist.
- The client's alt text for the hero photo describes a team photo, which the current photo is not, so an accurate description is used instead.


## v2.2.1

- Home hero: the headline "Engineering that stays until what we build is still working." is back as the main text. The tagline "WATER. SANITATION. RENEWABLE ENERGY. FOOD SYSTEMS" now sits directly under it as the supporting line.
- Home Partnership section: the partner name, Common Ground Solutions Center, LLC, is bold.

## v2.2.0

- Home hero: new background photo (irrigation sprinkler on young crops, `assets/hero-irrigation.jpg`, served locally instead of hot-linked).
- Home hero headline is now the tagline "WATER. SANITATION. RENEWABLE ENERGY. FOOD SYSTEMS". The supporting sentence is kept and the small systems line was removed, since the tagline replaces it.
- Hero buttons: "Learn more" (blue, scrolls to Why Regena) and "Virtual Tour" (outlined). `virtualTourUrl` in `assets/config.js` sets where Virtual Tour goes; until set it leads to the site visit section.
- Extra darkening and a shifted crop on phones so the tagline stays readable over the photo.

## v2.1.1

- Navigation trimmed to Home, What we do, About and Contact (plus the Partner with us and Donate buttons). Evidence and Partnership are no longer in the menu but remain linked from the home page, the footer and other pages.
- With four links the full menu fits from 1024px again, so the hamburger now only appears below that.

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
