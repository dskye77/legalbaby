import Section from "@/components/ui/Section";

const differences = [
  {
    title: "You Keep Your Rights",
    description:
      "Traditional labels often require you to sign over your masters. We never ask for ownership of your music. Your art is always yours.",
  },
  {
    title: "Transparent Terms",
    description:
      "No 360 deals, no hidden clauses, no confusing contracts designed to trap you. Everything is clear, straightforward, and fair.",
  },
  {
    title: "Exit When You Want",
    description:
      "Labels often lock artists into long-term contracts. Our relationships are built on mutual value, not legal handcuffs. If it's not working, we find a respectful path forward.",
  },
  {
    title: "Creative Freedom",
    description:
      "We give guidance, not mandates. You're the artist—we're here to support your vision, not impose our own. The final creative decisions are always yours.",
  },
];

export default function Difference() {
  return (
    <Section>
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          The Difference
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Why This Isn&apos;t a Traditional Label
        </h2>
      </div>

      {/* Difference Items */}
      <div className="max-w-3xl mx-auto space-y-6">
        {differences.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-card/50 border border-border"
          >
            <h4 className="font-display font-semibold text-foreground mb-2">
              {title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-6">
          Think this might be right for you? Apply for label services
          consideration.
        </p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base">
          Apply for Label Services
        </button>
      </div>
    </Section>
  );
}
