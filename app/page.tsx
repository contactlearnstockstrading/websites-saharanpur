import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import TemplateGrid from "@/components/landing/TemplateGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import LiveShowcase from "@/components/landing/LiveShowcase";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTASection from "@/components/landing/CTASection";
import { FAQJsonLd } from "@/components/seo/JsonLd";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mysaharanpur.store";

export const metadata: Metadata = {
  title:
    "ShopWeb Saharanpur — #1 Cheap Custom Website Builder in Saharanpur, UP, India | 23+ Templates",
  description:
    "Cheap custom website builder in Saharanpur, India. Get a stunning website for your business in just 24 hours. 23+ templates for doctors, salons, restaurants, gyms, jewellers & more. Starting at ₹2,999.",
  keywords: [
    "custom website builder India",
    "custom website builder Saharanpur",
    "custom website builder UP",
    "cheap website India",
    "cheap website Saharanpur",
    "cheap custom website India",
    "cheap custom website Saharanpur",
    "affordable website builder India",
    "affordable website Saharanpur",
    "website design Saharanpur",
    "best website designer Saharanpur",
    "low cost website India",
    "website banwaye Saharanpur",
    "sasti website India",
    "small business website India",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "ShopWeb Saharanpur — Cheap Custom Website Builder in India",
    description:
      "23+ stunning templates. Doctors, salons, gyms, restaurants & more. Live in 24 hours, starting ₹2,999. Best cheap custom website builder in Saharanpur.",
    url: siteUrl,
  },
};

const homeFaqs = [
  {
    question: "How much does a website cost in Saharanpur?",
    answer:
      "Our website packages start at ₹2,999 for a starter website, ₹5,999 for a professional website, and ₹14,999 for a premium website with custom features. All plans include mobile-responsive design, WhatsApp integration, and SEO optimization.",
  },
  {
    question: "How quickly can I get my business website?",
    answer:
      "Most websites are delivered within 24 hours. Simply choose a template, share your business details and images via WhatsApp, and we'll set up your website and deliver it ready to launch.",
  },
  {
    question: "Do you build websites for all types of businesses?",
    answer:
      "Yes! We have 23+ templates covering doctors, hospitals, salons, restaurants, gyms, bakeries, cafes, jewellery shops, pharmacies, real estate, lawyers, coaching institutes, and many more business types.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Absolutely. All our websites are fully responsive and optimized for mobile phones, tablets, and desktop computers. They also load fast and are SEO-optimized for Google.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we provide ongoing support and maintenance for all websites we build. You can reach us anytime via WhatsApp for updates, changes, or technical support.",
  },
];

export default function Home() {
  return (
    <>
      <FAQJsonLd faqs={homeFaqs} />
      <Navbar />
      <main>
        <Hero />
        <TemplateGrid />
        <HowItWorks />
        <LiveShowcase />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
