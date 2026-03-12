"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Home,
  TreePine,
  Droplets,
  Wrench,
  Palette,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Star,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Colours", "Products", "Brands", "Contact"];

const colourPalettes = [
  {
    name: "Reds",
    colours: [
      { hex: "#FF6B6B", name: "Coral Red" },
      { hex: "#E74C3C", name: "Vermilion" },
      { hex: "#C0392B", name: "Crimson" },
      { hex: "#922B21", name: "Maroon" },
    ],
  },
  {
    name: "Blues",
    colours: [
      { hex: "#74B9FF", name: "Sky Blue" },
      { hex: "#3498DB", name: "Ocean Blue" },
      { hex: "#2980B9", name: "Royal Blue" },
      { hex: "#1F618D", name: "Navy" },
    ],
  },
  {
    name: "Greens",
    colours: [
      { hex: "#55EFC4", name: "Mint" },
      { hex: "#27AE60", name: "Emerald" },
      { hex: "#229954", name: "Forest" },
      { hex: "#1E8449", name: "Pine" },
    ],
  },
  {
    name: "Yellows",
    colours: [
      { hex: "#FFEAA7", name: "Cream" },
      { hex: "#F1C40F", name: "Sunflower" },
      { hex: "#F39C12", name: "Amber" },
      { hex: "#E67E22", name: "Tangerine" },
    ],
  },
  {
    name: "Neutrals",
    colours: [
      { hex: "#DFE6E9", name: "Cloud" },
      { hex: "#B2BEC3", name: "Silver" },
      { hex: "#636E72", name: "Slate" },
      { hex: "#2D3436", name: "Charcoal" },
    ],
  },
];

const productCategories = [
  {
    icon: Home,
    title: "Interior Paints",
    description:
      "Premium emulsions, distempers, and texture finishes for beautiful interiors that last.",
  },
  {
    icon: TreePine,
    title: "Exterior Paints",
    description:
      "Weather-proof exterior coatings with UV protection and anti-algal properties.",
  },
  {
    icon: Paintbrush,
    title: "Wood Finishes",
    description:
      "Wood stains, varnishes, PU coatings, and melamine finishes for all woodwork.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description:
      "Damp-proof solutions, sealants, and waterproofing compounds for lasting protection.",
  },
  {
    icon: Wrench,
    title: "Tools & Accessories",
    description:
      "Brushes, rollers, putty, primers, thinners, and all painting accessories.",
  },
];

const brands = [
  { name: "Asian Paints", tagline: "Har Ghar Kuch Kehta Hai" },
  { name: "Berger Paints", tagline: "Express Yourself" },
  { name: "Nerolac Paints", tagline: "Jab Ghar Ki Raunak Badhani Ho" },
  { name: "Dulux", tagline: "Let's Colour" },
];

