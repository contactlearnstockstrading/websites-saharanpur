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
  Shield,
  Award,
  Users,
  ChevronRight,
  Star,
  CalendarCheck,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Timings", href: "#timings" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Advanced cardiac diagnostics, ECG monitoring, and preventive heart care programs tailored for every patient.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Expert treatment for migraines, epilepsy, stroke recovery, and complex neurological conditions.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Comprehensive bone and joint care, sports injury rehabilitation, and post-surgical physiotherapy.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Holistic primary care for chronic disease management, infections, diabetes, and preventive health screenings.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Gentle child healthcare including immunizations, developmental monitoring, and pediatric emergencies.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    description:
      "Clinical and cosmetic skin treatments for acne, eczema, psoriasis, and advanced aesthetic procedures.",
    color: "bg-pink-50 text-pink-600",
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

const stats = [
  { icon: Users, value: "15,000+", label: "Patients Treated" },
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Shield, value: "99%", label: "Patient Satisfaction" },
  { icon: Star, value: "4.9", label: "Google Rating" },
];

const credentials = [
  "MBBS, MD - General Medicine",
  "Fellowship in Cardiology (AIIMS Delhi)",
  "Member, Indian Medical Association",
  "Former Senior Consultant, Max Healthcare",
  "20+ Years of Clinical Excellence",
];

