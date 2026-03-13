import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site-config";
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/components/seo/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mysaharanpur.store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ShopWeb Saharanpur — Premium Websites for Local Businesses | Website Design Saharanpur",
    template: "%s | ShopWeb Saharanpur",
  },
  description:
    "Saharanpur's #1 website design agency. 23+ ready-to-launch templates for doctors, bakeries, salons, gyms, restaurants, jewellers & more. Get your business online in 24 hours. Starting ₹2,999.",
  keywords: [
    "website design Saharanpur",
    "web development Saharanpur",
    "business website Saharanpur",
    "website for doctors Saharanpur",
    "website for shops Saharanpur",
    "website for bakery Saharanpur",
    "website for salon Saharanpur",
    "website for restaurant Saharanpur",
    "website for gym Saharanpur",
    "website for jewellery shop Saharanpur",
    "website for pharmacy Saharanpur",
    "website for real estate Saharanpur",
    "custom website builder India",
    "custom website builder Saharanpur",
    "custom website builder UP",
    "custom website design India",
    "custom website design Saharanpur",
    "cheap website India",
    "cheap website Saharanpur",
    "cheap website UP",
    "cheap website design India",
    "cheap custom website India",
    "cheap custom website Saharanpur",
    "affordable website India",
    "affordable website Saharanpur",
    "affordable website UP",
    "affordable custom website India",
    "low cost website India",
    "low cost website Saharanpur",
    "best website design Saharanpur",
    "best website designer in Saharanpur",
    "website developer near me Saharanpur",
    "website maker Saharanpur",
    "website banwaye Saharanpur",
    "sasti website India",
    "sasti website Saharanpur",
    "local business website UP",
    "local business website India",
    "small business website India",
    "ShopWeb Saharanpur",
    "mysaharanpur.store",
  ],
  authors: [{ name: siteConfig.business.name, url: siteUrl }],
  creator: siteConfig.business.name,
  publisher: siteConfig.business.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.business.name,
    title: "ShopWeb Saharanpur — Premium Websites for Local Businesses",
    description:
      "23+ stunning website templates for local businesses in Saharanpur. Doctors, salons, restaurants, gyms & more. Live in 24 hours, starting ₹2,999.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopWeb Saharanpur — Premium Websites for Local Businesses",
    description:
      "23+ website templates for local businesses in Saharanpur. Go live in 24 hours!",
    creator: "@shopwebsaharanpur",
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
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#09090b" />
        <meta name="google-adsense-account" content="ca-pub-7739167548285591" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7739167548285591"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
