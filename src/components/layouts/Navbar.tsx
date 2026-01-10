"use client";
import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { useAppStore } from "@/stores/store";

export default function Navbar() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const openApplicationMenu = () => {
    setApplicationMenuOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const links = ["About", "Services", "Why Us", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="px-4 sm:px-6 md:px-20 lg:px-32 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-syne font-bold text-xl md:text-2xl text-foreground tracking-wide">
            LEGAL<span className="text-primary"> BABY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(" ", "-")}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm font-inter"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Desktop button */}
        <div className="hidden md:flex">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg px-4 py-2 h-10 text-sm"
            onClick={openApplicationMenu}
          >
            Request Access
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={24}
              className="text-foreground cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              size={24}
              className="text-foreground cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile menu - inherits parent blur */}
      {isOpen && (
        <div className="md:hidden w-full">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
            <button
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg px-8 h-12 text-base"
              onClick={openApplicationMenu}
            >
              Request Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
