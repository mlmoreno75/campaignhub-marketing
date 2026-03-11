import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResourceBySlug, getAllResourceSlugs, formatResourceDate } from "@/lib/resources";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllResourceSlugs();
  return slugs;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found — CampaignAgent",
    };
  }

  return {
    title: `${resource.title} — CampaignAgent Resources`,
    description: resource.description,
    alternates: {
      canonical: `https://campaignagent.app/resources/${slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `https://campaignagent.app/resources/${slug}`,
      type: "article",
      publishedTime: resource.date,
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
      title: resource.title,
      description: resource.description,
      images: ["https://campaignagent.app/og-image.jpg"],
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const formattedDate = await formatResourceDate(resource.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    url: `https://campaignagent.app/resources/${slug}`,
    datePublished: resource.date,
    dateModified: resource.date,
    author: {
      "@type": "Person",
      name: resource.author,
      url: "https://campaignagent.app/about",
      jobTitle: "Founder & CEO, CampaignAgent",
    },
    publisher: {
      "@type": "Organization",
      name: "CampaignAgent",
      url: "https://campaignagent.app",
    },
    keywords: resource.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://campaignagent.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://campaignagent.app/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: resource.title,
        item: `https://campaignagent.app/resources/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Resource Header */}
        <section className="border-b border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-6">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/resources"
                className="hover:text-indigo-600 transition-colors"
              >
                Resources
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">
                {resource.title.length > 40
                  ? `${resource.title.slice(0, 40)}...`
                  : resource.title}
              </span>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs text-indigo-600">
                {resource.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {resource.title}
            </h1>

            {/* Meta */}
            <p className="mt-4 text-sm text-slate-500">
              {resource.author} · {formattedDate} · {resource.readTime} min read
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="mx-auto max-w-3xl px-6 py-16">
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-indigo-400 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-code:text-indigo-700 prose-code:bg-indigo-50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
            dangerouslySetInnerHTML={{ __html: resource.contentHtml || "" }}
          />
        </article>

        {/* Author Bio */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="flex items-start gap-4 border-t border-slate-200 pt-10">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
              MM
            </div>
            <div>
              <p className="font-semibold text-slate-900">{resource.author}</p>
              <p className="mt-1 text-sm text-slate-500">
                Founder & CEO of CampaignAgent. 15 years of B2B GTM experience
                across Intel, Cloudflare, Cloudera, Exabeam, SADA, and Procore.
              </p>
            </div>
          </div>

          <Link
            href="/resources"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition-all hover:gap-2"
          >
            ← Back to Resources
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 py-16 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-white">
              See how CampaignAgent works for your team
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              14-day pilot, full onboarding, no credit card required.
            </p>
            <Link
              href="/#cta"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Apply for a Pilot →
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
