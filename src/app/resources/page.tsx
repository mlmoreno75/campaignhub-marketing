import { Metadata } from "next";
import Link from "next/link";
import { getAllResources, formatResourceDate } from "@/lib/resources";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Resources — CampaignAgent",
  description:
    "Evergreen guides on campaign governance, attribution, ROI tracking, and marketing ops for CMOs and B2B SaaS marketing teams.",
  alternates: {
    canonical: "https://campaignagent.app/resources",
  },
  openGraph: {
    title: "Resources — CampaignAgent",
    description:
      "Evergreen guides on campaign governance, attribution, ROI tracking, and marketing ops.",
    images: [
      {
        url: "https://campaignagent.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://campaignagent.app/og-image.jpg"],
  },
};

interface ResourceWithFormattedDate {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  description: string;
  author: string;
  category: string;
  readTime: number;
}

function ResourceCard({ resource }: { resource: ResourceWithFormattedDate }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-400" />

      <div className="flex flex-1 flex-col p-6">
        {/* Category tag */}
        <div className="mb-3">
          <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs text-indigo-600">
            {resource.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {resource.title}
        </h2>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {resource.description}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
          <span>{resource.readTime} min read</span>
          <span className="text-indigo-600 font-medium group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function ResourcesPage() {
  const rawResources = await getAllResources();
  const resources: ResourceWithFormattedDate[] = await Promise.all(
    rawResources.map(async (resource) => ({
      ...resource,
      formattedDate: await formatResourceDate(resource.date),
    }))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Resources
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Campaign Intelligence Knowledge Base
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Evergreen guides on campaign governance, attribution, ROI tracking,
            and marketing ops best practices for B2B SaaS teams.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {resources.length === 0 ? (
          <p className="text-center text-slate-400">
            No resources published yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to see CampaignAgent in action?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            14-day pilot, full onboarding, no credit card required.
          </p>
          <Link
            href="/#cta"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Request a Demo →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
