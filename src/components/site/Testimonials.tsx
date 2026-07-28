import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const TESTIMONIALS = [
  {
    quote:
      "Ahmed built our site in 48 hours. It looks like we spent $10k. Customers actually compliment the design now.",
    name: "Sarah Chen",
    role: "Cafe Owner, Jakarta",
  },
  {
    quote:
      "The systems thinking approach saved us months of headaches. Everything just flows.",
    name: "Mike Hartono",
    role: "Logistics Startup Founder",
  },
  {
    quote:
      "Finally, a developer who understands small business budgets and delivers without the fluff.",
    name: "Linda Wijaya",
    role: "Boutique Owner",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">Testimonials</span>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-xl border border-border/50 bg-card/50 p-5 reveal ${
                inView ? "visible" : ""
              } reveal-delay-${Math.min(i + 1, 4)} hover-lift`}
            >
              <Quote className="h-5 w-5 text-primary/40 mb-3" />
              <p className="text-sm leading-relaxed text-foreground/80 mb-4">
                "{t.quote}"
              </p>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
