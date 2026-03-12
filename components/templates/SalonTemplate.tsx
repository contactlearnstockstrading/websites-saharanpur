"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Star,
  Heart,
  ChevronRight,
} from "lucide-react";

const services = [
  { name: "Haircut", price: 300, icon: Scissors },
  { name: "Hair Coloring", price: 1500, icon: Sparkles },
  { name: "Bridal Makeup", price: 5000, icon: Heart },
  { name: "Facial", price: 800, icon: Sparkles },
  { name: "Manicure", price: 500, icon: Star },
  { name: "Pedicure", price: 600, icon: Star },
  { name: "Hair Spa", price: 1200, icon: Sparkles },
  { name: "Threading", price: 100, icon: Scissors },
];

const galleryItems = [
  { label: "Bridal Look", emoji: "💄" },
  { label: "Hair Transformation", emoji: "💇" },
  { label: "Party Makeup", emoji: "✨" },
  { label: "Hair Coloring", emoji: "🎨" },
  { label: "Nail Art", emoji: "💅" },
  { label: "Facial Glow", emoji: "🌟" },
];

const team = [
  {
    name: "Meera Kapoor",
    specialization: "Bridal & Party Makeup",
    experience: "8 years experience",
  },
  {
    name: "Riya Singh",
    specialization: "Hair Styling & Coloring",
    experience: "6 years experience",
  },
  {
    name: "Nisha Patel",
    specialization: "Skin Care & Facials",
    experience: "5 years experience",
  },
];

export default function SalonTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to book an appointment at Glamour Studio.");

  return (
    <div className="min-h-screen bg-purple-900 text-pink-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-purple-900/95 backdrop-blur-sm border-b border-rose-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-rose-500" />
            <span className="text-xl font-bold tracking-wide text-pink-50">
              Glamour Studio
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-pink-50/70">
            <a href="#services" className="hover:text-rose-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-rose-400 transition-colors">Gallery</a>
            <a href="#team" className="hover:text-rose-400 transition-colors">Our Team</a>
            <a href="#book" className="hover:text-rose-400 transition-colors">Book Now</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Book Now" size="sm" />
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800/40 to-purple-900 z-0" />
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(244,63,94,0.35),_transparent_55%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-rose-500 font-semibold uppercase tracking-widest text-sm mb-4"
                >
                  Premium Beauty Salon
                </motion.span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Look Your Best,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">
                    Always
                  </span>
                </h1>
                <p className="text-lg text-pink-50/60 mb-8 max-w-lg leading-relaxed">
                  Step into Glamour Studio and discover a world of beauty. From
                  stunning bridal makeovers to rejuvenating facials, we bring out
                  the best version of you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton
                    href={whatsAppLink}
                    label="Book on WhatsApp"
                    size="lg"
                  />
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-rose-500 text-rose-400 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300"
                  >
                    Our Services <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Salon Hero Photo"
                aspectRatio="4/5"
                icon="💇"
                className="rounded-2xl shadow-2xl shadow-rose-500/15"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-rose-500">Services</span>
              </h2>
              <p className="text-pink-50/50 max-w-xl mx-auto">
                Expert care at honest prices. Every service delivered by trained professionals.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-purple-800/50 border border-rose-500/10 rounded-xl p-6 hover:border-rose-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                      <service.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <span className="text-2xl font-bold text-rose-400">
                      ₹{service.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-pink-50 mb-2">{service.name}</h3>
                  <WhatsAppButton
                    href={getWhatsAppLink(`Hi! I'd like to book ${service.name} (₹${service.price}).`)}
                    label="Book"
                    size="sm"
                    className="w-full justify-center mt-3"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-rose-500">Work</span>
              </h2>
              <p className="text-pink-50/50 max-w-xl mx-auto">
                A glimpse of the transformations we create every day at Glamour Studio.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden border border-rose-500/10 hover:border-rose-500/30 transition-all duration-300"
                >
                  <ImagePlaceholder
                    label={item.label}
                    aspectRatio="1/1"
                    icon={item.emoji}
                    className="rounded-none"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Meet Our <span className="text-rose-500">Stylists</span>
              </h2>
              <p className="text-pink-50/50 max-w-xl mx-auto">
                Passionate professionals dedicated to making you look and feel amazing.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-purple-800/50 border border-rose-500/10 rounded-xl overflow-hidden hover:border-rose-500/30 transition-all duration-300 group"
                >
                  <ImagePlaceholder
                    label={member.name}
                    aspectRatio="3/4"
                    icon="👤"
                    className="rounded-none"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-pink-50 mb-1">{member.name}</h3>
                    <p className="text-rose-400 font-medium text-sm mb-1">
                      {member.specialization}
                    </p>
                    <p className="text-pink-50/40 text-xs">{member.experience}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book on WhatsApp CTA Section */}
      <section id="book" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-500 opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.15),_transparent_50%)]" />
              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Ready for a Makeover?
                  </h2>
                  <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                    Book your appointment instantly on WhatsApp. No calls, no waiting.
                    Just message us and we will confirm your slot right away.
                  </p>
                  <WhatsAppButton
                    href={whatsAppLink}
                    label="Book on WhatsApp"
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 shadow-xl"
                  />
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 border-t border-rose-500/15 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-rose-500" />
                <span className="text-lg font-bold text-pink-50">Glamour Studio</span>
              </div>
              <p className="text-pink-50/50 text-sm leading-relaxed">
                Your destination for premium beauty services. Walk in gorgeous,
                walk out even more gorgeous. Glamour Studio - where beauty meets expertise.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-pink-50 mb-4">Visit Us</h4>
              <div className="space-y-3 text-sm text-pink-50/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>Civil Lines, Saharanpur, UP 247001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>Tue - Sun: 10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>+91 91234 56789</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-pink-50 mb-4">Book Appointment</h4>
              <p className="text-sm text-pink-50/50 mb-4">
                Message us on WhatsApp for instant appointment booking. Walk-ins welcome too!
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-rose-500/10 mt-10 pt-6 text-center text-xs text-pink-50/30">
            &copy; {new Date().getFullYear()} Glamour Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
