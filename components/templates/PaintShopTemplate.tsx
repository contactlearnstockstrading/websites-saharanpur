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
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Colours", "Products", "Brands", "Contact"];

const colourPalettes = [
  {
    name: "Reds",
    gradient: "from-red-400 to-red-700",
    colours: [
      { hex: "#FF6B6B", name: "Coral Red" },
      { hex: "#E74C3C", name: "Vermilion" },
      { hex: "#C0392B", name: "Crimson" },
      { hex: "#922B21", name: "Maroon" },
    ],
  },
  {
    name: "Blues",
    gradient: "from-blue-300 to-blue-800",
    colours: [
      { hex: "#74B9FF", name: "Sky Blue" },
      { hex: "#3498DB", name: "Ocean Blue" },
      { hex: "#2980B9", name: "Royal Blue" },
      { hex: "#1F618D", name: "Navy" },
    ],
  },
  {
    name: "Greens",
    gradient: "from-emerald-300 to-emerald-800",
    colours: [
      { hex: "#55EFC4", name: "Mint" },
      { hex: "#27AE60", name: "Emerald" },
      { hex: "#229954", name: "Forest" },
      { hex: "#1E8449", name: "Pine" },
    ],
  },
  {
    name: "Yellows",
    gradient: "from-yellow-200 to-orange-600",
    colours: [
      { hex: "#FFEAA7", name: "Cream" },
      { hex: "#F1C40F", name: "Sunflower" },
      { hex: "#F39C12", name: "Amber" },
      { hex: "#E67E22", name: "Tangerine" },
    ],
  },
  {
    name: "Neutrals",
    gradient: "from-gray-200 to-gray-800",
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
    description: "Premium emulsions, distempers, and texture finishes for beautiful interiors that last for years.",
    color: "#3498DB",
  },
  {
    icon: TreePine,
    title: "Exterior Paints",
    description: "Weather-proof exterior coatings with UV protection and anti-algal properties for lasting beauty.",
    color: "#27AE60",
  },
  {
    icon: Paintbrush,
    title: "Wood Finishes",
    description: "Wood stains, varnishes, PU coatings, and melamine finishes for all your woodwork needs.",
    color: "#E67E22",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Damp-proof solutions, sealants, and waterproofing compounds for lasting protection.",
    color: "#74B9FF",
  },
  {
    icon: Wrench,
    title: "Tools & Accessories",
    description: "Brushes, rollers, putty, primers, thinners, and all professional painting accessories.",
    color: "#636E72",
  },
];

const brands = [
  { name: "Asian Paints", tagline: "Har Ghar Kuch Kehta Hai" },
  { name: "Berger Paints", tagline: "Express Yourself" },
  { name: "Nerolac Paints", tagline: "Jab Ghar Ki Raunak Badhani Ho" },
  { name: "Dulux", tagline: "Let&apos;s Colour" },
];

