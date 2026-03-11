import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CampaignAgent — AI-Powered Marketing Campaign Intelligence",
  description:
    "Plan, approve, and optimize B2B marketing campaigns with AI-powered intelligence. Built for CMOs and marketing ops teams.",
  alternates: {
    canonical: "https://campaignagent.app",
  },
  openGraph: {
    title: "CampaignAgent — AI-Powered Marketing Campaign Intelligence",
    description:
      "Plan, approve, and optimize B2B marketing campaigns with AI-powered intelligence. Built for CMOs and marketing ops teams.",
    type: "website",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://campaignagent.app/#website",
      url: "https://campaignagent.app",
      name: "CampaignAgent",
      description:
        "AI-native campaign governance and attribution platform for CMOs and marketing teams",
      publisher: { "@id": "https://campaignagent.app/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://campaignagent.app/#organization",
      name: "CampaignAgent",
      legalName: "RevGen AI LLC",
      url: "https://campaignagent.app",
      description:
        "CampaignAgent is an AI-native campaign governance and attribution platform that helps CMOs and B2B SaaS marketing teams plan, approve, and optimize integrated campaigns from a single command center.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Michael Moreno",
        jobTitle: "Founder & CEO",
        url: "https://campaignagent.app/about",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pflugerville",
        addressRegion: "TX",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "mike@revgenai.biz",
        contactType: "sales",
      },
      sameAs: [
        "https://www.linkedin.com/company/campaignagentapp",
        "https://x.com/campaign_agent",
        "https://www.youtube.com/@Campaign_Agent_App",
        "https://www.facebook.com/profile.php?id=61587750702954",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMLWPP5B');`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMLWPP5B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
