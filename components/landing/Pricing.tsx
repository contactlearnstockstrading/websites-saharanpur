"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { getWhatsAppLinkForPlan } from "@/lib/whatsapp";
import { Check, MessageCircle } from "lucide-react";

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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that works for your business"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl p-8 transition-all ${
                plan.featured
                  ? "bg-beige-900 text-beige-100 border-2 border-beige-700 scale-105 shadow-xl"
                  : "bg-beige-50 border border-beige-300/60 hover:border-beige-400 hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-beige-600 text-beige-50 text-xs font-body font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`font-heading font-bold text-xl mb-1 ${
                  plan.featured ? "text-beige-50" : "text-beige-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm font-body mb-4 ${
                  plan.featured ? "text-beige-300" : "text-beige-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className={`text-4xl font-heading font-bold ${
                    plan.featured ? "text-beige-50" : "text-beige-900"
                  }`}
                >
                  &#8377;{plan.price}
                </span>
                <span
                  className={`text-sm font-body ${
                    plan.featured ? "text-beige-400" : "text-beige-500"
                  }`}
                >
                  {" "}
                  / one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm font-body ${
                      plan.featured ? "text-beige-200" : "text-beige-700"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.featured ? "text-green-400" : "text-beige-600"
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
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body font-semibold transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-beige-100 text-beige-900 hover:bg-white"
                    : "bg-beige-900 text-beige-100 hover:bg-beige-800"
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
