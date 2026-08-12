import { useState } from "react";
import { ArrowUpRight, FileText, BookOpen } from "lucide-react";
import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

const TYPE_ICON: Record<string, React.ReactNode> = {
  Paper: <FileText className="h-4 w-4" />,
  Guide: <BookOpen className="h-4 w-4" />,
};

export function Publications() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="publications" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.publications.label}</span>
        </div>

        <div ref={ref} className="space-y-3">
          {site.publications.items.map((item, i) => {
            const isHovered = hoveredIndex === i;
            const isExternal = item.url.startsWith("http");

            return (
              <div
                key={item.title}
                className={`group rounded-xl border border-border/50 bg-card/40 transition-all reveal ${
                  inView ? "visible" : ""
                } reveal-delay-${Math.min(i + 1, 4)} ${
                  isHovered ? "border-primary/30 shadow-sm" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main row */}
                <a
                  href={item.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 cursor-pointer"
                >
                  {/* Type icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isHovered
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {TYPE_ICON[item.type] || <FileText className="h-4 w-4" />}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-foreground leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {item.type} · {item.date}
                    </p>
                  </div>

                  {/* Action */}
                  <div
                    className={`flex items-center gap-1.5 shrink-0 text-[11px] font-medium transition-opacity ${
                      isHovered ? "opacity-100" : "opacity-60"
                    }`}
                    style={{ color: "var(--primary)" }}
                  >
                    <span className="hidden sm:inline">{item.action}</span>
                    <ArrowUpRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isHovered
                          ? "translate-x-0.5 -translate-y-0.5"
                          : ""
                      }`}
                    />
                  </div>
                </a>

                {/* Hover description panel */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isHovered ? 120 : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  <div className="mx-4 mb-4 rounded-lg border border-border/40 bg-background/90 p-3.5 backdrop-blur-sm">
                    <p className="text-xs leading-relaxed text-foreground/80">
                      {item.description.split(/(\+[\d.]+%)/g).map((part, idx) =>
                        /\+[\d.]+%/.test(part) ? (
                          <span
                            key={idx}
                            className="font-semibold"
                            style={{ color: "var(--primary)" }}
                          >
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
