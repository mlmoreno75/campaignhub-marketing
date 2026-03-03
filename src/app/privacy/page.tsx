"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "how-we-share", title: "4. How We Share Your Information" },
  { id: "cookies", title: "5. Cookies and Tracking" },
  { id: "data-retention", title: "6. Data Retention" },
  { id: "data-security", title: "7. Data Security" },
  { id: "privacy-rights", title: "8. Your Privacy Rights" },
  { id: "third-party-links", title: "9. Third-Party Links" },
  { id: "childrens-privacy", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

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
            Privacy Policy
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
              {/* Section 1: Introduction */}
              <section id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  1. Introduction
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Welcome to CampaignAgent, an AI-native go-to-market platform
                  operated by RevGen AI LLC (&quot;RevGen AI,&quot;
                  &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use campaignagent.app. If
                  you disagree with its terms, please discontinue use.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 2: Information We Collect */}
              <section id="information-we-collect" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  2. Information We Collect
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  2.1 Information You Provide to Us
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  We collect information you voluntarily provide when you:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[#374151]">
                  <li>Register for an account or request early access</li>
                  <li>Fill out contact forms or book a demo</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Participate in surveys, promotions, or beta programs</li>
                  <li>Contact us directly via email or other channels</li>
                </ul>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  This information may include your name, email address, company
                  name, job title, phone number, and any messages or content you
                  submit.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  2.2 Information Collected Automatically
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  When you visit our platform, we automatically collect:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[#374151]">
                  <li>IP address and approximate geographic location</li>
                  <li>Browser type, version, and operating system</li>
                  <li>Pages visited, time spent, and navigation paths</li>
                  <li>Referring URLs and exit pages</li>
                  <li>Device identifiers and usage data</li>
                </ul>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Collected via cookies, web beacons, pixels, and similar
                  tracking technologies.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  2.3 Information from Third Parties
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  We may receive information from analytics providers, marketing
                  partners, CRM platforms, and social media platforms if you
                  connect your account.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 3: How We Use Your Information */}
              <section id="how-we-use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  3. How We Use Your Information
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
                  <li>
                    Provide, operate, and improve CampaignAgent and its features
                  </li>
                  <li>Process your registration and manage your account</li>
                  <li>
                    Respond to inquiries, support requests, and feedback
                  </li>
                  <li>
                    Send transactional and marketing communications (with
                    consent where required)
                  </li>
                  <li>
                    Analyze usage trends and optimize platform performance
                  </li>
                  <li>
                    Detect, prevent, and address fraud, security incidents, and
                    abuse
                  </li>
                  <li>
                    Comply with legal obligations and enforce our Terms of
                    Service
                  </li>
                </ul>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 4: How We Share Your Information */}
              <section id="how-we-share" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  4. How We Share Your Information
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  We do not sell your personal information. We may share with:
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  4.1 Service Providers
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  Third-party vendors for hosting, analytics, email delivery,
                  and payment processing. All providers are contractually
                  obligated to protect your information.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  4.2 Business Transfers
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  If RevGen AI LLC is involved in a merger, acquisition, or
                  asset sale, your information may transfer. We will notify you
                  before your information becomes subject to a different policy.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  4.3 Legal Requirements
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  When required by law or valid legal request by public
                  authorities.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  4.4 Protection of Rights
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  To protect our rights, your safety, or the safety of others,
                  or to investigate fraud.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 5: Cookies and Tracking Technologies */}
              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Types of cookies we use:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[#374151]">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the
                    platform to function. Cannot be switched off.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors interact with our platform.
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver relevant
                    ads and track campaign performance.
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Opt out of analytics tracking at:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4f46e5] underline hover:text-[#4338ca]"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 6: Data Retention */}
              <section id="data-retention" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  6. Data Retention
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Account data is retained for the duration of your account plus
                  90 days following closure, unless earlier deletion is
                  requested.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 7: Data Security */}
              <section id="data-security" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  7. Data Security
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  We implement SSL/TLS encryption, access controls, and regular
                  security reviews. No method of electronic transmission is 100%
                  secure and we cannot guarantee absolute security.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 8: Your Privacy Rights */}
              <section id="privacy-rights" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  8. Your Privacy Rights
                </h2>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  8.1 All Users
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  You may have the right to access, correct, delete, restrict,
                  or port your personal information, and to withdraw consent.
                  Contact:{" "}
                  <a
                    href="mailto:privacy@revgenai.biz"
                    className="text-[#4f46e5] underline hover:text-[#4338ca]"
                  >
                    privacy@revgenai.biz
                  </a>
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  8.2 California Residents (CCPA)
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  California residents have the right to know what personal
                  information we collect, the right to delete it, and the right
                  to opt out of its sale. We do not sell personal information.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-[#4f46e5]">
                  8.3 European Users (GDPR)
                </h3>
                <p className="mt-3 leading-relaxed text-[#374151]">
                  EEA users have rights under GDPR including access,
                  rectification, erasure, and portability. Our legal bases
                  include contract performance, legal compliance, legitimate
                  interests, and consent. Contact:{" "}
                  <a
                    href="mailto:privacy@revgenai.biz"
                    className="text-[#4f46e5] underline hover:text-[#4338ca]"
                  >
                    privacy@revgenai.biz
                  </a>
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 9: Third-Party Links */}
              <section id="third-party-links" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  9. Third-Party Links
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  Our platform may contain links to third-party websites. We are
                  not responsible for their privacy practices.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 10: Children's Privacy */}
              <section id="childrens-privacy" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  10. Children&apos;s Privacy
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  CampaignAgent is not directed to individuals under 18. We do
                  not knowingly collect data from minors. If discovered, we will
                  delete it promptly.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 11: Changes to This Policy */}
              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  11. Changes to This Policy
                </h2>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  We may update this policy at any time. Material changes will
                  be communicated by updating the &quot;Last Updated&quot; date.
                  Continued use after changes constitutes acceptance.
                </p>
              </section>

              <hr className="my-10 border-[#e2e8f0]" />

              {/* Section 12: Contact Us */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-[#1a1a2e]">
                  12. Contact Us
                </h2>
                <div className="mt-4 leading-relaxed text-[#374151]">
                  <p>RevGen AI LLC</p>
                  <p>Attn: Privacy — Michael Moreno, Founder</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@revgenai.biz"
                      className="text-[#4f46e5] underline hover:text-[#4338ca]"
                    >
                      privacy@revgenai.biz
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
              <p className="mt-12 text-center text-sm italic text-[#64748b]">
                This document was last reviewed March 2026. CampaignAgent
                recommends consulting qualified legal counsel for
                jurisdiction-specific compliance requirements.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-[#64748b] transition-colors hover:text-[#1a1a2e]"
              >
                Home
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[#64748b] transition-colors hover:text-[#1a1a2e]"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm font-medium text-[#4f46e5]"
              >
                Privacy Policy
              </Link>
              <a
                href="mailto:privacy@revgenai.biz"
                className="text-sm text-[#64748b] transition-colors hover:text-[#1a1a2e]"
              >
                Contact
              </a>
            </div>
            <p className="text-sm text-[#64748b]">
              © {new Date().getFullYear()} RevGen AI LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
