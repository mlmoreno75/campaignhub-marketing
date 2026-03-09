import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSolution } from "@/components/problem-solution";
import { FeaturesGrid } from "@/components/features-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { Metrics } from "@/components/metrics";
import { Testimonial } from "@/components/testimonial";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { faqs } from "@/data/faqs";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://campaignagent.app/#software",
      name: "CampaignAgent",
      url: "https://campaignagent.app",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI-native campaign intelligence platform that gives CMOs instant daily campaign ROI visibility without adding headcount.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "14-day free pilot. No credit card required.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
