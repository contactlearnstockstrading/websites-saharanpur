"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Coffee,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Wifi,
  Music,
  Heart,
  Star,
  ArrowRight,
  Flame,
  Snowflake,
  UtensilsCrossed,
  Cake,
} from "lucide-react";
import { useState } from "react";

const menuCategories = [
  { key: "hot", label: "Hot Drinks", icon: Flame },
  { key: "cold", label: "Cold Drinks", icon: Snowflake },
  { key: "snacks", label: "Snacks", icon: UtensilsCrossed },
  { key: "desserts", label: "Desserts", icon: Cake },
] as const;

type MenuKey = (typeof menuCategories)[number]["key"];

const menuItems: Record<MenuKey, { name: string; price: string; desc: string; popular?: boolean }[]> = {
  hot: [
    { name: "Espresso", price: "₹120", desc: "Rich, bold single shot of pure intensity", popular: true },
    { name: "Cappuccino", price: "₹180", desc: "Espresso crowned with velvety milk foam" },
    { name: "Latte", price: "₹200", desc: "Smooth espresso meets silky steamed milk", popular: true },
    { name: "Hot Chocolate", price: "₹160", desc: "Belgian cocoa with house-made whipped cream" },
  ],
  cold: [
    { name: "Iced Coffee", price: "₹200", desc: "Chilled brewed perfection over crystal ice" },
    { name: "Cold Brew", price: "₹220", desc: "24-hour slow steeped, ultra smooth", popular: true },
    { name: "Frappe", price: "₹250", desc: "Blended iced coffee with cream and magic" },
    { name: "Smoothie", price: "₹180", desc: "Fresh seasonal fruit, blended to perfection" },
  ],
  snacks: [
    { name: "Club Sandwich", price: "₹220", desc: "Triple-decker loaded with fresh fillings", popular: true },
    { name: "Pasta", price: "₹280", desc: "Penne in smoky arrabiata sauce" },
    { name: "Burger", price: "₹250", desc: "Classic smash patty with melted cheese" },
    { name: "Fries", price: "₹150", desc: "Crispy golden with three dipping sauces" },
  ],
  desserts: [
    { name: "Brownie", price: "₹150", desc: "Warm fudge brownie with vanilla ice cream" },
    { name: "Cheesecake", price: "₹200", desc: "New York style, baked to silky perfection", popular: true },
    { name: "Tiramisu", price: "₹250", desc: "Classic Italian layers of coffee and mascarpone" },
    { name: "Cookie", price: "₹80", desc: "Freshly baked, gooey chocolate chip" },
  ],
};

const galleryImages = [
  { label: "Cozy Interior", icon: "🏠" },
  { label: "Latte Art", icon: "☕" },
  { label: "Fresh Pastries", icon: "🥐" },
  { label: "Outdoor Seating", icon: "🌿" },
];

const instagramFeed = [
  { label: "Coffee Close-up", icon: "☕" },
  { label: "Dessert Plating", icon: "🍰" },
  { label: "Cafe Vibes", icon: "🎶" },
  { label: "Latte Art", icon: "🎨" },
  { label: "Book & Brew", icon: "📖" },
  { label: "Weekend Special", icon: "🌟" },
];

const vibes = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Music, label: "Live Music Fri-Sun" },
  { icon: Heart, label: "Pet Friendly" },
];

