import { createFileRoute } from "@tanstack/react-router";
import { ModeProvider, useMode } from "@/components/site/ModeContext";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Services } from "@/components/site/Services";
import { Workstyle } from "@/components/site/Workstyle";
import { Projects } from "@/components/site/Projects";
import { Biography } from "@/components/site/Biography";
import { Journey } from "@/components/site/Journey";
import { Publications } from "@/components/site/Publications";
import { ContactAbout } from "@/components/site/ContactAbout";
import { Footer } from "@/components/site/Footer";

const TITLE = "Ahmed Baghni — 27/7 Studio";
const DESCRIPTION =
  "27/7 Studio by Ahmed Baghni — A 3-mode editorial portfolio for small business web development, systems thinking, and product design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <ModeProvider>
      <IndexContent />
    </ModeProvider>
  );
}

function IndexContent() {
  const { mode } = useMode();

  return (
    <div data-mode={mode} className="min-h-screen bg-background text-foreground transition-colors duration-700">
      <Nav />
      <main className="mx-auto max-w-4xl">
        <Hero />

        {mode === "studio" && (
          <>
            <Mission />
            <Services />
          </>
        )}

        {mode === "work" && (
          <>
            <Workstyle />
            <Projects />
          </>
        )}

        {mode === "about" && (
          <>
            <Biography />
            <Journey />
            <Publications />
            <ContactAbout />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
