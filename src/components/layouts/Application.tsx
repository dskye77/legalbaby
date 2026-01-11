"use client";
import { useState } from "react";

import { motion } from "framer-motion";

import { X, Sparkles } from "lucide-react";
import { useAppStore } from "@/stores/store";
import FormField from "@/components/ui/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // ShadCN select
import Badge from "../ui/Badge";

import { Switch } from "../ui/switch";

export default function ApplicationModal() {
  const setApplicationMenuOpen = useAppStore(
    (state) => state.setApplicationMenuOpen
  );

  const closeModal = () => setApplicationMenuOpen(false);

  const [platform, setPlatform] = useState("");

  const [releasedMusic, setReleasedMusic] = useState(false);

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
        <div className="relative bg-card rounded-2xl p-6 md:p-8 ">
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

          {/* Form */}
          <form className="space-y-5">
            <FormField
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              required
            />

            <FormField
              id="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              required
            />

            <FormField
              id="whatsapp"
              label="WhatsApp Phone Number"
              type="tel"
              placeholder="+1 234 567 8900"
              hint="(optional)"
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
              />
            </div>
            {releasedMusic && (
              <>
                <FormField
                  id="artistName"
                  label="Artist Name"
                  placeholder="Your artist/stage name"
                />
                <FormField
                  id="profileLink"
                  label="Spotify Artist Profile Link"
                  placeholder="https://open.spotify.com/artist/..."
                />
                <FormField
                  id="previousDistributor"
                  label="Previous Distributor Used"
                  placeholder="e.g., DistroKid, TuneCore, CD Baby"
                />
              </>
            )}
            {/* ShadCN Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Social Media Presence <span className="text-primary">*</span>
              </label>

              <Select value={platform} onValueChange={setPlatform}>
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
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
