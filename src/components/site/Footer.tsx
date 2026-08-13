import { site } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto max-w-4xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Baghni · {site.brand}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
