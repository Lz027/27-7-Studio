import { site } from "@/lib/site-content";

export function Journey() {
  return (
    <section id="journey" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">{site.journey.label}</span>
        </div>import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

export function Journey() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="journey" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.journey.label}</span>
        </div>
        <p
          ref={ref}
          className={`text-base leading-relaxed text-foreground/90 reveal ${
            inView ? "visible" : ""
          }`}
        >
          {site.journey.text}
        </p>
      </div>
    </section>
  );
}

        {/* Content Right */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans">
            {site.journey.text}
          </p>
        </div>
      </div>
    </section>
  );
}
