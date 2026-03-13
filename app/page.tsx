import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import TemplateGrid from "@/components/landing/TemplateGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import LiveShowcase from "@/components/landing/LiveShowcase";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
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
