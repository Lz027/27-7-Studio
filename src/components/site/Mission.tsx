import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

const STATS = [
  { value: "27%", label: "of US small businesses have no website" },
  { value: "9M", label: "businesses invisible online" },
  { value: "81%", label: "of consumers research before buying" },
  { value: "94%", label: "of first impressions are design-based" },
  { value: "$17K", label: "avg. annual revenue lost without a site" },
];

export function Mission() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="mission" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.mission.label}</span>
        </div>

        <div ref={ref} className="space-y-8">
          <p
            className={`text-base leading-relaxed text-foreground/90 reveal ${
              inView ? "visible" : ""
            }`}
          >
            {site.mission.text}
          </p>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.value}
                className={`rounded-xl border border-border/50 bg-card/50 p-4 text-center reveal ${
                  inView ? "visible" : ""
                } reveal-delay-${Math.min(i + 1, 4)} hover-lift`}
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