export default function PaintShopTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedColour, setSelectedColour] = useState<string | null>(null);
  const whatsappLink = getWhatsAppLink(
    "Hi! I'm interested in buying paints. Can you help me choose the right colours?"
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Paintbrush className="w-7 h-7 text-orange-500" />
              <span className="text-xl font-bold text-orange-600">ColourWorld</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-orange-500 transition-colors font-medium text-sm"
                >
                  {link}
                </a>
              ))}
              <WhatsAppButton href={whatsappLink} label="Get Quote" size="sm" />
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
                className="block text-gray-600 hover:text-orange-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <WhatsAppButton href={whatsappLink} label="Get Quote" size="sm" />
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-orange-100 font-semibold tracking-wide uppercase text-sm">
                  Your Trusted Paint Partner
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your Space with Colour
                </h1>
                <p className="text-orange-100 text-lg leading-relaxed max-w-lg">
                  Explore thousands of shades from top brands. Expert colour consultation,
                  competitive prices, and free home delivery on bulk orders.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Get Free Consultation"
                    size="lg"
                    className="shadow-xl"
                  />
                  <a
                    href="#colours"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    Explore Colours
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Beautifully Painted Room"
                aspectRatio="4/3"
                icon="🎨"
                className="rounded-2xl shadow-2xl max-w-sm mx-auto md:max-w-none border-4 border-white/20"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Colour Palette Explorer */}
      <section id="colours" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">
                Find Your Perfect Shade
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Colour Palette Explorer
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Browse our curated colour collections. Tap any swatch to see its details.
                Visit our store to see them in person!
              </p>
            </div>
          </ScrollReveal>

          {selectedColour && (
            <ScrollReveal>
              <div className="mb-8 flex items-center justify-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl shadow-lg border-2 border-white"
                  style={{ backgroundColor: selectedColour }}
                />
                <div>
                  <p className="text-gray-900 font-bold text-lg">{selectedColour}</p>
                  <p className="text-gray-500 text-sm">Selected colour</p>
                </div>
                <a
                  href={getWhatsAppLink(
                    `Hi! I'm interested in paint colour ${selectedColour}. Do you have this shade available?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Ask About This Colour
                </a>
              </div>
            </ScrollReveal>
          )}

          <div className="space-y-8">
            {colourPalettes.map((palette, pIndex) => (
              <ScrollReveal key={palette.name} delay={pIndex * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-orange-500" />
                    {palette.name}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {palette.colours.map((colour) => (
                      <motion.button
                        key={colour.hex}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedColour(colour.hex)}
                        className={`flex flex-col items-center gap-2 cursor-pointer group ${
                          selectedColour === colour.hex ? "ring-2 ring-orange-500 ring-offset-2 rounded-xl p-1" : "p-1"
                        }`}
                      >
                        <div
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md border-2 border-white group-hover:shadow-lg transition-shadow"
                          style={{ backgroundColor: colour.hex }}
                        />
                        <span className="text-xs text-gray-500 font-medium">{colour.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{colour.hex}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">
                Everything You Need
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Product Range
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                From premium paints to professional tools, we stock everything for your
                painting project.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-orange-100"
                >
                  <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                    <category.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="bg-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">
                Authorized Dealer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Brands We Carry
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                We are authorized dealers for India&apos;s most trusted paint brands.
                Genuine products at best prices.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <ScrollReveal key={brand.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100 text-center"
                >
                  <ImagePlaceholder
                    label={`${brand.name} Logo`}
                    aspectRatio="3/2"
                    icon="🏷️"
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-gray-900 text-sm">{brand.name}</h3>
                  <p className="text-gray-400 text-xs mt-1 italic">{brand.tagline}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">
                Why ColourWorld
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Customers Trust Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "100% Genuine", desc: "Only authorized, sealed products from top brands." },
              { icon: Star, title: "Expert Advice", desc: "Free colour consultation by trained colour experts." },
              { icon: Droplets, title: "Free Tinting", desc: "On-the-spot computerized colour mixing at our store." },
              { icon: Clock, title: "Fast Delivery", desc: "Same-day delivery on orders placed before 2 PM." },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free Colour Consultation CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="space-y-6">
              <Palette className="w-16 h-16 text-white/80 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Get a Free Colour Consultation
              </h2>
              <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                Not sure which colours to pick? Our experts will help you choose the perfect
                palette for your home. Send us your room photos on WhatsApp and get
                personalized recommendations!
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <WhatsAppButton
                  href={getWhatsAppLink(
                    "Hi! I'd like a free colour consultation for my home. Can you help me choose the right paints?"
                  )}
                  label="Book Free Consultation"
                  size="lg"
                  className="shadow-xl"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">
                Visit Our Store
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Find Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ImagePlaceholder
                label="Store Front Photo / Google Maps"
                aspectRatio="4/3"
                icon="🏪"
                className="rounded-2xl shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Store Address</h3>
                    <p className="text-gray-500">
                      Shop No. 12, Paint Market, Court Road,
                      <br />
                      Saharanpur, Uttar Pradesh - 247001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Store Hours</h3>
                    <p className="text-gray-500">
                      Mon - Sat: 9:00 AM - 8:00 PM
                      <br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
                <WhatsAppButton href={whatsappLink} label="Chat With Us" size="md" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Paintbrush className="w-6 h-6 text-orange-400" />
                <span className="text-lg font-bold">ColourWorld</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your one-stop destination for premium paints, colour expertise, and painting
                solutions. Serving Saharanpur and surrounding areas since 2005.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-4 uppercase text-sm tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-4 uppercase text-sm tracking-wide">
                Contact Us
              </h4>
              <p className="text-gray-400 text-sm mb-2">
                Shop No. 12, Paint Market, Court Road, Saharanpur
              </p>
              <p className="text-gray-400 text-sm mb-4">+91 98765 43210</p>
              <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ColourWorld. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
