"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { ExternalLink, Globe, Zap, TrendingUp, MapPin, Users, Star } from "lucide-react";

export default function LiveShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Built in Saharanpur"
        title="Real Websites, Real Results"
        subtitle="Websites we've built for businesses right here in Saharanpur — your neighbours trust us"
      />

      {/* Live site showcase */}
      <ScrollReveal>
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-white/15 transition-all">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Preview */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <div className="flex-1 mx-4">
                      <div className="bg-zinc-700/50 rounded-md px-3 py-0.5 text-[10px] text-zinc-400 font-mono max-w-xs">
                        learnstockstrading.com
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 p-4 w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">learnstockstrading.com</span>
                    <span className="text-sm text-zinc-500">Stock Trading Education Platform</span>
                    <a
                      href="https://learnstockstrading.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Live Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    LIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider">
                    <MapPin className="w-3 h-3" />
                    SAHARANPUR
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3 tracking-tight">
                  LearnStocksTrading.com
                </h3>
                <p className="text-zinc-400 font-body text-sm leading-relaxed mb-6">
                  A complete stock trading education platform built for a Saharanpur-based
                  educator — designed, developed, and deployed by our team. This is the quality
                  every local business deserves.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: Zap, label: "Built in", value: "48hrs" },
                    { icon: Globe, label: "Type", value: "EdTech" },
                    { icon: TrendingUp, label: "Status", value: "Live" },
                  ].map((item) => (
                    <div key={item.label} className="bg-zinc-800/50 rounded-xl p-3 text-center border border-white/5">
                      <item.icon className="w-4 h-4 text-orange-400 mx-auto mb-1.5" />
                      <p className="text-white font-bold text-sm">{item.value}</p>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{item.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://learnstockstrading.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-body font-bold rounded-full hover:from-orange-400 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit learnstockstrading.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Saharanpur trust bar */}
      <ScrollReveal delay={0.15}>
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "100% Local",
                desc: "Visit us at New Madhav Nagar, Near Company Garden Gate",
              },
              {
                icon: Users,
                title: "50+ Businesses",
                desc: "Shops, clinics, schools & more across Saharanpur trust us",
              },
              {
                icon: Star,
                title: "4.9★ Rating",
                desc: "Rated by real Saharanpur business owners on Google",
              },
              {
                icon: Zap,
                title: "24hr Delivery",
                desc: "Your website goes live within a day — no long waits",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/5 flex items-center justify-center border border-orange-500/10 shrink-0">
                  <item.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-sm">{item.title}</p>
                  <p className="text-zinc-500 font-body text-xs leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
