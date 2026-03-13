"use client";

import { useEffect, useRef } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";

const stats = [
  { label: "Templates", value: "17+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Delivery", value: "24hr" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".hero-anim");
    if (!els) return;
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("animate"), i * 100);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-zinc-950">
      {/* Bold gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-orange-500/20 via-pink-500/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="hero-anim reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 font-body mb-8">
          <Sparkles className="w-4 h-4 text-orange-400" />
          Trusted by 50+ businesses in Saharanpur
        </div>

        <h1 className="hero-anim reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.95] mb-6 tracking-tight">
          Websites That
          <br />
          <span className="text-gradient">Make You Stand Out</span>
        </h1>

        <p className="hero-anim reveal text-lg md:text-xl text-zinc-400 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium, ready-to-launch templates for doctors, bakeries,
          salons, cafes &amp; more. Just add your images — go live in 24 hours.
        </p>

        <div className="hero-anim reveal flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="#templates"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-body font-bold rounded-full hover:from-orange-400 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 text-lg"
          >
            Explore Templates
            <ArrowDown className="w-5 h-5" />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-body font-semibold rounded-full transition-all hover:scale-105 text-lg"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            WhatsApp Us
          </a>
        </div>

        <div className="hero-anim reveal flex justify-center gap-12 sm:gap-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
