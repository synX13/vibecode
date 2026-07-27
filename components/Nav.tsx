import site from "@/data/site.json";

export default function Nav() {
  const { nav } = site;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <div className="font-mono text-sm font-semibold tracking-wide text-accent">
          {nav.logoPrefix}
          <span className="text-muted">{nav.logoSuffix}</span>
        </div>

        <nav className="hidden gap-7 font-mono text-[13px] md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-teal-soft bg-teal-soft px-3 py-[5px] font-mono text-xs text-teal">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-teal" />
          {nav.status}
        </div>
      </div>
    </header>
  );
}
