import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";
import { ModeSwitch } from "./ModeSwitch";

export function Hero() {
  const { mode } = useMode();
  const heroContent = site.hero[mode];

  return (
    <section id="top" className="relative px-6 pt-10 pb-8 sm:pt-14 sm:pb-12 mode-burst-bg">
      <div className="relative z-10 mx-auto max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Left Column */}
        <div className="flex-1 reveal visible min-w-0">
          <h1 className="text-3xl font-display leading-[1.1] text-primary sm:text-5xl transition-colors duration-700">
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

        {/* Right Column — Gauge */}
        <div className="flex items-center justify-center md:justify-end reveal visible reveal-delay-1 shrink-0">
          <ModeSwitch />
        </div>
      </div>
    </section>
  );
}
