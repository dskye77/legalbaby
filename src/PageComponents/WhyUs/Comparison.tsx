"use client";

import Section from "@/components/ui/Section";
import { CheckCircle, XCircle } from "lucide-react";

type Feature = {
  name: string;
  legalBaby: boolean;
  others: boolean;
};

const features: Feature[] = [
  { name: "70% streaming revenue", legalBaby: true, others: false },
  { name: "No upfront release costs", legalBaby: true, others: false },
  { name: "You own your masters", legalBaby: true, others: false },
  { name: "Transparent terms", legalBaby: true, others: false },
  { name: "Real human support", legalBaby: true, others: false },
  { name: "No hidden fees", legalBaby: true, others: false },
  { name: "Exit anytime", legalBaby: true, others: false },
  { name: "Marketing support included", legalBaby: true, others: false },
];

export default function VisionAndMission() {
  return (
    <Section>
      <div className="text-center mb-16">
        <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
          The Comparison
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          LEGAL BABY vs Traditional Distributors
        </h2>
      </div>

      <div className="max-w-2xl mx-auto rounded-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 bg-card/50 p-4 border-b border-border">
          <div className="text-sm font-medium text-muted-foreground">
            Feature
          </div>
          <div className="text-sm font-medium text-primary text-center">
            LEGAL BABY
          </div>
          <div className="text-sm font-medium text-muted-foreground text-center">
            Others
          </div>
        </div>

        {/* Rows */}
        {features.map((feature, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 p-4 ${
              i % 2 === 0 ? "bg-card/30" : ""
            }`}
          >
            <div className="text-sm text-foreground">{feature.name}</div>

            <div className="flex justify-center">
              {feature.legalBaby ? (
                <CheckCircle className="w-5 h-5 text-primary" />
              ) : (
                <XCircle className="w-5 h-5 text-muted-foreground/50" />
              )}
            </div>

            <div className="flex justify-center">
              {feature.others ? (
                <CheckCircle className="w-5 h-5 text-primary" />
              ) : (
                <XCircle className="w-5 h-5 text-muted-foreground/50" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
