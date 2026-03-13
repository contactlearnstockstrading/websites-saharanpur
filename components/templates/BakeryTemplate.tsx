"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Wheat,
  Cake,
  Cookie,
  UtensilsCrossed,
  Clock,
  MapPin,
  Star,
  Phone,
  ChevronRight,
  Flame,
  Heart,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Breads",
    icon: Wheat,
    description: "Stone-baked sourdough & rustic loaves, crafted at dawn",
    accent: "from-amber-700/20 to-amber-900/10",
  },
  {
    name: "Cakes",
    icon: Cake,
    description: "Layered masterpieces for celebrations worth remembering",
    accent: "from-rose-700/20 to-rose-900/10",
  },
  {
    name: "Pastries",
    icon: UtensilsCrossed,
    description: "Flaky, buttery viennoiserie — Paris in every bite",
    accent: "from-orange-700/20 to-orange-900/10",
  },
  {
    name: "Cookies",
    icon: Cookie,
    description: "Crisp edges, chewy centers, pure indulgence",
    accent: "from-yellow-700/20 to-yellow-900/10",
  },
];

const products = [
  { name: "Sourdough Bread", price: 180, emoji: "🍞", tag: "Signature" },
  { name: "Chocolate Truffle Cake", price: 850, emoji: "🎂", tag: "Bestseller" },
  { name: "Butter Croissant", price: 120, emoji: "🥐", tag: "Classic" },
  { name: "Blueberry Muffin", price: 90, emoji: "🧁", tag: null },
  { name: "Cinnamon Roll", price: 100, emoji: "🍩", tag: "Fan Favorite" },
  { name: "Red Velvet Cupcake", price: 150, emoji: "🧁", tag: "New" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The sourdough bread is absolutely divine. Perfect crust, soft tangy interior. I order every single week without fail!",
    rating: 5,
    item: "Sourdough Lover",
  },
  {
    name: "Rahul Verma",
    text: "Ordered a custom cake for my daughter's birthday — it was a showstopper. Beautiful design and the taste was phenomenal.",
    rating: 5,
    item: "Custom Cake",
  },
  {
    name: "Anita Gupta",
    text: "Their croissants rival anything I've had in Paris. Flaky, buttery, and always warm. The Golden Crust is our family's favorite.",
    rating: 5,
    item: "Croissant Addict",
  },
];

