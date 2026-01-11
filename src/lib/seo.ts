// src/lib/seo.ts
export const siteConfig = {
  name: "LEGAL BABY",
  description: "Next-generation music distribution and artist services platform for independent creators. Distribute to 200+ platforms, earn 70% royalties, keep your rights.",
  url: "https://legalbabydistribution.com",
  ogImage: "https://legalbabydistribution.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/legalbaby",
    instagram: "https://instagram.com/legalbaby",
  },
  keywords: [
    "music distribution",
    "independent artists",
    "music streaming",
    "artist services",
    "spotify distribution",
    "apple music distribution",
    "music promotion",
    "playlist pitching",
    "artist advances",
    "music marketing",
    "independent label",
    "digital music distribution",
    "music rights",
    "artist royalties",
    "music career",
  ],
};

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "LEGAL BABY",
      url: siteConfig.url,
    },
  ],
  creator: "LEGAL BABY",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@legalbaby",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

// Generate JSON-LD structured data
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@legalbabydistribution.com",
      contactType: "Customer Service",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Music Distribution",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description: "Professional music distribution services for independent artists",
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "70% streaming revenue share, no upfront costs",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}