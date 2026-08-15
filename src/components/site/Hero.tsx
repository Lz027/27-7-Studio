import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";
import { ModeSwitch } from "./ModeSwitch";

export function Hero() {
  const { mode } = useMode();
  const content = site.hero[mode];

  return (
    <section id="hero" className="relative px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Mobile: wheel absolute top-right. Desktop: side-by-side flex */}
        <div className="relative md:flex md:flex-row-reverse md:items-start md:gap-12">
          {/* Mode switcher */}
          <div className="absolute right-0 top-0 z-10 md:static md:flex-shrink-0">
            <div className="mode-switcher">
              <ModeSwitch />
            </div>
          </div>

          {/* Text content */}
          <div className="pt-40 md:pt-0 md:flex-1">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              {content.label}
            </p>
            <h1
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--primary)" }}
            >
              {content.title}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {content.subtitle}
            </p>
            <a
              href={content.cta.href}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-primary/10 px-5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              {content.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
