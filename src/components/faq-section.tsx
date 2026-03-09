"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
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
  );
};
