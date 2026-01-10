import Steps, { StepItem } from "@/components/pages/Steps";

const processSteps: StepItem[] = [
  {
    step: "01",
    title: "Submit Your Profile",
    description:
      "Provide your Spotify artist profile and basic catalog information for assessment.",
  },
  {
    step: "02",
    title: "Data Analysis",
    description:
      "Our systems analyze streaming performance, catalog depth, and growth trajectory.",
  },
  {
    step: "03",
    title: "Eligibility Review",
    description:
      "Qualified profiles are reviewed by our team for funding options and terms.",
  },
  {
    step: "04",
    title: "Receive Options",
    description:
      "Eligible artists receive tailored funding proposals based on their catalog value.",
  },
];

export default function Process() {
  return (
    <Steps
      title="How Advance Funding Works"
      subtitle="The Process"
      description="A streamlined process that assesses eligibility based on real performance data—not credit scores or industry connections."
      steps={processSteps}
      sectionClassName="px-4 md:px-20 py-20"
    />
  );
}
