// src/app/about/page.tsx
import AboutPage from "@/PageComponents/About/index";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us - Building the Future of Independent Music",
  description: "Learn about LEGAL BABY's mission to empower independent artists with transparent, artist-first distribution and services. Discover our values, story, and commitment to your success.",
  path: "/about",
  keywords: [
    "about legal baby",
    "independent music platform",
    "artist-first distribution",
    "music industry innovation",
    "transparent music services",
  ],
});

export default AboutPage;

