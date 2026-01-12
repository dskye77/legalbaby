import Section from "@/components/ui/Section";

import {
  Heart,
  Users,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";
export default function Values() {
  const values = [
    {
      icon: Shield,
      title: "Transparency First",
      description:
        "No hidden fees, no confusing contracts. Every aspect of our service is clear, documented, and honest.",
    },
    {
      icon: Users,
      title: "Artist-Centric",
      description:
        "Every decision we make starts with one question: does this benefit the artist? If not, we don’t do it.",
    },
    {
      icon: Heart,
      title: "Creative Freedom",
      description:
        "Your art belongs to you. We never claim ownership, never restrict your choices, never limit your vision.",
    },
    {
      icon: Lightbulb,
      title: "Accessible Excellence",
      description:
        "Professional services without upfront financial barriers. We believe every artist deserves access based on potential, not payments.",
    },
    {
      icon: Sparkles,
      title: "Long-Term Growth",
      description:
        "Quick wins are nice, but sustainable careers matter more. We build for the long run.",
    },
    {
      icon: Target,
      title: "Honest Expectations",
      description:
        "We don’t promise overnight success. We promise real support, real guidance, and real results over time.",
    },
  ];

  return (
    <Section>
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            What We Stand For
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These aren&apos;st just words on a page. They&apos;re the
            principles that guide every decision we make.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-xl bg-card/50 border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_24px_0_var(--primary-glow)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="text-primary" size={22} />
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
