# AGENTS.md

This file gives AI coding agents (and future-you) the context needed to work
in this repository safely and consistently. Read this first. For deeper
background on *why* things are the way they are, see the `memory-bank/`
folder — read it at the start of any non-trivial task.

## What this project is

A personal portfolio site for **Agus Wikamto**, a Full Stack Developer &
DevOps Engineer. It's a single-page marketing/portfolio site (hero, about,
skills, experience, projects, an infrastructure "node map," contact) plus a
dynamic case-study route for select projects.

The visual identity is a dark, terminal/ops-dashboard aesthetic — this is a
deliberate choice reflecting the person's actual work (DevOps, infra,
monitoring), not a generic template. Keep that identity intact when making
changes: dark navy background, amber/gold accent, teal for "status/success"
signals, monospace type for anything technical or data-like.

## Tech stack

- **Next.js 14** (App Router), TypeScript
- **Tailwind CSS** for styling — custom tokens in `tailwind.config.ts`
- No external UI kit. Components are hand-built per section.
- No backend/database. All content is static, sourced from
  `data/site.json` at build time.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server, http://localhost:3000
npm run build     # production build (also type-checks + lints)
npm run start     # serve the production build
```

Always run `npm run build` after content or component changes that touch
typed data (`data/site.json`, anything in `app/` or `components/`) before
considering a task done — this repo has caught real type errors this way in
the past (see `memory-bank/progress.md`).

## The core rule: content lives in `data/site.json`

**Do not hardcode copy, links, tags, or project data inside `.tsx` files.**
Every section component (`Hero`, `About`, `Skills`, `Experience`, `Projects`,
`InfraMap`, `Contact`, `Footer`, `Nav`) imports `data/site.json` and renders
it. If you're adding or editing content — a new skill tag, a new job, a new
project — edit the JSON, not the component.

Components should only contain:
- Layout/markup structure
- Tailwind classes
- Small rendering helpers (e.g. `lib/richText.tsx` for inline color
  highlights inside strings)

If a new UI section is genuinely new (not just new data), it's fine to add
markup for it — but still wire it to a new key in `site.json` rather than
inlining text.

### The `{{color:text}}` convention

Some strings in `site.json` (mainly hero terminal lines and the About
paragraphs) use a tiny inline markup: `{{teal:some text}}`,
`{{accent:some text}}`, `{{ink:some text}}`, `{{muted:some text}}`. This is
parsed by `lib/richText.tsx`'s `renderRich()` into a styled `<span>`. Use
this instead of writing JSX with embedded `<span>` tags inside the JSON's
consuming component. Don't invent new color keys without adding them to the
`colorClass` map in `lib/richText.tsx` first.

### Optional-field typing gotcha

`data/site.json` is imported directly (`import site from "@/data/site.json"`)
and TypeScript infers its shape from the literal JSON. Because of this,
**array items with optional fields must all declare the same keys**, using
`null`/`false` as an explicit "empty" value rather than omitting the key —
otherwise TypeScript will refuse to let components access that property on
every array element. See `projects.items[].impl` / `.link` / `.slug` and
`hero.terminal.lines[].cursor` for the pattern. Follow it for any new
optional field.

## Case studies (`/projects/[slug]`)

Selected projects get a full case-study page at `/projects/[slug]`. This is
driven entirely by `data/site.json`'s `caseStudies` object, keyed by slug:

```
caseStudies.<slug> = {
  kind, title, description, techStack[],
  challenge, approach, outcome,
  implementations[],
  screenshots: [{ src, alt, width, height }],
  screenshotsNote
}
```

To link a project card to a case study, set `"slug"` on that project's entry
in `projects.items[]` to match a key in `caseStudies`. Projects without a
case study keep `"slug": null` and just don't render a "Case Study →" button
(see `components/Projects.tsx`).

The page itself lives at `app/projects/[slug]/page.tsx` and uses
`generateStaticParams()` to pre-render one static page per key in
`caseStudies` — adding a new case study to the JSON is enough to get a new
route; no route file changes needed.

### Screenshots

- Real screenshots go under `public/projects/<slug>/`, referenced by their
  actual pixel dimensions in the `screenshots[]` array (`width`/`height`
  must match the real file — the layout isn't forgiving of a wrong ratio).
- When a project has no real screenshot available yet (e.g. an internal
  system with no public URL), point it at the shared placeholder:
  `/projects/screenshot-404.svg` (1200×750), and explain why in
  `screenshotsNote` — don't fabricate a fake-looking mockup UI and pass it
  off as if it might be real.
- SVG screenshots must render with `unoptimized` on the `next/image`
  component (see `app/projects/[slug]/page.tsx`) — Next's image optimizer
  doesn't handle local SVGs reliably and will throw a runtime "isn't a valid
  image" error otherwise. PNG/JPG screenshots should NOT be marked
  unoptimized (let Next optimize them normally).

## The infra node map (`components/InfraMap.tsx`)

The map on the homepage plots each project's real institutional footprint
(the regencies/institutions in `map.nodes[]`) against a single "core" node,
rendered as raw SVG lines/circles/text generated from the JSON — not an
actual geographic map, more of a network/topology diagram. Node
`x`/`y` coordinates are hand-placed to loosely suggest west→east geography;
there's no map projection math here, so if nodes are added, place them by
eye relative to neighbors.

## Design tokens

Defined in `tailwind.config.ts`. If you need a new color, add it there
rather than using an arbitrary Tailwind value inline, so it stays
consistent and themeable:

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0A0E17` | page background |
| `surface` / `surface2` | `#111826` / `#161F30` | cards, panels |
| `line` | `#232C3E` | borders/dividers |
| `ink` | `#E7ECF5` | primary text |
| `muted` | `#8993A6` | secondary text |
| `accent` | `#D9A441` | primary accent (amber/gold) |
| `teal` | `#35A98C` | status/success accent |

Fonts (via `next/font/google`, see `app/layout.tsx`): **Space Grotesk**
(display/headings), **IBM Plex Sans** (body), **JetBrains Mono** (anything
technical/data — nav, tags, stats, terminal, code-like labels).

## Things to avoid

- Don't add a UI library (shadcn, MUI, etc.) — everything is hand-built
  Tailwind to keep the aesthetic consistent and dependency-light.
- Don't use `localStorage`/`sessionStorage` — not needed here (fully
  static site) and out of scope for this project.
- Don't hardcode the resume filename/path in more than one place — it's
  referenced from `hero.ctaSecondary.href` and `footer.cvHref` in
  `site.json`; keep both in sync if the filename changes.
- Don't restructure `data/site.json`'s top-level keys without updating
  every component that destructures `site.<key>` — grep for
  `site.json"` and `from "@/data/site.json"` first.

## Where to look first for a given task

| Task | Start here |
|---|---|
| Change any visible copy | `data/site.json` |
| Add a new skill/tag | `data/site.json` → `skills.groups[].tags` |
| Add a job / experience entry | `data/site.json` → `experience.roles[]` |
| Add a project card | `data/site.json` → `projects.items[]` |
| Add a case study | `data/site.json` → `caseStudies.<slug>`, plus screenshots in `public/projects/<slug>/` |
| Change colors/fonts | `tailwind.config.ts`, `app/layout.tsx` |
| Change a section's layout | matching file in `components/` |
| Understand project history/decisions | `memory-bank/` |
