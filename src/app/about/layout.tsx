import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CampaignAgent — AI-Native GTM Platform",
  description:
    "CampaignAgent was built for CMOs who need more than another analytics tool — governance, approval workflows, and attribution in one AI-powered platform.",
  alternates: {
    canonical: "https://campaignagent.app/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
