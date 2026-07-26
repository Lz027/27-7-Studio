import { BookOpen } from "lucide-react";
import { site } from "@/lib/site-content";

export function Publications() {
  return (
    <section id="publications" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">{site.publications.label}</span>
        </div>

        {/* Library Shelf Layout Right */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {site.publications.items.map((pub) => (
            <div
              key={pub.title}
              className="group flex flex-col justify-between rounded-xl bg-card border border-border/60 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Book Spine / Cover Header */}
              <div>
                <div className="flex h-20 w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-accent/30 to-primary/10 border border-primary/20 p-3 text-primary">
                  <BookOpen className="h-6 w-6 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {pub.type}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">{pub.date}</span>
                </div>

                <h3 className="mt-1.5 text-xs font-bold font-display text-foreground leading-snug">
                  {pub.title}
                </h3>
              </div>

              <div className="mt-4 pt-2 border-t border-border/40 text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                View entry →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
