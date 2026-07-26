import { site } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 px-6 text-xs text-muted-foreground transition-colors duration-700">
      <div className="mx-auto flex max-w-4xl flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 {site.byline.replace("by ", "")} · {site.brand}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={site.contact.shoseki}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Shoseki
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
