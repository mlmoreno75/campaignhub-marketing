"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const sections = [
  { id: "agreement-to-terms", title: "1. Agreement to Terms" },
  { id: "description-of-service", title: "2. Description of Service" },
  { id: "account-registration", title: "3. Account Registration" },
  { id: "acceptable-use", title: "4. Acceptable Use" },
  { id: "intellectual-property", title: "5. Intellectual Property" },
  { id: "privacy", title: "6. Privacy" },
  { id: "payment-terms", title: "7. Payment Terms" },
  { id: "confidentiality", title: "8. Confidentiality" },
  { id: "disclaimers", title: "9. Disclaimers" },
  { id: "limitation-of-liability", title: "10. Limitation of Liability" },
  { id: "indemnification", title: "11. Indemnification" },
  { id: "term-and-termination", title: "12. Term and Termination" },
  { id: "governing-law", title: "13. Governing Law" },
  { id: "general-provisions", title: "14. General Provisions" },
  { id: "contact-information", title: "15. Contact Information" },
];

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("agreement-to-terms");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a2e] text-sm font-bold text-white">
              CA
            </div>
            <span className="text-lg font-semibold text-[#1a1a2e]">
              CampaignAgent
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-[#4f46e5] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4338ca]"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[#e2e8f0] bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a1a2e] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-[#64748b]">
            CampaignAgent — a product of RevGen AI LLC
          </p>
          <div className="mt-6 flex flex-col items-center gap-1 text-sm text-[#64748b]">
            <p>Effective Date: March 3, 2026</p>
            <p>Last Updated: March 3, 2026</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-12">
          {/* Sticky Table of Contents - Desktop Only */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 w-64">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#64748b]">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-[#4f46e5]/10 font-medium text-[#4f46e5]"
                          : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1a1a2e]"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="min-w-0 flex-1">
            <div className="rounded-xl border border-[#e2e8f0] bg-white p-8 shadow-sm md:p-12">
              {/* Section 1: Agreement to Terms */}
              <section id="agreement-to-terms" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  1. Agreement to Terms
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally
                  binding agreement between you (&quot;User&quot;) and RevGen AI
                  LLC (&quot;RevGen AI,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;), governing your access to and use of
                  CampaignAgent at campaignagent.app (the &quot;Platform&quot;).
                </p>
                <p className="mt-4 font-semibold uppercase leading-relaxed text-[#374151]">
                  BY ACCESSING OR USING CAMPAIGNAGENT, YOU AGREE TO BE BOUND BY
                  THESE TERMS. IF YOU DO NOT AGREE, DO NOT ACCESS OR USE THE
                  PLATFORM.
                </p>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  If you are using the Platform on behalf of a company, you
                  represent that you have authority to bind that entity to these
                  Terms.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 2: Description of Service */}
              <section id="description-of-service" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  2. Description of Service
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  CampaignAgent is an AI-native go-to-market platform that helps
                  B2B SaaS and technology companies build pipeline, establish AI
                  search visibility, and execute GTM strategy. The Platform is
                  currently in early access / beta and features may change
                  without notice. We reserve the right to modify, suspend, or
                  discontinue any part of the Platform at any time.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 3: Account Registration and Early Access */}
              <section id="account-registration" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  3. Account Registration and Early Access
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  3.1 Account Creation
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You agree to:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[#374151]">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>
                    Accept responsibility for all activity under your account
                  </li>
                  <li>
                    Notify us immediately at{" "}
                    <a
                      href="mailto:mike@revgenai.biz"
                      className="text-[#4f46e5] underline hover:text-[#4338ca]"
                    >
                      mike@revgenai.biz
                    </a>{" "}
                    of any unauthorized access
                  </li>
                </ul>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  3.2 Early Access Program
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  CampaignAgent is operating an early access / pilot program.
                  Participation is subject to availability and RevGen AI&apos;s
                  sole discretion. Features during early access may differ from
                  the generally available product.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  3.3 Eligibility
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You must be at least 18 years old and capable of forming a
                  binding contract. The Platform is intended for business use by
                  marketing professionals, founders, and revenue teams.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 4: Acceptable Use */}
              <section id="acceptable-use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  4. Acceptable Use
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  4.1 Permitted Use
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You may use CampaignAgent solely for lawful business purposes
                  in accordance with these Terms and applicable laws.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  4.2 Prohibited Conduct
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You agree not to:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[#374151]">
                  <li>Use the Platform for any unlawful purpose</li>
                  <li>
                    Violate the intellectual property rights of RevGen AI or any
                    third party
                  </li>
                  <li>
                    Transmit harmful, offensive, defamatory, or objectionable
                    content
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Platform
                  </li>
                  <li>
                    Reverse engineer, decompile, or extract source code from the
                    Platform
                  </li>
                  <li>
                    Use automated tools (bots, scrapers) without our written
                    consent
                  </li>
                  <li>
                    Resell or sublicense access to the Platform to third parties
                  </li>
                  <li>
                    Upload or transmit viruses, malware, or other malicious code
                  </li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 5: Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  5. Intellectual Property
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  5.1 RevGen AI IP
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  The Platform, including all software, AI models, algorithms,
                  content, design, and trademarks, is owned by RevGen AI LLC and
                  protected by applicable intellectual property laws.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  5.2 License to Use
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Subject to your compliance with these Terms, RevGen AI grants
                  you a limited, non-exclusive, non-transferable, revocable
                  license to access and use the Platform for your internal
                  business purposes.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  5.3 Your Content
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You retain ownership of content you submit (&quot;User
                  Content&quot;). By submitting User Content, you grant RevGen
                  AI a worldwide, non-exclusive, royalty-free license to process
                  your content solely to deliver the Platform&apos;s services to
                  you.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  5.4 Feedback
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Suggestions or feedback you provide grant RevGen AI a
                  perpetual, irrevocable, royalty-free license to use that
                  feedback without restriction or compensation.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 6: Privacy */}
              <section id="privacy" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  6. Privacy
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Your use of the Platform is governed by our Privacy Policy at{" "}
                  <Link
                    href="/privacy"
                    className="text-[#4f46e5] underline hover:text-[#4338ca]"
                  >
                    campaignagent.app/privacy
                  </Link>
                  , incorporated into these Terms by reference.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 7: Payment Terms */}
              <section id="payment-terms" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  7. Payment Terms
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  7.1 Pricing
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  CampaignAgent may offer free, trial, and paid subscription
                  tiers. During early access, access may be free or at a reduced
                  rate as mutually agreed.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  7.2 Billing
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Paid plans are billed on a recurring basis. All fees are
                  non-refundable except as required by law or stated in a
                  separate agreement.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  7.3 Changes to Pricing
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Pricing changes require at least 30 days&apos; notice for
                  existing subscribers.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 8: Confidentiality */}
              <section id="confidentiality" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  8. Confidentiality
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Both parties agree to hold the other&apos;s non-public
                  confidential information in strict confidence, not disclose it
                  to third parties without consent, and use it only to fulfill
                  obligations under these Terms.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 9: Disclaimers */}
              <section id="disclaimers" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  9. Disclaimers
                </h2>
                <div className="mt-4 rounded-lg border-l-4 border-[#4f46e5] bg-[#f9fafb] p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#4f46e5]">
                    <AlertTriangle size={20} />
                    <span className="text-sm font-semibold uppercase">
                      Legal Notice
                    </span>
                  </div>
                  <p className="font-semibold uppercase leading-relaxed text-[#374151]">
                    THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                    AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS
                    FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p className="mt-4 leading-relaxed text-[#374151]">
                    AI-generated outputs from CampaignAgent are for
                    informational and productivity purposes only. You are solely
                    responsible for reviewing, validating, and approving any
                    AI-generated content before use in your business operations.
                  </p>
                </div>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 10: Limitation of Liability */}
              <section id="limitation-of-liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  10. Limitation of Liability
                </h2>
                <div className="mt-4 rounded-lg border-l-4 border-[#4f46e5] bg-[#f9fafb] p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#4f46e5]">
                    <AlertTriangle size={20} />
                    <span className="text-sm font-semibold uppercase">
                      Legal Notice
                    </span>
                  </div>
                  <p className="font-semibold uppercase leading-relaxed text-[#374151]">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, REVGEN AI LLC SHALL
                    NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING LOSS OF
                    PROFITS, DATA, OR GOODWILL.
                  </p>
                  <p className="mt-4 font-semibold uppercase leading-relaxed text-[#374151]">
                    REVGEN AI&apos;S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED
                    THE GREATER OF (A) AMOUNTS YOU PAID IN THE 12 MONTHS PRIOR
                    TO THE CLAIM OR (B) ONE HUNDRED DOLLARS ($100).
                  </p>
                </div>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 11: Indemnification */}
              <section id="indemnification" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  11. Indemnification
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  You agree to defend, indemnify, and hold harmless RevGen AI
                  LLC and its officers, directors, employees, and agents from
                  claims arising from: (a) your use of the Platform; (b) your
                  violation of these Terms; (c) your User Content; or (d) your
                  violation of any third-party rights.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 12: Term and Termination */}
              <section id="term-and-termination" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  12. Term and Termination
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  12.1 Term
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  These Terms remain in effect while you use the Platform or
                  maintain an account.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  12.2 Termination by You
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You may terminate your account at any time by contacting{" "}
                  <a
                    href="mailto:mike@revgenai.biz"
                    className="text-[#4f46e5] underline hover:text-[#4338ca]"
                  >
                    mike@revgenai.biz
                  </a>
                  .
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  12.3 Termination by RevGen AI
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  We may suspend or terminate your account immediately without
                  notice if you breach these Terms or your conduct poses a risk
                  to RevGen AI, other users, or third parties.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  12.4 Effect of Termination
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Upon termination, your license ends immediately. Sections 5,
                  8, 9, 10, 11, and 14 survive termination.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 13: Governing Law and Dispute Resolution */}
              <section id="governing-law" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  13. Governing Law and Dispute Resolution
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  13.1 Governing Law
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  These Terms are governed by the laws of the State of North
                  Carolina.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  13.2 Informal Resolution
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Before filing a formal claim, contact us at{" "}
                  <a
                    href="mailto:mike@revgenai.biz"
                    className="text-[#4f46e5] underline hover:text-[#4338ca]"
                  >
                    mike@revgenai.biz
                  </a>{" "}
                  and attempt informal resolution within 30 days.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  13.3 Arbitration
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Unresolved disputes shall be settled by binding arbitration
                  under AAA Commercial Arbitration Rules. Either party may bring
                  qualifying claims in small claims court.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  13.4 Class Action Waiver
                </h3>
                <p className="mt-3 font-semibold uppercase leading-relaxed text-[#374151]">
                  ALL CLAIMS MUST BE BROUGHT ON AN INDIVIDUAL BASIS. YOU WAIVE
                  ANY RIGHT TO PARTICIPATE IN CLASS, CONSOLIDATED, OR
                  REPRESENTATIVE ACTIONS.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 14: General Provisions */}
              <section id="general-provisions" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  14. General Provisions
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  14.1 Entire Agreement
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  These Terms and the Privacy Policy constitute the entire
                  agreement between you and RevGen AI regarding the Platform.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  14.2 Severability
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  If any provision is held invalid, it will be modified
                  minimally and remaining provisions remain in full effect.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  14.3 Waiver
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Failure to enforce any provision is not a waiver of those
                  rights.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  14.4 Assignment
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You may not assign these Terms without our written consent. We
                  may assign without restriction.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  14.5 Force Majeure
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  RevGen AI is not liable for delays or failures caused by
                  circumstances beyond our reasonable control.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  14.6 Updates to Terms
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  We may modify these Terms at any time. Continued use after
                  changes constitutes acceptance.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 15: Contact Information */}
              <section id="contact-information" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  15. Contact Information
                </h2>
                <div className="mt-4 leading-relaxed text-[#374151]">
                  <p>RevGen AI LLC</p>
                  <p>Attn: Legal — Michael Moreno, Founder</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:mike@revgenai.biz"
                      className="text-[#4f46e5] underline hover:text-[#4338ca]"
                    >
                      mike@revgenai.biz
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://campaignagent.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4f46e5] underline hover:text-[#4338ca]"
                    >
                      https://campaignagent.app
                    </a>
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <p className="mt-12 text-center text-sm italic text-[#9ca3af]">
                This document was last reviewed March 2026. CampaignAgent
                recommends consulting qualified legal counsel for
                jurisdiction-specific compliance requirements.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a2e] bg-[#1a1a2e] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; 2026 RevGen AI LLC. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </nav>
          <a
            href="mailto:mike@revgenai.biz"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Contact: mike@revgenai.biz
          </a>
        </div>
      </footer>
    </div>
  );
}
