"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { getWhatsAppLinkForPlan } from "@/lib/whatsapp";
import { Check, MessageCircle, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2,999",
    description: "Perfect for getting started",
    featured: false,
    features: [
      "Single page website",
      "Mobile responsive",
      "WhatsApp integration",
      "Google Maps",
      "1 year hosting",
    ],
  },
  {
    name: "Professional",
    price: "5,999",
    description: "Best for growing businesses",
    featured: true,
    features: [
      "Multi-page website",
      "Custom domain",
      "SEO optimized",
      "Photo gallery",
      "SSL certificate",
      "1 year hosting",
    ],
  },
  {
    name: "Premium",
    price: "9,999",
    description: "Complete business solution",
    featured: false,
    features: [
      "Everything in Professional",
      "Admin panel",
      "Online ordering",
      "Booking system",
      "Analytics dashboard",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that works for your business"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl p-8 transition-all ${
                plan.featured
                  ? "bg-gradient-to-b from-orange-500/10 via-pink-500/5 to-zinc-900 border-2 border-orange-500/30 md:scale-105 shadow-2xl shadow-orange-500/10"
                  : "bg-zinc-900 border border-white/5 hover:border-white/10 card-glow"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-body font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-heading font-bold text-white text-xl mb-1 tracking-tight">
                {plan.name}
              </h3>
              <p className="text-sm font-body mb-5 text-zinc-500">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-heading font-bold text-white">
                  &#8377;{plan.price}
                </span>
                <span className="text-zinc-500 font-body text-sm ml-1">
                  one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm font-body text-zinc-300"
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.featured ? "text-orange-400" : "text-zinc-600"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLinkForPlan(plan.name, `₹${plan.price}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body font-bold transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:shadow-lg hover:shadow-orange-500/25"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Get Started
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
