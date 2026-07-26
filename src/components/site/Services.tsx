import { Check } from "lucide-react";
import { site } from "@/lib/site-content";

export function Services() {
  return (
    <section id="services" className="px-6 py-20 sm:py-28 bg-card/60">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-display">Services</h2>
          <p className="mt-3 text-muted-foreground">{site.services.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.services.tiers.map((t) => (
            <div
              key={t.name}
              className={
                "flex flex-col rounded-3xl bg-card p-7 transition-transform hover:-translate-y-1 " +
                (t.featured
                  ? "stitch-strong shadow-squeeze"
                  : "stitch")
              }
            >
              {t.featured && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl text-primary">{t.price}</span>
              </div>
              <p className="mt-3 text-sm text-foreground/80">{t.blurb}</p>

              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span className="text-foreground/85">{t.included}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span className="text-foreground/85">Delivery: {t.delivery}</span>
                </li>
              </ul>

              <a
                href="#contact"
                className={
                  "mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                  (t.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "stitch bg-background text-foreground hover:bg-accent")
                }
              >
                Start with {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
