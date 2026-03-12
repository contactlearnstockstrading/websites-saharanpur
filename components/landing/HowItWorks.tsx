"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { MousePointer, Send, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Pick a Template",
    description:
      "Browse our collection and choose the design that fits your business perfectly.",
  },
  {
    number: "02",
    icon: Send,
    title: "Send Your Content",
    description:
      "Share your photos, services, prices, and details via WhatsApp. We handle the rest.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live in 24hrs",
    description:
      "Your professional website goes live with your custom domain, ready for customers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="How It Works"
        title="Three Simple Steps"
        subtitle="Getting your business online has never been easier"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.15}>
            <div className="relative bg-beige-50 border border-beige-300/60 rounded-2xl p-8 text-center hover:border-beige-400 hover:shadow-md transition-all group">
              <div className="text-5xl font-heading font-bold text-beige-300 absolute top-4 right-4 group-hover:text-beige-400 transition-colors">
                {step.number}
              </div>
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-beige-200 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-beige-700" />
              </div>
              <h3 className="font-heading font-bold text-beige-900 text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-beige-600 font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
