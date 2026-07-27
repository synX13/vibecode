import site from "@/data/site.json";

export default function Experience() {
  const { experience } = site;
  const { roles } = experience;

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-2.5 font-mono text-xs uppercase tracking-[1.5px] text-accent">
          {experience.label}
        </div>
        <h2 className="mb-9 max-w-[20ch] font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.5px]">
          {experience.title}
        </h2>

        <div className="relative pl-7 before:absolute before:bottom-1.5 before:left-[5px] before:top-1.5 before:w-px before:bg-line">
          {roles.map((r, i) => (
            <div
              key={r.org}
              className={`relative ${i === roles.length - 1 ? "" : "pb-10"}`}
            >
              <div
                className={`absolute -left-7 top-1 h-[11px] w-[11px] rounded-full border-2 bg-bg ${
                  r.current
                    ? "border-teal bg-teal shadow-[0_0_0_4px_#35A98C22]"
                    : "border-accent"
                }`}
              />
              <div className="mb-1.5 font-mono text-xs text-muted">
                {r.period}
              </div>
              <div className="mb-[3px] font-display text-[19px] font-semibold">
                {r.role}
              </div>
              <div className="mb-3 font-mono text-[13px] text-accent">
                {r.org}
              </div>
              <ul className="list-disc space-y-1.5 pl-[18px] text-[14.5px] text-muted">
                {r.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
