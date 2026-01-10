import Section from "@/components/ui/Section";

const approaches = [
  {
    title: "Organic Over Paid",
    description:
      "We focus on building real audiences through genuine engagement, not buying followers or fake streams that hurt your credibility.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Quick spikes fade fast. We help you build an audience that sticks around, supports your work, and grows with your career.",
  },
  {
    title: "Artist Authenticity",
    description:
      "Your voice, your brand, your story. We enhance what makes you unique—we never try to make you something you&apos;re not.",
  },
];

export default function Approach() {
  return (
    <Section className="bg-card/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            The Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Growth, Not Vanity Metrics
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We&apos;ve seen too many artists fall for quick fixes that ultimately
            hurt their careers. Bought followers, fake streams, engagement
            pods—these tactics might look good on paper, but they destroy your
            algorithmic reach and credibility.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our approach is different. We focus on building genuine connections
            with real listeners who will actually stream your music, share it
            with friends, and show up when you release something new.
          </p>
        </div>

        <div className="space-y-6">
          {approaches.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
