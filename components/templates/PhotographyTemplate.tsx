"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Camera,
  Star,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  Award,
  Users,
  CheckCircle2,
  Film,
  Image,
  Heart,
  Aperture,
} from "lucide-react";

const services = [
  { name: "Wedding Photography", icon: Heart, description: "Capture every precious moment of your big day with cinematic storytelling.", tag: "PREMIUM", emoji: "💒" },
  { name: "Pre-Wedding Shoots", icon: Camera, description: "Romantic, creative pre-wedding shoots at stunning locations around Saharanpur.", tag: "TRENDING", emoji: "💑" },
  { name: "Product Photography", icon: Image, description: "Professional product shots for your business — e-commerce, menus, catalogs.", tag: "BUSINESS", emoji: "📸" },
  { name: "Event Coverage", icon: Film, description: "Birthday parties, corporate events, school functions — we cover it all.", tag: "EVENTS", emoji: "🎉" },
  { name: "Portrait & Headshots", icon: Aperture, description: "Professional portraits for profiles, resumes, social media, and documents.", tag: "STUDIO", emoji: "🤳" },
  { name: "Baby & Maternity", icon: Heart, description: "Beautiful maternity and newborn baby photography to cherish forever.", tag: "SPECIAL", emoji: "👶" },
];

const portfolio = [
  { name: "Sharma Wedding", category: "Wedding", emoji: "💒" },
  { name: "Brand Shoot — Mittal Sweets", category: "Product", emoji: "📸" },
  { name: "Gupta Pre-Wedding", category: "Pre-Wedding", emoji: "💑" },
  { name: "Annual Day — DPS School", category: "Event", emoji: "🎉" },
];

const packages = [
  { name: "Basic", price: "4,999", features: ["2 hours coverage", "50 edited photos", "Digital delivery", "1 location"], popular: false },
  { name: "Premium", price: "14,999", features: ["Full day coverage", "200+ edited photos", "Highlight reel video", "Multiple locations", "Drone shots"], popular: true },
  { name: "Wedding", price: "29,999", features: ["2-day coverage", "500+ edited photos", "Cinematic video", "Drone coverage", "Photo album (50 pages)", "2 photographers"], popular: false },
];

const testimonials = [
  { name: "Pooja Sharma", initials: "PS", rating: 5, text: "Our wedding photos are absolutely magical! Every emotion was captured perfectly. The team was professional and made us feel so comfortable throughout." },
  { name: "Rohit Agarwal", initials: "RA", rating: 5, text: "Got product photography done for my e-commerce store. The quality is outstanding — my sales improved significantly after updating product images." },
  { name: "Neelam Gupta", initials: "NG", rating: 5, text: "The pre-wedding shoot was so creative and fun! They found the best locations around Saharanpur. The photos look like they're from a magazine." },
];