export default function PaintShopTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedColour, setSelectedColour] = useState<string | null>(null);
  const [activePalette, setActivePalette] = useState("Reds");
  const whatsappLink = getWhatsAppLink(
    "Hi! I'm interested in buying paints. Can you help me choose the right colours?"
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-orange-200">
                <Paintbrush className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                ColourWorld
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <WhatsAppButton href={whatsappLink} label="Get Quote" size="sm" />
            </div>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-600 hover:text-orange-500 font-medium py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <WhatsAppButton href={whatsappLink} label="Get Quote" size="sm" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-white">
        {/* Decorative paint splashes */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/40 to-pink-200/40 blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/20 to-green-200/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                {/* Floating colour dots */}
                <div className="flex items-center gap-2 mb-2">
                  {["#FF6B6B", "#74B9FF", "#55EFC4", "#F1C40F", "#636E72"].map((c) => (
                    <div
                      key={c}
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-400 ml-2 tracking-wider uppercase">
                    1000+ Shades Available
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Space
                  </span>{" "}
                  with Colour
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                  Explore thousands of shades from India&apos;s top brands. Expert colour
                  consultation, competitive prices, and free home delivery on bulk orders.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Free Consultation"
                    size="lg"
                    className="shadow-xl shadow-green-200"
                  />
                  <a
                    href="#colours"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold border-2 border-gray-200 text-gray-700 rounded-full hover:border-orange-300 hover:text-orange-600 transition-all"
                  >
                    <Palette className="w-5 h-5" />
                    Explore Colours
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Decorative swatch strip behind the image */}
                <div className="absolute -right-4 top-8 bottom-8 w-8 rounded-full overflow-hidden z-0 hidden md:flex flex-col">
                  {["#FF6B6B", "#3498DB", "#27AE60", "#F1C40F", "#2D3436"].map((c) => (
                    <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <ImagePlaceholder
                  label="Beautifully Painted Modern Room"
                  aspectRatio="4/3"
                  icon="🎨"
                  className="rounded-3xl shadow-2xl shadow-orange-100 relative z-10 border border-gray-100"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Colour Palette Explorer */}
      <section id="colours" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Curated Collections</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Colour Palette Explorer
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Browse our curated colour collections. Tap any swatch to see its details
                and enquire about availability instantly.
              </p>
            </div>
          </ScrollReveal>

          {/* Palette tab selector */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {colourPalettes.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setActivePalette(p.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activePalette === p.name
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: p.colours[1].hex }}
                    />
                    {p.name}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Selected colour preview */}
          {selectedColour && (
            <ScrollReveal>
              <div className="mb-10 flex items-center justify-center gap-5 bg-white rounded-2xl py-4 px-6 shadow-sm border border-gray-100 max-w-md mx-auto">
                <div
                  className="w-14 h-14 rounded-2xl shadow-lg border-4 border-white flex-shrink-0"
                  style={{ backgroundColor: selectedColour }}
                />
                <div className="text-left">
                  <p className="text-gray-900 font-bold text-lg font-mono">{selectedColour}</p>
                  <p className="text-gray-400 text-sm">Selected shade</p>
                </div>
                <a
                  href={getWhatsAppLink(
                    `Hi! I'm interested in paint colour ${selectedColour}. Do you have this shade available?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all flex items-center gap-1"
                >
                  Enquire <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          )}

          {/* Colour swatch grid */}
          {colourPalettes
            .filter((p) => p.name === activePalette)
            .map((palette) => (
              <ScrollReveal key={palette.name}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
                  {palette.colours.map((colour) => (
                    <motion.button
                      key={colour.hex}
                      whileHover={{ scale: 1.05, y: -6 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedColour(colour.hex)}
                      className={`group relative rounded-2xl overflow-hidden transition-all ${
                        selectedColour === colour.hex
                          ? "ring-4 ring-gray-900 ring-offset-4 ring-offset-gray-50"
                          : "ring-0"
                      }`}
                    >
                      <div
                        className="w-full aspect-square shadow-inner"
                        style={{ backgroundColor: colour.hex }}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-sm font-bold">{colour.name}</p>
                        <p className="text-white/70 text-xs font-mono">{colour.hex}</p>
                      </div>
                      <div className="bg-white px-3 py-2.5 text-center">
                        <p className="text-gray-800 text-sm font-semibold">{colour.name}</p>
                        <p className="text-gray-400 text-xs font-mono">{colour.hex}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </ScrollReveal>
            ))}

          {/* Full palette strip (decorative) */}
          <ScrollReveal delay={0.15}>
            <div className="mt-14 flex rounded-2xl overflow-hidden shadow-lg h-6 max-w-4xl mx-auto">
              {colourPalettes.flatMap((p) =>
                p.colours.map((c) => (
                  <div
                    key={c.hex}
                    className="flex-1 cursor-pointer hover:flex-[2] transition-all duration-300"
                    style={{ backgroundColor: c.hex }}
                    onClick={() => {
                      setSelectedColour(c.hex);
                      setActivePalette(
                        colourPalettes.find((pal) =>
                          pal.colours.some((col) => col.hex === c.hex)
                        )?.name || activePalette
                      );
                    }}
                  />
                ))
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-4">
                <Paintbrush className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600">Complete Range</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Our Product Range
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From premium paints to professional tools, we stock everything for your
                painting project under one roof.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group overflow-hidden"
                >
                  {/* Accent color bar at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: category.color }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon className="w-7 h-7" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <a
                    href={getWhatsAppLink(`Hi! I'm looking for ${category.title}. Can you help?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:gap-2"
                    style={{ color: category.color }}
                  >
                    Enquire Now <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600">Authorized Dealer</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Brands We Carry
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We are authorized dealers for India&apos;s most trusted paint brands.
                100% genuine products at the best prices, always.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <ScrollReveal key={brand.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center"
                >
                  <ImagePlaceholder
                    label={`${brand.name} Logo`}
                    aspectRatio="3/2"
                    icon="🏷️"
                    className="rounded-xl mb-4"
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
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Why Customers Trust Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Two decades of excellence in paint retail and colour consultation.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Genuine", desc: "Only authorized, factory-sealed products from top paint brands.", accent: "#E74C3C" },
              { icon: Star, title: "Expert Advice", desc: "Free colour consultation by trained colour experts with 20+ years experience.", accent: "#F1C40F" },
              { icon: Droplets, title: "Free Tinting", desc: "On-the-spot computerized colour mixing — get any shade in minutes.", accent: "#3498DB" },
              { icon: Clock, title: "Fast Delivery", desc: "Same-day delivery on orders placed before 2 PM across the city.", accent: "#27AE60" },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: `${item.accent}12` }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.accent }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free Colour Consultation CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" />
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-white/5" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex justify-center gap-2">
                {["#FF6B6B", "#74B9FF", "#55EFC4", "#FFEAA7", "#DFE6E9"].map((c) => (
                  <div
                    key={c}
                    className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Get a Free Colour Consultation
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                Not sure which colours to pick? Our experts will help you choose the perfect
                palette for your home. Send us your room photos on WhatsApp and get
                personalized recommendations within hours!
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WhatsAppButton
                  href={getWhatsAppLink(
                    "Hi! I'd like a free colour consultation for my home. Can you help me choose the right paints?"
                  )}
                  label="Book Free Consultation"
                  size="lg"
                  className="shadow-2xl"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Visit Our Store
              </h2>
              <p className="text-gray-500">Come experience colours in person</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <ImagePlaceholder
                label="Store Front Photo / Google Maps"
                aspectRatio="4/3"
                icon="🏪"
                className="rounded-3xl shadow-xl border border-gray-100"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    color: "#E74C3C",
                    title: "Store Address",
                    detail: "Shop No. 12, Paint Market, Court Road, Saharanpur, Uttar Pradesh - 247001",
                  },
                  {
                    icon: Phone,
                    color: "#3498DB",
                    title: "Phone",
                    detail: "+91 98765 43210",
                  },
                  {
                    icon: Clock,
                    color: "#27AE60",
                    title: "Store Hours",
                    detail: "Mon - Sat: 9:00 AM - 8:00 PM | Sunday: 10:00 AM - 2:00 PM",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <WhatsAppButton href={whatsappLink} label="Chat With Us" size="md" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 flex items-center justify-center">
                  <Paintbrush className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-extrabold">ColourWorld</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your one-stop destination for premium paints, colour expertise, and painting
                solutions. Serving Saharanpur and surrounding areas since 2005.
              </p>
              {/* Decorative swatch strip */}
              <div className="flex mt-4 rounded-lg overflow-hidden h-2 w-32">
                {["#FF6B6B", "#3498DB", "#27AE60", "#F1C40F", "#636E72"].map((c) => (
                  <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-4 uppercase text-sm tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
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
