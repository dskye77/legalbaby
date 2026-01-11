"use client";
import { Mail, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

import { useAppStore } from "@/stores/store";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const openApplicationMenu = () => {
    setApplicationMenuOpen(true);
  };

  return (
    <footer className="relative border-t border-border bg-card/30 px-4 md:px-20 py-16 pb-4">
      <div className="container-tight px-4 md:px-8 py-12 md:py-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
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

            <button
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-display font-semibold bg-primary text-primary-foreground h-10 px-4 py-2 transition-all duration-300 hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              onClick={openApplicationMenu}
            >
              Request Access
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
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
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 LEGAL BABY. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
