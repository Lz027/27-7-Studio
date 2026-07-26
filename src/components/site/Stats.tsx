import { site } from "@/lib/site-content";

export function Stats() {
  return (
    <section className="px-6 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-display">By the numbers</h2>
          <p className="mt-3 text-muted-foreground">{site.stats.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5">
          {site.stats.items.map((s) => (
            <div
              key={s.label}
              className="stitch bg-card p-5 text-center transition-transform hover:-translate-y-0.5"
            >
              <div className="font-display text-3xl text-primary">{s.value}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
