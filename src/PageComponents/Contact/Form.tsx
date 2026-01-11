"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { Mail, Clock, MessageSquare, Send, Loader2 } from "lucide-react";

type ContactMethod = {
  title: string;
  description?: string;
  href?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    description: "support@legalbabydistribution.com",
    href: "mailto:support@legalbabydistribution.com",
    Icon: Mail,
  },
  {
    title: "Response Time",
    description:
      "We typically respond within 24-48 hours during business days.",
    Icon: Clock,
  },
  {
    title: "Social Media",
    description:
      "Follow us on Instagram and Twitter for updates and quick questions.",
    Icon: MessageSquare,
  },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Replace with your Formspree form ID for contact form
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_CONTACT_FORM_ID";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    
    // Check form validity
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after showing success message
        form.reset();
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Send Us a Message
          </h2>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
              <p className="text-primary font-medium">
                Message sent successfully! We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
              <p className="text-destructive font-medium">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              {["Name", "Email"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {field}
                  </label>
                  <input
                    type={field === "Email" ? "email" : "text"}
                    name={field.toLowerCase()}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder={`Your ${field.toLowerCase()}`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                name="subject"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="What's this about?"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message..."
                rows={6}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Methods */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-6">
            {contactMethods.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-xl bg-card/50 border border-border"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {c.title}
                  </h3>
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {c.description}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {c.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}