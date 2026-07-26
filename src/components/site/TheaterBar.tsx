import { site } from "@/lib/site-content";

export function TheaterBar() {
  // Duplicate the list so the marquee can loop seamlessly (-50%).
  const doubled = [...site.checklist, ...site.checklist];
  return (
    <section
      aria-label="What we bring"
      className="border-y border-primary/30 bg-card py-4 overflow-hidden"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {doubled.map((word, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-lg text-foreground">{word}</span>
            <span aria-hidden className="text-primary/70">
              {/* stitched dash */}
              ✦ ─ ─ ─
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
