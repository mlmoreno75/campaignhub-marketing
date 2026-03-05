import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CampaignAgent",
  description:
    "Privacy Policy for CampaignAgent, an AI-native GTM platform operated by RevGen AI LLC.",
  alternates: {
    canonical: "https://campaignagent.app/privacy",
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

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
