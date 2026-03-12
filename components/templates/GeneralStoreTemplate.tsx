"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Store,
  ShoppingBasket,
  Smartphone,
  Shirt,
  Home,
  Heart,
  BookOpen,
  Truck,
  RotateCcw,
  Package,
  Star,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const categories = [
  { name: "Groceries", icon: ShoppingBasket, emoji: "🛒" },
  { name: "Electronics", icon: Smartphone, emoji: "📱" },
  { name: "Clothing", icon: Shirt, emoji: "👕" },
  { name: "Home & Kitchen", icon: Home, emoji: "🏠" },
  { name: "Beauty & Care", icon: Heart, emoji: "💄" },
  { name: "Stationery", icon: BookOpen, emoji: "📚" },
];

const products = [
  { name: "Premium Basmati Rice", price: "320", unit: "5kg", emoji: "🍚" },
  { name: "Wireless Earbuds", price: "999", unit: "", emoji: "🎧" },
  { name: "Cotton T-Shirt", price: "499", unit: "", emoji: "👕" },
  { name: "Stainless Steel Bottle", price: "350", unit: "", emoji: "🫙" },
];

const deliveryInfo = [
  {
    name: "Same Day Delivery",
    icon: Truck,
    description: "Order before 2 PM and get your items delivered the same day within city limits.",
  },
  {
    name: "Easy Returns",
    icon: RotateCcw,
    description: "Not satisfied? Return any item within 7 days for a full refund, no questions asked.",
  },
  {
    name: "Bulk Orders Welcome",
    icon: Package,
    description: "Planning an event or stocking up? Get special discounts on bulk and wholesale orders.",
  },
];

const reviews = [
  {
    name: "Sunita Devi",
    initials: "SD",
    rating: 5,
    text: "MegaMart has everything I need under one roof. The quality of groceries is always fresh and prices are very reasonable. Home delivery is a blessing!",
  },
  {
    name: "Mohit Kumar",
    initials: "MK",
    rating: 5,
    text: "Ordered wireless earbuds and they arrived the same day. Genuine products with warranty. I always recommend MegaMart to my friends and family.",
  },
  {
    name: "Rekha Agarwal",
    initials: "RA",
    rating: 4,
    text: "Great variety of products from kitchen essentials to clothing. Their WhatsApp ordering makes it so convenient. Excellent customer service too.",
  },
];

const stats = [
  { label: "Products", value: "500+" },
  { label: "Same Day Delivery", value: "Free" },
  { label: "Rating", value: "4.8\u2605" },
];

export default function GeneralStoreTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to place an order from MegaMart.");

  return (
    <div className="min-h-screen bg-purple-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Store className="w-7 h-7 text-purple-700" />
            <span className="text-xl font-bold tracking-wide text-purple-700">
              MegaMart
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#categories" className="hover:text-purple-700 transition-colors">Categories</a>
            <a href="#products" className="hover:text-purple-700 transition-colors">Bestsellers</a>
            <a href="#delivery" className="hover:text-purple-700 transition-colors">Delivery</a>
            <a href="#reviews" className="hover:text-purple-700 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Order Now" size="sm" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-purple-700 via-violet-600 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.3),_transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-purple-200 font-semibold uppercase tracking-widest text-sm mb-4"
                >
                  Saharanpur&apos;s Favorite Store
                </motion.span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Your <span className="text-violet-300">One-Stop</span> Shop
                </h1>
                <p className="text-lg text-purple-100/80 mb-8 max-w-lg">
                  From daily groceries to electronics, clothing to home essentials — find
                  everything you need at unbeatable prices with same-day delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Shop on WhatsApp" size="lg" />
                  <a
                    href="#categories"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-white/50 text-white rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300"
                  >
                    Browse Categories <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Store Front Image"
                aspectRatio="4/3"
                className="rounded-2xl shadow-2xl shadow-black/20"
                icon="🏪"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-8 bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="text-center py-6 px-4 rounded-xl bg-purple-50 border border-purple-100"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-purple-700">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Shop by <span className="text-purple-700">Category</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Browse through our wide range of categories and find exactly what you need.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-purple-50 border border-purple-100 rounded-xl overflow-hidden hover:border-purple-300 transition-colors duration-300 group"
                >
                  <ImagePlaceholder
                    label={cat.name}
                    aspectRatio="16/9"
                    icon={cat.emoji}
                    className="rounded-none"
                  />
                  <div className="p-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-700/10 flex items-center justify-center group-hover:bg-purple-700/20 transition-colors">
                      <cat.icon className="w-5 h-5 text-purple-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Bestseller Products */}
      <section id="products" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-purple-700">Bestsellers</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Top-selling products loved by our customers. Order now on WhatsApp!
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <ImagePlaceholder
                    label={product.name}
                    aspectRatio="1/1"
                    icon={product.emoji}
                    className="rounded-none"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-purple-700 font-bold text-lg mb-3">
                      ₹{product.price}{product.unit && `/${product.unit}`}
                    </p>
                    <WhatsAppButton
                      href={getWhatsAppLink(`Hi! I'd like to order ${product.name} (₹${product.price}${product.unit ? "/" + product.unit : ""}).`)}
                      label="Order Now"
                      size="sm"
                      className="w-full justify-center"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section id="delivery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Delivery <span className="text-purple-700">Information</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We make shopping easy and hassle-free with convenient delivery options.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryInfo.map((info, i) => (
              <ScrollReveal key={info.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 rounded-xl p-8 text-center hover:border-purple-300 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-purple-700/10 flex items-center justify-center group-hover:bg-purple-700/20 transition-colors">
                    <info.icon className="w-8 h-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{info.name}</h3>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our <span className="text-purple-700">Customers Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-white border border-purple-100 rounded-xl p-8 hover:border-purple-300 transition-colors duration-300 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-5 h-5 ${si < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <span className="font-semibold text-gray-900">{review.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Order CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Order Anything on WhatsApp
              </h2>
              <p className="text-purple-100/80 text-lg mb-8">
                Just send us a message with what you need. We will pack it and deliver it
                to your doorstep the same day. It is that simple!
              </p>
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to place an order from MegaMart.")}
                label="Start Shopping on WhatsApp"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Store className="w-6 h-6 text-violet-400" />
                <span className="text-lg font-bold text-white">MegaMart</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Your neighborhood one-stop shop for groceries, electronics, clothing,
                and everything in between. Quality products at affordable prices.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Store Info</h4>
              <div className="space-y-3 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-violet-400" />
                  <span>Delivery Hours: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>Main Market, Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-violet-400" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Order</h4>
              <p className="text-sm text-white/50 mb-4">
                Send us your shopping list on WhatsApp and we will deliver it to your doorstep!
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Order" size="md" />
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} MegaMart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
