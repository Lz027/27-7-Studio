import { Mail, MessageCircle, Linkedin, Twitter } from "lucide-react";
import { site } from "@/lib/site-content";

const iconFor = (name: string) => {
  if (name === "WhatsApp") return MessageCircle;
  if (name === "LinkedIn") return Linkedin;
  if (name === "Email") return Mail;
  return Twitter;
};

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20 sm:py-28 bg-card/60">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-5xl font-display">Contact</h2>
        <p className="mt-4 text-lg text-muted-foreground">{site.contact.intro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {site.contact.channels.map((c) => {
            const Icon = iconFor(c.name);
            return (
              <a
                key={c.name}
                href={c.href}
                className="stitch group flex flex-col items-center gap-3 rounded-3xl bg-background p-6 transition-transform hover:-translate-y-1 shadow-squeeze"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-base">{c.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
