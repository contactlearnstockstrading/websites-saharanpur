"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink, getWhatsAppLinkForTemplate } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Search,
  Truck,
  Clock,
  ShieldCheck,
  Phone,
  MapPin,
  Plus,
  Leaf,
} from "lucide-react";

const categories = [
  { name: "Vegetables", emoji: "🥬" },
  { name: "Fruits", emoji: "🍎" },
  { name: "Dairy", emoji: "🥛" },
  { name: "Grains", emoji: "🌾" },
  { name: "Snacks", emoji: "🍿" },
  { name: "Beverages", emoji: "🥤" },
];

const products = [
  { name: "Fresh Tomatoes", price: "₹40/kg", icon: "🍅", label: "Tomatoes" },
  { name: "Bananas", price: "₹60/dozen", icon: "🍌", label: "Bananas" },
  { name: "Full Cream Milk", price: "₹68/L", icon: "🥛", label: "Milk Packet" },
  { name: "Basmati Rice", price: "₹120/kg", icon: "🍚", label: "Rice Pack" },
  { name: "Aloo Bhujia", price: "₹45", icon: "🍿", label: "Snack Pack" },
  { name: "Mango Juice", price: "₹30", icon: "🧃", label: "Juice Box" },
  { name: "Paneer", price: "₹280/kg", icon: "🧀", label: "Fresh Paneer" },
  { name: "Wheat Flour", price: "₹55/kg", icon: "🌾", label: "Atta Pack" },
];

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on all orders above ₹500. No hidden charges.",
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Order before 2 PM and get your groceries delivered the same day.",
  },
  {
    icon: ShieldCheck,
    title: "Fresh Guarantee",
    description: "100% fresh products or we replace them — no questions asked.",
  },
];

export default function GroceryTemplate() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-7 h-7 text-green-600" />
              <span className="text-xl font-bold text-green-700 tracking-tight">
                FreshMart
              </span>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <div className="w-full pl-10 pr-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm text-gray-400">
                  Search for groceries...
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Deals Banner */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-bold text-lg">Fresh Deals Every Day!</p>
                <p className="text-green-100 text-sm">
                  Free delivery on orders above ₹500
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-5 py-2 rounded-full text-sm font-bold hover:bg-green-50 transition-colors"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Pills */}
      <section className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    i === 0
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-white text-green-800 border border-green-200 hover:border-green-400 hover:bg-green-50"
                  }`}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Today&apos;s Fresh Picks
              </h2>
              <button className="text-green-600 text-sm font-semibold hover:underline">
                View All &rarr;
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm group"
                >
                  <div className="p-3">
                    <ImagePlaceholder
                      label={product.label}
                      aspectRatio="1/1"
                      icon={product.icon}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-green-700 font-bold text-base">
                        {product.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Why Shop With FreshMart?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {deliveryFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-green-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-5xl mb-4 block">🛒</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Order via WhatsApp
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
              Don&apos;t want to order online? Simply send us your grocery list on
              WhatsApp and we&apos;ll deliver it to your doorstep!
            </p>
            <WhatsAppButton
              href={getWhatsAppLinkForTemplate("FreshMart Grocery")}
              label="Send Your Grocery List"
              size="lg"
              className="bg-white !text-green-700 hover:!bg-green-50"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-green-400" />
                <span className="text-lg font-bold">FreshMart</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your neighbourhood grocery store, now online. Fresh produce,
                dairy, grains, and more delivered right to your door.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Delivery Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  Mon - Sat: 7:00 AM - 9:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  Sunday: 8:00 AM - 6:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  Saharanpur, Uttar Pradesh
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink("Hi! I'd like to place a grocery order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Order Line
                </a>
                <WhatsAppButton
                  href={getWhatsAppLinkForTemplate("FreshMart Grocery")}
                  label="Chat with Us"
                  size="sm"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} FreshMart. All rights reserved. |
            Demo Template
          </div>
        </div>
      </footer>
    </div>
  );
}
