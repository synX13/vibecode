import site from "@/data/site.json";

export default function Skills() {
  const { skills } = site;

  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-2.5 font-mono text-xs uppercase tracking-[1.5px] text-accent">
          {skills.label}
        </div>
        <h2 className="mb-9 max-w-[20ch] font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.5px]">
          {skills.title}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skills.groups.map((g) => (
            <div
              key={g.title}
              className="rounded border border-line bg-surface p-[26px]"
            >
              <h3 className="mb-4 flex items-center gap-2 font-mono text-[13px] uppercase tracking-wide text-teal before:content-['▹']">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-surface2 px-[11px] py-1.5 font-mono text-xs text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
