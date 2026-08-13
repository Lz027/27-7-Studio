import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";
import { ModeSwitch } from "./ModeSwitch";

export function Hero() {
  const { mode } = useMode();
  const content = site.hero[mode];

  return (
    <section id="hero" className="relative px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              {content.label}
            </p>
            <h1
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--primary)" }}
            >
              {content.title}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:mx-0">
              {content.subtitle}
            </p>
            <a
              href={content.cta.href}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary/10 px-5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              {content.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mode-switcher flex-shrink-0">
            <ModeSwitch />
          </div>
        </div>
      </div>
    </section>
  );
}
