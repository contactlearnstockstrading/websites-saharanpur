"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
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
  ShoppingCart,
  Sparkles,
  BadgePercent,
  Gift,
  HeartHandshake,
  Timer,
  CheckCircle2,
} from "lucide-react";

const categories = [
  { name: "Groceries", icon: ShoppingBasket, emoji: "🛒", items: "200+ items", color: "from-emerald-500 to-green-600" },
  { name: "Electronics", icon: Smartphone, emoji: "📱", items: "50+ items", color: "from-blue-500 to-indigo-600" },
  { name: "Clothing", icon: Shirt, emoji: "👕", items: "100+ items", color: "from-pink-500 to-rose-600" },
  { name: "Home & Kitchen", icon: Home, emoji: "🏠", items: "80+ items", color: "from-amber-500 to-orange-600" },
  { name: "Beauty & Care", icon: Heart, emoji: "💄", items: "60+ items", color: "from-purple-500 to-violet-600" },
  { name: "Stationery", icon: BookOpen, emoji: "📚", items: "40+ items", color: "from-cyan-500 to-teal-600" },
];

const products = [
  { name: "Premium Basmati Rice", price: "320", unit: "5kg", emoji: "🍚", badge: "BESTSELLER" },
  { name: "Wireless Earbuds", price: "999", unit: "", emoji: "🎧", badge: "NEW" },
  { name: "Cotton T-Shirt", price: "499", unit: "", emoji: "👕", badge: "TRENDING" },
  { name: "Stainless Steel Bottle", price: "350", unit: "", emoji: "🫙", badge: "ECO" },
  { name: "Notebook Pack (5)", price: "199", unit: "", emoji: "📒", badge: "VALUE" },
  { name: "Face Cream 100ml", price: "450", unit: "", emoji: "✨", badge: "POPULAR" },
  { name: "LED Bulb 9W (Pack of 3)", price: "299", unit: "", emoji: "💡", badge: "SAVE" },
  { name: "Green Tea (25 bags)", price: "180", unit: "", emoji: "🍵", badge: "HEALTHY" },
];

