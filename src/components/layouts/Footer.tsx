import { Mail, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 px-16 bg-[#070707e0]">
      <div className="container-tight px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <Link className="inline-block mb-4" href="/">
              <span className="font-display font-bold text-2xl text-foreground tracking-tight">
                LEGAL<span className="text-primary"> BABY</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              Empowering independent artists with next-generation distribution
              and artist services. Own your art. Control your future.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-10 px-4 py-2">
              Request Access
            </button>
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                href="/about"
              >
                About
              </a>
              <a
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                href="/services"
              >
                Services
              </a>
              <a
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                href="/why-us"
              >
                Why Us
              </a>
              <a
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                href="/contact"
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Connect
            </h3>
            <a
              href="mailto:hello@legalbaby.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm mb-6"
            >
              <Mail size={16} />
              hello@legalbaby.com
            </a>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                aria-label="Instagram "
                tabIndex={0}
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                aria-label="Twitter"
                tabIndex={0}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                aria-label="YouTube"
                tabIndex={0}
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 LEGAL BABY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              href="/privacy"
            >
              Privacy Policy
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              href="/terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
