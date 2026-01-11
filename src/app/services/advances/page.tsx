// src/app/services/advances/page.tsx
import { Metadata } from "next";
import AdvancesPage from "@/PageComponents/Services/Advances";

export const metadata: Metadata = {
  title: "Artist Advances | Catalog-Backed Funding for Musicians",
  description: "Access future earnings based on streaming performance. Non-dilutive advances for artists with traction. No ownership claims, transparent assessment.",
  keywords: ["artist advances", "music funding", "catalog funding", "streaming advances", "artist financing"],
  openGraph: {
    title: "Artist Advances | LEGAL BABY",
    description: "Performance-based funding without giving up ownership",
    url: "/services/advances",
  },
  alternates: {
    canonical: "/services/advances",
  },
};

export default AdvancesPage;