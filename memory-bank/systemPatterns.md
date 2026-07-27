# System Patterns

## Architecture overview

```
app/
  layout.tsx          → fonts (next/font/google), global <html>/<body>
  page.tsx             → composes all homepage sections in order
  globals.css          → Tailwind directives + minimal global resets
  projects/[slug]/
    page.tsx            → dynamic case-study route, statically generated
                          per key in data/site.json → caseStudies

components/
  Nav.tsx, Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
  Projects.tsx, InfraMap.tsx, Contact.tsx, Footer.tsx
  → one component per homepage section, each imports site.json directly

lib/
  richText.tsx          → renderRich(): parses "{{color:text}}" tokens
                          out of JSON strings into styled <span> nodes

data/
  site.json             → single source of truth for all content

public/
  CV_Agus_Wikamto.pdf    → resume, linked from hero + footer
  projects/<slug>/...    → case study screenshots
  projects/screenshot-404.svg → shared "no screenshot available" placeholder
```

## Key pattern: JSON-driven components

Every section component follows the same shape:

```tsx
import site from "@/data/site.json";

export default function SectionName() {
  const { sectionKey } = site;
  return (
    <section id="...">
      {/* map over sectionKey fields/arrays */}
    </section>
  );
}
```

This was a deliberate refactor (components originally had hardcoded arrays
and strings; all content was later extracted into `data/site.json`). The
motivation: a non-developer (or a future agent) should be able to update
every visible word on the site by editing one JSON file, without touching
component logic or JSX.

**Rule of thumb when extending:** if you're tempted to write a new string
literal inside a `.tsx` file that a visitor will read, stop and put it in
`site.json` instead, even if it's just one line.

## Key pattern: rich inline text without JSX-in-JSON

JSON can't contain JSX, but some strings need inline styling (e.g. "Node.js
& Next.js on the front, **Docker · Kubernetes · Terraform · AWS** underneath"
where the bolded part is teal). Rather than splitting every such string into
awkward multi-field objects, `data/site.json` uses a tiny inline markup —
`{{teal:text}}`, `{{accent:text}}`, `{{ink:text}}`, `{{muted:text}}` — and
`lib/richText.tsx`'s `renderRich()` splits on that pattern and wraps matches
in a `<span>` with the corresponding Tailwind color class. Components call
`renderRich(someString)` instead of rendering the string directly whenever
it might contain this markup.

## Key pattern: dynamic case-study route driven by a JSON map, not files

`app/projects/[slug]/page.tsx` does not hardcode which slugs exist. It reads
`Object.keys(site.caseStudies)` in `generateStaticParams()`, so adding a new
case study is purely a data change — add a new key under `caseStudies` in
`site.json`, add screenshots to `public/projects/<slug>/`, and (if it should
be reachable from the homepage) set that project's `slug` field in
`projects.items[]`. No new route file, no new component.

## Key pattern: consistent optional-field shapes in JSON

Because `site.json` is imported as a typed module (`resolveJsonModule` is on
in `tsconfig.json`), TypeScript infers a literal type per array item. If
some items in an array have a field and others don't, TypeScript treats the
array as a union of differently-shaped objects and will not allow uniform
property access across a `.map()` without every item declaring that key.

**Pattern used throughout this codebase:** always declare every field on
every item in a given array, using `null` (for objects/strings) or `false`
(for booleans) as the "empty" value instead of omitting the key. Examples:
`projects.items[].impl`, `.link`, `.slug`; `map.nodes[].remote`;
`hero.terminal.lines[].cursor`.

## Key pattern: the infra node map is generated from data, not drawn by hand

`components/InfraMap.tsx` renders a `<svg>` where every `<line>`, `<circle>`,
and `<text>` is produced by mapping over `data/site.json`'s `map.nodes[]`
array against a single `map.core` point. Coordinates are hand-authored
(no real map projection), chosen to loosely suggest relative geography.
Adding a node is a JSON edit (name, sub-label, x/y, remote true/false); no
SVG hand-editing required.

## Screenshot handling pattern

- Real screenshots: raster files (PNG/JPG) under `public/projects/<slug>/`,
  referenced with their true pixel `width`/`height` in the `screenshots[]`
  array so the aspect ratio in the layout is correct.
- Placeholder screenshots: point at the single shared
  `/projects/screenshot-404.svg` (declared at 1200×750) rather than a
  bespoke mockup file per project — one shared placeholder is easier to
  maintain and honestly communicates "not available" rather than dressing
  up a fake UI to look real.
- `app/projects/[slug]/page.tsx` sets `unoptimized` on the `next/image`
  element whenever `src` ends in `.svg` — Next's built-in image optimizer
  doesn't reliably process local SVGs and throws a runtime error otherwise;
  raster screenshots are left un-flagged so they still get optimized.

## Styling approach

Tailwind utility classes only, no CSS-in-JS, no component library. Custom
design tokens (colors, font families, a few custom keyframe animations for
the terminal cursor blink / fade-in / ping / pulse-dot effects) are defined
once in `tailwind.config.ts` and consumed via utility classes
(`bg-accent`, `text-teal`, `font-display`, `animate-pulseDot`, etc.).
