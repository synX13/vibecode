import site from "@/data/site.json";

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="rounded border border-line bg-surface p-12 text-center">
          <h2 className="mb-2.5 font-display text-[clamp(26px,4vw,36px)] font-semibold tracking-[-0.5px]">
            {contact.title}
          </h2>
          <p className="mx-auto mb-7 max-w-[48ch] text-muted">
            {contact.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            {contact.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg border border-line px-[18px] py-[11px] font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
