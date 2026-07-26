import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site-content";

export function Hero() {
  const { title, subtitle, support, primaryCta, secondaryCta } = site.hero;
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* soft magenta orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/60 blur-3xl"
      />

      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full stitch px-4 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {site.brand} {site.byline}
        </span>

        <h1 className="mt-6 text-4xl leading-[1.05] font-display text-foreground sm:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">{subtitle}</p>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">{support}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-squeeze transition-transform hover:-translate-y-0.5"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full stitch bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
