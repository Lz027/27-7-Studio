import { Check } from "lucide-react";
import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";
import { useInView } from "@/hooks/useInView";

export function Services() {
  const { setMode } = useMode();
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="services" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.services.label}</span>
        </div>

        <div ref={ref} className="space-y-6">
          {/* Banner */}
          <div
            className={`rounded-lg bg-card/80 p-3 text-center sm:text-left border border-border/50 reveal ${
              inView ? "visible" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setMode("work")}
              className="text-sm font-medium text-primary hover:underline cursor-pointer"
            >
              {site.services.banner}
            </button>
          </div>

          {/* Tier Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {site.services.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-xl p-5 border hover-lift reveal ${
                  inView ? "visible" : ""
                } reveal-delay-${Math.min(i + 1, 4)} ${
                  tier.featured
                    ? "border-primary/60 bg-card shadow-sm"
                    : "border-border/60 bg-card/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground font-sans">
                      {tier.name}
                    </h3>
                    <span className="text-sm font-bold text-primary font-display">
                      {tier.price}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {tier.blurb}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/40 text-xs text-foreground/80 space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{tier.included}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="text-[11px] font-medium text-muted-foreground">
                    Timeline: {tier.delivery}
                  </div>
                  <a
                    href="#contact"
                    className="block w-full text-center rounded-md bg-primary/10 text-primary text-sm font-medium py-2 transition-all hover:bg-primary hover:text-primary-foreground hover-glow"
                  >
                    {tier.price === "Custom" ? "Get in Touch" : "Get Started"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
