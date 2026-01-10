import Section from "@/components/ui/Section";
import { TrendingUp, Users, Heart } from "lucide-react";

import { useAppStore } from "@/stores/store";

const promotionItems = [
  {
    icon: TrendingUp,
    title: "Social Media Guidance",
    description:
      "Learn what works on TikTok, Instagram, Twitter, and YouTube. We share real insights from successful campaigns, not generic advice.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Turn passive listeners into active fans. We help you create the kind of connection that leads to real support and word-of-mouth growth.",
  },
  {
    icon: Heart,
    title: "Brand Development",
    description:
      "Define your visual identity, voice, and positioning. Stand out in a crowded market with a clear, memorable artist brand.",
  },
];

export default function PromotionEnd() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const openApplicationMenu = () => {
    setApplicationMenuOpen(true);
  };

  return (
    <Section>
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          Beyond Distribution
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          We Support You Past the Upload
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Most distributors stop caring once your music is live. We&apos;re just
          getting started.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {promotionItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="text-center p-8 rounded-xl bg-card/50 border border-border hover-lift transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base"
          onClick={openApplicationMenu}
        >
          Get Promotion Support
        </button>
      </div>
    </Section>
  );
}
