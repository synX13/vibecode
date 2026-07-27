import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import site from "@/data/site.json";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(site.caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const study = (site.caseStudies as Record<string, any>)[params.slug];
  if (!study) return {};
  return {
    title: `${study.title} — Agus Wikamto`,
    description: study.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = (site.caseStudies as Record<string, any>)[params.slug];
  if (!study) notFound();

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
          <div className="font-mono text-sm font-semibold tracking-wide text-accent">
            aw<span className="text-muted">/13</span>
          </div>
          <Link
            href="/#projects"
            className="font-mono text-[13px] text-muted transition-colors hover:text-ink"
          >
            ← Back to Projects
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[860px] px-6 py-16">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-teal-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-teal">
            {study.kind}
          </span>
        </div>

        <h1 className="mb-5 font-display text-[clamp(28px,5vw,42px)] font-bold leading-tight tracking-[-0.5px]">
          {study.title}
        </h1>

        <p className="mb-8 text-[16px] leading-relaxed text-muted">
          {study.description}
        </p>

        <div className="mb-12 flex flex-wrap gap-2">
          {study.techStack.map((t: string) => (
            <span
              key={t}
              className="rounded-md border border-line bg-surface2 px-[11px] py-1.5 font-mono text-xs text-ink"
            >
              {t}
            </span>
          ))}
        </div>

        {/* screenshots */}
        <div className="mb-14 space-y-6">
          {study.screenshots.map(
            (s: { src: string; alt: string; width: number; height: number }) => (
              <div
                key={s.src}
                className="overflow-hidden rounded border border-line bg-surface"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  unoptimized={s.src.endsWith(".svg")}
                  className="h-auto w-full"
                />
              </div>
            )
          )}
          <p className="font-mono text-xs text-muted">{study.screenshotsNote}</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[1.5px] text-accent">
            The Challenge
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            {study.challenge}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[1.5px] text-accent">
            Approach
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            {study.approach}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[1.5px] text-accent">
            Outcome
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            {study.outcome}
          </p>
        </section>

        <section className="mb-16 rounded border border-line bg-surface p-6">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[1.5px] text-accent">
            Implementations
          </h2>
          <ul className="grid list-disc grid-cols-1 gap-2 pl-5 text-sm text-muted sm:grid-cols-2">
            {study.implementations.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-[22px] py-[13px] text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:border-accent"
        >
          ← Back to Projects
        </Link>
      </article>

      <footer className="border-t border-line py-7">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-2.5 px-6 font-mono text-xs text-muted">
          <span>{site.footer.copyright}</span>
          <a href={site.footer.cvHref} download className="text-muted hover:text-accent">
            {site.footer.cvLabel}
          </a>
        </div>
      </footer>
    </main>
  );
}
