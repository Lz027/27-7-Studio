import { site } from "@/lib/site-content";

export function Mission() {
  return (
    <section id="mission" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        {/* Sticky Label Left */}
        <div>
          <span className="section-label">
            {site.mission.label}
          </span>
        </div>

        {/* Content Right */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans">
            Small businesses are the backbone of every economy, yet{" "}
            <strong className="font-semibold text-foreground">
              27% of them in the United States still operate without a website in 2026
            </strong>
            . That is nearly{" "}
            <strong className="font-semibold text-foreground">9 million businesses</strong>{" "}
            invisible to the{" "}
            <strong className="font-semibold text-foreground">
              81% of consumers who research online before making a purchase
            </strong>
            . First impressions are formed in milliseconds, and{" "}
            <strong className="font-semibold text-foreground">
              94% of those impressions are tied directly to website design
            </strong>
            . A business without a strong web presence does not just miss clicks — it misses trust,
            credibility, and revenue. The average small business without a website loses approximately{" "}
            <strong className="font-semibold text-primary">
              $17,000 in annual revenue
            </strong>
            . I started 27/7 Studios to close that gap. I build simple, credible, launch-ready
            websites that help small businesses look real online, earn trust faster, and turn
            browsers into buyers.
          </p>
        </div>
      </div>
    </section>
  );
}
