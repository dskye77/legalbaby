"use client";

import Section from "@/components/ui/Section";
import { DollarSign, Shield, Heart, Scale, Users, Zap } from "lucide-react";

import { useAppStore } from "@/stores/store";

type Principle = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const principles: Principle[] = [
  {
    title: "70% Royalties",
    description:
      "Artists earn 70% of streaming revenue. Transparent, straightforward, and paid quarterly.",
    Icon: DollarSign,
  },
  {
    title: "Full Ownership",
    description:
      "Your music, your rights, your career. We never claim ownership of anything.",
    Icon: Shield,
  },
  {
    title: "Artist-First Decisions",
    description:
      "Every feature and policy is designed with your interests as the priority.",
    Icon: Heart,
  },
  {
    title: "No Upfront Costs",
    description:
      "Release your music without financial barriers. Access built around readiness, not payments.",
    Icon: Scale,
  },
  {
    title: "Real Support",
    description:
      "Actual humans who care about music, not ticket systems and auto-replies.",
    Icon: Users,
  },
  {
    title: "Modern Platform",
    description:
      "Built for today's music industry, not adapted from outdated systems.",
    Icon: Zap,
  },
];

export default function Principles() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const openApplicationMenu = () => {
    setApplicationMenuOpen(true);
  };

  return (
    <Section className="bg-card/30">
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          Core Principles
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          What Sets Us Apart
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base"
          onClick={openApplicationMenu}
        >
          Request Access
        </button>
      </div>
    </Section>
  );
}
