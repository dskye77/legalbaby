// src/app/services/distribution/page.tsx
import DistributionPage from "@/PageComponents/Services/Distribution";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Music Distribution - 200+ Platforms Worldwide",
  description: "Distribute your music to Spotify, Apple Music, Amazon Music, and 200+ platforms. Earn 70% royalties, no upfront costs, keep your rights. Fast delivery within 24-72 hours.",
  path: "/services/distribution",
  keywords: [
    "music distribution",
    "spotify distribution",
    "apple music distribution",
    "digital music distribution",
    "independent music distribution",
    "music streaming distribution",
  ],
});

export default DistributionPage;