export default function DoctorTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink("Hi! I'd like to book an appointment at HealthCare Plus.");

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md shadow-teal-200/50">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold text-slate-800 tracking-tight">HealthCare</span>
                <span className="text-lg font-bold text-teal-600 tracking-tight"> Plus</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-slate-500 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-3">
                <WhatsAppButton href={whatsappLink} label="Book Appointment" size="sm" className="shadow-sm" />
              </div>
            </div>

            <button
              className="md:hidden p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100 px-4 py-5 space-y-1 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-slate-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-4">
              <WhatsAppButton href={whatsappLink} label="Book Appointment" size="md" className="w-full" />
            </div>
          </motion.div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-900/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-teal-100 font-medium text-sm">Now Accepting Appointments</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Expert Care,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-200">
                    Trusted Results
                  </span>
                </h1>

                <p className="text-teal-100/90 text-lg md:text-xl leading-relaxed max-w-lg">
                  Compassionate, evidence-based healthcare delivered by experienced specialists.
                  Your well-being is our singular focus.
                </p>

                <div className="flex flex-wrap gap-4 pt-1">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Book Appointment"
                    size="lg"
                    className="shadow-2xl shadow-black/20"
                  />
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold border-2 border-white/25 text-white rounded-full hover:bg-white/10 transition-all group"
                  >
                    View Services
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Inline stats row */}
                <div className="flex flex-wrap gap-8 pt-6 border-t border-white/15">
                  {stats.slice(0, 3).map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-teal-200/70 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Doctor / Clinic Photo"
                  aspectRatio="4/5"
                  icon="🩺"
                  className="relative rounded-3xl shadow-2xl shadow-black/30 max-w-sm mx-auto md:max-w-none border border-white/15"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative -mt-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 -mt-12 relative z-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 px-6 py-6 lg:py-8">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold text-slate-800">{stat.value}</p>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section id="services" className="bg-slate-50/60 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-teal-600 font-semibold uppercase tracking-widest text-xs mb-3 bg-teal-50 px-4 py-1.5 rounded-full">
                Our Specializations
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Comprehensive Medical Care
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                From preventive screenings to specialized treatments, we provide a full spectrum of
                healthcare services under one roof.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group cursor-default h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">{service.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm mt-5 hover:text-teal-700 transition-colors group/link"
                  >
                    Book Consultation
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl -z-10" />
                <ImagePlaceholder
                  label="Doctor Profile Photo"
                  aspectRatio="3/4"
                  icon="👨‍⚕️"
                  className="rounded-2xl shadow-lg max-w-md mx-auto"
                />
                {/* Floating credential badge */}
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Board Certified</p>
                    <p className="text-xs text-slate-400">General Medicine & Cardiology</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <span className="inline-block text-teal-600 font-semibold uppercase tracking-widest text-xs bg-teal-50 px-4 py-1.5 rounded-full">
                  About the Doctor
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Dr. [Your Name Here]
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  With over two decades of clinical experience, our lead physician combines
                  cutting-edge medical knowledge with a deeply compassionate approach. Every patient
                  receives personalized care rooted in the latest evidence-based practices.
                </p>

                <div className="space-y-3 pt-2">
                  {credentials.map((cred) => (
                    <div key={cred} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-teal-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-[15px]">{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Consult with Dr. Now"
                    size="md"
                    className="shadow-md shadow-teal-200/30"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Appointment Timings ── */}
      <section id="timings" className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-teal-600 font-semibold uppercase tracking-widest text-xs mb-3 bg-teal-50 px-4 py-1.5 rounded-full">
                Clinic Hours
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Appointment Timings
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                We maintain consistent hours to ensure you can always reach us when you need care.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden border border-slate-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gradient-to-r from-teal-600 to-teal-700">
                        <th className="px-6 py-5 font-semibold text-sm text-white tracking-wide">Day</th>
                        <th className="px-6 py-5 font-semibold text-sm text-white tracking-wide">
                          <span className="flex items-center gap-2">Morning</span>
                        </th>
                        <th className="px-6 py-5 font-semibold text-sm text-white tracking-wide">Afternoon</th>
                        <th className="px-6 py-5 font-semibold text-sm text-white tracking-wide">Evening</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timings.map((row, index) => {
                        const isSunday = row.day === "Sunday";
                        const isEven = index % 2 === 0;
                        return (
                          <tr
                            key={row.day}
                            className={`border-b border-slate-50 last:border-b-0 transition-colors ${
                              isSunday
                                ? "bg-red-50/60"
                                : isEven
                                ? "bg-slate-50/40 hover:bg-teal-50/40"
                                : "hover:bg-teal-50/40"
                            }`}
                          >
                            <td className={`px-6 py-4 font-semibold ${isSunday ? "text-red-500" : "text-slate-800"}`}>
                              {row.day}
                            </td>
                            <td className={`px-6 py-4 ${isSunday ? "text-red-400 font-medium" : "text-slate-600"}`}>
                              {row.morning}
                            </td>
                            <td className={`px-6 py-4 ${isSunday ? "text-red-400 font-medium" : "text-slate-600"}`}>
                              {row.afternoon}
                            </td>
                            <td className={`px-6 py-4 ${isSunday ? "text-red-400 font-medium" : "text-slate-600"}`}>
                              {row.evening}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Walk-ins welcome. Prior booking recommended for minimal wait time.</span>
                </div>
                <WhatsAppButton href={whatsappLink} label="Book a Slot" size="sm" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Location / Contact Section ── */}
      <section id="contact" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-teal-600 font-semibold uppercase tracking-widest text-xs mb-3 bg-teal-50 px-4 py-1.5 rounded-full">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Our Location
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <ImagePlaceholder
                label="Google Maps Embed"
                aspectRatio="4/3"
                icon="📍"
                className="rounded-2xl shadow-lg border border-slate-100"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
                <p className="text-slate-500 leading-relaxed">
                  We are conveniently located in the heart of the city with ample parking and
                  easy access from all major roads.
                </p>

                <div className="space-y-5 pt-2">
                  {[
                    {
                      icon: MapPin,
                      title: "Clinic Address",
                      content: "123, Main Road, Near City Center,\nSaharanpur, Uttar Pradesh - 247001",
                    },
                    {
                      icon: Phone,
                      title: "Phone Number",
                      content: "+91 98765 43210",
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      content: "Mon - Sat: 9:00 AM - 8:00 PM\nSunday: Closed",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                        <item.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-0.5">{item.title}</h4>
                        <p className="text-slate-500 text-sm whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Get Directions on WhatsApp"
                    size="md"
                    className="shadow-md shadow-teal-200/30"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">HealthCare Plus</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Committed to providing exceptional healthcare with compassion and clinical excellence.
                Trusted by thousands of families across the region for over two decades.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-300 mb-5 uppercase text-xs tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-slate-300 mb-5 uppercase text-xs tracking-widest">
                Contact Us
              </h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <p>123, Main Road, Near City Center, Saharanpur</p>
                <p>+91 98765 43210</p>
              </div>
              <div className="mt-5">
                <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} HealthCare Plus. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Designed for better health outcomes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
