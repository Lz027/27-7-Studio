import { site } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 px-6 text-xs text-muted-foreground transition-colors duration-700">
      <div className="mx-auto flex max-w-4xl items-center justify-start">
        <div>
          © 2026 {site.byline.replace("by ", "")} · {site.brand}
        </div>
      </div>
    </footer>
  );
}
