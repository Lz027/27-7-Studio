import { site } from "@/lib/site-content";

export function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="stitch aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-accent/70 to-primary/20 shadow-squeeze">
            <div className="flex h-full items-center justify-center p-8 text-center">
              <span className="font-display text-primary/70 text-base">
                {site.about.photo}
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-widest text-primary">About</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display">{site.about.heading}</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{site.about.body}</p>

          <blockquote className="mt-6 stitch bg-card p-5">
            <p className="font-display text-lg text-primary">
              “{site.about.motto}”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
