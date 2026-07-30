export const site = {
  brand: "27/7 Studio",
  byline: "by Ahmed Baghni",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    studio: {
      label: "Informatics Engineering · Indonesia",
      title: "Creative websites for small businesses.",
      subtitle:
        "I build simple, credible, launch-ready websites that help small businesses look real online, earn trust faster, and turn browsers into buyers.",
      cta: { label: "View Services", href: "#services" },
    },
    work: {
      label: "Selected Work & Systems",
      title: "Crafted with speed, clarity, and structure.",
      subtitle:
        "A selection of projects, curation systems, and technical research designed with hierarchy, flow, and attention to detail.",
      cta: { label: "Explore Projects", href: "#projects" },
    },
    about: {
      label: "Background & Philosophy",
      title: "Building at the intersection of AI, design & business.",
      subtitle:
        "Informatics Engineering student from Libya studying in Indonesia, building tools, researching systems, and helping small businesses succeed online.",
      cta: { label: "Read Biography", href: "#biography" },
    },
  },
  mission: {
    label: "Mission",
    text: "Small businesses are the backbone of every economy, yet 27% of them in the United States still operate without a website in 2026. That is nearly 9 million businesses invisible to the 81% of consumers who research online before making a purchase. First impressions are formed in milliseconds, and 94% of those impressions are tied directly to website design. A business without a strong web presence does not just miss clicks — it misses trust, credibility, and revenue. The average small business without a website loses approximately $17,000 in annual revenue. I started 27/7 Studio to close that gap. I build simple, credible, launch-ready websites that help small businesses look real online, earn trust faster, and turn browsers into buyers.",
  },
  services: {
    label: "Services",
    banner: "Want to see the work behind this? Switch to Work mode.",
    tiers: [
      {
        name: "Basic",
        price: "$29.99",
        blurb:
          "A focused entry option for small businesses that need to get online fast with a clean setup.",
        included: "Single-page responsive design, domain setup, mobile optimization, fast loading",
        delivery: "3-5 days",
        featured: false,
      },
      {
        name: "Full Expand",
        price: "$74.99",
        blurb: "Best for founders who want a larger presence with more flexibility.",
        included: "Multi-page design, custom CMS setup, SEO optimization, analytics integration",
        delivery: "7-10 days",
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        blurb: "For brands that need a custom solution and direct collaboration.",
        included: "Full brand design system, custom interactive features, ongoing support",
        delivery: "Custom timeline",
        featured: false,
      },
    ],
  },
  workstyle: {
    label: "Workstyle",
    text: "I work with speed, clarity, and structure. My process mixes creativity, frontend thinking, and practical judgment, so the result feels useful, sharp, and intentional. I build for people who need their work to feel clear, not crowded. That means I care about hierarchy, flow, and the small details that make a site feel trustworthy. Every project starts with understanding the real problem, then shaping the idea, then turning it into something people can actually use.",
  },
  projects: {
    label: "Projects",
    items: [
      {
        year: "2026",
        name: "Maylet",
        tags: ["Finance", "Dashboard", "Product Design"],
        description:
          "A minimalist, cycle-aware personal finance dashboard. Track your wallet, source of funds, savings, and expense spreads. Set daily, weekly, monthly, or open-ended budgets; schedule one-off or recurring expenses; and see how long your money will really last with ET Funds and ET Days forecasts.",
        link: "https://maylet.lovable.app",
        logo: "/maylet-logo.png",
        color: "#ff1a6b",
        theme: {
          bg: "#ff1a6b",
          text: "#ffffff",
          muted: "rgba(255,255,255,0.8)",
          tagBg: "rgba(255,255,255,0.15)",
          tagText: "#ffffff",
          logoBg: "rgba(255,255,255,0.2)",
          logoBorder: "rgba(255,255,255,0.3)",
          border: "rgba(255,255,255,0.25)",
        },
      },
      {
        year: "2026",
        name: "Bluberry OS",
        tags: ["Lead Gen", "Google Maps API", "Automation"],
        description:
          "A lead-generation system that finds local businesses through Google Maps data, organizes results, and turns them into outreach-ready leads. Search by niche and area, pull structured data like name, address, phone, website, and place ID, then filter and enrich for targeted outreach.",
        link: "https://bluberry-os.lovable.app",
        logo: "/bluberry-os-logo.png",
        color: "#7c3aed",
        theme: {
          bg: "#7c3aed",
          text: "#ffffff",
          muted: "rgba(255,255,255,0.8)",
          tagBg: "rgba(255,255,255,0.15)",
          tagText: "#ffffff",
          logoBg: "rgba(255,255,255,0.2)",
          logoBorder: "rgba(255,255,255,0.3)",
          border: "rgba(255,255,255,0.25)",
        },
      },
      {
        year: "2025",
        name: "Shoseki",
        tags: ["AI Directory", "Curation", "Product Design"],
        description:
          "A curated AI tools directory with 250+ tools across 15+ categories. Each tool lives in its own card with a hover effect that reflects the brand's color, making discovery visual, organized, and fast. Built to help users find the right tool without the noise.",
        link: "https://project-shoseki.netlify.app",
        logo: "/shoseki-logo.png",
        color: "#b8860b",
        theme: {
          bg: "#111111",
          text: "#b8860b",
          muted: "rgba(184,134,11,0.75)",
          tagBg: "rgba(184,134,11,0.12)",
          tagText: "#b8860b",
          logoBg: "#f5f0e1",
          logoBorder: "rgba(184,134,11,0.4)",
          border: "rgba(184,134,11,0.3)",
        },
      },
    ],
  },
  biography: {
    label: "Biography",
    text: "I am Ahmed Baghni, an Informatics Engineering student and founder of 27/7 Studio. I was one of only two students selected from Libya for the Genusian Scholarship, and I moved to Indonesia in 2023 to study at Nusa Putra University, where I gained deeper access to AI, smart technology, UI/UX thinking, and frontend logic. My work combines creativity, business thinking, and practical execution. One of my projects, Shoseki, brings together 250 tools to solve the problem of scattered, hard-to-find useful resources. My research paper reflects the same structured approach to technical work. I made this site to present my work clearly, build trust, and show how I can help.",
  },
  journey: {
    label: "Journey",
    text: "My journey is shaped by building, learning, and moving between academic work and practical work. I care about making things that feel useful, direct, and honest. The way I work is simple: I observe the problem, shape the idea, and turn it into something people can actually use. Moving from Libya to Indonesia in 2023 opened new ways of thinking about technology, business, and design. Every project I take on is a chance to combine what I have learned with what a business actually needs.",
  },
  publications: {
    label: "Publications",
    items: [
      {
        title: "Research Paper — AI & Systems Thinking",
        type: "Paper",
        date: "2024",
      },
      {
        title: "Shoseki: Curated Tools Index",
        type: "Project Publication",
        date: "2024",
      },
      {
        title: "Building in Public: Design Notes",
        type: "Article",
        date: "2025",
      },
    ],
  },
  contact: {
    label: "Contact",
    intro:
      "I am open to collaborations on design systems, frontend architecture, and small business web projects. If you have an idea or a project in mind, reach out.",
    email: "ahmedbaghni.may9@gmail.com",
    linkedin: "https://linkedin.com/in/ahmedbaghni",
    phone: "+62 815-5649-2671",
  },
};
