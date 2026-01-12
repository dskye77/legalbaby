// src/app/page.tsx
import HomePage from "@/PageComponents/Home";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Script from "next/script";

export const metadata: Metadata = createMetadata({
  title: "LEGAL BABY - Independent Music Distribution & Artist Services",
  description:
    "Next-generation music distribution platform for independent artists. Distribute to 200+ platforms, earn 70% royalties, no upfront costs. Professional playlist pitching, promotion, and label services.",
  path: "/",
  keywords: [
    "music distribution",
    "independent music",
    "artist services",
    "music streaming platforms",
    "spotify distribution",
    "apple music distribution",
    "music promotion",
    "playlist pitching",
    "artist royalties",
    "music marketing",
  ],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LEGAL BABY",
  alternateName: "LEGAL BABY Distribution",
  url: "https://legalbabydistribution.com",
  logo: "https://legalbabydistribution.com/logo.png",
  description:
    "Next-generation music distribution and artist services platform for independent creators",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@legalbabydistribution.com",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/legalbaby",
    "https://instagram.com/legalbaby",
    "https://youtube.com/@legalbaby",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LEGAL BABY Music Distribution",
  provider: {
    "@type": "Organization",
    name: "LEGAL BABY",
  },
  serviceType: "Music Distribution and Artist Services",
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://legalbabydistribution.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Music Distribution",
      description:
        "Distribute music to 200+ streaming platforms worldwide with 70% royalty rates",
    },
    {
      "@type": "Offer",
      name: "Playlist Pitching",
      description:
        "Professional playlist pitching to editorial and independent curators",
    },
    {
      "@type": "Offer",
      name: "Promotion & Marketing",
      description: "Strategic marketing support for organic audience growth",
    },
    {
      "@type": "Offer",
      name: "Label Services",
      description: "Full artist development support with branding and strategy",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LEGAL BABY",
  url: "https://legalbabydistribution.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://legalbabydistribution.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <HomePage />
    </>
  );
}
