# Regena Systems Africa Ltd: one-page site

Single-page marketing site for Regena Systems Africa Ltd, benchmarked against the
`pearl_safaris` build for craft (glass floating nav, rounded cards, mono micro-labels,
overlapping stats band, immersive hero, light/dark theme toggle) and re-themed to a
light-blue palette for the WASH sector.

## Files

- `index.html`: the whole site. Tailwind is loaded from the Play CDN and configured
  inline; theme tokens are CSS custom properties (`:root` / `.dark`). No build step.
- `assets/regena-logo.png`: logo (extracted from `../CGSC_Regena_Overview_v3.pptx`),
  used in the nav, footer and as the favicon.

## Run locally

```bash
python -m http.server 4173 --directory regena_systems
```

then open http://localhost:4173

## Content source

Copy is adapted from `../CGSC_Regena_Overview.docx` and `../CGSC_Regena_Overview_v3.pptx`,
scoped to Regena only (the delivery entity) rather than the CGSC partnership.

## Notes / follow-ups

- The Tailwind Play CDN prints a "not for production" console warning. For production,
  swap it for a real Tailwind build (CLI or PostCSS) and inline the generated CSS.
- Hero and site-section photos are hot-linked from Unsplash. Replace the two `<img>`
  `src`s (`#hero-img`, `#site-img`) with owned/licensed photography before going live;
  each has a gradient fallback if the URL fails.
- Theme default is dark; the choice is stored in `localStorage` under `regena-theme`.
