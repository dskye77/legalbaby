// src/app/why-us/page.tsx
import WhyUs from "@/PageComponents/WhyUs/index";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Why Choose LEGAL BABY - The Artist-First Alternative",
  description: "Discover why LEGAL BABY is different: 70% royalties, no upfront costs, full ownership, transparent terms, and real human support. Compare us to traditional distributors.",
  path: "/why-us",
  keywords: [
    "why choose legal baby",
    "best music distribution",
    "independent music distributor",
    "artist-friendly distribution",
    "transparent music services",
  ],
});

export default WhyUs;