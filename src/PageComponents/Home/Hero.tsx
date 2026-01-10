import { ArrowRight, Music, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section
      className="w-full relative z-10 px-4 md:px-20 py-24"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 102, 0, 0.4) 0%, #000000 55%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8">
          <Badge variant="primary">
            <Sparkles size={16} />
            Now Accepting Applications
          </Badge>
        </div>
        <h1 className="font-display font-bold font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-6 scale-y-95">
          Your Music.
          <br />
          <span className="text-primary glow-text">Your Terms.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          LEGAL BABY is the next-generation distribution and artist services
          platform built for independent creators—no upfront costs to release,
          just your music reaching the world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary">
            Request Access
            <ArrowRight size={20} />
          </Button>

          <Button variant="outline">
            <Music size={20} />
            Learn More
          </Button>
        </div>
        <div className="mt-16 pt-10 border-t border-border/50">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-display font-bold text-2xl md:text-3xl text-foreground">
                Global
              </p>
              <p className="text-sm text-muted-foreground mt-1">Distribution</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-2xl md:text-3xl text-foreground">
                150+
              </p>
              <p className="text-sm text-muted-foreground mt-1">Platforms</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-2xl md:text-3xl text-foreground">
                Fast
              </p>
              <p className="text-sm text-muted-foreground mt-1">Payouts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
