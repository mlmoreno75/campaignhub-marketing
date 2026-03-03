import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  Calendar,
  Rocket,
  Shield,
  User,
  Lock,
  Check,
  Linkedin,
  Phone,
  FileText,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CampaignAgent — AI-Native GTM Platform",
  description:
    "CampaignAgent is an AI-native GTM platform built by Michael Moreno, a 15-year B2B GTM operator. A product of RevGen AI LLC, Pflugerville, Texas.",
  alternates: {
    canonical: "https://campaignagent.app/about",
  },
};

const companyInfo = [
  {
    icon: Building2,
    label: "CampaignAgent",
    text: "A product of RevGen AI LLC",
  },
  {
    icon: FileText,
    label: "RevGen AI LLC",
    text: "Registered limited liability company. EIN available upon request for enterprise procurement.",
  },
  {
    icon: Calendar,
    label: "2024",
    text: "Founded and bootstrapped by Michael Moreno, Pflugerville, Texas, USA",
  },
  {
    icon: MapPin,
    label: "Pflugerville, TX",
    text: "United States — serving B2B SaaS and technology companies globally",
  },
  {
    icon: Mail,
    label: "mike@revgenai.biz",
    text: "Direct founder contact. Response within 1 business day.",
  },
  {
    icon: Rocket,
    label: "Early Access / Pilot",
    text: "Currently onboarding pilot customers. Actively seeking strategic investors.",
  },
];

const proofPoints = [
  "$50M in channel-influenced pipeline at Exabeam — 44X alliance revenue growth",
  "$3M+ incremental revenue from AI solution launches at SADA",
  "$100M+ annual revenue contribution at Cloudera",
  "$4M incremental pipeline at Cloudflare through partner marketing",
  "3x early-stage startup experience — two acquisitions, one IPO track",
  "Currently Principal PMM at Procore Technologies ($10B+ construction tech)",
];

const priorCompanies = [
  "Intel",
  "Cloudflare",
  "Cloudera",
  "Exabeam",
  "SADA",
  "Procore",
];

const trustSignals = [
  {
    icon: User,
    title: "Founder-Led Company",
    text: "Every customer works directly with Michael Moreno. No account managers. No handoffs. Direct access to the builder.",
  },
  {
    icon: Shield,
    title: "Registered US Business",
    text: "RevGen AI LLC is a registered US limited liability company. Privacy Policy and Terms of Service are published at campaignagent.app. EIN available for enterprise procurement on request.",
  },
  {
    icon: Building2,
    title: "Enterprise-Grade Background",
    text: "Built by a practitioner who has worked inside Procore, Cloudflare, Cloudera, and Exabeam — companies with rigorous security, compliance, and enterprise customer requirements.",
  },
  {
    icon: Lock,
    title: "Responsible Data Practices",
    text: "We collect only what is necessary to deliver the product. We do not sell personal data. Full details at campaignagent.app/privacy.",
  },
];

