# Tech Context

## Stack

- **Next.js 14.2.x**, App Router, TypeScript, React 18
- **Tailwind CSS 3.4.x** (+ PostCSS, Autoprefixer)
- **next/font/google** for Space Grotesk, IBM Plex Sans, JetBrains Mono
  (fetched at build time — requires network access to
  `fonts.googleapis.com`/`fonts.gstatic.com` during `next build`/`next dev`)
- No database, no API routes, no auth, no external services. Fully static.

## Local setup

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy

```bash
npm run build    # type-checks, lints, and statically generates every route
npm run start    # serve the production build locally
```

Deploys cleanly to Vercel with zero configuration (standard Next.js app —
import the repo at vercel.com/new). No environment variables required.

## Configuration notes

- `next.config.mjs` sets `images.dangerouslyAllowSVG: true` and
  `images.contentDispositionType: "inline"` to allow the SVG placeholder
  under `public/projects/screenshot-404.svg` to be served through
  `next/image` when marked `unoptimized`. This does not affect PNG/JPG
  screenshots, which still go through normal image optimization.
- `tsconfig.json` has `resolveJsonModule: true`, which is what allows
  `import site from "@/data/site.json"` to work with inferred types — see
  `memory-bank/systemPatterns.md` for the typing implications of this.
- Path alias `@/*` maps to the project root (see `tsconfig.json` →
  `compilerOptions.paths`), used for `@/data/site.json`,
  `@/lib/richText`, `@/components/*`.

## Known environment quirk (not a project bug)

Some sandboxed/offline build environments can't reach
`fonts.googleapis.com`. If a build fails specifically on the `next/font`
import in `app/layout.tsx` with a network error, that's an environment
network restriction, not a code problem — the real deployment target
(Vercel, or any machine with normal internet access) fetches these fonts
fine at build time. Don't "fix" this by removing next/font/google; if a
build needs to be verified in a network-restricted sandbox, temporarily
stub `app/layout.tsx`'s font imports out, verify the rest of the app
compiles, then restore the real file before shipping.

## Directory structure (reference)

```
aw13-portfolio/
├── AGENTS.md
├── memory-bank/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/[slug]/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── InfraMap.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── richText.tsx
├── data/
│   └── site.json
├── public/
│   ├── CV_Agus_Wikamto.pdf
│   └── projects/
│       ├── screenshot-404.svg
│       └── e-office/
│           ├── user-groups.png
│           └── user-authorization.png
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Dependencies (why each is there)

- `next`, `react`, `react-dom` — framework
- `tailwindcss`, `postcss`, `autoprefixer` — styling pipeline
- `typescript`, `@types/*` — type-checking, dev-only

No runtime dependencies beyond Next/React — no state library, no data
fetching library, no animation library. All motion is CSS
keyframes/transitions defined in `tailwind.config.ts` or inline classes.
