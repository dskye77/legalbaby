// src/app/services/promotion/page.tsx
import { Metadata } from "next";
import PromotionPage from "@/PageComponents/Services/Promotion";

export const metadata: Metadata = {
  title: "Music Promotion & Marketing | Grow Your Audience",
  description: "Strategic music marketing focused on organic growth. Social media guidance, community building, and brand development for independent artists.",
  keywords: ["music promotion", "music marketing", "artist marketing", "social media for musicians", "music audience growth"],
  openGraph: {
    title: "Music Promotion Services | LEGAL BABY",
    description: "Authentic marketing strategies that build real fanbases",
    url: "/services/promotion",
  },
  alternates: {
    canonical: "/services/promotion",
  },
};

export default PromotionPage;