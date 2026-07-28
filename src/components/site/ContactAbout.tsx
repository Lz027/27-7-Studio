import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";
import { Mail, ExternalLink } from "lucide-react";

export function ContactAbout() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.contact.label}</span>
        </div>

        <div ref={ref} className={`space-y-6 reveal ${inView ? "visible" : ""}`}>
          <p className="text-base leading-relaxed text-foreground/90 max-w-xl">
            {site.contact.intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover-glow"
            >
              <Mail className="h-4 w-4" />
              {site.contact.email}
            </a>

            <a
              href={site.contact.shoseki}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover-lift"
            >
              <ExternalLink className="h-4 w-4" />
              Shoseki
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
