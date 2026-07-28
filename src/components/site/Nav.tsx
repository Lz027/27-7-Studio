import { site } from "@/lib/site-content";
import { useMode } from "./ModeContext";

export function Nav() {
  const { mode, setMode } = useMode();

  const navItems = [
    { label: "Services", mode: "studio" as const, scrollTo: "services" },
    { label: "Work", mode: "work" as const },
    { label: "About", mode: "about" as const },
  ];

  const handleContact = () => {
    setMode("about");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 h-[52px] border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-700">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-baseline gap-2">
          <a
            href="#top"
            className="font-display text-base font-bold text-foreground transition-colors hover:text-primary"
          >
            {site.brand}
          </a>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            {site.byline}
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.mode}
              type="button"
              onClick={() => {
                setMode(item.mode);
                if (item.scrollTo) {
                  setTimeout(() => {
                    const el = document.getElementById(item.scrollTo);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }
              }}
              className={`group relative cursor-pointer transition-colors ${
                mode === item.mode
                  ? "text-foreground"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  mode === item.mode ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          <button
            type="button"
            onClick={handleContact}
            className="group relative text-foreground/80 transition-colors hover:text-foreground cursor-pointer"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>
      </div>
    </header>
  );
}
