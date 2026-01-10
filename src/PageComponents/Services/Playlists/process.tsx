import Steps, { StepItem } from "@/components/pages/Steps";

const processSteps: StepItem[] = [
  {
    step: "01",
    title: "Track Review",
    description:
      "We listen to your music and assess its playlist potential based on quality, genre fit, and current trends.",
  },
  {
    step: "02",
    title: "Target Selection",
    description:
      "We identify playlists that match your sound—from editorial picks to influential independent curators.",
  },
  {
    step: "03",
    title: "Professional Pitching",
    description:
      "We craft compelling pitches that highlight what makes your track special, submitted through proper channels.",
  },
  {
    step: "04",
    title: "Tracking & Reporting",
    description:
      "You get clear updates on pitch status and placement results. Full transparency, always.",
  },
];

export default function ProcessPage() {
  return (
    <Steps
      title="How Playlist Pitching Works"
      subtitle="The Process"
      description="A systematic approach to getting your music in front of the curators who matter."
      steps={processSteps}
      sectionClassName="px-4 md:px-20 py-20"
    />
  );
}
