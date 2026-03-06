import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, formatDate } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found — CampaignAgent",
    };
  }

  return {
    title: `${post.title} — CampaignAgent Blog`,
    description: post.description,
    alternates: {
      canonical: `https://campaignagent.app/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://campaignagent.app/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
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
      title: post.title,
      description: post.description,
      images: ["https://campaignagent.app/og-image.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `https://campaignagent.app/blog/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://campaignagent.app/about",
      jobTitle: "Founder & CEO, CampaignAgent",
    },
    publisher: {
      "@type": "Organization",
      name: "CampaignAgent",
      url: "https://campaignagent.app",
    },
    keywords: post.tags.join(", "),
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
        name: "Blog",
        item: "https://campaignagent.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://campaignagent.app/blog/${slug}`,
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
        {/* Navigation */}
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                CA
              </div>
              <span className="text-lg font-bold text-slate-900">
                CampaignAgent
              </span>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              ← Back to Blog
            </Link>
          </nav>
        </header>

        {/* Post Header */}
        <section className="border-b border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-6">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/blog"
                className="hover:text-indigo-600 transition-colors"
              >
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">
                {post.title.length > 40
                  ? `${post.title.slice(0, 40)}...`
                  : post.title}
              </span>
            </nav>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs text-indigo-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>

            {/* Meta */}
            <p className="mt-4 text-sm text-slate-500">
              {post.author} · {formatDate(post.date)} · {post.readTime} min read
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="mx-auto max-w-3xl px-6 py-16">
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-indigo-400 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-code:text-indigo-700 prose-code:bg-indigo-50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
          />
        </article>

        {/* Author Bio */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="flex items-start gap-4 border-t border-slate-200 pt-10">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
              MM
            </div>
            <div>
              <p className="font-semibold text-slate-900">{post.author}</p>
              <p className="mt-1 text-sm text-slate-500">
                Founder & CEO of CampaignAgent. 15 years of B2B GTM experience
                across Intel, Cloudflare, Cloudera, Exabeam, SADA, and Procore.
              </p>
            </div>
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition-all hover:gap-2"
          >
            ← Back to Blog
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
              Request a Demo →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} CampaignAgent. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
