// src/app/services/promotion/page.tsx
import PromotionPage from "@/PageComponents/Services/Promotion";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Music Promotion & Marketing - Organic Growth Strategies",
  description: "Strategic music marketing for independent artists. Social media guidance, community building, brand development, and authentic audience growth without fake streams.",
  path: "/services/promotion",
  keywords: [
    "music promotion",
    "music marketing",
    "artist promotion",
    "music social media marketing",
    "organic music growth",
    "music audience building",
  ],
});

export default PromotionPage;