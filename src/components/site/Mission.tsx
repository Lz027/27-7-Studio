import { site } from "@/lib/site-content";
import { useInView } from "@/hooks/useInView";

export function Mission() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="mission" className="px-6 py-12 border-t border-border/40">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
        <div>
          <span className="section-label">{site.mission.label}</span>
        </div>

        <div ref={ref} className="space-y-8">
          <p
            className={`text-base leading-relaxed text-foreground/90 reveal ${
              inView ? "visible" : ""
            }`}
          >
            Small businesses are the backbone of every economy, yet{" "}
            <span className="text-primary font-semibold">27%</span> of them in
            the United States still operate without a website in 2026. That is
            nearly <span className="text-primary font-semibold">9 million</span>{" "}
            businesses invisible to the{" "}
            <span className="text-primary font-semibold">81%</span> of
            consumers who research online before making a purchase. First
            impressions are formed in milliseconds, and{" "}
            <span className="text-primary font-semibold">94%</span> of those
            impressions are tied directly to website design. A business without
            a strong web presence does not just miss clicks — it misses trust,
            credibility, and revenue. The average small business without a
            website loses approximately{" "}
            <span className="text-primary font-semibold">$17,000</span> in annual
            revenue. I started 27/7 Studio to close that gap. I build simple,
            credible, launch-ready websites that help small businesses look real
            online, earn trust faster, and turn browsers into buyers.
          </p>
        </div>
      </div>
    </section>
  );
}
