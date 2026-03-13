"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  Heart,
  Baby,
  Smile,
  Eye,
  Users,
  Ear,
  Scissors,
  Activity,
  Phone,
  Clock,
  Siren,
  FlaskConical,
  Pill,
  Truck,
  Droplets,
  ShieldPlus,
  MapPin,
  Menu,
  X,
  Star,
  ChevronRight,
  CheckCircle2,
  Award,
  Building2,
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Departments", "Doctors", "Facilities", "Contact"];

const departments = [
  {
    icon: Heart,
    emoji: "❤️",
    title: "Cardiology",
    description:
      "Advanced cardiac care with ECG, echocardiography, stress tests, and interventional cardiology procedures.",
  },
  {
    icon: Baby,
    emoji: "👶",
    title: "Pediatrics",
    description:
      "Complete child healthcare — neonatal ICU, vaccinations, growth monitoring, and pediatric emergencies.",
  },
  {
    icon: Smile,
    emoji: "🦷",
    title: "Dental",
    description:
      "Full-service dental care from routine cleanings and fillings to orthodontics and oral surgery.",
  },
  {
    icon: Eye,
    emoji: "👁️",
    title: "Ophthalmology",
    description:
      "Comprehensive eye care with cataract surgery, LASIK, glaucoma treatment, and retinal procedures.",
  },
  {
    icon: Users,
    emoji: "🩺",
    title: "Gynecology",
    description:
      "Women's health services including prenatal care, delivery, fertility treatments, and screenings.",
  },
  {
    icon: Ear,
    emoji: "👂",
    title: "ENT",
    description:
      "Ear, nose, and throat treatments — sinus surgery, hearing aids, tonsillectomy, and allergy care.",
  },
  {
    icon: Scissors,
    emoji: "✂️",
    title: "General Surgery",
    description:
      "Minimally invasive and open surgical procedures for hernias, appendectomies, and trauma cases.",
  },
  {
    icon: Activity,
    emoji: "🏃",
    title: "Physiotherapy",
    description:
      "Rehabilitation for post-operative recovery, sports injuries, chronic pain, and mobility restoration.",
  },
];

const doctors = [
  { name: "Dr. Rajesh Verma", specialization: "Cardiologist", experience: "18", degree: "MD, DM Cardiology" },
  { name: "Dr. Priya Sharma", specialization: "Pediatrician", experience: "12", degree: "MD Pediatrics" },
  { name: "Dr. Anil Gupta", specialization: "Orthopedic Surgeon", experience: "22", degree: "MS Orthopedics" },
  { name: "Dr. Meena Kapoor", specialization: "Gynecologist", experience: "15", degree: "MS, DNB OB-GYN" },
];

const facilities = [
  { icon: Siren, title: "24/7 Emergency", description: "Round-the-clock emergency services with rapid response trauma teams." },
  { icon: ShieldPlus, title: "ICU", description: "Multi-bed intensive care unit with advanced life support and monitoring." },
  { icon: FlaskConical, title: "Pathology Lab", description: "In-house NABL-accredited lab with same-day digital reports." },
  { icon: Pill, title: "24hr Pharmacy", description: "Round-the-clock pharmacy stocked with all essential medicines." },
  { icon: Truck, title: "Ambulance", description: "Fleet of GPS-tracked, fully equipped ambulances for rapid transport." },
  { icon: Droplets, title: "Blood Bank", description: "Licensed blood bank with all blood groups and component separation." },
];

const stats = [
  { value: "30+", label: "Years of Service" },
  { value: "150+", label: "Expert Doctors" },
  { value: "50,000+", label: "Patients Yearly" },
  { value: "200+", label: "Beds" },
];

