// src/app/contact/page.tsx
import Contact from "@/PageComponents/Contact/index";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us - Get in Touch with LEGAL BABY",
  description: "Have questions about music distribution, artist services, or your account? Contact LEGAL BABY's support team. We typically respond within 24-48 hours.",
  path: "/contact",
  keywords: [
    "contact legal baby",
    "music distribution support",
    "artist services contact",
    "customer support",
  ],
});

export default Contact;

