
// src/app/services/label/page.tsx
import LabelPage from "@/PageComponents/Services/Label";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Label Services - Full Artist Development Support",
  description: "Comprehensive label services for serious independent artists. Artist branding, release strategy, career development, and one-on-one support without giving up your rights.",
  path: "/services/label",
  keywords: [
    "music label services",
    "artist development",
    "music branding",
    "independent label",
    "artist management",
    "music career development",
  ],
});

export default LabelPage;