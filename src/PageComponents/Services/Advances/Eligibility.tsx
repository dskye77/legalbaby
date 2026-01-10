import Section from "@/components/ui/Section";
import { ChartColumn, TrendingUp, Shield, CircleCheck } from "lucide-react";

const eligibilityItems = [
  {
    title: "Streaming Performance",
    description:
      "Consistent streaming activity across platforms signals catalog value and audience engagement.",
    Icon: ChartColumn,
  },
  {
    title: "Growth Trajectory",
    description:
      "Upward trends in monthly listeners and stream counts indicate future earning potential.",
    Icon: TrendingUp,
  },
  {
    title: "Catalog Ownership",
    description:
      "Clear ownership of masters and publishing rights ensures clean eligibility assessment.",
    Icon: Shield,
  },
];

const differencePoints = [
  "Non-dilutive structure",
  "No ownership claims",
  "Performance-based terms",
  "Transparent assessment",
];

export default function Eligibility() {
  return (
    <Section className="bg-card/30">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          Eligibility
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Data-Driven Assessment
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Eligibility is determined by performance signals and catalog
          characteristics—objective metrics that reflect your music&apos;s earning
          potential.
        </p>
      </div>

      {/* Eligibility Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {eligibilityItems.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="p-6 rounded-xl bg-background/50 border border-border text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Difference Points */}
      <div className="p-8 rounded-2xl bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20">
        <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
          What Makes This Different
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {differencePoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CircleCheck className="w-4 h-4 text-primary shrink-0" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
