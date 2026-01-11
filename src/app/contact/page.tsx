// src/app/contact/page.tsx
import { Metadata } from "next";
import Contact from "@/PageComponents/Contact/index";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with LEGAL BABY",
  description: "Questions about music distribution or artist services? Contact our team. We typically respond within 24-48 hours.",
  openGraph: {
    title: "Contact LEGAL BABY",
    description: "We'd love to hear from you",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default Contact;