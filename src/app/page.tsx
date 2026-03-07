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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "RevGen AI LLC",
      url: "https://campaignagent.app",
      logo: "https://campaignagent.app/favicon.ico",
      contactPoint: {
        "@type": "ContactPoint",
        email: "mike@revgenai.biz",
        contactType: "customer support",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pflugerville",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "SoftwareApplication",
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
        description: "14-day free pilot",
      },
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
