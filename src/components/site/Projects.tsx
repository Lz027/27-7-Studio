import { ArrowUpRight, ExternalLink } from "lucide-react";
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

        <div ref={ref} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {site.projects.items.map((proj, i) => (
              <ProjectCard
                key={proj.name}
                project={proj}
                inView={inView}
                delay={i + 1}
              />
            ))}
          </div>

          <div
            className={`text-xs text-muted-foreground pt-2 reveal ${
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
}: {
  project: (typeof site.projects.items)[0];
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      className={`group rounded-2xl bg-card border p-5 transition-all duration-300 hover:-translate-y-1 reveal ${
        inView ? "visible" : ""
      } reveal-delay-${Math.min(delay, 4)}`}
      style={{
        borderColor: `${project.color}22`,
        boxShadow: `0 1px 3px ${project.color}08`,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.boxShadow = `0 8px 24px -6px ${project.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${project.color}22`;
        e.currentTarget.style.boxShadow = `0 1px 3px ${project.color}08`;
      }}
    >
      {/* Header: Logo + Title */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
          style={{
            background: `${project.color}12`,
            border: `1px solid ${project.color}20`,
          }}
        >
          {project.logo ? (
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="w-7 h-7 object-contain"
              loading="lazy"
            />
          ) : (
            <div
              className="w-7 h-7 rounded-lg"
              style={{ background: project.color }}
            />
          )}
        </div>

        {/* Title + Year */}
        <div className="min-w-0">
          <h3 className="text-base font-bold font-display text-foreground leading-tight">
            {project.name}
          </h3>
          <span className="text-[10px] font-mono text-muted-foreground">
            {project.year}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md px-2 py-0.5 text-[10px] font-medium"
            style={{
              background: `${project.color}12`,
              color: project.color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {/* Visit Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium transition-colors group/link"
        style={{ color: project.color }}
      >
        <span>Visit project</span>
        <ExternalLink className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
      </a>
    </div>
  );
}
