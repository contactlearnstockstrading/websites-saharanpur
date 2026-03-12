"use client";

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
} from "lucide-react";

const categories = [
  { name: "Breads", icon: Wheat, description: "Artisan loaves baked fresh every morning" },
  { name: "Cakes", icon: Cake, description: "Celebration cakes for every occasion" },
  { name: "Pastries", icon: UtensilsCrossed, description: "Flaky, buttery perfection" },
  { name: "Cookies", icon: Cookie, description: "Crispy, chewy, irresistible" },
];

const products = [
  { name: "Sourdough Bread", price: 180, emoji: "🍞" },
  { name: "Chocolate Truffle Cake", price: 850, emoji: "🎂" },
  { name: "Croissant", price: 120, emoji: "🥐" },
  { name: "Blueberry Muffin", price: 90, emoji: "🧁" },
  { name: "Cinnamon Roll", price: 100, emoji: "🍩" },
  { name: "Red Velvet Cupcake", price: 150, emoji: "🧁" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The sourdough bread is absolutely divine. It has the perfect crust and a soft, tangy interior. I order every week without fail!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    text: "Ordered a custom cake for my daughter's birthday and it was a showstopper. Beautiful design and the taste was phenomenal.",
    rating: 5,
  },
  {
    name: "Anita Gupta",
    text: "Their croissants rival anything I've had in Paris. Flaky, buttery, and always fresh. The Golden Crust is our family's favorite bakery.",
    rating: 4,
  },
];

export default function BakeryTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to place an order from The Golden Crust.");

  return (
    <div className="min-h-screen bg-stone-900 text-amber-100 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Cake className="w-7 h-7 text-amber-600" />
            <span className="text-xl font-bold tracking-wide text-amber-100">
              The Golden Crust
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-100/70">
            <a href="#categories" className="hover:text-amber-500 transition-colors">Menu</a>
            <a href="#products" className="hover:text-amber-500 transition-colors">Products</a>
            <a href="#custom" className="hover:text-amber-500 transition-colors">Custom Orders</a>
            <a href="#reviews" className="hover:text-amber-500 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Order Now" size="sm" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/50 to-stone-900 z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,_rgba(217,119,6,0.3),_transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-amber-600 font-semibold uppercase tracking-widest text-sm mb-4"
                >
                  Artisan Bakery Since 2010
                </motion.span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Freshly Baked,{" "}
                  <span className="text-amber-600">Daily Delights</span>
                </h1>
                <p className="text-lg text-amber-100/60 mb-8 max-w-lg">
                  From crusty sourdough to decadent cakes, every item is handcrafted
                  with premium ingredients and baked with love in our wood-fired ovens.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Order on WhatsApp" size="lg" />
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-stone-900 transition-all duration-300"
                  >
                    View Menu <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Bakery Hero Image"
                aspectRatio="4/3"
                className="rounded-2xl shadow-2xl shadow-amber-600/10"
                icon="🍞"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What We <span className="text-amber-600">Bake</span>
              </h2>
              <p className="text-amber-100/50 max-w-xl mx-auto">
                Every category crafted with care, from traditional recipes to modern twists.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-stone-800 border border-amber-600/15 rounded-xl p-8 text-center hover:border-amber-600/40 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-amber-600/10 flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                    <cat.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-amber-100">{cat.name}</h3>
                  <p className="text-sm text-amber-100/50">{cat.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-amber-600">Bestsellers</span>
              </h2>
              <p className="text-amber-100/50 max-w-xl mx-auto">
                Hand-picked favorites that our customers can not stop ordering.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-stone-800 rounded-xl overflow-hidden border border-amber-600/10 hover:border-amber-600/30 transition-all duration-300 group"
                >
                  <ImagePlaceholder
                    label={product.name}
                    aspectRatio="4/3"
                    icon={product.emoji}
                    className="rounded-none"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-amber-100">{product.name}</h3>
                      <span className="text-amber-600 font-bold text-lg">
                        ₹{product.price}
                      </span>
                    </div>
                    <WhatsAppButton
                      href={getWhatsAppLink(`Hi! I'd like to order ${product.name} (₹${product.price}).`)}
                      label="Order"
                      size="sm"
                      className="w-full justify-center mt-3"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cake Section */}
      <section id="custom" className="py-20 bg-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <ImagePlaceholder
                label="Custom Cake Showcase"
                aspectRatio="1/1"
                icon="🎂"
                className="rounded-2xl shadow-2xl shadow-amber-600/10"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Dream It, We <span className="text-amber-600">Bake It</span>
                </h2>
                <p className="text-amber-100/60 mb-4 text-lg leading-relaxed">
                  From whimsical birthday cakes to elegant wedding tiers, our master
                  bakers bring your vision to life. Choose your flavors, design, and
                  let us create something truly unforgettable.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Custom designs & themes", "Eggless options available", "Same-day delivery for select items", "Free consultation on WhatsApp"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3 text-amber-100/70">
                        <Star className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I'd like to order a custom cake.")}
                  label="Discuss Your Custom Cake"
                  size="lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our <span className="text-amber-600">Customers Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <div className="bg-stone-800 border border-amber-600/10 rounded-xl p-8 hover:border-amber-600/25 transition-colors duration-300">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-5 h-5 ${si < t.rating ? "text-amber-500 fill-amber-500" : "text-stone-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-amber-100/70 mb-6 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-600 font-bold">
                      {t.name[0]}
                    </div>
                    <span className="font-semibold text-amber-100">{t.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-amber-600/15 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cake className="w-6 h-6 text-amber-600" />
                <span className="text-lg font-bold text-amber-100">The Golden Crust</span>
              </div>
              <p className="text-amber-100/50 text-sm leading-relaxed">
                Handcrafted baked goods made with the finest ingredients,
                served fresh from our ovens to your table every single day.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-amber-100 mb-4">Hours & Location</h4>
              <div className="space-y-3 text-sm text-amber-100/50">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Open Daily: 7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-amber-100 mb-4">Order Now</h4>
              <p className="text-sm text-amber-100/50 mb-4">
                Skip the queue! Place your order directly on WhatsApp and pick up fresh.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Order" size="md" />
            </div>
          </div>
          <div className="border-t border-amber-600/10 mt-10 pt-6 text-center text-xs text-amber-100/30">
            &copy; {new Date().getFullYear()} The Golden Crust. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
