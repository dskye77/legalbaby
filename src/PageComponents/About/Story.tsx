import Section from "@/components/ui/Section";

export default function Story() {
  return (
    <Section className="bg-card/30">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Born from Frustration, Built with Purpose
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            LEGAL BABY started with a simple observation: talented artists were
            failing not because they lacked skill, but because they lacked
            access. Distribution required upfront investment. Promotion was
            reserved for those with budgets. Support was gatekept behind
            financial barriers.
          </p>
          <p className="leading-relaxed">
            We watched friends with incredible music struggle to get heard while
            mediocre songs with big budgets dominated playlists. We saw artists
            sign away their rights just to get basic services. We witnessed the
            frustration of creators who just wanted to share their art with the
            world.
          </p>
          <p className="leading-relaxed">
            So we decided to build something different. Not another distributor
            that treats artists as transactions. Not another platform that takes
            more than it gives. But a genuine partner—one that puts artists
            first, operates transparently, and makes professional music services
            accessible to everyone.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            LEGAL BABY is the platform we wished existed when we started. Now
            we&apos;re building it for the next generation of independent
            artists.
          </p>
        </div>
      </div>
    </Section>
  );
}
