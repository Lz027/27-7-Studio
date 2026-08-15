import { useState, useEffect } from "react";
import { X } from "lucide-react";
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
    <>
      <nav
        className={`sticky top-0 z-40 h-[52px] border-b transition-colors duration-300 ${
          scrolled
            ? "border-border/60 bg-background/90"
            : "border-transparent bg-background/60"
        } backdrop-blur-xl`}
      >
        <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-4 md:px-6">
          {/* Mobile: brand name opens side drawer */}
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-bold tracking-tight text-foreground md:hidden"
          >
            {site.brand}
          </button>

          {/* Desktop: brand + byline */}
          <a href="/" className="hidden items-baseline gap-2 md:flex">
            <span className="text-sm font-bold tracking-tight text-foreground">
              {site.brand}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {site.byline}
            </span>
          </a>

          {/* Desktop links */}
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
        </div>
      </nav>

      {/* Mobile side drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-background border-r border-border shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-[52px] items-center justify-between border-b border-border px-4">
            <span className="text-sm font-bold">{site.brand}</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
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
      </div>
    </>
  );
}
