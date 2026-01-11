// src/app/why-us/page.tsx
import { Metadata } from "next";
import WhyUs from "@/PageComponents/WhyUs/index";

export const metadata: Metadata = {
  title: "Why Choose LEGAL BABY | The Artist-First Alternative",
  description: "70% royalties, no upfront costs, full ownership, transparent terms. Compare LEGAL BABY vs traditional distributors and see the difference.",
  keywords: ["music distributor comparison", "best music distribution", "artist-friendly distribution", "independent music platform"],
  openGraph: {
    title: "Why LEGAL BABY | Artist-First Music Distribution",
    description: "See why independent artists choose LEGAL BABY",
    url: "/why-us",
  },
  alternates: {
    canonical: "/why-us",
  },
};

export default WhyUs;