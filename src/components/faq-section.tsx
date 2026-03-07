"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is marketing campaign governance?",
    answer:
      "Marketing campaign governance is the framework of processes, approvals, and controls that ensures campaigns are planned, executed, and measured consistently across your organization. It includes approval workflows, brand compliance checks, budget controls, and attribution tracking — so CMOs maintain quality and accountability while teams move fast.",
  },
  {
    question:
      "How is CampaignAgent different from attribution tools like HubSpot or Triple Whale?",
    answer:
      "Most attribution tools only measure which channels drove conversions after the fact. CampaignAgent combines attribution with governance — approval workflows, budget controls, and cross-channel orchestration — in a single platform. You don't just see what worked; you have the processes to ensure campaigns are properly planned and approved before they launch.",
  },
  {
    question: "Who is CampaignAgent built for?",
    answer:
      "CampaignAgent is built for CMOs, VPs of Marketing, Marketing Ops leaders, and Campaign Managers at mid-market B2B SaaS companies. It's especially valuable for teams managing multiple campaigns per quarter who need better approval visibility, faster time-to-launch, and clearer ROI measurement across channels.",
  },
  {
    question: "How does CampaignAgent measure marketing ROI?",
    answer:
      "CampaignAgent provides real-time multi-channel attribution from the same platform where you plan and approve campaigns. Instead of stitching together data from seven tools, your team sees performance metrics in one unified dashboard — connecting campaign planning directly to outcomes so you always know what's working.",
  },
  {
    question: "What does the free pilot include?",
    answer:
      "The 14-day pilot includes full platform access — unified campaign dashboard, AI-powered recommendations, configurable approval workflows, and real-time analytics. Full onboarding is included and no credit card is required. We work directly with your team to get campaigns running in the platform within the first week.",
  },
  {
    question: "Can CampaignAgent replace our current project management tool?",
    answer:
      "CampaignAgent is purpose-built for marketing campaign governance, which goes beyond general project management. While tools like Asana or Monday track tasks, CampaignAgent understands campaigns — with marketing-specific approval chains, attribution tracking, and cross-channel orchestration that generic PM tools can't provide.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {/* JSON-LD Schema for SEO and AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
              FAQ
            </p>
            <h2 className="text-4xl font-bold text-foreground mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about CampaignAgent and campaign
              governance.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `faq-btn-${i}`;
              const regionId = `faq-region-${i}`;

              return (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={regionId}
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-start p-6 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                  >
                    <span className="font-semibold text-foreground text-base leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 text-2xl font-light text-primary transition-transform duration-200 leading-none ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={regionId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-muted text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Block */}
          <div className="mt-16 bg-background rounded-2xl p-10 text-center">
            <p className="text-foreground font-medium text-lg mb-6">
              Still have questions? We'd love to show you the platform.
            </p>
            <a
              href="#cta"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold text-base transition-colors duration-200"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
