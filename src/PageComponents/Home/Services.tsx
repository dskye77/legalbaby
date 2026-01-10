import { Building2, Radio, ListMusic, TrendingUp } from "lucide-react";
import Section from "@/components/ui/Section";

const services = [
  {
    icon: Radio,
    title: "Music Distribution",
    description:
      "Get your music on Spotify, Apple Music, Tidal, and 150+ other platforms worldwide. Fast, reliable, and seamless.",
    badge: "All Major Platforms",
  },
  {
    icon: TrendingUp,
    title: "Promotion & Marketing",
    description:
      "Strategic promotion campaigns designed to grow your audience and increase streams. We know what works.",
    badge: "Growth Focused",
  },
  {
    icon: ListMusic,
    title: "Playlist Pitching",
    description:
      "Direct access to playlist curators and editorial teams. Get your music heard by the right people.",
    badge: "Curator Network",
  },
  {
    icon: Building2,
    title: "Label Services",
    description:
      "Full-service label support without giving up your masters. Strategy, A&R, and creative guidance on your terms.",
    badge: "Keep Your Rights",
  },
];

export default function Services() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container-tight relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Everything You Need to <span className="text-primary">Win</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From distribution to promotion, we&apos;ve built a complete
            ecosystem to help independent artists thrive in the modern music
            industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description, badge }) => (
            <div
              key={title}
              className="
              group relative p-8 rounded-2xl
              bg-background border border-border
              transition-all duration-300
              hover:border-primary/40
              hover:shadow-[0_0_40px_0_var(--primary-glow)]
              overflow-hidden
            "
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/20 transition-colors duration-300">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/20 px-3 py-1 rounded-full">
                    {badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
