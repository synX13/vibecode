import site from "@/data/site.json";
import { renderRich } from "@/lib/richText";

export default function About() {
  const { about, stats } = site;

  return (
    <section id="about" className="py-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-2.5 font-mono text-xs uppercase tracking-[1.5px] text-accent">
            {about.label}
          </div>
          <h2 className="mb-9 max-w-[20ch] font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.5px]">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-[15px] text-muted last:mb-0">
              {renderRich(p)}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <div className="font-display text-[30px] font-bold text-accent">
                {s.num}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
