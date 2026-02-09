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

export default function Home() {
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
