"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Pill,
  Heart,
  Clock,
  Phone,
  MapPin,
  Star,
  Shield,
  Truck,
  Stethoscope,
  Syringe,
  Activity,
  CheckCircle2,
  AlertCircle,
  Package,
} from "lucide-react";

const services = [
  { name: "Prescription Medicines", icon: Pill, description: "Complete range of prescription drugs from all major pharmaceutical brands. Genuine medicines guaranteed.", tag: "GENUINE" },
  { name: "Health Checkup Kits", icon: Activity, description: "BP monitors, glucometers, thermometers, oximeters, and home testing kits at best prices.", tag: "DEVICES" },
  { name: "Ayurvedic & Herbal", icon: Heart, description: "Patanjali, Dabur, Himalaya, and other trusted Ayurvedic brands. Natural wellness solutions.", tag: "NATURAL" },
  { name: "Baby & Mother Care", icon: Shield, description: "Complete baby care range — diapers, formula, supplements, and mother care essentials.", tag: "CARE" },
  { name: "Surgical Items", icon: Syringe, description: "Bandages, syringes, surgical gloves, masks, and first aid supplies for clinics and hospitals.", tag: "SURGICAL" },
  { name: "Free Home Delivery", icon: Truck, description: "Order via WhatsApp and get medicines delivered to your doorstep within 2 hours across Saharanpur.", tag: "FREE" },
];

const whyUs = [
  { icon: Shield, label: "100% Genuine", desc: "All medicines sourced directly from authorized distributors" },
  { icon: Clock, label: "Open Till 11 PM", desc: "Extended hours so you never miss your medication" },
  { icon: Truck, label: "2-Hour Delivery", desc: "Free home delivery across Saharanpur city" },
  { icon: CheckCircle2, label: "Best Prices", desc: "Up to 20% off on all OTC medicines & health products" },
];

const testimonials = [
  {
    name: "Dr. Sanjay Mehta",
    initials: "SM",
    rating: 5,
    text: "I recommend this pharmacy to all my patients. They always have stock of even rare medicines and their billing is transparent. Very reliable and professional.",
  },
  {
    name: "Kavita Jain",
    initials: "KJ",
    rating: 5,
    text: "The home delivery service is a lifesaver for my elderly parents. Just WhatsApp the prescription and medicines are delivered within an hour. Excellent service!",
  },
  {
    name: "Mohit Verma",
    initials: "MV",
    rating: 5,
    text: "Best prices in Saharanpur and genuine medicines. The pharmacist is very knowledgeable and always explains the dosage properly. Been a regular for 5 years.",
  },
];

export default function PharmacyTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to order medicines.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <Pill className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Life</span>
              <span className="text-white"> Pharma</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Why Us", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">{item}</a>
            ))}
          </div>
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
            Order Now
          </a>
        </div>
      </nav>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-sm">
          <AlertCircle className="w-4 h-4 text-red-400" />
          <span className="text-red-300 font-medium">24/7 Emergency Medicine Available</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">Call: +91 98XX XXX XXX</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
                <Stethoscope className="w-4 h-4" /> Saharanpur&apos;s Trusted Pharmacy — Open Till 11 PM
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your Health,{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Our Priority</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                100% genuine medicines, health devices, and wellness products. Free home delivery across Saharanpur. Just WhatsApp your prescription!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to order medicines. Here's my prescription:")} label="Send Prescription" size="lg" />
                <a href="#services" className="border border-slate-700 text-slate-300 px-8 py-3.5 rounded-xl font-semibold hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-lg text-center">
                  Our Services
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal>
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-slate-900 to-slate-950 p-2">
                <ImagePlaceholder aspectRatio="21/9" label="Life Pharma — Modern Pharmacy Interior" className="rounded-xl" />
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "15+", label: "Years Serving" },
              { value: "50K+", label: "Prescriptions Filled" },
              { value: "5000+", label: "Products Available" },
              { value: "2 Hr", label: "Free Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">What We Offer</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Complete Healthcare Solutions</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From prescription medicines to wellness products, we&apos;ve got everything you need under one roof.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <ScrollReveal key={item.name}>
                <div className="group bg-slate-900 border border-slate-800/60 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-teal-600/20 transition-colors">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Easy Ordering</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Order in 3 Simple Steps</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Send Prescription", desc: "WhatsApp us a photo of your prescription or medicine name", icon: Phone },
              { step: "02", title: "Confirm Order", desc: "We'll confirm availability, price, and delivery time", icon: Package },
              { step: "03", title: "Get Delivered", desc: "Medicines delivered to your doorstep within 2 hours", icon: Truck },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="text-center p-6">
                  <div className="text-5xl font-black text-emerald-500/15 mb-4">{item.step}</div>
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Why Life Pharma</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Saharanpur Trusts Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <ScrollReveal key={item.label}>
                <div className="text-center p-6 bg-slate-900 border border-slate-800/60 rounded-2xl hover:border-emerald-500/20 transition-all">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Customer Reviews</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">What Our Customers Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <ScrollReveal key={t.name}>
                <div className="bg-slate-900 border border-slate-800/60 rounded-2xl p-6 hover:border-emerald-500/20 transition-all h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center text-emerald-400 text-sm font-bold">
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

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Find Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-3">Visit Our Store</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Store Address</h4>
                      <p className="text-sm text-slate-400 mt-1">Court Road, Near Civil Hospital, Saharanpur, UP 247001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Store Timings</h4>
                      <p className="text-sm text-slate-400 mt-1">Mon - Sat: 8:00 AM - 11:00 PM</p>
                      <p className="text-sm text-slate-400">Sunday: 9:00 AM - 9:00 PM</p>
                      <p className="text-xs text-red-400 mt-1">Emergency medicines available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Contact</h4>
                      <p className="text-sm text-slate-400 mt-1">+91 98XX XXX XXX</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder aspectRatio="16/9" label="Life Pharma Store Front" className="rounded-xl" />
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
            <div className="relative rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-600/10 to-emerald-500/10 border border-emerald-500/20 p-12 text-center overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl opacity-10">💊</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Need <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">Medicines</span> Delivered?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Just WhatsApp us your prescription. We&apos;ll deliver genuine medicines to your doorstep within 2 hours. Free delivery across Saharanpur.
              </p>
              <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to order medicines. Here's my prescription:")} label="Send Prescription" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <Pill className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-emerald-400">Life</span> Pharma
            </span>
          </div>
          <p className="text-sm text-slate-500">Your trusted neighbourhood pharmacy in Saharanpur. Genuine medicines, always.</p>
          <p className="text-xs text-slate-600 mt-4">&copy; 2024 Life Pharma, Saharanpur. All rights reserved.</p>
          <p className="text-xs text-slate-700 mt-2">
            Website crafted by <span className="text-emerald-500">ShopWeb Saharanpur</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
