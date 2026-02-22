import type { Metadata } from "next";
import { ROINavbar } from "@/components/roi/roi-navbar";
import { ROIHero } from "@/components/roi/roi-hero";
import { ROIProblem } from "@/components/roi/roi-problem";
import { ROISolution } from "@/components/roi/roi-solution";
import { ROITransformation } from "@/components/roi/roi-transformation";
import { ROISocialProof } from "@/components/roi/roi-social-proof";
import { ROIPilot } from "@/components/roi/roi-pilot";
import { ROIFooter } from "@/components/roi/roi-footer";

export const metadata: Metadata = {
  title: "CampaignHub — Daily Campaign ROI Visibility for CMOs",
  description:
    "Before you hire another marketing ops manager, see how CampaignHub gives CMOs instant daily campaign ROI visibility across CRM, ads, and sales — without adding headcount.",
  openGraph: {
    title: "CampaignHub — Daily Campaign ROI Visibility for CMOs",
    description:
      "Instant daily campaign ROI visibility across CRM, ads, and sales — without adding headcount.",
    type: "website",
  },
};

export default function ROIPage() {
  return (
    <>
      <ROINavbar />
      <main>
        <ROIHero />
        <ROIProblem />
        <ROISolution />
        <ROITransformation />
        <ROISocialProof />
        <ROIPilot />
      </main>
      <ROIFooter />
    </>
  );
}
