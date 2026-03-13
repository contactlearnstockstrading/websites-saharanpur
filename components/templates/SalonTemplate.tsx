"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Scissors,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Star,
  Heart,
  ChevronRight,
  Crown,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const services = [
  { name: "Haircut", price: 300, icon: Scissors, desc: "Precision cuts for every style" },
  { name: "Hair Coloring", price: 1500, icon: Sparkles, desc: "Vibrant, long-lasting color" },
  { name: "Bridal Makeup", price: 5000, icon: Crown, desc: "Your dream bridal look" },
  { name: "Facial", price: 800, icon: Heart, desc: "Deep cleansing glow therapy" },
  { name: "Manicure", price: 500, icon: Star, desc: "Nails that make a statement" },
  { name: "Pedicure", price: 600, icon: Star, desc: "Pamper your feet in style" },
  { name: "Hair Spa", price: 1200, icon: Sparkles, desc: "Restore shine & strength" },
  { name: "Threading", price: 100, icon: Scissors, desc: "Clean, defined brows" },
];

const galleryItems = [
  { label: "Bridal Glam", emoji: "👰" },
  { label: "Hair Transformation", emoji: "💇" },
  { label: "Party Makeup", emoji: "✨" },
  { label: "Hair Coloring", emoji: "🎨" },
  { label: "Nail Art", emoji: "💅" },
  { label: "Facial Glow", emoji: "🌟" },
];

const team = [
  {
    name: "Meera Kapoor",
    role: "Lead Makeup Artist",
    specialty: "Bridal & Party Makeup",
    experience: "8 years",
  },
  {
    name: "Riya Singh",
    role: "Senior Hair Stylist",
    specialty: "Hair Styling & Coloring",
    experience: "6 years",
  },
  {
    name: "Nisha Patel",
    role: "Skin Care Expert",
    specialty: "Facials & Skin Treatments",
    experience: "5 years",
  },
];

