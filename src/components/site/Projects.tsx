import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.projects.label}</span>
        </div>

        <div ref={ref} className="space-y-8">
          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {site.projects.items.slice(0, 2).map((proj, i) => (
                <ProjectCard
                  key={proj.name}
                  project={proj}
                  inView={inView}
                  delay={i + 1}
                />
              ))}
            </div>

            {/* Right Column (offset) */}
            <div className="md:pt-8">
              {site.projects.items.slice(2, 3).map((proj) => (
                <ProjectCard
                  key={proj.name}
                  project={proj}
                  inView={inView}
                  delay={3}
                  featured
                />
              ))}
            </div>
          </div>

          <div
            className={`text-center md:text-left text-xs text-muted-foreground pt-2 reveal ${
              inView ? "visible" : ""
            } reveal-delay-4`}
          >
            Notes, experiments, and documentation live here too.
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  inView,
  delay,
  featured,
}: {
  project: (typeof site.projects.items)[0];
  inView: boolean;
  delay: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`group rounded-xl bg-card p-5 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg reveal ${
        inView ? "visible" : ""
      } reveal-delay-${Math.min(delay, 4)} ${
        featured ? "border-primary/40" : "border-border/60"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-mono text-muted-foreground">
          {project.year}
        </span>
        {project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 transition-colors group-hover:text-primary"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>

      <h3 className="mt-2 text-lg font-bold font-display text-foreground">
        {project.name}
      </h3>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-accent/60 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}
