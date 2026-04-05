import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoCTA } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "Marketing Governance & Attribution Blog | CampaignAgent",
  description:
    "Practical guidance for CMOs and marketing ops leaders on campaign governance, attribution, and making AI work for your marketing team.",
  alternates: {
    canonical: "https://campaignagent.app/blog",
  },
  openGraph: {
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

interface PostWithFormattedDate {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  description: string;
  author: string;
  tags: string[];
  readTime: number;
}

function PostCard({ post }: { post: PostWithFormattedDate }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-400" />

      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
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
        <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {post.description}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
          <span>{post.author}</span>
          <span>
            {post.formattedDate} · {post.readTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const rawPosts = await getAllPosts();
  const posts: PostWithFormattedDate[] = await Promise.all(
    rawPosts.map(async (post) => ({
      ...post,
      formattedDate: await formatDate(post.date),
    }))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Marketing Governance & Attribution Insights
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Practical guidance for CMOs and marketing ops leaders on campaign
            governance, attribution, and making AI work for your team.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {posts.length === 0 ? (
          <p className="text-center text-slate-400">
            No posts published yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
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