export default function PhotographyTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to book a photography session with PixelStory Studio.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-fuchsia-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center"><Camera className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Pixel</span>
              <span className="text-white">Story</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#services" className="hover:text-fuchsia-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-fuchsia-400 transition-colors">Portfolio</a>
            <a href="#packages" className="hover:text-fuchsia-400 transition-colors">Packages</a>
            <a href="#reviews" className="hover:text-fuchsia-400 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Book Now" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,70,239,0.12),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(236,72,153,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-semibold mb-6">
                  <Award className="w-4 h-4" />
                  10+ Years | 500+ Weddings Covered
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">We Tell</span>
                  <br />
                  <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Your Story</span>
                </h1>
                <p className="text-lg text-white/45 mb-10 max-w-lg leading-relaxed">
                  Saharanpur&apos;s most creative photography studio. Weddings, pre-wedding shoots,
                  events, products, and portraits — we capture moments that last forever.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Book a Session" size="lg" />
                  <a href="#portfolio" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-fuchsia-500/30 text-fuchsia-400 rounded-full hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 transition-all duration-300">
                    View Portfolio <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/15 to-pink-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder label="Photography Studio / Sample Work" aspectRatio="4/3" className="rounded-2xl border border-fuchsia-500/20 relative" icon="📷" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-fuchsia-500/10 bg-fuchsia-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Weddings Shot", icon: Heart },
              { value: "10+", label: "Years Experience", icon: Award },
              { value: "4.9★", label: "Google Rating", icon: Star },
              { value: "1,000+", label: "Happy Clients", icon: Users },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-pink-500/5 flex items-center justify-center border border-fuchsia-500/10">
                    <stat.icon className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-fuchsia-300 to-pink-400 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-fuchsia-400/70 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Services</span></h2>
          </div></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-fuchsia-500/10 rounded-2xl p-8 hover:border-fuchsia-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-fuchsia-500/10 text-fuchsia-400 text-[10px] font-bold tracking-wider">{s.tag}</div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/15 to-pink-500/5 flex items-center justify-center border border-fuchsia-500/10 text-2xl mb-6">{s.emoji}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{s.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-transparent via-fuchsia-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-fuchsia-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Recent <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span></h2>
          </div></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolio.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className="group bg-gradient-to-b from-white/[0.04] to-transparent rounded-2xl overflow-hidden border border-fuchsia-500/10 hover:border-fuchsia-500/25 transition-all duration-500 hover:-translate-y-1">
                  <ImagePlaceholder label={p.name} aspectRatio="16/9" icon={p.emoji} className="rounded-none" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors">{p.name}</h3>
                    <p className="text-sm text-white/35">{p.category}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-fuchsia-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Pricing</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Packages</span></h2>
          </div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {packages.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${plan.popular ? "bg-gradient-to-b from-fuchsia-500/10 to-pink-500/5 border-2 border-fuchsia-500/30 scale-105" : "bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10"}`}>
                  {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-bold tracking-wider">MOST POPULAR</div>}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-fuchsia-300 to-pink-400 bg-clip-text text-transparent">₹{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (<li key={f} className="flex items-center gap-2.5 text-sm text-white/50"><CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />{f}</li>))}
                  </ul>
                  <WhatsAppButton href={getWhatsAppLink(`Hi! I'm interested in the ${plan.name} photography package (₹${plan.price}).`)} label="Book Now" size="md" className="w-full justify-center" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-transparent via-fuchsia-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-fuchsia-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Client Love</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Clients <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Say</span></h2>
          </div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-fuchsia-500/10 rounded-2xl p-8 hover:border-fuchsia-500/20 transition-all duration-500">
                  <div className="flex gap-1 mb-5">{Array.from({ length: 5 }).map((_, si) => (<Star key={si} className={`w-4 h-4 ${si < r.rating ? "text-fuchsia-400 fill-fuchsia-400" : "text-white/10"}`} />))}</div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">{r.initials}</div>
                    <span className="font-semibold text-white text-sm">{r.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-600" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="text-5xl mb-6">📸</div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Let&apos;s Create Magic Together</h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Your moments deserve to be captured beautifully. Book a session today — we&apos;ll make memories you&apos;ll treasure forever.</p>
                <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to discuss a photography session.")} label="Book on WhatsApp" size="lg" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-fuchsia-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center"><Camera className="w-5 h-5 text-white" /></div>
                <span className="text-lg font-bold"><span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Pixel</span>Story</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">Saharanpur&apos;s most creative photography studio. Weddings, events, products, and portraits.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Studio</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-fuchsia-400/60" /><span>10:00 AM - 8:00 PM (Mon - Sat)</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-fuchsia-400/60" /><span>Near Railway Station, Saharanpur, UP</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-fuchsia-400/60" /><span>+91 98765 43210</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Book a Session</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">Have an upcoming event? Contact us for a custom quote.</p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-fuchsia-500/10 mt-12 pt-8 text-center text-xs text-white/15">&copy; {new Date().getFullYear()} PixelStory Studio. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
