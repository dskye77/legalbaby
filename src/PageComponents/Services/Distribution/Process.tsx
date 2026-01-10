import Steps, { StepItem } from "@/components/pages/Steps";

const processSteps: StepItem[] = [
  {
    step: "01",
    title: "Upload Your Music",
    description:
      "Submit your track or album with artwork and metadata through our simple dashboard. We support all major audio formats.",
  },
  {
    step: "02",
    title: "Quality Review",
    description:
      "Our team reviews your submission for audio quality and metadata accuracy. We catch issues before platforms do.",
  },
  {
    step: "03",
    title: "Distribution",
    description:
      "Your music goes live on 200+ platforms worldwide. Most stores update within 24–72 hours of approval.",
  },
  {
    step: "04",
    title: "Earn & Track",
    description:
      "Watch your streams grow in real-time. All royalties are paid directly to you—quarterly, transparently.",
  },
];

export default function ProcessPage() {
  return (
    <Steps
      title="How Distribution Works"
      subtitle="The Process"
      description="From your studio to streaming platforms worldwide—simplified into four straightforward steps."
      steps={processSteps}
      sectionClassName="px-4 md:px-20 py-20"
    />
  );
}
