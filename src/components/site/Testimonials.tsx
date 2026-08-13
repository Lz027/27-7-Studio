import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="testimonials" className="px-4 py-10 md:px-6 md:py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">Testimonials</span>
        </div>
        <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={`rounded-xl border border-border/60 bg-card/50 p-5 reveal ${
                inView ? "visible" : ""
              } reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <Quote className="h-4 w-4 text-primary/40 mb-3" />
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                "Client feedback coming soon..."
              </p>
              <div className="mt-4 pt-3 border-t border-border/40">
                <div className="h-8 w-8 rounded-full bg-muted/50 mb-2" />
                <p className="text-xs font-medium text-foreground">Client Name</p>
                <p className="text-[11px] text-muted-foreground">Role, Company</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