export default function BakeryTemplate() {
  const [activeCategory, setActiveCategory] = useState<string>("Breads");
  const whatsAppLink = getWhatsAppLink(
    "Hi! I'd like to place an order from The Golden Crust."
  );

  return (
    <div className="min-h-screen bg-[#1c1917] text-[#fef3c7] font-sans selection:bg-amber-600/30">
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-[#1c1917]/95 backdrop-blur-md border-b border-[#d97706]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d97706] to-amber-800 flex items-center justify-center">
              <Cake className="w-5 h-5 text-[#1c1917]" />
            </div>
            <span className="text-xl font-bold tracking-wider uppercase text-[#fef3c7]">
              The Golden Crust
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#fef3c7]/50">
            <a href="#categories" className="hover:text-[#d97706] transition-colors duration-300">
              Our Menu
            </a>
            <a href="#products" className="hover:text-[#d97706] transition-colors duration-300">
              Bestsellers
            </a>
            <a href="#custom" className="hover:text-[#d97706] transition-colors duration-300">
              Custom Cakes
            </a>
            <a href="#reviews" className="hover:text-[#d97706] transition-colors duration-300">
              Reviews
            </a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Order Now" size="sm" className="" />
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Moody ambient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(217,119,6,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(217,119,6,0.08),_transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1c1917] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 mb-6">
                  <Flame className="w-4 h-4 text-[#d97706]" />
                  <span className="text-[#d97706] font-semibold uppercase tracking-widest text-xs">
                    Artisan Bakery Since 2010
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                  Freshly Baked,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] to-amber-400">
                    Daily Delights
                  </span>
                </h1>
                <p className="text-lg text-[#fef3c7]/50 mb-10 max-w-lg leading-relaxed">
                  From crusty sourdough at dawn to decadent cakes at dusk — every
                  item is handcrafted with premium ingredients and baked with love
                  in our wood-fired ovens.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton
                    href={whatsAppLink}
                    label="Order on WhatsApp"
                    size="lg"
                    className=""
                  />
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-[#d97706]/40 text-[#d97706] rounded-full hover:bg-[#d97706] hover:text-[#1c1917] transition-all duration-300"
                  >
                    View Menu <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
                {/* Trust badges */}
                <div className="flex items-center gap-6 mt-10 text-xs text-[#fef3c7]/30 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d97706]/60" /> 100% Fresh Daily
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#d97706]/60" /> Made With Love
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d97706]/20 via-transparent to-[#d97706]/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Artisan bread fresh from the oven"
                  aspectRatio="4/3"
                  className="rounded-2xl shadow-2xl shadow-[#d97706]/10 border border-[#d97706]/10"
                  icon="🍞"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Decorative divider --- */}
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d97706]/30" />
        <Wheat className="w-5 h-5 text-[#d97706]/40" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d97706]/30" />
      </div>

      {/* --- Categories Section --- */}
      <section id="categories" className="py-24 bg-gradient-to-b from-[#1c1917] via-[#1a1614] to-[#1c1917]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#d97706] font-semibold uppercase tracking-widest text-xs mb-3 block">
                Our Craft
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                What We <span className="text-[#d97706]">Bake</span>
              </h2>
              <p className="text-[#fef3c7]/40 max-w-xl mx-auto">
                Every category crafted with care — from traditional family recipes
                to modern artisan twists.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.1}>
                <motion.button
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full text-left bg-gradient-to-br ${cat.accent} border rounded-2xl p-8 transition-all duration-300 group ${
                    activeCategory === cat.name
                      ? "border-[#d97706]/50 shadow-lg shadow-[#d97706]/10"
                      : "border-[#d97706]/10 hover:border-[#d97706]/30"
                  }`}
                >
                  <div
                    className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      activeCategory === cat.name
                        ? "bg-[#d97706] text-[#1c1917]"
                        : "bg-[#d97706]/10 text-[#d97706] group-hover:bg-[#d97706]/20"
                    }`}
                  >
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#fef3c7]">{cat.name}</h3>
                  <p className="text-sm text-[#fef3c7]/40 leading-relaxed">{cat.description}</p>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Featured Products Grid --- */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#d97706] font-semibold uppercase tracking-widest text-xs mb-3 block">
                From Our Ovens
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                Our <span className="text-[#d97706]">Bestsellers</span>
              </h2>
              <p className="text-[#fef3c7]/40 max-w-xl mx-auto">
                Hand-picked favorites our customers cannot stop ordering.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative bg-gradient-to-b from-[#292421] to-[#1c1917] rounded-2xl overflow-hidden border border-[#d97706]/10 hover:border-[#d97706]/30 transition-all duration-300 group"
                >
                  {product.tag && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#d97706] text-[#1c1917] text-xs font-bold uppercase tracking-wide">
                      {product.tag}
                    </div>
                  )}
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      label={product.name}
                      aspectRatio="4/3"
                      icon={product.emoji}
                      className="rounded-none group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#fef3c7]">
                        {product.name}
                      </h3>
                      <span className="text-[#d97706] font-bold text-xl ml-2 whitespace-nowrap">
                        ₹{product.price}
                      </span>
                    </div>
                    <WhatsAppButton
                      href={getWhatsAppLink(
                        `Hi! I'd like to order ${product.name} (₹${product.price}).`
                      )}
                      label="Order Now"
                      size="sm"
                      className="w-full justify-center mt-2"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Custom Cake Section --- */}
      <section id="custom" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d97706]/5 via-transparent to-[#d97706]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#d97706]/15 to-transparent rounded-3xl blur-3xl" />
                <ImagePlaceholder
                  label="Stunning custom cake showcase"
                  aspectRatio="1/1"
                  icon="🎂"
                  className="rounded-2xl shadow-2xl shadow-[#d97706]/15 border border-[#d97706]/15"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <span className="text-[#d97706] font-semibold uppercase tracking-widest text-xs mb-3 block">
                  Bespoke Creations
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                  Dream It, We{" "}
                  <span className="text-[#d97706]">Bake It</span>
                </h2>
                <p className="text-[#fef3c7]/50 mb-6 text-lg leading-relaxed">
                  From whimsical birthday cakes to elegant wedding tiers, our
                  master bakers bring your vision to life. Choose your flavors,
                  design, and let us create something truly unforgettable.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Custom designs & themed decorations",
                    "Eggless & sugar-free options available",
                    "Same-day delivery for select items",
                    "Free consultation on WhatsApp",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[#fef3c7]/60"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#d97706]/15 flex items-center justify-center flex-shrink-0">
                        <Star className="w-3 h-3 text-[#d97706]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  href={getWhatsAppLink(
                    "Hi! I'd like to discuss a custom cake order."
                  )}
                  label="Discuss Your Custom Cake"
                  size="lg"
                  className=""
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-[#1c1917] to-[#1a1614]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#d97706] font-semibold uppercase tracking-widest text-xs mb-3 block">
                Love Notes
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                What Our Customers{" "}
                <span className="text-[#d97706]">Say</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-gradient-to-b from-[#292421] to-[#1c1917] border border-[#d97706]/10 rounded-2xl p-8 hover:border-[#d97706]/25 transition-all duration-300"
                >
                  {/* Large decorative quote mark */}
                  <span className="absolute top-4 right-6 text-6xl text-[#d97706]/10 font-serif leading-none select-none">
                    &ldquo;
                  </span>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-4 h-4 ${
                          si < t.rating
                            ? "text-[#d97706] fill-[#d97706]"
                            : "text-[#fef3c7]/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[#fef3c7]/60 mb-6 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#d97706]/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d97706] to-amber-800 flex items-center justify-center text-[#1c1917] font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <span className="font-semibold text-[#fef3c7] text-sm block">
                        {t.name}
                      </span>
                      <span className="text-xs text-[#d97706]/60">{t.item}</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#141210] border-t border-[#d97706]/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d97706] to-amber-800 flex items-center justify-center">
                  <Cake className="w-5 h-5 text-[#1c1917]" />
                </div>
                <span className="text-lg font-bold tracking-wider uppercase text-[#fef3c7]">
                  The Golden Crust
                </span>
              </div>
              <p className="text-[#fef3c7]/35 text-sm leading-relaxed max-w-xs">
                Handcrafted baked goods made with the finest ingredients, served
                fresh from our wood-fired ovens to your table — every single day.
              </p>
            </div>

            {/* Hours & Location */}
            <div>
              <h4 className="font-bold text-[#fef3c7] mb-5 uppercase tracking-wider text-sm">
                Visit Us
              </h4>
              <div className="space-y-4 text-sm text-[#fef3c7]/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#d97706]" />
                  <span>Open Daily: 7:00 AM &ndash; 9:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#d97706]" />
                  <span>Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d97706]" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Order CTA */}
            <div>
              <h4 className="font-bold text-[#fef3c7] mb-5 uppercase tracking-wider text-sm">
                Quick Order
              </h4>
              <p className="text-sm text-[#fef3c7]/35 mb-5 leading-relaxed">
                Skip the queue! Place your order on WhatsApp and pick up fresh,
                or get it delivered right to your door.
              </p>
              <WhatsAppButton
                href={whatsAppLink}
                label="Order on WhatsApp"
                size="md"
                className=""
              />
            </div>
          </div>

          <div className="border-t border-[#d97706]/10 pt-6 text-center text-xs text-[#fef3c7]/20">
            &copy; {new Date().getFullYear()} The Golden Crust. All rights
            reserved. Baked with love in Saharanpur.
          </div>
        </div>
      </footer>
    </div>
  );
}
