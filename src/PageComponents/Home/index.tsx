"use client";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Why from "./Why";
import HomeEnd from "./HomeEnd";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <Hero />
      <About />
      <Services />
      <Why />
      <HomeEnd />
    </div>
  );
}
