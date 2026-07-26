import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";

export function Nav() {
  const { setMode } = useMode();

  return (
    <header className="sticky top-0 z-40 h-[52px] border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-700">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6">
        {/* Brand Left */}
        <div className="flex items-baseline gap-2">
          <a
            href="#top"
            className="font-display text-base font-bold text-foreground transition-colors hover:text-primary"
          >
            {site.brand}
          </a>
          <span className="text-xs text-muted-foreground hidden sm:inline">{site.byline}</span>
        </div>

        {/* Links Right */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => {
              setMode("studio");
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative text-foreground/80 transition-colors hover:text-foreground cursor-pointer"
          >
            Services
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            type="button"
            onClick={() => setMode("work")}
            className="group relative text-foreground/80 transition-colors hover:text-foreground cursor-pointer"
          >
            Work
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            type="button"
            onClick={() => setMode("about")}
            className="group relative text-foreground/80 transition-colors hover:text-foreground cursor-pointer"
          >
            About
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
          <a
            href="#contact"
            className="group relative text-foreground/80 transition-colors hover:text-foreground"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
      </div>
    </header>
  );
}
