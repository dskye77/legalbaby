import Section from "@/components/ui/Section";

export default function Philosophy() {
  return (
    <Section className="bg-linear-to-b from-card/30 to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Art First. Always.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The music industry has become obsessed with metrics, algorithms, and
            quarterly reports. Somewhere along the way, the art got lost.
            We&apos;re here to bring it back.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At LEGAL BABY, we believe that great music deserves to be
            heard—regardless of follower counts or playlist placements. We
            believe artists deserve partners, not gatekeepers. We believe that
            building a sustainable career should be possible for anyone willing
            to put in the work.
          </p>
          <p className="text-foreground text-lg leading-relaxed">
            This is what drives us. This is why we exist. And this is the
            standard we hold ourselves to, every single day.
          </p>
        </div>
      </div>
    </Section>
  );
}
