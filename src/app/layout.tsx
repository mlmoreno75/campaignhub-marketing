import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CampaignAgent — AI-Powered Campaign Intelligence",
  description:
    "Plan, approve, and optimize integrated marketing campaigns with AI-powered intelligence. Built for CMOs, Marketing Ops, and Campaign Managers.",
  alternates: {
    canonical: "https://campaignagent.app",
  },
  openGraph: {
    title: "CampaignAgent — AI-Powered Campaign Intelligence",
    description:
      "Plan, approve, and optimize integrated marketing campaigns with AI-powered intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
