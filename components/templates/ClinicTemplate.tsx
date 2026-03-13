"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Phone,
  Star,
  Stethoscope,
  Shield,
  Syringe,
  Activity,
  FlaskConical,
  HeartPulse,
  CheckCircle2,
  Quote,
  CalendarCheck,
  Sun,
  Sunset,
  Moon,
  CalendarX,
  ChevronRight,
  Award,
} from "lucide-react";

const timings = [
  {
    session: "Morning",
    time: "9:00 AM - 12:00 PM",
    icon: Sun,
    emoji: "🌅",
    available: true,
  },
  {
    session: "Afternoon",
    time: "2:00 PM - 5:00 PM",
    icon: Sunset,
    emoji: "☀️",
    available: true,
  },
  {
    session: "Evening",
    time: "6:00 PM - 8:00 PM",
    icon: Moon,
    emoji: "🌆",
    available: true,
  },
  {
    session: "Sunday",
    time: "Closed",
    icon: CalendarX,
    emoji: "📅",
    available: false,
  },
];

const services = [
  {
    icon: Stethoscope,
    name: "General Consultation",
    description:
      "Comprehensive health assessment and diagnosis for patients of all age groups.",
  },
  {
    icon: HeartPulse,
    name: "Health Checkup",
    description:
      "Complete body checkup packages with detailed reports and expert analysis.",
  },
  {
    icon: Syringe,
    name: "Vaccination",
    description:
      "All essential vaccines for children and adults as per the national schedule.",
  },
  {
    icon: Activity,
    name: "Chronic Disease Mgmt",
    description:
      "Ongoing care plans for diabetes, hypertension, thyroid, asthma, and more.",
  },
  {
    icon: Shield,
    name: "Minor Procedures",
    description:
      "Wound care, suturing, abscess drainage, and minor surgical procedures.",
  },
  {
    icon: FlaskConical,
    name: "Lab Tests",
    description:
      "On-site sample collection with quick, accurate, and affordable test results.",
  },
];

const reviews = [
  {
    name: "Rajesh K.",
    initials: "RK",
    rating: 5,
    text: "Dr. Sharma is very thorough and patient. He explains everything clearly and takes time to listen to all concerns. Highly recommended for families!",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Priya M.",
    initials: "PM",
    rating: 5,
    text: "Best clinic in the area. Extremely clean, hygienic, and the staff is so warm and friendly. My whole family comes here. Never disappointed.",
    timeAgo: "1 month ago",
  },
  {
    name: "Amit S.",
    initials: "AS",
    rating: 4,
    text: "Great experience with the annual health checkup. Reports came on time and doctor explained every detail patiently. Very professional setup.",
    timeAgo: "3 weeks ago",
  },
];

const highlights = [
  "15+ Years of Trusted Practice",
  "4.9 Star Rating (200+ Reviews)",
  "Affordable & Transparent Pricing",
  "Same-Day Appointments Available",
];

export default function ClinicTemplate() {
  const whatsappLink = getWhatsAppLink(
    "Hi! I'd like to book a consultation at Care Clinic with Dr. Sharma."
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-emerald-800 text-lg block">
                  Care Clinic
                </span>
                <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-semibold">
                  Dr. Sharma
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="hidden sm:flex items-center gap-1.5 text-emerald-700 text-sm font-medium hover:text-emerald-800"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <WhatsAppButton
                href={whatsappLink}
                label="Book Visit"
                size="sm"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Doctor Profile Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative max-w-sm mx-auto md:max-w-none">
                <div className="absolute -inset-3 bg-emerald-200/40 rounded-3xl blur-xl" />
                <ImagePlaceholder
                  label="Dr. Sharma Photo"
                  aspectRatio="3/4"
                  icon="👨‍⚕️"
                  className="relative rounded-2xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">4.9</span>
                  <span className="text-xs text-gray-400">(200+)</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  General Physician &amp; Family Doctor
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                  Dr. Sharma
                </h1>
                <p className="text-gray-500 text-lg">
                  MBBS, MD (General Medicine)
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                    <div className="text-3xl font-extrabold text-emerald-600">
                      15+
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                    <div className="text-3xl font-extrabold text-emerald-600">
                      10K+
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      Happy Patients
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-gray-600 text-sm"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  href={whatsappLink}
                  label="Book Appointment"
                  size="lg"
                  className="shadow-xl shadow-green-900/20"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Consultation Timings */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <CalendarCheck className="w-4 h-4" />
                OPD Schedule
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Consultation Timings
              </h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                Walk-in or book your slot in advance via WhatsApp
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {timings.map((slot, i) => (
              <ScrollReveal key={slot.session} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl p-6 text-center border-2 transition-all cursor-default ${
                    slot.available
                      ? "border-emerald-200 bg-emerald-50/50 hover:border-emerald-400 hover:shadow-md"
                      : "border-red-200 bg-red-50/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      slot.available
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    <slot.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {slot.session}
                  </h3>
                  <p
                    className={`text-sm font-semibold ${
                      slot.available ? "text-emerald-700" : "text-red-600"
                    }`}
                  >
                    {slot.time}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-emerald-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <HeartPulse className="w-4 h-4" />
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Our Services
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Comprehensive primary healthcare services for the whole family,
                all under one roof.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-100/80 h-full cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <Star className="w-4 h-4" />
                4.9 out of 5
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Our Patients Say
              </h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                Trusted by hundreds of families in the community
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.1}>
                <div className="relative bg-emerald-50/70 rounded-2xl p-6 h-full border border-emerald-100">
                  <Quote className="w-8 h-8 text-emerald-200 mb-3" />
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-emerald-100">
                    <div className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center shadow-sm">
                      <span className="font-bold text-white text-sm">
                        {review.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">
                        {review.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star
                              key={j}
                              className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-emerald-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <MapPin className="w-4 h-4" />
                Find Us
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Visit Our Clinic
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <ScrollReveal>
              <ImagePlaceholder
                label="Google Maps Location"
                aspectRatio="4/3"
                className="rounded-2xl shadow-md border border-emerald-100 h-full"
                icon="🗺️"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 flex flex-col justify-center space-y-7 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      123 Health Street, Near City Center
                      <br />
                      Saharanpur, Uttar Pradesh 247001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Mon - Sat: 9:00 AM - 8:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <WhatsAppButton
                  href={whatsappLink}
                  label="Get Directions on WhatsApp"
                  size="md"
                  className="self-start mt-2"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-600" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <CalendarCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Book Your Visit Today
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
              Quick and easy appointment booking via WhatsApp. Get a
              consultation with Dr. Sharma at your convenience.
            </p>
            <WhatsAppButton
              href={whatsappLink}
              label="Book on WhatsApp"
              size="lg"
              className="bg-white !text-emerald-700 hover:!bg-emerald-50 shadow-2xl"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <span className="font-bold block">Care Clinic</span>
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">
                    Dr. Sharma
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Quality healthcare with a personal touch. Your trusted
                neighborhood clinic for the whole family.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.slice(0, 4).map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-400" />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-4">
                Timings
              </h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Mon - Sat: 9 AM - 8 PM
                </p>
                <p className="flex items-center gap-2">
                  <CalendarX className="w-3.5 h-3.5 text-red-400" />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-gray-400 text-sm mb-5">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Saharanpur, UP
                </p>
              </div>
              <WhatsAppButton
                href={whatsappLink}
                label="WhatsApp Us"
                size="sm"
              />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Care Clinic. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
