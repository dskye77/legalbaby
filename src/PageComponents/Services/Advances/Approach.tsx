import Section from "@/components/ui/Section";
import { Star, Users, Check } from "lucide-react";

const approachData = {
  title: "Our Approach",
  heading: "Selective. Intentional. Committed.",
  description: [
    "We don't take on everyone—and that's not elitism, it's focus. Label services require significant investment from both sides. We only work with artists we genuinely believe in and can meaningfully help.",
    "This means smaller rosters, deeper relationships, and more impactful support. Every artist we work with gets real attention, not automated emails and generic advice.",
  ],
  bullets: [
    "Quality of music and production",
    "Clarity of artistic vision",
    "Commitment to growth and improvement",
    "Willingness to collaborate and take guidance",
    "Realistic expectations and professional attitude",
  ],
  icon: Star,
  partnership: {
    icon: Users,
    heading: "Partnership, Not Transaction",
    description: [
      "When you work with us on label services, you're getting a team that's invested in your success. We win when you win—that's how we structure everything.",
      "Our model is built on shared success, not upfront payments. Your access is determined by your readiness and potential, and our incentives are always aligned with yours.",
    ],
  },
};

export default function Approach() {
  return (
    <Section className="bg-card/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              {approachData.title}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {approachData.heading}
            </h2>
            {approachData.description.map((desc, idx) => (
              <p
                key={idx}
                className="text-muted-foreground text-lg leading-relaxed mb-6 last:mb-8"
              >
                {desc}
              </p>
            ))}

            {/* Bullet Points */}
            <div className="p-6 rounded-xl bg-background border border-border">
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <approachData.icon className="w-5 h-5 text-primary" />
                What We Look For
              </h4>
              <ul className="space-y-2">
                {approachData.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="p-8 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30">
              <approachData.partnership.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {approachData.partnership.heading}
              </h3>
              {approachData.partnership.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-muted-foreground leading-relaxed mb-6 last:mb-0"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
