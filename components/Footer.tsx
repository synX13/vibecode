import site from "@/data/site.json";

export default function Footer() {
  const { footer } = site;

  return (
    <footer className="border-t border-line py-7">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-2.5 px-6 font-mono text-xs text-muted">
        <span>{footer.copyright}</span>
        <a href={footer.cvHref} download className="text-muted hover:text-accent">
          {footer.cvLabel}
        </a>
      </div>
    </footer>
  );
}
