import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingMobileCta } from "@/components/layout/FloatingMobileCta";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Infrastructure Advisory for Emerging Markets`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "infrastructure advisory",
    "project finance",
    "emerging markets infrastructure",
    "Africa infrastructure",
    "PPP advisory",
    "Nigeria infrastructure",
    "bankable projects",
    "DFI debt syndication",
    "local currency infrastructure bonds",
    "energy transition",
    "power sector reform",
    "credit enhancement",
    "feasibility studies",
    "CAMA 2020",
  ],
  authors: [{ name: "Rhodium Impact Consulting Ltd" }],
  creator: "Rhodium Impact Consulting Ltd",
  publisher: "Rhodium Impact Consulting Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: `${siteConfig.name} | Infrastructure Advisory for Emerging Markets`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rhodium Impact Consulting Ltd — Turning infrastructure needs into bankable projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Infrastructure Advisory for Emerging Markets`,
    description: siteConfig.description,
    creator: "@rhodiumimpact",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Organization Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressCountry: siteConfig.contact.country,
      streetAddress: siteConfig.contact.address,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.twitter],
    areaServed: ["Africa", "Emerging Markets", "Nigeria"],
    knowsAbout: [
      "Project Finance",
      "Public-Private Partnerships",
      "Capital Structuring",
      "Energy Market Reform",
      "ESG and Climate Finance",
    ],
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Optional Plausible Analytics */}
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
        {/* Optional Google Analytics 4 */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col font-sans bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingMobileCta />
        <CookieConsent />
      </body>
    </html>
  );
}
