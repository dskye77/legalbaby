import { Eye, Rocket, Shield, Heart } from "lucide-react";
import Section from "@/components/ui/Section";

const reasons = [
  {
    icon: Shield,
    title: "Artist Control",
    description:
      "Keep your rights. Your masters stay yours. You earn 70% of your streaming revenue.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Real-time analytics and clear reporting. Know exactly where your money comes from.",
  },
  {
    icon: Rocket,
    title: "Simple & Fast",
    description:
      "No complicated processes. Upload, distribute, and start earning in days, not weeks.",
  },
  {
    icon: Heart,
    title: "Global Community",
    description:
      "Join a worldwide network of artists, producers, and music lovers who get it.",
  },
];

export default function Why() {
  return (
    <Section className="relative bg-[#070707e0]">
      <div className="container-tight">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Heading */}
          <div className="lg:col-span-2">
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 leading-tight">
              Built Different. <span className="text-primary">For Real.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We&apos;re not here to play the same game. LEGAL BABY is
              redesigning what artist services should look like in 2024 and
              beyond.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-xl border border-[#262626] bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
