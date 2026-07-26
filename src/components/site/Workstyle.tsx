import { site } from "@/lib/site-content";

export function Workstyle() {
  return (
    <section id="workstyle" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">{site.workstyle.label}</span>
        </div>

        {/* Content Right */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans">
            {site.workstyle.text}
          </p>
        </div>
      </div>
    </section>
  );
}
