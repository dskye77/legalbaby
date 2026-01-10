import Section from "@/components/ui/Section";
import { Target, MessageCircle, Share2, Zap } from "lucide-react";

const strategies = [
  {
    icon: Target,
    title: "Audience Targeting",
    description:
      "We help you identify and reach the listeners most likely to connect with your music based on genre, mood, and listening habits.",
  },
  {
    icon: MessageCircle,
    title: "Content Strategy",
    description:
      "Develop a content calendar that keeps your audience engaged between releases—stories, behind-the-scenes, and authentic moments.",
  },
  {
    icon: Share2,
    title: "Platform Optimization",
    description:
      "Maximize your presence on each platform with optimized profiles, strategic posting times, and algorithm-friendly content.",
  },
  {
    icon: Zap,
    title: "Release Campaigns",
    description:
      "Coordinate pre-save campaigns, release day pushes, and post-release momentum to make every drop count.",
  },
];

export default function Strategy() {
  return (
    <Section>
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Strategy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            How We Help Artists Get Heard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Promotion isn&apos;t about tricks or hacks. It&apos;s about connecting your music with the right people at the right time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary"/>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