export default function CafeTemplate() {
  const [activeCategory, setActiveCategory] = useState<MenuKey>("hot");

  return (
    <div className="min-h-screen bg-[#fef3c7] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#292524]/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span className="text-xl font-extrabold text-amber-50 tracking-tight">
                  Brew <span className="text-amber-400">&</span> Bite
                </span>
                <span className="block text-amber-500/60 text-[10px] font-medium uppercase tracking-[0.2em]">
                  Specialty Coffee
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Home", "Menu", "Gallery", "Visit Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-stone-400 hover:text-amber-400 text-sm font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all" />
                </a>
              ))}
            </div>

            <WhatsAppButton
              href={getWhatsAppLink("Hi! I'd like to make a reservation at Brew & Bite.")}
              label="Reserve a Table"
              size="sm"
              className="!bg-amber-600 hover:!bg-amber-500 !rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative bg-[#292524] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-900/40 border border-amber-700/30 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  <span className="text-amber-300 text-xs font-semibold uppercase tracking-widest">
                    Est. 2020 &mdash; Saharanpur
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-amber-50 leading-[1.1] mb-6">
                  Coffee That
                  <br />
                  <span className="relative">
                    <span className="text-amber-400">Moves</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/30 rounded-full" />
                  </span>{" "}
                  You
                </h1>
                <p className="text-stone-400 text-lg mb-10 max-w-md leading-relaxed">
                  Handcrafted beverages, freshly baked treats, and a warm space
                  to call your own. Every cup tells a story.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/30 flex items-center gap-2"
                  >
                    View Menu <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <WhatsAppButton
                    href={getWhatsAppLink("Hi! I'd like to book a table at Brew & Bite.")}
                    label="Book a Table"
                    size="md"
                    className="!rounded-full"
                  />
                </div>

                <div className="flex items-center gap-6 mt-12 pt-8 border-t border-stone-700/50">
                  {vibes.map((vibe) => (
                    <span key={vibe.label} className="flex items-center gap-2 text-stone-500 text-sm">
                      <vibe.icon className="w-4 h-4 text-amber-500" /> {vibe.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-transparent rounded-3xl blur-xl" />
                <ImagePlaceholder
                  label="Cafe Ambience"
                  aspectRatio="4/3"
                  icon="☕"
                  className="rounded-3xl shadow-2xl relative"
                />
                <div className="absolute -bottom-4 -left-4 bg-[#292524] border border-stone-700 rounded-2xl px-5 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-amber-50 text-sm font-bold">4.9</span>
                    <span className="text-stone-500 text-xs">(200+ reviews)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Signature Drinks Highlight */}
      <ScrollReveal>
        <div className="bg-[#292524]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Espresso", price: "₹120", icon: "☕" },
                { name: "Cold Brew", price: "₹220", icon: "🧊" },
                { name: "Cheesecake", price: "₹200", icon: "🍰" },
                { name: "Burger", price: "₹250", icon: "🍔" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4 }}
                  className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-4 text-center backdrop-blur-sm"
                >
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="text-amber-50 font-semibold text-sm">{item.name}</p>
                  <p className="text-amber-400 font-bold text-sm">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Menu */}
      <section id="menu" className="bg-[#fef3c7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-amber-700 text-sm font-bold uppercase tracking-widest mb-3">
                <Coffee className="w-4 h-4" /> Our Menu
              </span>
              <h2 className="text-4xl font-extrabold text-stone-800">
                Crafted with Love
              </h2>
              <p className="text-stone-500 mt-3 max-w-md mx-auto">
                Every item on our menu is made fresh, with premium ingredients and a whole lot of passion.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
              {menuCategories.map((cat) => (
                <motion.button
                  key={cat.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.key
                      ? "bg-[#292524] text-amber-400 shadow-xl shadow-stone-400/20"
                      : "bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-amber-700"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0.5, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {menuItems[activeCategory].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex items-start justify-between gap-4 relative overflow-hidden group"
                >
                  {item.popular && (
                    <span className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 text-lg">{item.name}</h3>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0 pt-1">
                    <span className="text-amber-700 font-extrabold text-xl">
                      {item.price}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to place an order from Brew & Bite.")}
                label="Order on WhatsApp"
                size="lg"
                className="!bg-[#292524] hover:!bg-stone-700 !rounded-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="bg-[#292524] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-400 text-sm font-bold uppercase tracking-widest block mb-3">
                Gallery
              </span>
              <h2 className="text-4xl font-extrabold text-amber-50">
                Our Space, Your Place
              </h2>
              <p className="text-stone-500 mt-3 max-w-md mx-auto">
                Warm lighting, comfy corners, and the aroma of freshly brewed coffee.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
                >
                  <ImagePlaceholder
                    label={img.label}
                    aspectRatio="3/4"
                    icon={img.icon}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-4">
                    <span className="text-white font-semibold text-sm">{img.label}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="visit-us" className="bg-[#fef3c7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-amber-700 text-sm font-bold uppercase tracking-widest block mb-3">
                Find Us
              </span>
              <h2 className="text-4xl font-extrabold text-stone-800">
                Visit Our Cafe
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-stone-100">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 text-lg mb-1">Address</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        123 Main Road, Court Compound,
                        <br />
                        Saharanpur, Uttar Pradesh 247001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 text-lg mb-1">Hours</h3>
                      <p className="text-stone-500 text-sm">
                        Monday &ndash; Sunday
                      </p>
                      <p className="text-amber-700 font-bold text-lg mt-0.5">
                        8:00 AM &ndash; 10:00 PM
                      </p>
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-2">
                        Open Now
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 text-lg mb-2">Contact</h3>
                      <WhatsAppButton
                        href={getWhatsAppLink("Hi! I'd like to know more about Brew & Bite cafe.")}
                        label="Chat on WhatsApp"
                        size="sm"
                        className="!bg-amber-600 hover:!bg-amber-500 !rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100 flex items-center gap-4">
                  {vibes.map((vibe) => (
                    <span key={vibe.label} className="flex items-center gap-1.5 text-stone-400 text-xs font-medium">
                      <vibe.icon className="w-3.5 h-3.5 text-amber-500" />
                      {vibe.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative">
                <ImagePlaceholder
                  label="Map Location"
                  aspectRatio="4/3"
                  icon="📍"
                  className="rounded-3xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-4 shadow-xl border border-stone-100">
                  <p className="text-stone-800 font-bold text-sm">Open 7 days a week</p>
                  <p className="text-amber-600 text-xs font-medium">8 AM &ndash; 10 PM</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-[#292524] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">
                  @brewandbite
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-amber-50">
                Follow Our Journey
              </h2>
              <p className="text-stone-500 mt-3">
                Daily brews, behind-the-scenes, and community moments
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramFeed.map((post, i) => (
              <ScrollReveal key={post.label} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="rounded-2xl overflow-hidden cursor-pointer relative group"
                >
                  <ImagePlaceholder
                    label={post.label}
                    aspectRatio="1/1"
                    icon={post.icon}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-amber-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <span className="text-5xl mb-6 block">☕</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Your Table Awaits
            </h2>
            <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Reserve a cozy spot, pre-order your favourite drinks, or just say hello.
              We&apos;re always happy to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to reserve a table at Brew & Bite.")}
                label="Reserve a Table"
                size="lg"
                className="!bg-white !text-amber-700 hover:!bg-amber-50 shadow-xl !rounded-full"
              />
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to place an order from Brew & Bite.")}
                label="Order Ahead"
                size="md"
                className="!bg-amber-900/50 !text-white hover:!bg-amber-900/70 !border !border-amber-400/30 !rounded-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-amber-600 rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-extrabold text-amber-50">
                  Brew <span className="text-amber-400">&</span> Bite
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                A cozy corner for coffee lovers. Handcrafted drinks, homemade
                food, and the warmth of good company since 2020.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-amber-50 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                {["Home", "Menu", "Gallery", "Visit Us"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-50 mb-4 text-sm uppercase tracking-wider">Hours</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  Mon - Sun: 8 AM - 10 PM
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  Court Compound, Saharanpur
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <a
                    href={getWhatsAppLink("Hi! I have a question about Brew & Bite.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-50 mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to visit Brew & Bite.")}
                label="WhatsApp Us"
                size="sm"
                className="!bg-amber-600 hover:!bg-amber-500 !rounded-full mb-5"
              />
              <div className="flex items-center gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-xs">
            <span>&copy; {new Date().getFullYear()} Brew & Bite. All rights reserved.</span>
            <span>Crafted with love in Saharanpur</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
