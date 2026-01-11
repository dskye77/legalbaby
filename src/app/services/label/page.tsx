// src/app/services/label/page.tsx
import { Metadata } from "next";
import LabelPage from "@/PageComponents/Services/Label";

export const metadata: Metadata = {
  title: "Label Services | Full Artist Development Without the Contract",
  description: "Comprehensive artist development, branding, strategy, and career guidance. All the benefits of a label without giving up your rights.",
  keywords: ["label services", "artist development", "music career", "artist branding", "music strategy"],
  openGraph: {
    title: "Label Services | LEGAL BABY",
    description: "Professional support that respects your independence",
    url: "/services/label",
  },
  alternates: {
    canonical: "/services/label",
  },
};

export default LabelPage;