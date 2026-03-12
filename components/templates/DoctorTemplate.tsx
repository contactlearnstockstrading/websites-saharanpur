"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Bone,
  Stethoscope,
  Baby,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Services", "About", "Contact"];

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Comprehensive heart care with advanced diagnostics, ECG, and preventive cardiology consultations.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Expert diagnosis and treatment of neurological disorders including migraines, epilepsy, and stroke care.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Specialized bone and joint care, fracture management, sports injuries, and physiotherapy.",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Primary healthcare services for fever, infections, diabetes management, and routine check-ups.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Dedicated child healthcare with vaccination programs, growth monitoring, and pediatric emergencies.",
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    description:
      "Skin care treatments for acne, eczema, allergies, and cosmetic dermatology procedures.",
  },
];

const timings = [
  { day: "Monday", morning: "9:00 - 12:00", afternoon: "2:00 - 5:00", evening: "6:00 - 8:00" },
  { day: "Tuesday", morning: "9:00 - 12:00", afternoon: "2:00 - 5:00", evening: "6:00 - 8:00" },
  { day: "Wednesday", morning: "9:00 - 12:00", afternoon: "2:00 - 5:00", evening: "6:00 - 8:00" },
  { day: "Thursday", morning: "9:00 - 12:00", afternoon: "2:00 - 5:00", evening: "6:00 - 8:00" },
  { day: "Friday", morning: "9:00 - 12:00", afternoon: "2:00 - 5:00", evening: "6:00 - 8:00" },
  { day: "Saturday", morning: "9:00 - 12:00", afternoon: "2:00 - 5:00", evening: "6:00 - 8:00" },
  { day: "Sunday", morning: "Closed", afternoon: "Closed", evening: "Closed" },
];

export default function DoctorTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink("Hi! I'd like to book an appointment.");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-7 h-7 text-teal-600" />
              <span className="text-xl font-bold text-teal-700">HealthCare Plus</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium text-sm"
                >
                  {link}
                </a>
              ))}
              <WhatsAppButton href={whatsappLink} label="Book Now" size="sm" />
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
                className="block text-gray-600 hover:text-teal-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <WhatsAppButton href={whatsappLink} label="Book Now" size="sm" />
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-teal-200 font-semibold tracking-wide uppercase text-sm">
                  Welcome to HealthCare Plus
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Expert Care, Trusted Results
                </h1>
                <p className="text-teal-100 text-lg leading-relaxed max-w-lg">
                  Providing compassionate, world-class healthcare to our community for over 20 years.
                  Your health is our priority.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Book Appointment"
                    size="lg"
                    className="shadow-xl"
                  />
                  <a
                    href="#services"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Doctor / Clinic Photo"
                aspectRatio="4/5"
                icon="🩺"
                className="rounded-2xl shadow-2xl max-w-sm mx-auto md:max-w-none border-4 border-white/20"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-teal-600 font-semibold uppercase tracking-wide text-sm mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Specializations</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                We provide a wide range of medical services to ensure comprehensive healthcare for you and your family.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-teal-100"
                >
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <ImagePlaceholder
                label="Doctor Profile Photo"
                aspectRatio="3/4"
                icon="👨‍⚕️"
                className="rounded-2xl shadow-lg max-w-md mx-auto"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-5">
                <p className="text-teal-600 font-semibold uppercase tracking-wide text-sm">
                  About the Doctor
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Dr. [Your Name Here]
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  With over 20 years of experience in providing exceptional medical care, our lead
                  physician is committed to delivering evidence-based treatment with a compassionate
                  approach. Specializing in family and internal medicine.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-gray-700 font-medium">MBBS, MD - General Medicine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-gray-700 font-medium">Fellowship in Cardiology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-gray-700 font-medium">Member, Indian Medical Association</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-gray-700 font-medium">20+ Years of Clinical Experience</span>
                  </div>
                </div>
                <WhatsAppButton
                  href={whatsappLink}
                  label="Consult Now"
                  size="md"
                  className="mt-4"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Appointment Timings */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-teal-600 font-semibold uppercase tracking-wide text-sm mb-2">
                Clinic Hours
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Appointment Timings
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100 max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="px-6 py-4 font-semibold text-sm">Day</th>
                      <th className="px-6 py-4 font-semibold text-sm">Morning</th>
                      <th className="px-6 py-4 font-semibold text-sm">Afternoon</th>
                      <th className="px-6 py-4 font-semibold text-sm">Evening</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timings.map((row, index) => (
                      <tr
                        key={row.day}
                        className={`border-b border-teal-50 ${
                          row.day === "Sunday" ? "bg-red-50 text-red-500" : ""
                        } ${index % 2 === 0 && row.day !== "Sunday" ? "bg-teal-50/40" : ""}`}
                      >
                        <td className="px-6 py-4 font-semibold text-gray-800">{row.day}</td>
                        <td className="px-6 py-4 text-gray-600">{row.morning}</td>
                        <td className="px-6 py-4 text-gray-600">{row.afternoon}</td>
                        <td className="px-6 py-4 text-gray-600">{row.evening}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Walk-ins welcome. Prior appointment recommended via WhatsApp.</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location / Map Section */}
      <section id="contact" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-teal-600 font-semibold uppercase tracking-wide text-sm mb-2">
                Find Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Location</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ImagePlaceholder
                label="Add Google Maps Embed Here"
                aspectRatio="4/3"
                icon="📍"
                className="rounded-2xl shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Clinic Address</h3>
                    <p className="text-gray-500">
                      123, Main Road, Near City Center,
                      <br />
                      Saharanpur, Uttar Pradesh - 247001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-500">
                      Mon - Sat: 9:00 AM - 8:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <WhatsAppButton href={whatsappLink} label="Get Directions on WhatsApp" size="md" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-6 h-6 text-teal-300" />
                <span className="text-lg font-bold">HealthCare Plus</span>
              </div>
              <p className="text-teal-200 text-sm leading-relaxed">
                Committed to providing quality healthcare services to our community with compassion and excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-200 mb-4 uppercase text-sm tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-teal-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-200 mb-4 uppercase text-sm tracking-wide">
                Contact Us
              </h4>
              <p className="text-teal-300 text-sm mb-2">
                123, Main Road, Near City Center, Saharanpur
              </p>
              <p className="text-teal-300 text-sm mb-4">+91 98765 43210</p>
              <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
            </div>
          </div>
          <div className="border-t border-teal-700 mt-10 pt-6 text-center">
            <p className="text-teal-400 text-sm">
              &copy; {new Date().getFullYear()} HealthCare Plus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
