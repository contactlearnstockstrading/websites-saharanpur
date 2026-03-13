import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site-config";
import { MapPin, Mail, MessageCircle, Zap, Users, Globe, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.business.name}. We build premium websites for local businesses in Saharanpur.`,
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-zinc-950 text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              We Build Websites That{" "}
              <span className="text-gradient">Make You Stand Out</span>
            </h1>
            <p className="text-zinc-400 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              {siteConfig.business.name} is Saharanpur&apos;s trusted web design agency. We help local
              businesses — doctors, shops, salons, cafes, and more — get stunning, professional
              websites at affordable prices.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Globe, value: "50+", label: "Websites Delivered" },
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: Clock, value: "24hrs", label: "Average Delivery" },
              { icon: Zap, value: "17+", label: "Template Designs" },
            ].map((stat) => (
              <div key={stat.label} className="bg-zinc-900 border border-white/5 rounded-xl p-5 text-center">
                <stat.icon className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <p className="text-2xl font-heading font-bold text-white">{stat.value}</p>
                <p className="text-zinc-500 font-body text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 sm:p-10 mb-10">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-zinc-400 font-body text-sm leading-relaxed">
              <p>
                Founded by <strong className="text-white">{siteConfig.business.owner}</strong> in Saharanpur,
                {siteConfig.business.name} was born from a simple observation: thousands of amazing local
                businesses in our city had no online presence. While big-city businesses thrived online,
                Saharanpur&apos;s shops, clinics, and service providers were invisible on the internet.
              </p>
              <p>
                We set out to change that. Our mission is to make professional, beautiful websites
                accessible and affordable for every local business. No complicated processes, no
                weeks of waiting — just pick a template, share your details on WhatsApp, and your
                website goes live within 24 hours.
              </p>
              <p>
                Today, we&apos;ve helped 50+ businesses in Saharanpur establish their digital presence,
                from sweet shops and bakeries to doctors, lawyers, and coaching institutes. Every
                website we build is designed to attract customers and grow business.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 sm:p-10 mb-10">
            <h2 className="text-2xl font-heading font-bold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-zinc-400 font-body text-sm">
              {[
                "17+ professionally designed website templates for every type of business",
                "Complete website setup with your content, images, and branding",
                "Mobile-responsive design that looks great on every device",
                "WhatsApp integration for instant customer communication",
                "SEO optimization so customers can find you on Google",
                "Fast delivery — most websites go live within 24 hours",
                "Affordable pricing starting at just ₹2,999",
                "Ongoing support and maintenance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/5 border border-orange-500/15 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Office Address</p>
                    <p className="text-zinc-400">{siteConfig.business.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href={`mailto:${siteConfig.business.email}`} className="text-zinc-400 hover:text-orange-400 transition-colors">
                      {siteConfig.business.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-body font-bold rounded-full hover:from-orange-400 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
