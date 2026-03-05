import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CampaignAgent",
  description:
    "Terms of Service for CampaignAgent, an AI-native GTM platform operated by RevGen AI LLC.",
  alternates: {
    canonical: "https://campaignagent.app/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
