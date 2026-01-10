import Section from "@/components/ui/Section";
import { Palette, Calendar, TrendingUp, MessageSquare } from "lucide-react";

const offers = [
  {
    icon: Palette,
    title: "Artist Branding",
    description:
      "Develop a cohesive visual identity that captures your sound and story. From logos to color palettes to overall aesthetic direction.",
  },
  {
    icon: Calendar,
    title: "Release Strategy",
    description:
      "Plan your releases for maximum impact. We map out timelines, coordinate marketing pushes, and optimize for algorithmic momentum.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Long-term planning that goes beyond individual releases. Build toward milestones that actually matter for your career trajectory.",
  },
  {
    icon: MessageSquare,
    title: "One-on-One Support",
    description:
      "Direct access to experienced team members who understand your goals and help you navigate decisions.",
  },
];

export default function Offer() {
  return (
    <Section>
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          What We Offer
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Label-Level Support, Artist-First Terms
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you&apos;d get from a traditional label—without signing away
          your rights or creative control.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {offers.map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className="p-8 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
