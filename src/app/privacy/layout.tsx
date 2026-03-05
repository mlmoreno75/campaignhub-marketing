import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CampaignAgent",
  description:
    "Privacy Policy for CampaignAgent, an AI-native GTM platform operated by RevGen AI LLC.",
  alternates: {
    canonical: "https://campaignagent.app/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
