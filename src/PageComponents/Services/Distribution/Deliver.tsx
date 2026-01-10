import Section from "@/components/ui/Section";

const platforms = [
  "Spotify",
  "Apple Music",
  "Amazon Music",
  "YouTube Music",
  "Tidal",
  "Deezer",
  "Pandora",
  "iHeartRadio",
  "TikTok",
  "Instagram / Facebook",
  "Tencent",
  "NetEase",
  "Anghami",
  "Boomplay",
  "Audiomack",
  "Napster",
  "Claro Música",
  "Saavn",
];

export default function Deliver() {
  return (
    <Section className="bg-card/30">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Where We Deliver
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            200+ Platforms Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the biggest streaming services to regional platforms, your
            music reaches listeners everywhere.
          </p>
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="px-4 py-2 rounded-full bg-background border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {platform}
            </span>
          ))}

          {/* Extra count */}
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            + 180 more
          </span>
        </div>
      </div>
    </Section>
  );
}
