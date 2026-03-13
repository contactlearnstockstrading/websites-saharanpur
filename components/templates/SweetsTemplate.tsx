"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Star,
  Gift,
  PartyPopper,
  Building2,
  Percent,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  Crown,
  Heart,
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Products", "Occasions", "Contact"];

const products = [
  {
    name: "Gulab Jamun",
    price: "₹40/pc",
    description:
      "Soft, melt-in-mouth dumplings soaked in rose-flavored sugar syrup — the king of Indian desserts.",
    icon: "🟤",
    tag: "Bestseller",
  },
  {
    name: "Kaju Katli",
    price: "₹800/kg",
    description:
      "Premium cashew fudge adorned with silver leaf, handcrafted with pure kaju and cardamom.",
    icon: "💎",
    tag: "Premium",
  },
  {
    name: "Rasgulla",
    price: "₹60/pc",
    description:
      "Spongy chenna balls simmered in light sugar syrup, served chilled for pure bliss.",
    icon: "⚪",
    tag: null,
  },
  {
    name: "Barfi",
    price: "₹600/kg",
    description:
      "Rich milk-based confection in assorted flavors — Pista, Badam, and Coconut varieties.",
    icon: "🟫",
    tag: null,
  },
  {
    name: "Laddu",
    price: "₹500/kg",
    description:
      "Traditional Motichoor and Boondi Laddu made with pure desi ghee and saffron strands.",
    icon: "🟡",
    tag: "Popular",
  },
  {
    name: "Jalebi",
    price: "₹300/kg",
    description:
      "Crispy golden spirals of fermented batter, dipped fresh in warm saffron-cardamom syrup.",
    icon: "🟠",
    tag: "Fresh Daily",
  },
];

const occasions = [
  {
    icon: PartyPopper,
    title: "Weddings",
    subtitle: "Shaadi Special",
    description:
      "Make your special day sweeter with curated wedding mithai boxes. Custom packaging, bulk pricing, and doorstep delivery for the entire baraat.",
    cta: "Hi! I'd like to order sweets for a wedding celebration.",
    accent: "from-rose-500 to-pink-600",
  },
  {
    icon: Gift,
    title: "Festivals",
    subtitle: "Tyohaar Hampers",
    description:
      "Celebrate Diwali, Holi, Raksha Bandhan, and every occasion with our beautifully packed festive gift hampers — ready to share joy.",
    cta: "Hi! I'd like to order festival special sweet boxes.",
    accent: "from-amber-500 to-orange-600",
  },
  {
    icon: Building2,
    title: "Corporate",
    subtitle: "Business Gifting",
    description:
      "Impress clients and reward employees with premium sweet hampers. Corporate branding, custom boxes, and pan-city delivery available.",
    cta: "Hi! I'm interested in corporate sweet box orders.",
    accent: "from-emerald-500 to-teal-600",
  },
];

const trustBadges = [
  { label: "Pure Desi Ghee", emoji: "🧈" },
  { label: "Fresh Daily", emoji: "🌅" },
  { label: "Since 1985", emoji: "🏆" },
  { label: "Free Delivery 500+", emoji: "🚚" },
];

