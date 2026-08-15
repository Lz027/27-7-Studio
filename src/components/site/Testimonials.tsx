import { useInView } from "@/hooks/useInView";

export function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">Testimonials</span>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`rounded-xl border border-border/40 bg-card/40 p-6 flex flex-col items-center text-center reveal ${
                inView ? "visible" : ""
              } reveal-delay-${Math.min(i, 4)} hover-lift`}
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 rounded-full bg-muted/60 border border-border/50 flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-muted-foreground/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>

              {/* Placeholder lines */}
              <div className="w-full space-y-2 mb-4">
                <div className="h-2 bg-muted/50 rounded-full w-3/4 mx-auto" />
                <div className="h-2 bg-muted/40 rounded-full w-full" />
                <div className="h-2 bg-muted/40 rounded-full w-5/6 mx-auto" />
              </div>

              {/* Name placeholder */}
              <div className="h-3 bg-muted/60 rounded-full w-1/2 mx-auto mt-auto" />
              <div className="h-2 bg-muted/35 rounded-full w-2/3 mx-auto mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
