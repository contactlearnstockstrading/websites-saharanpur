import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site-config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shopwebsaharanpur.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ShopWeb Saharanpur — Premium Websites for Local Businesses",
    template: "%s | ShopWeb Saharanpur",
  },
  description:
    "Beautiful, ready-to-launch website templates for doctors, bakeries, salons, cafes, and more in Saharanpur. Get your business online in 24 hours.",
  keywords: [
    "website design Saharanpur",
    "web development Saharanpur",
    "business website Saharanpur",
    "website for doctors Saharanpur",
    "website for shops Saharanpur",
    "website for bakery Saharanpur",
    "website for salon Saharanpur",
    "affordable website India",
    "local business website UP",
    "ShopWeb Saharanpur",
  ],
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.business.name,
    title: "ShopWeb Saharanpur — Premium Websites for Local Businesses",
    description:
      "Beautiful, ready-to-launch website templates for doctors, bakeries, salons, cafes, and more in Saharanpur. Get your business online in 24 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopWeb Saharanpur — Premium Websites for Local Businesses",
    description:
      "Beautiful, ready-to-launch website templates for local businesses in Saharanpur.",
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f5f0e8" />
      </head>
      <body
        className={`${cormorant.variable} ${libre.variable} font-body antialiased`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