export default function HospitalTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink(
    "Hi! I'd like to book an appointment at City General Hospital."
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                <ShieldPlus className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold text-blue-800 block">
                  City General
                </span>
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest">
                  Hospital
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all font-medium text-sm px-4 py-2 rounded-lg"
                >
                  {link}
                </a>
              ))}
              <a
                href="tel:108"
                className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm"
              >
                <Siren className="w-4 h-4" />
                Emergency: 108
              </a>
            </div>
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
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
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium py-2.5 px-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:108"
              className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-bold mt-2"
            >
              <Siren className="w-4 h-4" />
              Emergency: 108
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span className="text-blue-100 text-sm font-medium">
                    NABH Accredited &bull; Trusted Since 1995
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                  Caring for
                  <span className="block text-blue-200">Your Health</span>
                </h1>
                <p className="text-blue-100/90 text-lg leading-relaxed max-w-lg">
                  State-of-the-art medical facilities with 150+ experienced
                  doctors dedicated to providing comprehensive, compassionate
                  healthcare for you and your family.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Book Appointment"
                    size="lg"
                    className="shadow-2xl shadow-green-900/30"
                  />
                  <a
                    href="#departments"
                    className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    Our Departments
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Hospital Building"
                  aspectRatio="4/3"
                  icon="🏥"
                  className="relative rounded-2xl shadow-2xl border-4 border-white/20 max-w-md mx-auto md:max-w-none"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Stats Bar */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="bg-blue-50/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <Building2 className="w-4 h-4" />
                Our Specialties
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Departments
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                Specialized departments staffed with experienced professionals
                and equipped with the latest medical technology.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map((dept, index) => (
              <ScrollReveal key={dept.title} delay={index * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100/80 h-full cursor-default"
                >
                  <div className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <dept.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {dept.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <Star className="w-4 h-4" />
                Expert Medical Team
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Our Doctors
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                Highly qualified specialists committed to delivering the best
                possible care to every patient.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <ScrollReveal key={doctor.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="relative">
                    <ImagePlaceholder
                      label={doctor.name}
                      aspectRatio="4/5"
                      icon="👨‍⚕️"
                      className="w-full"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-700 font-semibold text-sm mt-0.5">
                      {doctor.specialization}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{doctor.degree}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{doctor.experience} Years</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="bg-blue-50/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <CheckCircle2 className="w-4 h-4" />
                World-Class Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Our Facilities
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                Modern infrastructure and technology ensuring the highest
                standard of medical care and patient comfort.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <ScrollReveal key={facility.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100/80 h-full"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-200">
                    <facility.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                      {facility.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <Siren className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">
                    Medical Emergency?
                  </h2>
                  <p className="text-red-100 text-lg mt-1">
                    Our emergency team is available 24/7 &mdash; do not delay,
                    call now.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:108"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-red-600 rounded-xl text-lg font-extrabold hover:bg-red-50 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call 108
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/40 text-white rounded-xl text-lg font-bold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Skip the queue. Send us a message on WhatsApp and our team will
              schedule your visit within minutes.
            </p>
            <WhatsAppButton
              href={whatsappLink}
              label="Book on WhatsApp"
              size="lg"
              className="shadow-2xl"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <ShieldPlus className="w-6 h-6 text-white" />
                </div>
                <div className="leading-tight">
                  <span className="font-bold block">City General</span>
                  <span className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">
                    Hospital
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing quality healthcare to our community with compassion,
                expertise, and modern medical technology since 1995.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-4 uppercase text-xs tracking-wider">
                Address
              </h4>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <p>
                  123, Hospital Road, Civil Lines,
                  <br />
                  Saharanpur, Uttar Pradesh - 247001
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-4 uppercase text-xs tracking-wider">
                Key Departments
              </h4>
              <ul className="space-y-2.5">
                {departments.slice(0, 5).map((dept) => (
                  <li
                    key={dept.title}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400" />
                    {dept.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-4 uppercase text-xs tracking-wider">
                Contact Us
              </h4>
              <div className="space-y-2 text-gray-400 text-sm mb-5">
                <p className="flex items-center gap-2">
                  <Siren className="w-4 h-4 text-red-400" />
                  Emergency: 108
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Open 24 Hours
                </p>
              </div>
              <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} City General Hospital. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
