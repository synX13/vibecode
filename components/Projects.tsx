import site from "@/data/site.json";

export default function Projects() {
  const { projects } = site;

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-2.5 font-mono text-xs uppercase tracking-[1.5px] text-accent">
          {projects.label}
        </div>
        <h2 className="mb-9 max-w-[24ch] font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.5px]">
          {projects.title}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.items.map((p) => (
            <div
              key={p.title}
              className="rounded border border-line bg-surface p-[26px] transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="mb-3.5 flex items-start justify-between">
                <span className="rounded-full bg-teal-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-teal">
                  {p.kind}
                </span>
              </div>
              <h3 className="mb-2.5 font-display text-[19px]">{p.title}</h3>
              <p className="mb-3.5 text-sm text-muted">{p.desc}</p>
              {p.impl && (
                <div className="mb-3.5 text-[12.5px] text-muted">
                  <b className="font-medium text-ink">Implementations: </b>
                  {p.impl}
                </div>
              )}
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12.5px] text-accent hover:underline"
                >
                  {p.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
