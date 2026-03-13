"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Gem,
  Crown,
  Star,
  Shield,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  Gift,
  Award,
  Heart,
} from "lucide-react";

const collections = [
  { name: "Bridal Gold Sets", icon: Crown, description: "Exquisite 22K gold bridal sets handcrafted for your special day. Necklaces, earrings, bangles & more.", tag: "BRIDAL", weight: "20-100 gm" },
  { name: "Diamond Jewellery", icon: Gem, description: "Certified diamond rings, pendants, and earrings. IGI & GIA certified stones with lifetime exchange.", tag: "CERTIFIED", weight: "Various" },
  { name: "Temple Jewellery", icon: Sparkles, description: "Traditional South Indian temple jewellery with intricate Lakshmi & peacock designs.", tag: "TRADITIONAL", weight: "15-60 gm" },
  { name: "Daily Wear Gold", icon: Heart, description: "Lightweight everyday gold chains, studs, and rings perfect for daily use.", tag: "LIGHTWEIGHT", weight: "2-10 gm" },
  { name: "Silver Collection", icon: Star, description: "Pure 925 sterling silver anklets, toe rings, and oxidized jewellery at affordable prices.", tag: "AFFORDABLE", weight: "5-50 gm" },
  { name: "Custom Orders", icon: Gift, description: "Get custom jewellery designed exactly to your taste. Bring your design or choose from our catalog.", tag: "BESPOKE", weight: "Any" },
];

const trustPoints = [
  { icon: Shield, label: "BIS Hallmarked", desc: "Every piece is BIS 916 hallmarked for purity guarantee" },
  { icon: Award, label: "40+ Years Legacy", desc: "Trusted by families across Saharanpur since 1985" },
  { icon: CheckCircle2, label: "Lifetime Exchange", desc: "100% exchange value on all gold jewellery purchases" },
  { icon: Gem, label: "Certified Diamonds", desc: "All diamonds come with IGI/GIA certification" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    rating: 5,
    text: "Bought my entire bridal set from here. The craftsmanship is outstanding and the gold purity is exactly as promised. My family has been buying from them for 3 generations.",
  },
  {
    name: "Anita Gupta",
    initials: "AG",
    rating: 5,
    text: "Beautiful diamond pendant at the best price in Saharanpur. The staff is very helpful and they explained everything about the certification. Highly recommended!",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    rating: 5,
    text: "Got a custom gold chain made for my wife's anniversary. The design came out exactly as we wanted. Fair making charges and pure gold. Best jeweller in the city.",
  },
];

