// src/lib/metadata.ts
import { Metadata } from "next";

const siteConfig = {
  name: "LEGAL BABY",
  description:
    "Next-generation music distribution and artist services platform for independent creators. Distribute to 200+ platforms, earn 70% royalties, keep your rights.",
  url: "https://legalbabydistribution.com",
  ogImage: "https://legalbabydistribution.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/legalbaby",
    instagram: "https://instagram.com/legalbaby",
  },
};

export function createMetadata({
  title,
  description,
  image,
  keywords,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: keywords || [
      "music distribution",
      "independent artists",
      "music streaming",
      "artist services",
      "playlist pitching",
      "music promotion",
      "catalog advances",
      "independent music",
      "music marketing",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@legalbaby",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const defaultMetadata = createMetadata({
  title: "LEGAL BABY - Independent Music Distribution & Artist Services",
  description: siteConfig.description,
  path: "",
});

export { siteConfig };
