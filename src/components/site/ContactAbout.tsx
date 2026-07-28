import { Mail, Linkedin, Phone } from "lucide-react";
import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

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

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover-glow"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>

            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover-lift"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={`https://wa.me/${site.contact.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover-lift"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
