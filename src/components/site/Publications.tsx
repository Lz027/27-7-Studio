import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

export function Publications() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="publications" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.publications.label}</span>
        </div>

        <div ref={ref} className="space-y-4">
          {site.publications.items.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center justify-between rounded-lg border border-border/50 bg-card/40 p-4 transition-all hover:bg-card hover:border-border reveal ${
                inView ? "visible" : ""
              } reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.type} · {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
