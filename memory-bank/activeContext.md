# Active Context

> This file tracks *current* state — what was just done, what's being
> worked on, and what's likely next. Update it at the end of any session
> that changes the project meaningfully. Older history that's no longer
> "active" should move to `progress.md` instead of piling up here.

## Current state (most recent first)

- Replaced the two case-study projects without a public system
  (E-Monev, COVID-19 Screening & GIS Tracking) to use a single shared
  placeholder image, `public/projects/screenshot-404.svg`, instead of
  bespoke fake-dashboard mockups. Each `caseStudies.<slug>.screenshotsNote`
  now explains plainly that the system is internal with no public URL, and
  where a real screenshot should go once available.
- Fixed a runtime error on the case study pages: `next/image` failed to
  optimize the local SVG placeholder ("isn't a valid image ... received
  null"). Fix: added `unoptimized={s.src.endsWith(".svg")}` to the `<Image>`
  usage in `app/projects/[slug]/page.tsx` so SVGs skip the optimizer while
  real PNG screenshots still get optimized normally.
- Extracted real product screenshots for the **E-Office** case study from a
  primary source (a user-guide PDF for that exact system) using
  `pdfimages`, hand-picked the two clearest full-UI screenshots (User
  Groups table, User Otoritas/permissions screen), and replaced the earlier
  placeholder mockups with these two real PNGs at
  `public/projects/e-office/{user-groups,user-authorization}.png`.
  `screenshots[]` entries now carry the real pixel `width`/`height` for
  correct aspect ratio.
- Added "Case Study →" buttons + a full case-study detail route
  (`app/projects/[slug]/page.tsx`) for three projects: `e-office`,
  `e-monev`, `covid-gis-tracking`. Content lives under
  `data/site.json` → `caseStudies`.
- Refactored all homepage content out of components and into
  `data/site.json`, introducing `lib/richText.tsx` for inline color markup
  inside JSON strings.
- Rebuilt the original single-file HTML/Tailwind portfolio as a proper
  Next.js 14 + TypeScript + Tailwind project (this repo).

## Verification habit established

Every content/component change in this project has been followed by a full
`npm install && npm run build` before considering the change done — this
has caught real TypeScript errors from the JSON-typing gotcha (see
`memory-bank/systemPatterns.md`) more than once. Keep doing this for any
future change that touches `data/site.json` or anything under `app/` or
`components/`.

## Likely next steps (not yet done, no commitment implied)

- Get a real screenshot for E-Monev and/or COVID GIS Tracking if a
  legitimate source ever becomes available (another user guide, a demo
  environment, etc.), and swap out the `screenshot-404.svg` placeholder the
  same way E-Office's was replaced.
- Consider a profile photo in the Hero/About area (not yet requested).
- Consider light/dark mode toggle (not yet requested — site is currently
  dark-only by design).