export default function SalonTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsAppLink = getWhatsAppLink(
    "Hi! I'd like to book an appointment at Glamour Studio."
  );

  return (
    <div className="min-h-screen bg-pink-50 font-sans">
      {/* ─── Navigation ─── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-900 to-rose-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-purple-900">
              Glamour Studio
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-900/70">
            <a href="#services" className="hover:text-rose-600 transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-rose-600 transition-colors">
              Gallery
            </a>
            <a href="#team" className="hover:text-rose-600 transition-colors">
              Our Team
            </a>
            <a href="#book" className="hover:text-rose-600 transition-colors">
              Book Now
            </a>
          </div>
          <div className="flex items-center gap-3">
            <WhatsAppButton href={whatsAppLink} label="Book Now" size="sm" className="" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-purple-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 px-4 py-4 space-y-3">
            {["services", "gallery", "team", "book"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-purple-900 font-medium capitalize hover:text-rose-600 transition-colors"
              >
                {id === "book" ? "Book Now" : id === "team" ? "Our Team" : id}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-500 blur-[180px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-400 blur-[140px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%220.6%22%20fill%3D%22rgba(255%2C255%2C255%2C0.04)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-300 text-sm font-semibold uppercase tracking-widest mb-6">
                  <Crown className="w-4 h-4" /> Premium Beauty Salon
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
                  Where Beauty
                  <br />
                  Meets{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-yellow-300">
                    Glamour
                  </span>
                </h1>
                <p className="text-lg text-purple-200/70 mb-8 max-w-lg leading-relaxed">
                  Step into Glamour Studio and discover a world of luxury beauty.
                  From stunning bridal makeovers to rejuvenating spa treatments,
                  we bring out the most radiant version of you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton
                    href={whatsAppLink}
                    label="Book Appointment"
                    size="lg"
                    className=""
                  />
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    View Services <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex items-center gap-6 mt-10 text-purple-200/50 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>4.9 Rated</span>
                  </div>
                  <div className="w-px h-4 bg-purple-200/20" />
                  <span>500+ Happy Clients</span>
                  <div className="w-px h-4 bg-purple-200/20" />
                  <span>Since 2018</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-rose-500/10">
                  <ImagePlaceholder
                    label="Glamorous Salon Interior"
                    aspectRatio="4/5"
                    icon="💄"
                    className="rounded-none"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-purple-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-rose-600 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-900 font-bold text-sm">Bridal Packages</p>
                      <p className="text-rose-600 text-xs font-medium">Starting ₹5,000</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Services Price List ─── */}
      <section id="services" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-rose-600 font-semibold uppercase tracking-widest text-sm">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mt-3 mb-4">
                Our <span className="text-rose-600">Services</span> & Prices
              </h2>
              <p className="text-purple-900/50 max-w-xl mx-auto text-lg">
                Expert beauty care at transparent prices. Every service delivered
                with love by trained professionals.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-gradient-to-b from-pink-50 to-white border border-purple-100 rounded-2xl p-6 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 group"
                >
                  <div className="absolute top-0 right-0 px-4 py-2 bg-purple-900 text-yellow-300 text-lg font-bold rounded-bl-2xl rounded-tr-2xl">
                    ₹{service.price.toLocaleString()}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center mb-4 group-hover:from-rose-600 group-hover:to-rose-500 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-1">{service.name}</h3>
                  <p className="text-purple-900/40 text-sm mb-4">{service.desc}</p>
                  <WhatsAppButton
                    href={getWhatsAppLink(
                      `Hi! I'd like to book ${service.name} (₹${service.price}).`
                    )}
                    label="Book Now"
                    size="sm"
                    className="w-full justify-center"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Section ─── */}
      <section
        id="gallery"
        className="py-20 lg:py-24 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-rose-600 font-semibold uppercase tracking-widest text-sm">
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mt-3 mb-4">
                Beauty <span className="text-rose-600">Gallery</span>
              </h2>
              <p className="text-purple-900/50 max-w-xl mx-auto text-lg">
                A glimpse of the transformations we create every day at
                Glamour Studio.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-2xl overflow-hidden border border-purple-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100/40 transition-all duration-300 group cursor-pointer"
                >
                  <ImagePlaceholder
                    label={item.label}
                    aspectRatio="1/1"
                    icon={item.emoji}
                    className="rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-lg">{item.label}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section id="team" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-rose-600 font-semibold uppercase tracking-widest text-sm">
                The Artists
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mt-3 mb-4">
                Meet Our <span className="text-rose-600">Stylists</span>
              </h2>
              <p className="text-purple-900/50 max-w-xl mx-auto text-lg">
                Passionate professionals dedicated to making you look and feel
                your absolute best.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-b from-pink-50 to-white border border-purple-100 rounded-2xl overflow-hidden hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 group"
                >
                  <div className="relative">
                    <ImagePlaceholder
                      label={member.name}
                      aspectRatio="3/4"
                      icon="👤"
                      className="rounded-none"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <div className="p-6 text-center -mt-4 relative">
                    <h3 className="text-xl font-bold text-purple-900 mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-rose-600 font-semibold text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-purple-900/40 text-sm mb-1">
                      {member.specialty}
                    </p>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-purple-900/5 rounded-full text-xs text-purple-900/60 font-medium mt-2">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {member.experience} experience
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Book on WhatsApp CTA ─── */}
      <section id="book" className="py-20 lg:py-24 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-rose-700" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-300 blur-[100px]" />
              </div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%220.6%22%20fill%3D%22rgba(255%2C255%2C255%2C0.05)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready for Your Glow-Up?
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Book your appointment instantly on WhatsApp. No calls, no
                  waiting. Just message us and we will confirm your slot right
                  away.
                </p>
                <WhatsAppButton
                  href={whatsAppLink}
                  label="Book on WhatsApp"
                  size="lg"
                  className="shadow-xl shadow-green-500/25"
                />
                <p className="text-white/40 text-sm mt-6">
                  Usually responds within 5 minutes
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-purple-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </div>
                <span className="text-xl font-bold text-white">
                  Glamour Studio
                </span>
              </div>
              <p className="text-purple-300/60 text-sm leading-relaxed mb-5">
                Your destination for premium beauty services. Walk in confident,
                walk out radiant. Where every visit is a celebration of you.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">Visit Us</h4>
              <div className="space-y-4 text-sm text-purple-300/60">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Civil Lines, Saharanpur, UP 247001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Tue - Sun: 10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>+91 91234 56789</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">
                Book Appointment
              </h4>
              <p className="text-sm text-purple-300/60 mb-5 leading-relaxed">
                Message us on WhatsApp for instant appointment booking.
                Walk-ins are always welcome too!
              </p>
              <WhatsAppButton
                href={whatsAppLink}
                label="WhatsApp Us"
                size="md"
                className=""
              />
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/40">
            <span>
              &copy; {new Date().getFullYear()} Glamour Studio. All rights
              reserved.
            </span>
            <span>Crafted with love in Saharanpur</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
