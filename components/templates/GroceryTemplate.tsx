"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
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
  Star,
  BadgePercent,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Vegetables", emoji: "🥬", count: 42 },
  { name: "Fruits", emoji: "🍎", count: 28 },
  { name: "Dairy", emoji: "🥛", count: 15 },
  { name: "Grains", emoji: "🌾", count: 20 },
  { name: "Snacks", emoji: "🍿", count: 35 },
  { name: "Beverages", emoji: "🥤", count: 22 },
];

const products = [
  { name: "Fresh Tomatoes", price: "₹40/kg", oldPrice: "₹55/kg", icon: "🍅", label: "Tomatoes", badge: "20% OFF" },
  { name: "Bananas", price: "₹60/dozen", oldPrice: null, icon: "🍌", label: "Bananas", badge: null },
  { name: "Full Cream Milk", price: "₹68/L", oldPrice: null, icon: "🥛", label: "Milk Packet", badge: "DAILY FRESH" },
  { name: "Basmati Rice", price: "₹120/kg", oldPrice: "₹150/kg", icon: "🍚", label: "Rice Pack", badge: "BEST SELLER" },
  { name: "Aloo Bhujia", price: "₹45", oldPrice: null, icon: "🍿", label: "Snack Pack", badge: null },
  { name: "Mango Juice", price: "₹30", oldPrice: "₹40", icon: "🧃", label: "Juice Box", badge: "25% OFF" },
  { name: "Paneer", price: "₹280/kg", oldPrice: null, icon: "🧀", label: "Fresh Paneer", badge: "PREMIUM" },
  { name: "Wheat Flour", price: "₹55/kg", oldPrice: null, icon: "🌾", label: "Atta Pack", badge: null },
];

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on all orders above ₹500. No hidden charges, no surprises.",
    highlight: "₹500+",
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Order before 2 PM and get your groceries delivered the same day.",
    highlight: "Before 2 PM",
  },
  {
    icon: ShieldCheck,
    title: "Fresh Guarantee",
    description: "100% fresh products or we replace them — no questions asked.",
    highlight: "100% Fresh",
  },
];

const stats = [
  { value: "5000+", label: "Happy Customers" },
  { value: "200+", label: "Products" },
  { value: "30 min", label: "Avg. Delivery" },
  { value: "4.8★", label: "Rating" },
];

export default function GroceryTemplate() {
  const [activeCategory, setActiveCategory] = useState("Vegetables");
  const [cartCount] = useState(3);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-gray-900 tracking-tight">
                Fresh<span className="text-green-600">Mart</span>
              </span>
            </div>

            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                <div className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 hover:border-green-300 hover:bg-green-50/50 transition-all cursor-text">
                  Search for fruits, vegetables, dairy...
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-md shadow-green-200"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Deals Banner */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-white" />
            <div className="absolute bottom-0 right-1/3 w-24 h-24 rounded-full bg-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 relative">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <BadgePercent className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">Fresh Deals Every Day!</p>
                <p className="text-green-100 text-sm flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Free delivery on orders above ₹500 &mdash; Order now!
                </p>
              </div>
            </div>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-50 transition-colors shadow-lg flex items-center gap-1.5"
            >
              Shop Now <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </ScrollReveal>

      {/* Stats Bar */}
      <ScrollReveal>
        <div className="bg-green-50 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-green-700 font-extrabold text-xl">{stat.value}</p>
                  <p className="text-gray-500 text-xs font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Pills */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-lg font-bold text-gray-900 mb-5">Shop by Category</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.name}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                    activeCategory === cat.name
                      ? "bg-green-600 text-white shadow-lg shadow-green-200"
                      : "bg-green-50 text-gray-700 hover:bg-green-100 border border-green-100"
                  }`}
                >
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="text-xs font-semibold">{cat.name}</span>
                  <span className={`text-[10px] ${
                    activeCategory === cat.name ? "text-green-200" : "text-gray-400"
                  }`}>
                    {cat.count} items
                  </span>
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Today&apos;s Fresh Picks
                </h2>
                <p className="text-gray-500 text-sm mt-1">Handpicked and delivered farm-fresh</p>
              </div>
              <button className="text-green-600 text-sm font-semibold hover:underline flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(22,163,74,0.12)" }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group relative"
                >
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <div className="p-3 bg-green-50/50">
                    <ImagePlaceholder
                      label={product.label}
                      aspectRatio="1/1"
                      icon={product.icon}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-1.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-green-700 font-bold text-lg">
                          {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-gray-400 text-xs line-through ml-1.5">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.15, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-md shadow-green-200"
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

      {/* Fresh From Farm Banner */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 sm:p-12">
                  <span className="inline-flex items-center gap-1.5 text-green-200 text-sm font-medium mb-4">
                    <Leaf className="w-4 h-4" /> Farm to Table
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                    Fresh Produce,<br />Delivered Daily
                  </h3>
                  <p className="text-green-100 mb-6 leading-relaxed max-w-sm">
                    We source directly from local farms every morning to bring you the
                    freshest vegetables, fruits, and dairy. Quality you can taste.
                  </p>
                  <WhatsAppButton
                    href={getWhatsAppLink("Hi! I want to know about your farm-fresh produce.")}
                    label="Explore Fresh Produce"
                    size="md"
                    className="!bg-white !text-green-700 hover:!bg-green-50"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <ImagePlaceholder
                    label="Fresh Farm Produce"
                    aspectRatio="4/3"
                    icon="🌿"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 text-sm font-bold uppercase tracking-widest mb-2">
                Our Promise
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Why Shop With FreshMart?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {deliveryFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 text-center shadow-sm border border-green-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[60px] -mr-2 -mt-2 group-hover:bg-green-100 transition-colors" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {feature.highlight}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-green-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-green-100 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> Quick & Easy Ordering
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Order Your Groceries<br />via WhatsApp
            </h2>
            <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Don&apos;t want to browse? Simply send us your grocery list on
              WhatsApp and we&apos;ll have it packed and delivered to your doorstep!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to place a grocery order with FreshMart.")}
                label="Send Your Grocery List"
                size="lg"
                className="!bg-white !text-green-700 hover:!bg-green-50 shadow-xl"
              />
              <a
                href={getWhatsAppLink("Hi! I have a question about FreshMart.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4" /> Or call us directly
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-extrabold">
                  Fresh<span className="text-green-400">Mart</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your neighbourhood grocery store, now online. Fresh produce,
                dairy, grains, and more delivered right to your door.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Categories</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                {categories.slice(0, 4).map((cat) => (
                  <li key={cat.name}>
                    <a href="#" className="hover:text-green-400 transition-colors flex items-center gap-2">
                      <span>{cat.emoji}</span> {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Delivery Hours</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Mon - Sat: 7 AM - 9 PM
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Sunday: 8 AM - 6 PM
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Saharanpur, UP
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Order Now</h4>
              <p className="text-gray-400 text-sm mb-4">
                Send us your list and we&apos;ll handle the rest.
              </p>
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to order groceries from FreshMart.")}
                label="Chat with Us"
                size="sm"
                className="!bg-green-600 hover:!bg-green-500"
              />
              <a
                href={getWhatsAppLink("Hi! I have a question about FreshMart delivery.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors mt-4"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Order Line
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
            <span>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</span>
            <span>Demo Template &mdash; Saharanpur</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
