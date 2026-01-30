import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Layout from "@/PageComponents/Layout/Layout";

import { ThemeProvider } from "@/components/theme-provider";
import GoogleAds from "@/components/GoogleAds";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEGAL BABY - Independent Music Distribution",
  description:
    "Artist-first music distribution platform. 70% royalties, no upfront costs, you own your masters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon.png"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Google Ads Tracking */}
          <GoogleAds />

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