export default function SweetsTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink(
    "Hi! I'd like to place an order for sweets."
  );

  return (
    <div className="min-h-screen bg-[#fffbeb] font-sans">
      {/* Ornamental Top Strip */}
      <div className="h-1.5 bg-gradient-to-r from-[#7f1d1d] via-[#f59e0b] to-[#7f1d1d]" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fffbeb]/95 backdrop-blur-md border-b border-amber-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[#7f1d1d] to-[#991b1b] rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">🪔</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#7f1d1d] tracking-tight leading-tight">
                  Shree Sweets
                </span>
                <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-[0.2em] leading-tight">
                  Est. 1985 · Saharanpur
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#7f1d1d]/70 hover:text-[#7f1d1d] transition-colors font-medium text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#f59e0b] hover:after:w-full after:transition-all"
                >
                  {link}
                </a>
              ))}
              <WhatsAppButton href={whatsappLink} label="Order Now" size="sm" />
            </div>
            <button
              className="md:hidden p-2 text-[#7f1d1d]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#fffbeb] border-t border-amber-200 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-[#7f1d1d]/80 hover:text-[#7f1d1d] font-medium py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <WhatsAppButton
              href={whatsappLink}
              label="Order Now"
              size="sm"
              className="mt-2"
            />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d]"
      >
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 bg-[#f59e0b]/20 backdrop-blur-sm px-5 py-2 rounded-full border border-[#f59e0b]/30">
                  <Crown className="w-4 h-4 text-[#f59e0b]" />
                  <span className="text-[#f59e0b] text-sm font-semibold tracking-wide">
                    Trusted Since 1985
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                  Handcrafted{" "}
                  <span className="text-[#f59e0b]">Indian Mithai</span> Made
                  With Love
                </h1>
                <p className="text-amber-200/80 text-lg leading-relaxed max-w-lg">
                  Three generations of perfecting the art of Indian sweets —
                  pure desi ghee, premium dry fruits, and recipes that carry the
                  warmth of tradition in every bite.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Order on WhatsApp"
                    size="lg"
                    className="shadow-2xl"
                  />
                  <a
                    href="#products"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-[#f59e0b]/40 text-[#f59e0b] rounded-full hover:bg-[#f59e0b]/10 transition-all"
                  >
                    View Our Sweets
                  </a>
                </div>
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {trustBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10"
                    >
                      <span className="text-sm">{badge.emoji}</span>
                      <span className="text-white/80 text-xs font-medium">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#f59e0b]/30 to-transparent rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Sweet Shop Banner — Mithai Display"
                  aspectRatio="4/3"
                  icon="🍯"
                  className="relative rounded-3xl shadow-2xl border-2 border-[#f59e0b]/20"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        {/* Bottom ornamental border */}
        <div className="h-2 bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-60" />
      </section>

      {/* Products Section */}
      <section id="products" className="bg-[#fffbeb] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f59e0b]" />
                <Sparkles className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-[#f59e0b] font-semibold uppercase tracking-[0.2em] text-sm">
                  Our Signature Collection
                </span>
                <Sparkles className="w-5 h-5 text-[#f59e0b]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f59e0b]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#7f1d1d]">
                Fresh Sweets, Daily
              </h2>
              <p className="text-[#7f1d1d]/60 mt-4 max-w-2xl mx-auto text-lg">
                Every mithai is prepared fresh each morning using time-honored
                family recipes and the finest ingredients — pure ghee, A2 milk,
                and premium dry fruits.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-amber-100 group relative"
                >
                  {product.tag && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#7f1d1d] to-[#991b1b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {product.tag}
                    </div>
                  )}
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      label={product.name}
                      aspectRatio="4/3"
                      icon={product.icon}
                      className="rounded-none group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[#7f1d1d]">
                        {product.name}
                      </h3>
                      <span className="text-[#f59e0b] font-extrabold text-xl">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-[#7f1d1d]/50 text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>
                    <a
                      href={getWhatsAppLink(
                        `Hi! I'd like to order ${product.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#7f1d1d] to-[#991b1b] hover:from-[#991b1b] hover:to-[#7f1d1d] px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Order This
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center py-4 bg-[#fffbeb]">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#f59e0b]/50" />
        <span className="mx-4 text-2xl">🪔</span>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#f59e0b]/50" />
      </div>

      {/* Order for Occasions */}
      <section id="occasions" className="bg-[#fffbeb] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f59e0b]" />
                <Heart className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-[#f59e0b] font-semibold uppercase tracking-[0.2em] text-sm">
                  Bulk &amp; Custom Orders
                </span>
                <Heart className="w-5 h-5 text-[#f59e0b]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f59e0b]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#7f1d1d]">
                Sweeten Every Occasion
              </h2>
              <p className="text-[#7f1d1d]/60 mt-4 max-w-2xl mx-auto text-lg">
                From intimate gatherings to grand celebrations — we craft
                bespoke mithai boxes that make every moment unforgettable.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <ScrollReveal key={occasion.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-shadow border border-amber-100 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-80" style={{
                    background: occasion.title === "Weddings"
                      ? "linear-gradient(to right, #f43f5e, #ec4899)"
                      : occasion.title === "Festivals"
                        ? "linear-gradient(to right, #f59e0b, #ea580c)"
                        : "linear-gradient(to right, #10b981, #14b8a6)"
                  }} />
                  <div className={`w-18 h-18 bg-gradient-to-br ${occasion.accent} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg w-[72px] h-[72px]`}>
                    <occasion.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#7f1d1d] mb-1">
                    {occasion.title}
                  </h3>
                  <p className="text-[#f59e0b] text-sm font-semibold mb-4">
                    {occasion.subtitle}
                  </p>
                  <p className="text-[#7f1d1d]/50 text-sm leading-relaxed mb-7">
                    {occasion.description}
                  </p>
                  <WhatsAppButton
                    href={getWhatsAppLink(occasion.cta)}
                    label="Enquire Now"
                    size="sm"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#f59e0b]/15 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f59e0b]/15 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 bg-[#f59e0b]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#f59e0b]/30">
                  <Percent className="w-10 h-10 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest mb-1">
                    Limited Time Offer
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    Festival Special — 20% Off
                  </h3>
                  <p className="text-amber-200/70 text-lg max-w-xl">
                    On all orders above{" "}
                    <span className="text-[#f59e0b] font-bold">₹2,000</span>.
                    Valid on all sweets including Kaju Katli and premium dry
                    fruit boxes. Order now before the offer ends!
                  </p>
                </div>
              </div>
              <WhatsAppButton
                href={getWhatsAppLink(
                  "Hi! I'd like to avail the Festival Special 20% off offer."
                )}
                label="Claim Offer"
                size="lg"
                className="shadow-2xl flex-shrink-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Order CTA */}
      <section className="bg-[#fffbeb] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl p-10 md:p-16 text-center border-2 border-[#f59e0b]/20 shadow-xl">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#f59e0b]/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#f59e0b]/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#f59e0b]/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#f59e0b]/30 rounded-br-3xl" />

              <div className="relative">
                <span className="text-6xl mb-6 block">🪔</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#7f1d1d] mb-4">
                  Order on WhatsApp
                </h2>
                <p className="text-[#7f1d1d]/50 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
                  Simply send us your order and get fresh, handcrafted sweets
                  delivered to your doorstep. Free delivery on orders above ₹500
                  within Saharanpur.
                </p>
                <WhatsAppButton
                  href={whatsappLink}
                  label="Send Order on WhatsApp"
                  size="lg"
                  className="shadow-2xl"
                />
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-[#7f1d1d]/40">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Reply within 5 mins</span>
                  </div>
                  <div className="w-1 h-1 bg-[#7f1d1d]/20 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    <span>4.9 Rating</span>
                  </div>
                  <div className="w-1 h-1 bg-[#7f1d1d]/20 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    <span>10,000+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gradient-to-b from-[#7f1d1d] to-[#450a0a] text-white"
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-[#f59e0b]/20 rounded-full flex items-center justify-center border border-[#f59e0b]/30">
                  <span className="text-xl">🪔</span>
                </div>
                <div>
                  <span className="text-lg font-bold block leading-tight">
                    Shree Sweets
                  </span>
                  <span className="text-[#f59e0b] text-xs font-semibold tracking-widest uppercase">
                    Est. 1985
                  </span>
                </div>
              </div>
              <p className="text-amber-200/60 text-sm leading-relaxed">
                Three generations of crafting the finest Indian mithai with pure
                desi ghee, premium ingredients, and recipes that carry the warmth
                of tradition. Every sweet tells a story of love and legacy.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#f59e0b] mb-5 uppercase text-sm tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-amber-200/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-[#f59e0b] rounded-full" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#f59e0b] mb-5 uppercase text-sm tracking-widest">
                Visit Our Shop
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
                  <p className="text-amber-200/60 text-sm">
                    Main Market, Court Road, Saharanpur, Uttar Pradesh — 247001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                  <p className="text-amber-200/60 text-sm">+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
                  <p className="text-amber-200/60 text-sm">
                    Open Daily: 8:00 AM — 9:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-amber-200/40 text-sm">
              &copy; {new Date().getFullYear()} Shree Sweets, Saharanpur. All
              rights reserved.
            </p>
            <p className="text-amber-200/30 text-xs">
              Made with love and pure ghee since 1985
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
