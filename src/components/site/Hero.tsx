import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";
import { ModeSwitch } from "./ModeSwitch";

export function Hero() {
  const { mode } = useMode();
  const heroContent = site.hero[mode];

  return (
    <section id="top" className="relative px-6 pt-10 pb-8 sm:pt-14 sm:pb-12">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Left Column: Text & CTA */}
        <div className="flex-1 animate-fade-up">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {heroContent.label}
          </span>

          <h1 className="mt-3 text-3xl font-display leading-[1.1] text-foreground sm:text-5xl">
            {heroContent.title}
          </h1>

          <p className="mt-4 max-w-xl text-base text-foreground/80 leading-relaxed sm:text-lg">
            {heroContent.subtitle}
          </p>

          <div className="mt-6">
            <a
              href={heroContent.cta.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 group"
            >
              <span>{heroContent.cta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Mode Switch & Visual Reveal */}
        <div className="flex flex-col items-center justify-center md:items-end animate-fade-up-delay-1">
          <div className="flex flex-col items-center gap-4 bg-card/60 p-6 rounded-2xl border border-border/40 shadow-sm backdrop-blur-sm">
            <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
              Switch Mode
            </span>
            <ModeSwitch />
          </div>
        </div>
      </div>
    </section>
  );
}
