"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Home,
  Building2,
  MapPin,
  Star,
  Shield,
  Phone,
  Clock,
  CheckCircle2,
  TrendingUp,
  Key,
  IndianRupee,
  Users,
  Ruler,
} from "lucide-react";

const propertyTypes = [
  { name: "Residential Plots", icon: Ruler, description: "Prime residential plots in developing areas of Saharanpur. RERA approved with clear titles.", tag: "PLOTS", price: "From ₹15L" },
  { name: "Flats & Apartments", icon: Building2, description: "2BHK & 3BHK ready-to-move and under-construction flats in top societies across Saharanpur.", tag: "FLATS", price: "From ₹25L" },
  { name: "Independent Houses", icon: Home, description: "Newly built independent houses and villas with modern amenities in prime locations.", tag: "HOUSES", price: "From ₹40L" },
  { name: "Commercial Property", icon: Key, description: "Shops, offices, and commercial spaces on main roads. Ideal for businesses and investment.", tag: "COMMERCIAL", price: "From ₹20L" },
  { name: "Agricultural Land", icon: MapPin, description: "Fertile agricultural land on Saharanpur-Deoband, Chilkana, and Ambala road.", tag: "FARM LAND", price: "From ₹8L/Bigha" },
  { name: "Rental Properties", icon: IndianRupee, description: "Find the perfect rental — houses, flats, shops, and offices across Saharanpur city.", tag: "RENT", price: "From ₹5K/mo" },
];

const featuredListings = [
  { title: "3BHK Flat — Green Valley Society", location: "Ambala Road", area: "1,450 sq.ft", price: "₹42 Lakhs", type: "Ready to Move", bedrooms: "3 BHK" },
  { title: "Residential Plot — New Saharanpur", location: "Deoband Road", area: "200 sq.yd", price: "₹22 Lakhs", type: "RERA Approved", bedrooms: "Plot" },
  { title: "Independent House — Company Garden", location: "Near Company Garden", area: "2,100 sq.ft", price: "₹68 Lakhs", type: "Newly Built", bedrooms: "4 BHK" },
  { title: "Shop — Court Road", location: "Court Road, Main Market", area: "350 sq.ft", price: "₹35 Lakhs", type: "Commercial", bedrooms: "Shop" },
];

const whyUs = [
  { icon: Shield, label: "RERA Registered", desc: "All properties verified and RERA compliant" },
  { icon: CheckCircle2, label: "Clear Titles", desc: "Complete legal verification before listing" },
  { icon: TrendingUp, label: "Best ROI Areas", desc: "Expert guidance on high-growth locations" },
  { icon: Users, label: "500+ Happy Families", desc: "Trusted by families across Saharanpur" },
];

const testimonials = [
  {
    name: "Suresh Agarwal",
    initials: "SA",
    rating: 5,
    text: "Bought a plot through them on Ambala Road. The documentation was clean and they handled everything — registry, mutation, all legal work. Very trustworthy dealer.",
  },
  {
    name: "Nidhi Sharma",
    initials: "NS",
    rating: 5,
    text: "Found our dream 3BHK flat within our budget. They showed us 8 options and were very patient. No hidden charges and the flat was exactly as described. Highly recommend!",
  },
  {
    name: "Rakesh Bansal",
    initials: "RB",
    rating: 5,
    text: "Invested in commercial property on their advice 3 years ago. The property value has already doubled. They really know the Saharanpur real estate market inside out.",
  },
];

