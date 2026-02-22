import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSolution } from "@/components/problem-solution";
import { FeaturesGrid } from "@/components/features-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { Metrics } from "@/components/metrics";
import { Testimonial } from "@/components/testimonial";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "CampaignHub — AI-Powered Campaign Intelligence | ROI",
  description:
    "Plan, approve, and optimize integrated marketing campaigns with AI-powered intelligence. Built for CMOs, Marketing Ops, and Campaign Managers.",
  openGraph: {
    title: "CampaignHub — AI-Powered Campaign Intelligence | ROI",
    description:
      "Plan, approve, and optimize integrated marketing campaigns with AI-powered intelligence.",
    type: "website",
  },
};

export default function ROIPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <FeaturesGrid />
        <ProductShowcase />
        <Metrics />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
