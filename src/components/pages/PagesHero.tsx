import Section from "@/components/ui/Section";

type PagesHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PagesHero({
  eyebrow,
  title,
  description,
}: PagesHeroProps) {
  return (
    <Section className="relative px-4 pt-36 pb-24 md:px-20 md:pt-54 md:pb-32 bg-linear-to-b from-primary/5 to-transparent">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            {eyebrow}
          </span>

          <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
    </Section>
  );
}
