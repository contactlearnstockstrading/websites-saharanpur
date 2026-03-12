"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink, getWhatsAppLinkForTemplate } from "@/lib/whatsapp";
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
} from "lucide-react";
import { useState } from "react";

const menuCategories = ["Hot Drinks", "Cold Drinks", "Snacks", "Desserts"] as const;

type MenuCategory = (typeof menuCategories)[number];

const menuItems: Record<MenuCategory, { name: string; price: string; desc: string }[]> = {
  "Hot Drinks": [
    { name: "Espresso", price: "₹120", desc: "Rich, bold single shot" },
    { name: "Cappuccino", price: "₹180", desc: "Espresso with steamed milk foam" },
    { name: "Latte", price: "₹200", desc: "Smooth espresso with velvety milk" },
    { name: "Hot Chocolate", price: "₹160", desc: "Belgian cocoa with whipped cream" },
  ],
  "Cold Drinks": [
    { name: "Iced Coffee", price: "₹200", desc: "Chilled brewed coffee over ice" },
    { name: "Cold Brew", price: "₹220", desc: "24-hour slow steeped brew" },
    { name: "Frappe", price: "₹250", desc: "Blended iced coffee with cream" },
    { name: "Smoothie", price: "₹180", desc: "Fresh seasonal fruit blend" },
  ],
  Snacks: [
    { name: "Club Sandwich", price: "₹220", desc: "Triple-decker with fries" },
    { name: "Pasta", price: "₹280", desc: "Penne in creamy arrabiata sauce" },
    { name: "Burger", price: "₹250", desc: "Classic smash burger with cheese" },
    { name: "Fries", price: "₹150", desc: "Crispy golden with dipping sauce" },
  ],
  Desserts: [
    { name: "Brownie", price: "₹150", desc: "Warm fudge brownie with ice cream" },
    { name: "Cheesecake", price: "₹200", desc: "New York style baked cheesecake" },
    { name: "Tiramisu", price: "₹250", desc: "Classic Italian coffee dessert" },
    { name: "Cookie", price: "₹80", desc: "Freshly baked chocolate chip" },
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

export default function CafeTemplate() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Hot Drinks");

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold text-amber-50 tracking-tight">
                Brew & Bite
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Home", "Menu", "Gallery", "Visit Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <WhatsAppButton
              href={getWhatsAppLinkForTemplate("Brew & Bite Cafe")}
              label="Reserve"
              size="sm"
              className="!bg-amber-700 hover:!bg-amber-600"
            />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative bg-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
                    Est. 2020 &mdash; Saharanpur
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-50 leading-tight mb-6">
                    Coffee That{" "}
                    <span className="text-amber-400">Moves</span> You
                  </h1>
                  <p className="text-stone-400 text-lg mb-8 max-w-md leading-relaxed">
                    Handcrafted beverages, freshly baked treats, and a warm space
                    to call your own. Every cup tells a story.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amber-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors"
                    >
                      View Menu
                    </motion.button>
                    <WhatsAppButton
                      href={getWhatsAppLink("Hi! I'd like to make a reservation at Brew & Bite.")}
                      label="Book a Table"
                      size="md"
                    />
                  </div>
                </motion.div>

                <div className="flex items-center gap-6 mt-10 text-stone-400 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Wifi className="w-4 h-4 text-amber-500" /> Free WiFi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Music className="w-4 h-4 text-amber-500" /> Live Music
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-amber-500" /> Pet Friendly
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Cafe Ambience"
                aspectRatio="4/3"
                icon="☕"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-amber-700 text-sm font-semibold uppercase tracking-widest">
                Our Menu
              </span>
              <h2 className="text-3xl font-bold text-stone-800 mt-2">
                Crafted with Love
              </h2>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
              {menuCategories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-stone-800 text-amber-400 shadow-lg"
                      : "bg-white text-stone-600 border border-stone-200 hover:border-stone-400"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {menuItems[activeCategory].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 flex items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-stone-800">{item.name}</h3>
                    <p className="text-stone-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-amber-700 font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to place an order from Brew & Bite.")}
                label="Order on WhatsApp"
                size="md"
                className="!bg-amber-700 hover:!bg-amber-600"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="bg-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
                Gallery
              </span>
              <h2 className="text-3xl font-bold text-amber-50 mt-2">
                Our Space, Your Place
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <ImagePlaceholder
                    label={img.label}
                    aspectRatio="3/4"
                    icon={img.icon}
                    className="rounded-xl"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="visit-us" className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-amber-700 text-sm font-semibold uppercase tracking-widest">
                Find Us
              </span>
              <h2 className="text-3xl font-bold text-stone-800 mt-2">
                Visit Our Cafe
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">Address</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        123 Main Road, Court Compound,
                        <br />
                        Saharanpur, Uttar Pradesh 247001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">Hours</h3>
                      <p className="text-stone-500 text-sm">
                        Monday &ndash; Sunday
                      </p>
                      <p className="text-amber-700 font-semibold">
                        8:00 AM &ndash; 10:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">Contact</h3>
                      <WhatsAppButton
                        href={getWhatsAppLinkForTemplate("Brew & Bite Cafe")}
                        label="Chat on WhatsApp"
                        size="sm"
                        className="!bg-amber-700 hover:!bg-amber-600 mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <ImagePlaceholder
                label="Map Location"
                aspectRatio="4/3"
                icon="📍"
                className="rounded-2xl shadow-lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Instagram className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
                  @brewandbite
                </span>
              </div>
              <h2 className="text-3xl font-bold text-amber-50">
                Follow Our Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramFeed.map((post, i) => (
              <ScrollReveal key={post.label} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden cursor-pointer"
                >
                  <ImagePlaceholder
                    label={post.label}
                    aspectRatio="1/1"
                    icon={post.icon}
                    className="rounded-xl"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6 text-amber-400" />
                <span className="text-lg font-bold text-amber-50">
                  Brew & Bite
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                A cozy corner for coffee lovers. Handcrafted drinks, homemade
                food, and the warmth of good company since 2020.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-amber-50 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-amber-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-amber-400 transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-amber-400 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#visit-us" className="hover:text-amber-400 transition-colors">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-50 mb-4">Connect</h4>
              <div className="space-y-3">
                <WhatsAppButton
                  href={getWhatsAppLinkForTemplate("Brew & Bite Cafe")}
                  label="WhatsApp Us"
                  size="sm"
                  className="!bg-amber-700 hover:!bg-amber-600"
                />
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="#"
                    className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-10 pt-6 text-center text-stone-500 text-xs">
            &copy; {new Date().getFullYear()} Brew & Bite. All rights reserved. |
            Demo Template
          </div>
        </div>
      </footer>
    </div>
  );
}
