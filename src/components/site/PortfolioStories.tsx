import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site-content";

function BrowserMock({ index }: { index: number }) {
  // CSS-drawn browser frame placeholder — no image gen for V1.
  const tints = [
    "from-primary/25 to-accent/60",
    "from-accent/70 to-primary/20",
    "from-primary/30 to-primary/10",
  ];
  return (
    <div className="stitch overflow-hidden rounded-3xl bg-card shadow-squeeze">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
      </div>
      <div className={`aspect-[4/3] w-full bg-gradient-to-br ${tints[index % tints.length]}`}>
        <div className="flex h-full items-center justify-center p-8 text-center">
          <span className="font-display text-primary/70 text-lg">
            [PLACEHOLDER: preview]
          </span>
        </div>
      </div>
    </div>
  );
}

export function PortfolioStories() {
  return (
    <section id="work" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-display">Work</h2>
          <p className="mt-3 text-muted-foreground">{site.portfolio.intro}</p>
        </div>

        <div className="mt-14 space-y-20">
          {site.portfolio.items.map((item, i) => {
            const flipped = i % 2 === 1; // right-left-right rhythm
            return (
              <article
                key={i}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <div className={flipped ? "md:order-2" : "md:order-1"}>
                  <BrowserMock index={i} />
                </div>
                <div className={flipped ? "md:order-1" : "md:order-2"}>
                  <span className="text-xs uppercase tracking-widest text-primary">
                    Project 0{i + 1}
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-display">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.type}</p>

                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                        Before
                      </dt>
                      <dd className="mt-1 text-foreground/85">{item.before}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                        After
                      </dt>
                      <dd className="mt-1 text-foreground/85">{item.after}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                        Lesson
                      </dt>
                      <dd className="mt-1 text-foreground/85">{item.lesson}</dd>
                    </div>
                  </dl>

                  <a
                    href={item.link}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Visit site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
