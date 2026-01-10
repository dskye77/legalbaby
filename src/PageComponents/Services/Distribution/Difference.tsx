import Section from "@/components/ui/Section";

import {
  DollarSign,
  Clock,
  ChartColumn,
  Shield,
  CircleCheck,
  TrendingUp,
} from "lucide-react";
import { useAppStore } from "@/stores/store";

const differences = [
  {
    icon: DollarSign,
    title: "70% Royalties",
    description:
      "Artists earn 70% of their streaming revenue. Transparent and straightforward.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Most releases go live within 24-72 hours. No weeks-long waits for your music to appear.",
  },
  {
    icon: ChartColumn,
    title: "Real Analytics",
    description:
      "See exactly where your streams come from, who's listening, and how you're growing.",
  },
  {
    icon: Shield,
    title: "You Own Everything",
    description:
      "Your masters, your rights, your music. We never claim ownership of anything you create.",
  },
];

const features = [
  "Unlimited releases",
  "All major platforms",
  "Real-time analytics",
  "ISRC & UPC codes",
  "Quarterly payouts",
  "Lyrics distribution",
  "Pre-save campaigns",
  "Release scheduling",
  "Dedicated support",
];

export default function Difference() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const openApplicationMenu = () => {
    setApplicationMenuOpen(true);
  };

  return (
    <Section>
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          The Difference
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Distribution That Respects Artists
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Other distributors treat you as a transaction. We treat you as a
          partner.
        </p>
      </div>

      {/* Difference Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {differences.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 p-6 rounded-xl bg-card/50 border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Features List */}
      <div className="p-8 rounded-2xl bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 mb-8">
        <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
          Everything Included—No Hidden Fees
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <CircleCheck className="w-4 h-4 text-primary shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Catalog-Backed Advances */}
      <div className="mt-8 p-6 rounded-xl bg-background/50 border border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground">
              Catalog-Backed Advances
            </h4>
            <p className="text-sm text-muted-foreground">
              Artists with traction may be eligible for performance-based
              funding.
            </p>
          </div>
        </div>
        <a href="/services/advances">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-muted hover:text-foreground h-9 rounded-md px-3">
            Check Eligibility
          </button>
        </a>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base"
          onClick={openApplicationMenu}
        >
          Start Distributing
        </button>
      </div>
    </Section>
  );
}
