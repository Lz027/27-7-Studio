import { site } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-primary/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg text-primary">{site.brand}</span>
          <span className="text-xs text-muted-foreground">{site.byline}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.brand}. Tech as a tool, business as the game.
        </p>
      </div>
    </footer>
  );
}
