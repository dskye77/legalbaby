// src/app/services/page.tsx
import ServicesPage from "@/PageComponents/Services";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Artist Services - Music Distribution, Promotion & Marketing",
  description: "Comprehensive music services for independent artists. Distribution to 200+ platforms, professional playlist pitching, marketing support, label services, and catalog-backed advances.",
  path: "/services",
  keywords: [
    "music artist services",
    "music distribution services",
    "music promotion services",
    "playlist pitching service",
    "music label services",
    "artist development",
  ],
});

export default ServicesPage;







