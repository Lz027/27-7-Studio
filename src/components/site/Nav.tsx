import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site-content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 h-[52px] border-b transition-colors duration-300 ${
        scrolled ? "border-border/60 bg-background/90" : "border-transparent bg-background/60"
      } backdrop-blur-xl`}
    >
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-bold tracking-tight text-foreground">
            {site.brand}
          </span>
          <span className="hidden text-[11px] text-muted-foreground sm:inline">
            {site.byline}
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
