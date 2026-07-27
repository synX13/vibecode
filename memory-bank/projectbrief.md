# Project Brief

## What we're building

A personal portfolio website for **Agus Wikamto**, a Full Stack Developer &
DevOps Engineer based in Indonesia, currently working remotely for a French
company (Linguise). The site exists to:

1. Present his work history, skills, and shipped projects to recruiters,
   hiring managers, and potential clients.
2. Let visitors download his CV directly.
3. Give a few of his most substantial projects (ones with real institutional
   scale — government platforms deployed across multiple regencies) a proper
   case-study writeup, not just a card blurb.

## Who this is for

- Recruiters and hiring managers scanning quickly — the homepage needs to
  read in under a minute: what he does, what he's built, what stack he uses.
- Technical interviewers who want depth — the case study pages exist for
  them, going into challenge/approach/outcome for the more complex projects.
- Agus himself, who needs to be able to update this over time (new job, new
  project, updated skills) without touching code every time.

## Non-goals

- This is not a blog, not a CMS, not multi-author. One person, one voice.
- No admin panel or dynamic backend — everything is static content compiled
  at build time. Updates happen by editing `data/site.json` and redeploying.
- Not trying to be a generic "portfolio template" — the visual language
  (terminal sessions, infrastructure node maps, pipeline-style status
  language) is specific to what Agus actually does: DevOps, infrastructure,
  monitoring, deployment automation. Every visual metaphor on the site
  should trace back to something true about his actual work.

## Core content pillars (from his background)

- **DevOps / Infrastructure**: Docker, Kubernetes, Terraform, Ansible, AWS,
  CI/CD, Nginx/OpenResty, Prometheus/Grafana/New Relic.
- **Full-stack development**: Node.js/Express/NestJS, Next.js, Vue.js, PHP,
  MySQL/PostgreSQL, Redis/MongoDB.
- **Real-world scale**: his projects aren't toy apps — E-Office and E-Monev
  in particular were deployed across many separate Indonesian government
  institutions (regencies, ministries, universities), which is a genuinely
  distinctive and verifiable credential worth surfacing visually (see the
  infra node map on the homepage).

## Success criteria

- A recruiter can understand what Agus does and what he's shipped within
  30–60 seconds of landing on the page.
- The site loads fast and works well on both desktop and mobile.
- Agus can add a new job, skill, or project by editing one JSON file.
- The design feels authored for this specific person, not templated.
