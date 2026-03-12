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
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Products", "Occasions", "Contact"];

const products = [
  {
    name: "Gulab Jamun",
    price: "₹40/piece",
    description: "Soft, melt-in-mouth dumplings soaked in rose-flavored sugar syrup.",
    icon: "🟤",
  },
  {
    name: "Kaju Katli",
    price: "₹800/kg",
    description: "Premium cashew fudge with silver leaf, our signature bestseller.",
    icon: "💎",
  },
  {
    name: "Rasgulla",
    price: "₹60/piece",
    description: "Spongy cottage cheese balls in light sugar syrup, served chilled.",
    icon: "⚪",
  },
  {
    name: "Barfi",
    price: "₹600/kg",
    description: "Rich milk-based confection available in assorted flavors and nuts.",
    icon: "🟫",
  },
  {
    name: "Laddu",
    price: "₹500/kg",
    description: "Traditional Boondi and Motichoor Laddu made with pure ghee.",
    icon: "🟡",
  },
  {
    name: "Jalebi",
    price: "₹300/kg",
    description: "Crispy, golden spirals of fermented batter dipped in saffron syrup.",
    icon: "🟠",
  },
];

const occasions = [
  {
    icon: PartyPopper,
    title: "Weddings",
    description:
      "Make your special day sweeter with our curated wedding sweet boxes. Custom packaging and bulk orders available with special pricing.",
    cta: "Hi! I'd like to order sweets for a wedding celebration.",
  },
  {
    icon: Gift,
    title: "Festivals",
    description:
      "Celebrate Diwali, Holi, Raksha Bandhan, and every festival with our festive gift boxes. Beautifully packed, ready to gift.",
    cta: "Hi! I'd like to order festival special sweet boxes.",
  },
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Impress clients and reward employees with premium sweet hampers. Corporate branding and customized boxes available.",
    cta: "Hi! I'm interested in corporate sweet box orders.",
  },
];

export default function SweetsTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink("Hi! I'd like to place an order for sweets.");

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🪔</span>
              <div>
                <span className="text-xl font-bold text-amber-700">Shree Sweets</span>
                <span className="hidden sm:inline-block ml-2 text-xs bg-amber-100 text-amber-600 font-semibold px-2 py-0.5 rounded-full">
                  Est. Since 1985
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-amber-600 transition-colors font-medium text-sm"
                >
                  {link}
                </a>
              ))}
              <WhatsAppButton href={whatsappLink} label="Order Now" size="sm" />
            </div>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t px-4 py-4 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-600 hover:text-amber-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <WhatsAppButton href={whatsappLink} label="Order Now" size="sm" />
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4" />
                  Trusted Since 1985
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Authentic Indian Sweets
                </h1>
                <p className="text-amber-100 text-lg leading-relaxed max-w-lg">
                  Handcrafted with love using pure ghee, premium dry fruits, and traditional recipes
                  passed down through three generations.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Order Now"
                    size="lg"
                    className="shadow-xl"
                  />
                  <a
                    href="#products"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    View Menu
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Sweet Shop Banner / Hero Image"
                aspectRatio="4/3"
                icon="🍯"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-amber-600 font-semibold uppercase tracking-wide text-sm mb-2">
                Our Menu
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Signature Sweets
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Every sweet is made fresh daily using time-honored recipes and the finest ingredients.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-amber-100 group"
                >
                  <ImagePlaceholder
                    label={product.name}
                    aspectRatio="4/3"
                    icon={product.icon}
                    className="rounded-none"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                      <span className="text-amber-600 font-bold text-lg">{product.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
                    <a
                      href={getWhatsAppLink(`Hi! I'd like to order ${product.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
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

      {/* Order for Occasions */}
      <section id="occasions" className="bg-amber-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-amber-600 font-semibold uppercase tracking-wide text-sm mb-2">
                Bulk Orders
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Order for Occasions
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Make every celebration memorable with our specially curated sweet boxes and hampers.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <ScrollReveal key={occasion.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-amber-100 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <occasion.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{occasion.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
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
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Percent className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Festival Special</h3>
                  <p className="text-amber-100 text-lg">
                    Get <span className="text-white font-bold">20% off</span> on orders above ₹2000
                  </p>
                </div>
              </div>
              <WhatsAppButton
                href={getWhatsAppLink(
                  "Hi! I'd like to avail the Festival Special 20% off offer."
                )}
                label="Claim Offer"
                size="lg"
                className="shadow-xl flex-shrink-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Order on WhatsApp CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 md:p-16 text-center border border-amber-200 shadow-lg">
              <span className="text-5xl mb-6 block">🪔</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Order on WhatsApp
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
                Simply send us your order on WhatsApp and get fresh sweets delivered to your doorstep.
                Free delivery on orders above ₹500 within city limits.
              </p>
              <WhatsAppButton
                href={whatsappLink}
                label="Send Order on WhatsApp"
                size="lg"
                className="shadow-xl"
              />
              <p className="text-gray-400 text-sm mt-4">
                We typically respond within 5 minutes during business hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🪔</span>
                <div>
                  <span className="text-lg font-bold">Shree Sweets</span>
                  <span className="block text-amber-300 text-xs">Est. Since 1985</span>
                </div>
              </div>
              <p className="text-amber-200 text-sm leading-relaxed">
                Three generations of crafting the finest Indian sweets with pure ingredients
                and traditional recipes. Taste the legacy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-200 mb-4 uppercase text-sm tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-amber-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-200 mb-4 uppercase text-sm tracking-wide">
                Visit Our Shop
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-amber-300 text-sm">
                    Main Market, Court Road, Saharanpur, Uttar Pradesh - 247001
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <p className="text-amber-300 text-sm">+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <p className="text-amber-300 text-sm">Open Daily: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="mt-4">
                <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-10 pt-6 text-center">
            <p className="text-amber-400 text-sm">
              &copy; {new Date().getFullYear()} Shree Sweets. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
