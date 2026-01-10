import { ReactNode } from "react";
import Section from "@/components/ui/Section";

export interface StepItem {
  step: string;
  title: string;
  description: string | ReactNode;
}

interface StepsProps {
  title: string;
  subtitle?: string;
  description?: string;
  steps: StepItem[];
  sectionClassName?: string;
}

export default function Steps({
  title,
  subtitle,
  description,
  steps,
  sectionClassName,
}: StepsProps) {
  return (
    <Section className={sectionClassName}>
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, title, description }) => (
            <div
              key={step}
              className="relative p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-5xl font-display font-bold text-primary/20 absolute top-4 right-4">
                {step}
              </span>

              <h3 className="font-display font-semibold text-lg text-foreground mb-3 relative">
                {title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed relative">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