const deliveryFeatures = [
  {
    name: "Same Day Delivery",
    icon: Truck,
    description: "Order before 2 PM and get your items delivered the same day within city limits.",
    stat: "2 Hours",
  },
  {
    name: "Easy Returns",
    icon: RotateCcw,
    description: "Not satisfied? Return any item within 7 days for a full refund, no questions asked.",
    stat: "7 Days",
  },
  {
    name: "Bulk Orders",
    icon: Package,
    description: "Planning an event or stocking up? Get special discounts on bulk and wholesale orders.",
    stat: "20% Off",
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

const perks = [
  { icon: BadgePercent, text: "Daily Deals & Discounts" },
  { icon: Gift, text: "Loyalty Rewards Program" },
  { icon: HeartHandshake, text: "Genuine Products Guarantee" },
  { icon: Timer, text: "Express 2-Hour Delivery" },
];

export default function GeneralStoreTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to place an order from MegaMart.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-violet-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Mega</span>
              <span className="text-white">Mart</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#categories" className="hover:text-violet-400 transition-colors">Categories</a>
            <a href="#products" className="hover:text-violet-400 transition-colors">Bestsellers</a>
            <a href="#delivery" className="hover:text-violet-400 transition-colors">Delivery</a>
            <a href="#reviews" className="hover:text-violet-400 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Order Now" size="sm" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.1),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Saharanpur&apos;s Favorite Store
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  Your{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    One-Stop
                  </span>
                  <br />
                  Shop
                </h1>
                <p className="text-lg text-white/45 mb-8 max-w-lg leading-relaxed">
                  From daily groceries to electronics, clothing to home essentials — find
                  everything you need at unbeatable prices with same-day delivery.
                </p>

                {/* Perks */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {perks.map((perk) => (
                    <div key={perk.text} className="flex items-center gap-2 text-sm text-white/50">
                      <perk.icon className="w-4 h-4 text-violet-400 shrink-0" />
                      {perk.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Shop on WhatsApp" size="lg" />
                  <a
                    href="#categories"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-violet-500/30 text-violet-400 rounded-full hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all duration-300"
                  >
                    Browse Categories <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-purple-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Store Front Image"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-violet-500/20 relative"
                  icon="🏪"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-6 border-y border-violet-500/10 bg-violet-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "500+", label: "Products Available" },
              { value: "FREE", label: "Same Day Delivery" },
              { value: "4.8★", label: "Customer Rating" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center py-4">
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/35 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-violet-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Browse</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Shop by{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Category</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Browse through our wide range of categories and find exactly what you need.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-violet-500/10 rounded-2xl overflow-hidden hover:border-violet-500/25 transition-all duration-500 hover:-translate-y-1">
                  <ImagePlaceholder
                    label={cat.name}
                    aspectRatio="16/9"
                    icon={cat.emoji}
                    className="rounded-none"
                  />
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                        <cat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                        <p className="text-xs text-white/35">{cat.items}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-violet-400 transition-colors" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Bestseller Products */}
      <section id="products" className="py-24 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-violet-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Popular Items</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Bestsellers</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Top-selling products loved by our customers. Order now on WhatsApp!
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.08}>
                <div className="group bg-gradient-to-b from-white/[0.05] to-white/[0.01] rounded-2xl overflow-hidden border border-violet-500/10 hover:border-violet-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative">
                    <ImagePlaceholder
                      label={product.name}
                      aspectRatio="1/1"
                      icon={product.emoji}
                      className="rounded-none"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-violet-500/90 text-white text-[10px] font-bold tracking-wider">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-1">{product.name}</h3>
                    <p className="bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent font-bold text-xl mb-4">
                      ₹{product.price}{product.unit && `/${product.unit}`}
                    </p>
                    <WhatsAppButton
                      href={getWhatsAppLink(`Hi! I'd like to order ${product.name} (₹${product.price}${product.unit ? "/" + product.unit : ""}).`)}
                      label="Order Now"
                      size="sm"
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section id="delivery" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-violet-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Fast & Reliable</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Delivery{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                We make shopping easy and hassle-free with convenient delivery options.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryFeatures.map((info, i) => (
              <ScrollReveal key={info.name} delay={i * 0.12}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-violet-500/10 rounded-2xl p-8 text-center hover:border-violet-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent mb-4">
                    {info.stat}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500/15 to-purple-500/5 flex items-center justify-center border border-violet-500/10 group-hover:from-violet-500/25 group-hover:to-purple-500/10 transition-colors">
                    <info.icon className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{info.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{info.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-violet-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                What Our{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-violet-500/10 rounded-2xl p-8 hover:border-violet-500/25 transition-all duration-500">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-5 h-5 ${si < review.rating ? "text-amber-400 fill-amber-400" : "text-white/10"}`}
                      />
                    ))}
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <div>
                      <span className="font-semibold text-white text-sm">{review.name}</span>
                      <div className="flex items-center gap-1 text-xs text-violet-400/60">
                        <CheckCircle2 className="w-3 h-3" /> Verified Customer
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Order CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-6">
                  <ShoppingCart className="w-4 h-4" />
                  Just Send a Message
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Order Anything on WhatsApp
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                  Just send us a message with what you need. We will pack it and deliver it
                  to your doorstep the same day. It is that simple!
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I'd like to place an order from MegaMart.")}
                  label="Start Shopping on WhatsApp"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-violet-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Mega</span>Mart
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Your neighborhood one-stop shop for groceries, electronics, clothing,
                and everything in between. Quality products at affordable prices.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Store Info</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-violet-400/60" />
                  <span>Delivery Hours: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-violet-400/60" />
                  <span>Main Market, Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-violet-400/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Order</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                Send us your shopping list on WhatsApp and we will deliver it to your doorstep!
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Order" size="md" />
            </div>
          </div>
          <div className="border-t border-violet-500/10 mt-12 pt-8 text-center text-xs text-white/20">
            &copy; {new Date().getFullYear()} MegaMart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
