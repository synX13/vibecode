# Agus Wikamto — Portfolio

Next.js 14 (App Router) + Tailwind CSS portfolio site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push this folder to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
zero config needed, it's a standard Next.js app.

## Structure

- `app/` — App Router pages, layout, global styles
- `components/` — one component per section (Hero, About, Skills, Experience, Projects, InfraMap, Contact, Nav, Footer)
- `public/CV_Agus_Wikamto.pdf` — resume served for the "Download CV" buttons
- `tailwind.config.ts` — custom color tokens (`bg`, `surface`, `accent`, `teal`, etc.) and animations
