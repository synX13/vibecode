# Product Context

## Why this site exists

Agus already had a CV (PDF) covering his experience, but a PDF doesn't do a
few things a website can:

- Show, not just tell — a live "infra footprint" visualization is more
  convincing than a bullet point saying "deployed to 7 institutions."
- Let a reader go as deep as they want — skim the homepage, or click into a
  full case study for the projects that can bear the weight of one.
- Feel current — the terminal-session hero and pipeline-style language
  signal "this person lives in this world," which a static PDF can't do.

## The problem with generic portfolio templates

Most developer portfolio templates default to one of two failure modes:

1. **Too generic** — could describe any full-stack dev, nothing distinctive.
2. **Style without substance** — flashy animation/3D that doesn't connect to
   what the person actually does.

We avoided both by grounding every visual choice in something literally true
about Agus's work:

- He works with **Prometheus/Grafana/New Relic** → the homepage hero reads
  like a monitoring/SSH session, not decorative terminal cosplay.
- He's deployed the same platforms (E-Office, E-Monev) across **many
  separate government institutions** → the infra node map visualizes that
  literal footprint, not a generic "global reach" cliché.
- He does both **application code and the infrastructure that runs it** →
  the color system uses amber (product/build) and teal (status/health) to
  keep that dual identity visible throughout.

## How someone is expected to use this site

**Fast path (most visitors):** land on hero → skim About stats → skim
Skills tags → skim Experience timeline → glance at Projects grid → maybe
download the CV or hit a contact link. All of this should be readable
without scrolling too far or clicking anything.

**Deep path (a subset of visitors, e.g. a technical interviewer):** click
"Case Study" on one of the three larger government projects (E-Office,
E-Monev, COVID GIS Tracking) → read Challenge/Approach/Outcome → see
screenshots → see the list of institutions it was actually deployed to →
back to the homepage.

Projects without a deep case study (Linguise, Shieldtag) instead link
straight out to the live product — because those are live products a
visitor can go look at directly, so a case study page would just be
duplicating what the real site already shows.

## Screenshot policy (why it matters)

Two of the three case-study projects (E-Monev, COVID GIS Tracking) are
internal government systems with no public URL — there is no legitimate way
to get a real screenshot of them from the outside. Rather than fabricate a
convincing-looking fake UI and present it as if it might be real, those
pages show an explicit "screenshot not available" placeholder with a note
explaining why, and instructions for where a real screenshot should go once
one is available. Honesty about what's real vs. placeholder was treated as
more important than making every case study look equally polished.

The one project where a primary source existed (a real user-guide PDF for
E-Office) had its actual product screenshots extracted from that document
and used directly — this is the standard to hold every future case study
to: real screenshot if a legitimate source exists, clearly-labeled
placeholder if it doesn't.

## Tone

First person ("I built...", "I led..."), direct, no filler adjectives. The
copy in `data/site.json` should sound like someone describing their own
work accurately, not marketing copy written about them.
