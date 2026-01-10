import Section from "@/components/ui/Section";

export default function VisionAndMission() {
  return (
    <Section>
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Our Vision
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A World Where Talent Wins
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We envision a music industry where an artist&apos;ss success is
              determined by their talent and dedication—not their budget or
              connections. Where every creator, regardless of background, has
              the tools and support to build a sustainable career.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This isn&apos;st idealism. It&apos;ss the standard we&apos;sre
              actively building toward, one artist at a time.
            </p>
          </div>
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Remove the Barriers
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our mission is simple: provide independent artists with the same
              quality distribution, promotion, and support that major labels
              offer—without upfront release costs, without confusing contracts,
              without the compromises.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do this by leveraging technology, building genuine
              relationships, and never forgetting that behind every stream is a
              real person who deserves respect.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
