import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="projects" className="px-4 py-10 md:px-6 md:py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.projects.label}</span>
        </div>
        <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {site.projects.items.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`group rounded-xl border border-border/60 bg-card/50 p-5 transition-all hover-lift reveal ${
                inView ? "visible" : ""
              } reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-medium text-muted-foreground font-mono">
                  {project.year}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="h-11 w-11 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {project.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium border"
                    style={{
                      borderColor: `${project.color}30`,
                      color: project.color,
                      backgroundColor: `${project.color}08`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-1 text-[11px] font-medium text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                Visit project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
