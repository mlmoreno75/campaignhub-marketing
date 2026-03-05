import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CampaignAgent — AI-Native GTM Platform",
  description:
    "CampaignAgent is an AI-native GTM platform built by Michael Moreno, a 15-year B2B GTM operator. A product of RevGen AI LLC, Pflugerville, Texas.",
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
