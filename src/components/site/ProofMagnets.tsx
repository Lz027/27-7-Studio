import { ArrowUpRight, FileText, Wrench } from "lucide-react";
import { site } from "@/lib/site-content";

const iconFor = (kind: string) =>
  kind === "Research" ? FileText : Wrench;

export function ProofMagnets() {
  return (
    <section className="px-6 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-display">Proof, not hype</h2>
          <p className="mt-3 text-muted-foreground">
            Research and free tools that show how the studio thinks.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.proof.map((p) => {
            const Icon = iconFor(p.kind);
            return (
              <a
                key={p.title}
                href={p.link}
                className="group stitch flex items-start gap-4 rounded-3xl bg-card p-6 transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-widest text-primary">
                    {p.kind}
                  </span>
                  <h3 className="mt-1 font-display text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 flex-none text-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
