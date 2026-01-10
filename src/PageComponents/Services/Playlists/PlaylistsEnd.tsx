import Section from "@/components/ui/Section";
import { TriangleAlert, CircleCheckBig, CircleX } from "lucide-react";

import { useAppStore } from "@/stores/store";

const honestTalkData = [
  {
    type: "reality",
    title: "The Reality",
    icon: TriangleAlert,
    items: [
      "Playlist placement takes time—days to weeks, sometimes longer",
      "Not every track gets placed, regardless of quality",
      "Editorial placements are competitive and unpredictable",
      "Independent playlists often drive more engaged listeners",
      "Results compound over time with consistent releases",
    ],
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    itemIcon: CircleCheckBig,
    itemIconColor: "text-primary",
  },
  {
    type: "dont",
    title: "What We Don't Do",
    icon: CircleX,
    items: [
      "Guarantee specific playlist placements",
      "Pay for placements on fake or bot-driven playlists",
      "Promise overnight viral success",
      "Use sketchy tactics that risk your account",
      "Make claims we can't back up with data",
    ],
    iconColor: "text-destructive",
    iconBg: "bg-destructive/10",
    itemIcon: CircleX,
    itemIconColor: "text-muted-foreground/50",
  },
];

export default function PlaylistsEndPage() {
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
          Honest Talk
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Setting Realistic Expectations
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We believe in honesty over hype. Here&apos;s what you should actually
          expect from playlist pitching.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {honestTalkData.map((section, idx) => {
          const Icon = section.icon;
          const ItemIcon = section.itemIcon;
          return (
            <div
              key={idx}
              className="p-8 rounded-xl bg-card/50 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${section.iconBg}`}
                >
                  <Icon className={`w-5 h-5 ${section.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <ItemIcon
                      className={`w-4 h-4 ${section.itemIconColor} mt-0.5 shrink-0`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-8 rounded-2xl bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 text-center">
        <h3 className="font-display text-xl font-bold text-foreground mb-4">
          The Value of Honest Pitching
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We&apos;d rather tell you the truth than take your money with false
          promises. Our relationships with curators are built on trust—we only
          pitch music we genuinely believe in, which is why our placements stick
          and lead to real listener growth.
        </p>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base"
          onClick={openApplicationMenu}
        >
          Get Started with Pitching
        </button>
      </div>
    </Section>
  );
}
