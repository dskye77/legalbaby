"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Sparkles, Loader2 } from "lucide-react";
import { useAppStore } from "@/stores/store";
import FormField from "@/components/ui/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Badge from "../ui/Badge";
import { Switch } from "../ui/switch";

export default function ApplicationModal() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const closeModal = () => setApplicationMenuOpen(false);

  const [platform, setPlatform] = useState("");
  const [releasedMusic, setReleasedMusic] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Replace with your Formspree form ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjggbqqq";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // Client-side validation
    if (!platform) {
      setSubmitStatus("error");
      return;
    }

    const form = e.currentTarget;
    
    // Check form validity
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(form);
    
    // Add the platform and releasedMusic values to formData
    formData.append("platform", platform);
    formData.append("hasReleasedMusic", releasedMusic.toString());

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
        form.reset();
        setPlatform("");
        setReleasedMusic(false);
        
        // Close modal after 2 seconds
        setTimeout(() => {
          closeModal();
          setSubmitStatus("idle");
        }, 2000);
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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={closeModal}
      />

      {/* Modal container */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10 overflow-y-auto overflow-x-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow border */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-50" />

        {/* Content */}
        <div className="relative bg-card rounded-2xl p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={closeModal}
            aria-label="Close modal"
            title="Close modal"
            className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="primary" className="mb-4 py2 px-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Application
              </span>
            </Badge>

            <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
              Request Access
            </h2>

            <p className="text-muted-foreground text-sm">
              We work with a curated group of independent artists
            </p>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/30 text-center">
              <p className="text-primary font-medium">
                Application submitted successfully! We&apos;ll be in touch soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-center">
              <p className="text-destructive font-medium">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <FormField
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="Your full name"
              required
              disabled={isSubmitting}
            />

            <FormField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              required
              disabled={isSubmitting}
            />

            <FormField
              id="whatsapp"
              name="whatsapp"
              label="WhatsApp Phone Number"
              type="tel"
              placeholder="+1 234 567 8900"
              hint="(optional)"
              disabled={isSubmitting}
            />

            {/* Released music toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
              <label
                htmlFor="hasReleased"
                className="text-sm font-medium cursor-pointer"
              >
                Have you released music before?
              </label>

              <Switch
                id="hasReleased"
                checked={releasedMusic}
                onCheckedChange={setReleasedMusic}
                disabled={isSubmitting}
              />
            </div>

            {releasedMusic && (
              <>
                <FormField
                  id="artistName"
                  name="artistName"
                  label="Artist Name"
                  placeholder="Your artist/stage name"
                  disabled={isSubmitting}
                />
                <FormField
                  id="profileLink"
                  name="profileLink"
                  label="Spotify Artist Profile Link"
                  placeholder="https://open.spotify.com/artist/..."
                  disabled={isSubmitting}
                />
                <FormField
                  id="previousDistributor"
                  name="previousDistributor"
                  label="Previous Distributor Used"
                  placeholder="e.g., DistroKid, TuneCore, CD Baby"
                  disabled={isSubmitting}
                />
              </>
            )}

            {/* Social Media Platform */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Social Media Presence <span className="text-primary">*</span>
              </label>

              {/* Hidden input for form validation */}
              <input
                type="hidden"
                name="socialPlatform"
                value={platform}
                required
              />

              <Select 
                value={platform} 
                onValueChange={setPlatform}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full rounded-md border border-border bg-muted px-3 py-2 text-sm">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>

                <SelectContent
                  className="w-full bg-background border border-border rounded-md mt-1"
                  position="popper"
                  sideOffset={4}
                >
                  {["instagram", "tiktok", "twitter", "facebook"].map(
                    (platform) => (
                      <SelectItem
                        key={platform}
                        value={platform}
                        className="hover:bg-primary"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              
              {submitStatus === "error" && !platform && (
                <p className="text-xs text-destructive mt-1">
                  Please select a social media platform
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || !platform}
              className="h-12 w-full rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}