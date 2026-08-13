import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

export function Mission() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="mission" className="px-4 py-10 md:px-6 md:py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.mission.label}</span>
        </div>
        <div ref={ref} className={`reveal ${inView ? "visible" : ""}`}>
          <p className="text-sm leading-relaxed text-foreground/80">
            {site.mission.text}
          </p>
        </div>
      </div>
    </section>
  );
}
