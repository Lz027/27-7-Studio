import { site } from "@/lib/site-content";

export function ContactAbout() {
  return (
    <section id="contact" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">{site.contact.label}</span>
        </div>

        {/* Content Right */}
        <div className="space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans">
            {site.contact.intro}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-medium">
            <a href={`mailto:${site.contact.email}`} className="highlight-link">
              {site.contact.email}
            </a>
            <a
              href={site.contact.shoseki}
              target="_blank"
              rel="noreferrer"
              className="highlight-link"
            >
              Shoseki (250 Tools)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
