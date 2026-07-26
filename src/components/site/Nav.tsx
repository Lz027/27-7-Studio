import { site } from "@/lib/site-content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl text-primary">{site.brand}</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">{site.byline}</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