const investorCards = [
  {
    title: "The Market Shift",
    text: "Traditional SEO and inbound are declining as B2B buyers shift to AI-native research. The GTM stack is being rebuilt from scratch. CampaignAgent is positioned at the center of that transition.",
  },
  {
    title: "Early Traction",
    text: "Pilot customers onboarding. Product live at campaignagent.app. Second product (IconPilot) already in market — proving our ability to build and ship.",
  },
  {
    title: "Operator-Founder",
    text: "15 years of GTM operator experience at scaled companies. Engineering background. Currently Principal PMM at Procore. Deep market insight from being inside the problem every day.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2" aria-label="CampaignAgent Home">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1a2e] text-sm font-bold text-white">
              CA
            </div>
            <span className="text-lg font-semibold text-[#1a1a2e]">
              CampaignAgent
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#374151] transition-colors hover:bg-[#f9fafb]"
          >
            <span aria-hidden="true">←</span> Back to Home
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#1a1a2e] py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block rounded-full bg-[#4f46e5]/20 px-4 py-1.5 text-sm font-medium text-[#a5b4fc]">
              About CampaignAgent
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Built by a GTM Operator.
              <br className="hidden sm:block" /> Designed for the AI Era.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#94a3b8] md:text-xl">
              CampaignAgent is an AI-native go-to-market platform built by
              someone who spent 15 years inside the GTM machine — and got tired
              of watching great products lose to louder competitors.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#early-access"
                className="inline-flex items-center justify-center rounded-lg bg-[#4f46e5] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#4338ca]"
              >
                Request Early Access
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                View the Product
              </Link>
            </div>
          </div>
        </section>

        {/* Company Snapshot Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold text-[#1a1a2e]">
              Company Overview
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {companyInfo.map((item) => (
                <article
                  key={item.label}
                  className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4f46e5]/10">
                      <item.icon className="h-5 w-5 text-[#4f46e5]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e]">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#f9fafb] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#4f46e5]">
              Our Mission
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#1a1a2e] md:text-4xl">
              Make AI-native GTM accessible to every B2B SaaS team.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#374151]">
              The way B2B buyers research vendors has fundamentally changed.
              They&apos;re asking ChatGPT, Perplexity, and Gemini — not
              Googling. Most GTM teams are still running 2019 playbooks against
              2025 buyers. CampaignAgent was built to close that gap — giving
              lean marketing teams the AI infrastructure to build pipeline,
              establish authority, and show up where modern buyers actually do
              their research.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
              {/* Founder Avatar */}
              <div className="flex flex-col items-center lg:items-start">
                <div
                  className="flex h-48 w-48 items-center justify-center rounded-2xl bg-[#e2e8f0] text-5xl font-bold text-[#64748b]"
                  aria-label="Michael Moreno, Founder of CampaignAgent and RevGen AI LLC"
                >
                  MM
                </div>
                <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
                  <a
                    href="https://linkedin.com/in/michael-moreno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4f46e5] hover:underline"
                    aria-label="Michael Moreno LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                    linkedin.com/in/michael-moreno
                  </a>
                  <a
                    href="mailto:mike@revgenai.biz"
                    className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#374151]"
                  >
                    <Mail className="h-4 w-4" />
                    mike@revgenai.biz
                  </a>
                </div>
              </div>

              {/* Founder Bio */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-[#4f46e5]">
                  Leadership
                </span>
                <h2 className="mt-2 text-3xl font-bold text-[#1a1a2e]">
                  Michael Moreno
                </h2>
                <p className="mt-1 text-lg text-[#64748b]">
                  Founder & CEO, RevGen AI LLC | Principal PMM, Procore
                  Technologies
                </p>

                <div className="mt-6 space-y-4 text-[#374151]">
                  <p className="leading-relaxed">
                    Michael is a B2B GTM operator with 15 years of experience
                    scaling pipeline and launching products at companies
                    including Intel, Cloudflare, Cloudera, Exabeam, SADA, and
                    Procore. He has led go-to-market strategy across cloud,
                    cybersecurity, machine learning, and generative AI —
                    consistently translating complex technical products into
                    market-winning narratives.
                  </p>
                  <p className="leading-relaxed">
                    Michael started his career writing server-side Java at
                    Accenture, giving him an engineering foundation that most
                    marketers don&apos;t have. That technical fluency — combined
                    with enterprise marketing leadership — means he can build
                    the product and tell its story. CampaignAgent is the tool he
                    wished he had at every company he has worked at.
                  </p>
                </div>

                {/* Proof Points */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4f46e5]" />
                      <span className="text-sm text-[#374151]">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Prior Companies */}
                <div className="mt-10">
                  <p className="mb-4 text-sm font-medium text-[#64748b]">
                    Prior Companies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {priorCompanies.map((company) => (
                      <span
                        key={company}
                        className="rounded-full bg-[#f1f5f9] px-4 py-1.5 text-sm font-medium text-[#64748b]"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="bg-[#f9fafb] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1a1a2e]">Our Products</h2>
              <p className="mt-3 text-lg text-[#64748b]">
                RevGen AI LLC builds AI-native tools for modern GTM teams.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* CampaignAgent Card */}
              <article className="rounded-lg border-2 border-[#4f46e5] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <span className="inline-block rounded-full bg-[#4f46e5]/10 px-3 py-1 text-xs font-semibold text-[#4f46e5]">
                  Core Product — Early Access
                </span>
                <h3 className="mt-4 text-2xl font-bold text-[#1a1a2e]">
                  CampaignAgent
                </h3>
                <p className="mt-1 text-sm text-[#4f46e5]">campaignagent.app</p>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  An AI GTM agent that helps B2B SaaS teams build pipeline,
                  establish AI search visibility, and execute content strategy —
                  without adding headcount. Built for CMOs and VP Marketing
                  leaders running lean teams in the age of AI-native buying.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#4f46e5] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4338ca]"
                >
                  Learn More
                </Link>
              </article>

              {/* IconPilot Card */}
              <article className="rounded-lg border border-[#e2e8f0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <span className="inline-block rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-semibold text-[#64748b]">
                  Live Product
                </span>
                <h3 className="mt-4 text-2xl font-bold text-[#1a1a2e]">
                  IconPilot
                </h3>
                <p className="mt-1 text-sm text-[#64748b]">iconpilot.app</p>
                <p className="mt-4 leading-relaxed text-[#374151]">
                  A lightweight productivity SaaS that helps non-designers
                  quickly find, customize, and export clean, license-safe icons
                  for professional use. Built for product marketers, founders,
                  and operators.
                </p>
                <a
                  href="https://iconpilot.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-[#e2e8f0] px-6 py-3 text-sm font-semibold text-[#374151] transition-colors hover:bg-[#f9fafb]"
                >
                  View Product
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1a1a2e]">
                Why Teams Trust CampaignAgent
              </h2>
              <p className="mt-3 text-lg text-[#64748b]">
                Built with enterprise teams in mind from day one.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <article
                  key={signal.title}
                  className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4f46e5]/10">
                    <signal.icon className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1a1a2e]">
                    {signal.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#64748b]">
                    {signal.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Section */}
        <section className="bg-[#1a1a2e] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#4f46e5]/20 px-4 py-1.5 text-sm font-medium text-[#a5b4fc]">
                For Investors
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                We Are Actively Seeking Early-Stage Investment
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
                CampaignAgent is currently in early access with pilot customers
                and is raising its first pre-seed round. We are looking for
                angel investors and early-stage VCs who understand the GTM
                technology space and the shift toward AI-native buying behavior.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {investorCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#94a3b8]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-[#94a3b8]">
                Interested in learning more?
              </p>
              <a
                href="mailto:mike@revgenai.biz?subject=Investor%20Deck%20Request%20%E2%80%94%20CampaignAgent"
                className="inline-flex items-center justify-center rounded-lg bg-[#4f46e5] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#4338ca]"
              >
                Request an Investor Deck
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#f9fafb] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold text-[#1a1a2e]">
              Get in Touch
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* General Inquiries */}
              <article className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#1a1a2e]">
                  General Inquiries
                </h3>
                <a
                  href="mailto:mike@revgenai.biz"
                  className="mt-2 block text-[#4f46e5] hover:underline"
                >
                  mike@revgenai.biz
                </a>
                <p className="mt-2 text-sm text-[#64748b]">
                  Response within 1 business day
                </p>
              </article>

              {/* Early Access */}
              <article className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#1a1a2e]">Early Access</h3>
                <p className="mt-2 text-sm text-[#64748b]">
                  Interested in piloting CampaignAgent?
                </p>
                <Link
                  href="/#early-access"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#4f46e5] hover:underline"
                >
                  Request Early Access
                  <span aria-hidden="true">→</span>
                </Link>
              </article>

              {/* Investment Inquiries */}
              <article className="rounded-lg border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#1a1a2e]">
                  Investment Inquiries
                </h3>
                <p className="mt-2 text-sm text-[#64748b]">
                  Interested in investing in RevGen AI LLC?
                </p>
                <a
                  href="mailto:mike@revgenai.biz?subject=Investment%20Inquiry%20%E2%80%94%20RevGen%20AI"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#4f46e5] hover:underline"
                >
                  Contact the Founder
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            {/* Left Column */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white">CampaignAgent</p>
              <p className="mt-1 text-sm text-[#94a3b8]">
                A product of RevGen AI LLC
              </p>
              <p className="text-sm text-[#94a3b8]">Pflugerville, Texas, USA</p>
              <div className="mt-2 flex flex-col gap-1 text-sm text-[#94a3b8] md:flex-row md:gap-3">
                <a
                  href="mailto:mike@revgenai.biz"
                  className="hover:text-white"
                >
                  mike@revgenai.biz
                </a>
                <span className="hidden md:inline">|</span>
                <a href="tel:+19194550186" className="hover:text-white">
                  +1-919-455-0186
                </a>
              </div>
            </div>

            {/* Center Nav Links */}
            <nav
              className="flex flex-wrap justify-center gap-6 text-sm text-[#94a3b8]"
              aria-label="Footer navigation"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </nav>

            {/* Right Column */}
            <div className="text-center md:text-right">
              <p className="text-sm text-[#94a3b8]">
                © 2026 RevGen AI LLC. All rights reserved.
              </p>
              <div className="mt-3 flex justify-center gap-4 md:justify-end">
                <a
                  href="https://linkedin.com/company/revgen-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] transition-colors hover:text-white"
                  aria-label="RevGen AI LinkedIn Company Page"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/michael-moreno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] transition-colors hover:text-white"
                  aria-label="Michael Moreno LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