export default function JewelleryTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to enquire about jewellery.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
              <Gem className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Shubh</span>
              <span className="text-white"> Jewellers</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Collections", "Trust", "Reviews", "Visit"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">{item}</a>
            ))}
          </div>
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all">
            Enquire Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-sm font-medium mb-8">
                <Crown className="w-4 h-4" /> Saharanpur&apos;s Most Trusted Jeweller Since 1985
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Where{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Tradition</span>
                {" "}Meets{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Elegance</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                BIS hallmarked gold, certified diamonds, and handcrafted silver jewellery. Three generations of trust, one destination for all your jewellery needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to see your latest gold collection.")} label="View Collections" size="lg" />
                <a href="#collections" className="border border-slate-700 text-slate-300 px-8 py-3.5 rounded-xl font-semibold hover:border-amber-500/50 hover:text-amber-400 transition-all text-lg text-center">
                  Explore Categories
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal>
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-amber-500/15 bg-gradient-to-br from-slate-900 to-slate-950 p-2">
                <ImagePlaceholder aspectRatio="21/9" label="Jewellery Showroom — Premium Gold & Diamond Collection" className="rounded-xl" />
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "40+", label: "Years of Trust" },
              { value: "10K+", label: "Happy Families" },
              { value: "916", label: "Hallmark Certified" },
              { value: "100%", label: "Exchange Value" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Our Collections</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Handcrafted for Every Occasion</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From bridal sets to everyday wear, explore our wide range of gold, diamond, and silver jewellery.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((item) => (
              <ScrollReveal key={item.name}>
                <div className="group bg-slate-900 border border-slate-800/60 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-yellow-600/20 transition-colors">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{item.description}</p>
                  <div className="text-xs text-slate-500">Weight range: {item.weight}</div>
                  <div className="mt-4 pt-4 border-t border-slate-800/60">
                    <ImagePlaceholder aspectRatio="16/9" label={item.name} className="rounded-lg" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Trust Built Over Generations</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <ScrollReveal key={item.label}>
                <div className="text-center p-6 bg-slate-900/50 border border-slate-800/60 rounded-2xl hover:border-amber-500/20 transition-all">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Rate Ticker */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">Today&apos;s Gold Rate (Saharanpur)</h3>
                <p className="text-sm text-slate-400 mt-1">Rates updated daily. Visit store for exact pricing.</p>
              </div>
              <div className="flex gap-6">
                <div className="text-center px-6 py-3 bg-slate-800/50 rounded-xl border border-amber-500/10">
                  <div className="text-xs text-slate-400 mb-1">24K Gold (10 gm)</div>
                  <div className="text-xl font-bold text-amber-400">&#8377;75,200*</div>
                </div>
                <div className="text-center px-6 py-3 bg-slate-800/50 rounded-xl border border-amber-500/10">
                  <div className="text-xs text-slate-400 mb-1">22K Gold (10 gm)</div>
                  <div className="text-xl font-bold text-amber-400">&#8377;68,900*</div>
                </div>
                <div className="text-center px-6 py-3 bg-slate-800/50 rounded-xl border border-amber-500/10">
                  <div className="text-xs text-slate-400 mb-1">Silver (1 kg)</div>
                  <div className="text-xl font-bold text-amber-400">&#8377;89,500*</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">*Indicative rates. Actual rates may vary. Making charges extra.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Customer Love</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Trusted by Thousands of Families</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <ScrollReveal key={t.name}>
                <div className="bg-slate-900 border border-slate-800/60 rounded-2xl p-6 hover:border-amber-500/20 transition-all h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-600/20 flex items-center justify-center text-amber-400 text-sm font-bold">
                      {t.initials}
                    </div>
                    <span className="font-semibold text-white text-sm">{t.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="visit" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Visit Our Showroom</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-3">Experience the Elegance in Person</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Showroom Address</h4>
                      <p className="text-sm text-slate-400 mt-1">Railway Road, Near Ghanta Ghar, Saharanpur, UP 247001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Showroom Timings</h4>
                      <p className="text-sm text-slate-400 mt-1">Mon - Sat: 10:00 AM - 8:30 PM</p>
                      <p className="text-sm text-slate-400">Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Contact Us</h4>
                      <p className="text-sm text-slate-400 mt-1">+91 98XX XXX XXX</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder aspectRatio="16/9" label="Jewellery Showroom Interior" className="rounded-xl" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-600/10 to-amber-500/10 border border-amber-500/20 p-12 text-center overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl opacity-10">💎</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Find Your Perfect <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">Jewellery</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Visit our showroom or send us a message on WhatsApp. We&apos;ll help you find exactly what you&apos;re looking for.
              </p>
              <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to enquire about gold jewellery.")} label="WhatsApp Us Now" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
              <Gem className="w-4 h-4 text-slate-900" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-amber-400">Shubh</span> Jewellers
            </span>
          </div>
          <p className="text-sm text-slate-500">Saharanpur&apos;s trusted jeweller since 1985. BIS Hallmarked Gold &amp; Certified Diamonds.</p>
          <p className="text-xs text-slate-600 mt-4">&copy; 2024 Shubh Jewellers, Saharanpur. All rights reserved.</p>
          <p className="text-xs text-slate-700 mt-2">
            Website crafted by <span className="text-amber-500">ShopWeb Saharanpur</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
