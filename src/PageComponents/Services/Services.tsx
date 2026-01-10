
import {
  Music,
  Megaphone,
  ListMusic,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Section from "@/components/ui/Section";

const services = [
  {
    title: "Music Distribution",
    badge: "200+ Platforms",
    description:
      "Get your music on every major streaming platform worldwide. Fast, reliable, and with full transparency on royalties and analytics.",
    icon: Music,
    link: "/services/distribution",
    features: [
      "Spotify, Apple Music, Amazon & more",
      "Earn 70% of streaming revenue",
      "Real-time analytics dashboard",
      "No upfront release costs",
    ],
  },
  {
    title: "Promotion & Marketing",
    badge: "Organic Growth",
    description:
      "Strategic marketing support to help your music reach the right audience. Organic growth focused, algorithm-friendly strategies.",
    icon: Megaphone,
    link: "/services/promotion",
    features: [
      "Social media strategy",
      "Content planning & guidance",
      "Audience development",
      "Release campaign support",
    ],
  },
  {
    title: "Playlist Pitching",
    badge: "Editorial Access",
    description:
      "Professional pitching to editorial and independent playlists. Real relationships, realistic expectations, genuine results.",
    icon: ListMusic,
    link: "/services/playlists",
    features: [
      "Editorial playlist pitching",
      "Independent curator network",
      "Genre-specific targeting",
      "Performance tracking",
    ],
  },
  {
    title: "Label Services",
    badge: "Selective",
    description:
      "Full label-style support for artists ready to take their career to the next level. Branding, strategy, and long-term development.",
    icon: Building2,
    link: "/services/label",
    features: [
      "Artist branding & identity",
      "Release strategy & planning",
      "Long-term career development",
      "One-on-one artist support",
    ],
  },
  {
    title: "Artist Advances",
    badge: "Data-Driven",
    description:
      "Catalog-backed funding eligibility based on streaming performance. Access future earnings without giving up ownership.",
    icon: TrendingUp,
    link: "/services/advances",
    features: [
      "Non-dilutive structure",
      "Performance-based assessment",
      "No ownership claims",
      "Confidential review process",
    ],
  },
];

export default function Services() {
  return (
    <Section>
      <div className="container-tight space-y-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="lg:w-2/3 lg:pl-8 lg:border-l lg:border-border/50">
                    <ul className="grid md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a href={service.link}>
                      <button className="group/btn inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-display transition-all duration-300 hover:bg-muted hover:text-foreground">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
