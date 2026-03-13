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
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "02",
    icon: Send,
    title: "Send Your Content",
    description:
      "Share your photos, services, prices, and details via WhatsApp. We handle the rest.",
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live in 24hrs",
    description:
      "Your professional website goes live with your custom domain, ready for customers.",
    color: "from-violet-500 to-purple-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="How It Works"
        title="Three Simple Steps"
        subtitle="Getting your business online has never been easier"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.15}>
            <div className="relative bg-zinc-900 border border-white/5 rounded-2xl p-8 text-center hover:border-white/10 transition-all group card-glow">
              <div className="text-6xl font-heading font-bold text-white/[0.03] absolute top-4 right-6 group-hover:text-white/[0.06] transition-colors">
                {step.number}
              </div>
              <div
                className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              >
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-500 font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
