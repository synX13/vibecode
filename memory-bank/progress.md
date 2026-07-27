# Progress

## What works

- Full homepage: Nav, Hero (animated terminal session), About (stats +
  bio), Skills (grouped tags), Experience (timeline), Projects (grid with
  external links + case study links), InfraMap (generated SVG node
  diagram), Contact, Footer.
- Dynamic case-study route `/projects/[slug]` for `e-office`, `e-monev`,
  `covid-gis-tracking`, statically generated from `data/site.json`.
- CV download wired to `public/CV_Agus_Wikamto.pdf` from both the hero CTA
  and the footer link.
- Real product screenshots in the E-Office case study (extracted from a
  primary-source user guide PDF).
- Honest placeholder handling for case studies without a real screenshot
  source (shared `screenshot-404.svg`, explained via `screenshotsNote`).
- Production build (`npm run build`) verified clean (type-checks + lint +
  static generation of all routes) as of the most recent change.

## What's left / open items

- E-Monev and COVID-19 Screening & GIS Tracking case studies still use the
  placeholder screenshot — no real screenshot source has been provided for
  either yet.
- No automated tests exist (no test runner configured). Verification is
  manual: `npm run build` + visual check.
- No CI configured (no GitHub Actions workflow in this repo) — builds are
  verified locally/by-hand before delivery.
- No analytics/SEO beyond basic `<title>`/`<meta description>` per page
  (root layout + per-case-study `generateMetadata`). No sitemap.xml or
  robots.txt yet.
- No profile photo on the site.

## Known issues / things to watch

- **JSON optional-field typing**: any new array in `data/site.json` with
  items that have optional fields must give every item the same keys
  (`null`/`false` for "empty"), or TypeScript will block uniform property
  access in the consuming `.map()`. This isn't a bug so much as a pattern
  that must be followed — see `memory-bank/systemPatterns.md`.
- **next/font network dependency**: `app/layout.tsx` fetches Google Fonts
  at build time. This is normal and fine on real deployment targets
  (Vercel, any networked machine) but will fail in a fully offline/sandboxed
  build environment. Not a code defect — see `memory-bank/techContext.md`
  for the workaround used to verify builds in such environments.
- **SVG through next/image**: any local SVG rendered via `next/image` must
  be marked `unoptimized`, or Next's image optimizer throws a runtime error
  trying to process it. Already handled in `app/projects/[slug]/page.tsx`;
  keep this in mind if SVGs are used via `next/image` elsewhere in the
  future (e.g. if the homepage adds an image-based section).

## Decision log (short form — see other memory-bank files for full reasoning)

| Decision | Reasoning |
|---|---|
| Content in `data/site.json`, not hardcoded in components | Non-developer editability; single source of truth |
| `{{color:text}}` inline markup instead of JSX-in-JSON | JSON can't hold JSX; this keeps rich text data-driven without over-splitting fields |
| Shared `screenshot-404.svg` instead of per-project fake mockups | Honesty — don't present a fabricated UI as if it might be real |
| `unoptimized` on SVG `next/image` usages | Next's image optimizer errors on local SVGs otherwise |
| Real screenshots for E-Office pulled from a primary-source PDF | A legitimate source existed; used it instead of a placeholder |
| No UI library, hand-built Tailwind components | Keep the specific dark/terminal/ops aesthetic consistent and dependency-light |
