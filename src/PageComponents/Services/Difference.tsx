import Section from "@/components/ui/Section";

export default function Difference() {
  return (
    <Section className="px-4 md:px-20 py-20 bg-card/30">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            The Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Services That Actually Serve You
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Most distributors treat services as upsells. We treat them as
            essentials. That&apos;s why our core services are designed to work
            together seamlessly—with no upfront release costs standing between
            you and your audience.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-background/50 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-2">
                No Upfront Barriers
              </h4>
              <p className="text-sm text-muted-foreground">
                Access is built around your readiness and potential, not
                financial gatekeeping. Your music comes first.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-2">
                Integrated Approach
              </h4>
              <p className="text-sm text-muted-foreground">
                Distribution, promotion, and support work together. Not as
                separate silos.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-2">
                Real Support
              </h4>
              <p className="text-sm text-muted-foreground">
                Actual humans who understand music, not ticket systems and
                auto-replies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
