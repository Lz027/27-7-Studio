import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-content";

export function Projects() {
  const [proj1, proj2, proj3] = site.projects.items;

  return (
    <section id="projects" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">{site.projects.label}</span>
        </div>

        {/* Content Right */}
        <div className="space-y-8">
          {/* Asymmetric Layout: 2 stacked on left column, 3rd spanning/offset right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Proj 1 & Proj 2 */}
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="group rounded-xl bg-card p-5 border border-border/60 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{proj1.year}</span>
                  <a
                    href={proj1.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/60 transition-colors group-hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-2 text-lg font-bold font-display text-foreground">{proj1.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {proj1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-accent/60 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {proj1.description}
                </p>
              </div>

              {/* Project 2 */}
              <div className="group rounded-xl bg-card p-5 border border-border/60 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{proj2.year}</span>
                  <a
                    href={proj2.link}
                    className="text-foreground/60 transition-colors group-hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-2 text-lg font-bold font-display text-foreground">{proj2.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {proj2.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-accent/60 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {proj2.description}
                </p>
              </div>
            </div>

            {/* Column 2: Proj 3 (Offset/Asymmetric position) */}
            <div className="md:pt-8">
              <div className="group rounded-xl bg-card p-5 border border-primary/40 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{proj3.year}</span>
                  <a
                    href={proj3.link}
                    className="text-foreground/60 transition-colors group-hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-2 text-lg font-bold font-display text-foreground">{proj3.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {proj3.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-accent/60 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {proj3.description}
                </p>
              </div>
            </div>
          </div>

          {/* Compact footer line */}
          <div className="text-center md:text-left text-xs text-muted-foreground pt-2">
            Notes, experiments, and documentation live here too.
          </div>
        </div>
      </div>
    </section>
  );
}
