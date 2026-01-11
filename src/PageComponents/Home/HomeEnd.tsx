import Section from "@/components/ui/Section";

import { useAppStore } from "@/stores/store";

import { Sparkles, ArrowRight } from "lucide-react";

export default function HomeEnd() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const openApplicationMenu = () => {
    setApplicationMenuOpen(true);
  };

  return (
    <Section className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-background to-background"></div>

      {/* Blur effect */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full h-full bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-8">
            <Sparkles size={32} className="text-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            This is Just the{" "}
            <span className="text-primary glow-text">Beginning</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            We&apos;re building something bigger than a platform. We&apos;re
            creating a new standard for how independent artists get paid, get
            heard, and get the respect they deserve. The future of music is
            independent. The future is LEGAL BABY.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-14 px-10 text-lg group"
              onClick={openApplicationMenu}
            >
              Request Access
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Access is limited. Apply to work with us.
          </p>
        </div>
      </div>
    </Section>
  );
}
