// src/app/services/distribution/page.tsx
import { Metadata } from "next";
import DistributionPage from "@/PageComponents/Services/Distribution";

export const metadata: Metadata = {
  title: "Music Distribution | Get Your Music on 200+ Platforms",
  description: "Distribute music to Spotify, Apple Music, Amazon & 200+ platforms. 70% royalty share, no upfront costs, keep your rights. Fast delivery in 24-72 hours.",
  keywords: ["spotify distribution", "apple music distribution", "music streaming", "digital distribution", "independent artist distribution"],
  openGraph: {
    title: "Global Music Distribution | LEGAL BABY",
    description: "Reach listeners worldwide on every major streaming platform",
    url: "/services/distribution",
  },
  alternates: {
    canonical: "/services/distribution",
  },
};

export default DistributionPage;