import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Layout from "@/PageComponents/Layout/Layout";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEGAL BABY | Music Distribution & Artist Services Platform",
  description: "Empowering independent artists with next-generation distribution and artist services. Own your art. Control your future.",
  metadataBase: new URL("https://legalbabydistribution.com"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  keywords: [
    "music distribution",
    "independent artists",
    "artist services",
    "music promotion",
    "playlist pitching",
    "label services",
    "music streaming",
  ],
  authors: [{ name: "LEGAL BABY", url: "https://legalbabydistribution.com" }],
  creator: "LEGAL BABY",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legalbabydistribution.com",
    siteName: "LEGAL BABY",
    title: "LEGAL BABY | Music Distribution & Artist Services Platform",
    description: "Empowering independent artists with next-generation distribution and artist services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEGAL BABY - Music Distribution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGAL BABY | Music Distribution & Artist Services Platform",
    description: "Empowering independent artists with next-generation distribution and artist services.",
    images: ["/twitter-image.jpg"],
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
  alternates: {
    canonical: "https://legalbabydistribution.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>{children}</Layout>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}