import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TheaterBar } from "@/components/site/TheaterBar";
import { PortfolioStories } from "@/components/site/PortfolioStories";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { ProofMagnets } from "@/components/site/ProofMagnets";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "27/7 Studios by Ahmed Baghni — Creative websites for small businesses";
const DESCRIPTION =
  "27/7 Studios by Ahmed Baghni designs small business websites, landing pages, and online presence with a focus on UI/UX, AI-assisted frontend logic, and clear, trustworthy brand structure.";

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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TheaterBar />
        <PortfolioStories />
        <Stats />
        <Services />
        <About />
        <ProofMagnets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
