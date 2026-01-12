
// src/app/services/advances/page.tsx
import AdvancesPage from "@/PageComponents/Services/Advances";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Artist Advances - Catalog-Backed Funding for Musicians",
  description: "Access future streaming earnings based on your catalog performance. Non-dilutive, performance-based funding for artists with traction. No ownership claims, transparent assessment.",
  path: "/services/advances",
  keywords: [
    "artist advances",
    "music catalog funding",
    "streaming advance",
    "music funding",
    "catalog-backed advance",
    "music royalty advance",
  ],
});

export default AdvancesPage;