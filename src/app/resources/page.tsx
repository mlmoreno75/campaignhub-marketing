import { Metadata } from "next";
import Link from "next/link";
import { getAllResources, formatResourceDate } from "@/lib/resources";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoCTA } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "Campaign Governance Guides & Templates — CampaignAgent",
  description:
    "Explore our comprehensive guides and templates designed to empower campaign teams with best practices for governance, compliance, and effective leadership.",
  alternates: {
    canonical: "https://campaignagent.app/resources",
  },
  openGraph: {
    title: "Campaign Governance Guides & Templates — CampaignAgent",
    description:
      "Explore our comprehensive guides and templates designed to empower campaign teams with best practices for governance, compliance, and effective leadership.",
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
            Campaign Governance Guides
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Explore our comprehensive guides and templates designed to empower
            campaign teams with best practices for governance, compliance, and
            effective leadership.
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

      <DemoCTA
        heading="Ready to see CampaignAgent in action?"
        subheading="14-day pilot, full onboarding, no credit card required."
      />

      <Footer />
    </div>
  );
}