export default function RealEstateTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'm looking for property in Saharanpur.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-sky-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">Saharanpur</span>
              <span className="text-white"> Properties</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Properties", "Listings", "Why Us", "Reviews"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">{item}</a>
            ))}
          </div>
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all">
            Enquire Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-400 text-sm font-medium mb-8">
                <TrendingUp className="w-4 h-4" /> Saharanpur&apos;s #1 Property Dealer — RERA Registered
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-sky-500 bg-clip-text text-transparent">Property</span>
                {" "}in Saharanpur
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                Plots, flats, houses, and commercial spaces. Verified properties with clear titles. Your trusted real estate partner since 2005.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton href={getWhatsAppLink("Hi! I'm looking for property in Saharanpur. My budget is")} label="Search Property" size="lg" />
                <a href="#listings" className="border border-slate-700 text-slate-300 px-8 py-3.5 rounded-xl font-semibold hover:border-sky-500/50 hover:text-sky-400 transition-all text-lg text-center">
                  View Listings
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal>
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-sky-500/15 bg-gradient-to-br from-slate-900 to-slate-950 p-2">
                <ImagePlaceholder aspectRatio="21/9" label="Saharanpur Properties — Premium Real Estate" className="rounded-xl" />
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Properties Sold" },
              { value: "18+", label: "Years Experience" },
              { value: "200+", label: "Active Listings" },
              { value: "₹50Cr+", label: "Property Sold" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section id="properties" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Property Types</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">What Are You Looking For?</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From residential plots to commercial spaces, we have verified properties across all areas of Saharanpur.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyTypes.map((item) => (
              <ScrollReveal key={item.name}>
                <div className="group bg-slate-900 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 flex items-center justify-center group-hover:from-sky-500/30 group-hover:to-blue-600/20 transition-colors">
                      <item.icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{item.description}</p>
                  <div className="text-sm font-semibold text-sky-400">{item.price}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Featured Listings</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Hot Properties in Saharanpur</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredListings.map((listing) => (
              <ScrollReveal key={listing.title}>
                <div className="group bg-slate-900 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300">
                  <ImagePlaceholder aspectRatio="16/9" label={listing.title} className="w-full" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {listing.type}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                        {listing.bedrooms}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{listing.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <MapPin className="w-4 h-4 text-sky-400" /> {listing.location}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                      <div>
                        <div className="text-xs text-slate-500">Area</div>
                        <div className="text-sm font-semibold text-white">{listing.area}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Price</div>
                        <div className="text-lg font-bold text-sky-400">{listing.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to see more property listings in Saharanpur.")} label="View All Listings" size="md" />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Saharanpur&apos;s Most Trusted Dealer</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <ScrollReveal key={item.label}>
                <div className="text-center p-6 bg-slate-900 border border-slate-800/60 rounded-2xl hover:border-sky-500/20 transition-all">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-sky-400" />
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
              <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Client Reviews</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">Happy Families, Happy Homes</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <ScrollReveal key={t.name}>
                <div className="bg-slate-900 border border-slate-800/60 rounded-2xl p-6 hover:border-sky-500/20 transition-all h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sky-400 text-sky-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 flex items-center justify-center text-sky-400 text-sm font-bold">
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
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sky-400 text-sm font-semibold tracking-wider uppercase">Visit Our Office</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-3">Let&apos;s Find Your Dream Property</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Office Address</h4>
                      <p className="text-sm text-slate-400 mt-1">Saharanpur Road, Near Bus Stand, Saharanpur, UP 247001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Office Hours</h4>
                      <p className="text-sm text-slate-400 mt-1">Mon - Sat: 10:00 AM - 7:00 PM</p>
                      <p className="text-sm text-slate-400">Sunday: By Appointment Only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Contact</h4>
                      <p className="text-sm text-slate-400 mt-1">+91 98XX XXX XXX</p>
                    </div>
                  </div>
                </div>
                <div>
                  <ImagePlaceholder aspectRatio="16/9" label="Saharanpur Properties Office" className="rounded-xl" />
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
            <div className="relative rounded-2xl bg-gradient-to-r from-sky-500/10 via-blue-600/10 to-sky-500/10 border border-sky-500/20 p-12 text-center overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl opacity-10">🏠</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Find Your <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">Dream Property</span>?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Tell us your requirements and budget. We&apos;ll find the perfect property for you in Saharanpur.
              </p>
              <WhatsAppButton href={getWhatsAppLink("Hi! I'm looking for property in Saharanpur. My requirements are:")} label="Start Your Search" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-sky-400">Saharanpur</span> Properties
            </span>
          </div>
          <p className="text-sm text-slate-500">Your trusted real estate partner in Saharanpur since 2005.</p>
          <p className="text-xs text-slate-600 mt-4">&copy; 2024 Saharanpur Properties. All rights reserved. RERA Registered.</p>
          <p className="text-xs text-slate-700 mt-2">
            Website crafted by <span className="text-sky-500">ShopWeb Saharanpur</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
