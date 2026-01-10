import Section from "@/components/ui/Section";

import { Globe, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Built for Speed",
    description:
      "Get your music live on all platforms faster than ever. No waiting, no guessing.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Distribute to every major platform worldwide. Your sound, everywhere.",
  },
  {
    icon: Users,
    title: "Artist-First",
    description:
      "Earn 70% of streaming revenue. No upfront costs to release. We succeed when you succeed.",
  },
];

export default function About() {
  return (
    <Section className="relative bg-[#070707e0]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div>
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
            The Platform Independent Artists{" "}
            <span className="text-primary">Deserve</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            LEGAL BABY is not just another distributor. We&apos;re a movement.
            Built by creatives for creatives, we understand the hustle, the
            grind, and the dream. Our platform is designed to remove barriers
            and amplify your voice.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From bedroom producers to touring artists, we provide the tools,
            support, and transparency you need to build a sustainable career in
            music. No hidden fees. No complicated contracts. Just you and your
            art, reaching the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
