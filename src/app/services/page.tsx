// src/app/services/page.tsx
import { Metadata } from "next";
import ServicesPage from "@/PageComponents/Services";
import { generateServiceSchema } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Artist Services | Distribution, Promotion & More",
  description: "Complete music distribution, playlist pitching, promotion, label services, and artist advances. Professional tools for independent musicians without upfront costs.",
  keywords: ["music distribution", "playlist pitching", "music promotion", "artist services", "label services", "artist advances"],
  openGraph: {
    title: "Comprehensive Artist Services | LEGAL BABY",
    description: "Everything you need to succeed as an independent artist",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  const serviceSchema = generateServiceSchema();
  
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ServicesPage />
    </>
  );
}