// src/app/about/page.tsx
import { Metadata } from "next";
import AboutPage from "@/PageComponents/About/index";

export const metadata: Metadata = {
  title: "About Us | Building the Future of Independent Music",
  description: "Learn about LEGAL BABY's mission to empower independent artists with transparent, artist-first music distribution and services. No gatekeepers, just genuine support.",
  openGraph: {
    title: "About LEGAL BABY | Artist-First Music Distribution",
    description: "Discover how we're changing the music industry for independent artists",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default AboutPage;