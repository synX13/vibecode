import site from "@/data/site.json";
import { renderRich } from "@/lib/richText";

export default function Hero() {
  const { hero } = site;

  return (
    <section className="pt-[72px] pb-10">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-[18px] flex items-center gap-[10px] font-mono text-xs uppercase tracking-widest text-muted">
            <span className="h-px w-6 bg-accent" />
            {hero.eyebrow}
          </div>

          <h1 className="mb-3.5 font-display text-[clamp(38px,6vw,58px)] font-bold leading-[1.05] tracking-[-1px]">
            {hero.nameFirst} <span className="text-accent">{hero.nameLast}</span>
          </h1>

          <div className="mb-[22px] font-mono text-base text-muted">
            {renderRich(hero.roleLine)}
          </div>

          <p className="mb-8 max-w-[46ch] text-[16px] text-muted">{hero.lede}</p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-[22px] py-[13px] text-sm font-semibold text-[#171208] transition-transform hover:-translate-y-0.5 hover:bg-[#e6b25c]"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line px-[22px] py-[13px] text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:border-accent"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded border border-line bg-surface shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-xs text-muted">
              {hero.terminal.windowTitle}
            </span>
          </div>
          <div className="min-h-[260px] p-5 font-mono text-[13px] text-[#B7C0D1]">
            {hero.terminal.lines.map((l, i) => (
              <p
                key={i}
                className="mb-2 animate-fadeIn opacity-0"
                style={{ animationDelay: `${l.delay}s` }}
              >
                {renderRich(l.text)}
                {l.cursor && (
                  <span className="ml-1 inline-block h-[14px] w-[7px] animate-blink align-middle bg-accent" />
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
