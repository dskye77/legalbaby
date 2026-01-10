"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default function CheckEligibility() {
  const [form, setForm] = useState({
    artistName: "",
    email: "",
    spotifyLink: "",
    monthlyStreams: "",
    catalogInfo: "",
  });

  const [errors, setErrors] = useState({
    artistName: "",
    email: "",
    spotifyLink: "",
  });

  // Simple validation
  const validate = () => {
    const newErrors = {
      artistName: form.artistName ? "" : "Artist Name is required",
      email: /^\S+@\S+\.\S+$/.test(form.email) ? "" : "Valid email is required",
      spotifyLink: /^https?:\/\/open\.spotify\.com\/artist\/\S+$/.test(
        form.spotifyLink
      )
        ? ""
        : "Valid Spotify Artist URL is required",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Do submission logic here (e.g., API call)
    console.log("Form submitted", form);
    alert("Eligibility submitted successfully!");
  };

  return (
    <Section>
      <div className="container-tight">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Check Eligibility
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              See If You Qualify
            </h2>
            <p className="text-muted-foreground text-lg">
              Submit your profile for a confidential eligibility assessment. No
              commitment required.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-card/50 border border-border space-y-6"
          >
            {/** Artist Name */}
            <div className="space-y-2">
              <label
                htmlFor="artistName"
                className="text-sm font-medium leading-none text-foreground"
              >
                Artist Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                placeholder="Your artist or project name"
                value={form.artistName}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background border-border ${
                  errors.artistName ? "border-red-500" : ""
                }`}
              />
              {errors.artistName && (
                <p className="text-xs text-red-500">{errors.artistName}</p>
              )}
            </div>

            {/** Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-foreground"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background border-border ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/** Spotify Link */}
            <div className="space-y-2">
              <label
                htmlFor="spotifyLink"
                className="text-sm font-medium leading-none text-foreground"
              >
                Spotify Artist Profile <span className="text-primary">*</span>
              </label>
              <input
                type="url"
                id="spotifyLink"
                name="spotifyLink"
                placeholder="https://open.spotify.com/artist/..."
                value={form.spotifyLink}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background border-border ${
                  errors.spotifyLink ? "border-red-500" : ""
                }`}
              />
              {errors.spotifyLink && (
                <p className="text-xs text-red-500">{errors.spotifyLink}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Required for performance data assessment
              </p>
            </div>

            {/** Monthly Streams */}
            <div className="space-y-2">
              <label
                htmlFor="monthlyStreams"
                className="text-sm font-medium leading-none text-foreground"
              >
                Approximate Monthly Streams
              </label>
              <input
                type="text"
                id="monthlyStreams"
                name="monthlyStreams"
                placeholder="e.g., 50,000"
                value={form.monthlyStreams}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background border-border"
              />
            </div>

            {/** Catalog Info */}
            <div className="space-y-2">
              <label
                htmlFor="catalogInfo"
                className="text-sm font-medium leading-none text-foreground"
              >
                Catalog Information
              </label>
              <textarea
                id="catalogInfo"
                name="catalogInfo"
                placeholder="Brief description of your catalog (number of releases, labels, ownership status)"
                value={form.catalogInfo}
                onChange={handleChange}
                className="flex w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-background border-border min-h-25"
              />
            </div>

            {/** Submit */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-display tracking-wide bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 h-12 px-8 text-base w-full"
            >
              Check Funding Eligibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Your information is kept confidential and used solely for
              eligibility assessment.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
