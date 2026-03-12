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
} from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Departments", "Doctors", "Facilities", "Contact"];

const departments = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced cardiac care with state-of-the-art diagnostics, ECG, echocardiography, and interventional procedures.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Complete child healthcare including neonatal care, vaccinations, growth monitoring, and pediatric emergencies.",
  },
  {
    icon: Smile,
    title: "Dental",
    description: "Full-service dental care from routine cleanings and fillings to orthodontics and oral surgery.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Comprehensive eye care with cataract surgery, LASIK, glaucoma treatment, and retinal procedures.",
  },
  {
    icon: Users,
    title: "Gynecology",
    description: "Women's health services including prenatal care, delivery, fertility treatments, and preventive screenings.",
  },
  {
    icon: Ear,
    title: "ENT",
    description: "Ear, nose, and throat treatments including sinus surgery, hearing aids, tonsillectomy, and allergy management.",
  },
  {
    icon: Scissors,
    title: "General Surgery",
    description: "Minimally invasive and open surgical procedures for hernias, appendectomies, gallbladder, and trauma cases.",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description: "Rehabilitation programs for post-operative recovery, sports injuries, chronic pain, and mobility restoration.",
  },
];

const doctors = [
  { name: "Dr. Rajesh Verma", specialization: "Cardiologist", experience: "18 Years Experience" },
  { name: "Dr. Priya Sharma", specialization: "Pediatrician", experience: "12 Years Experience" },
  { name: "Dr. Anil Gupta", specialization: "Orthopedic Surgeon", experience: "22 Years Experience" },
  { name: "Dr. Meena Kapoor", specialization: "Gynecologist", experience: "15 Years Experience" },
];

const facilities = [
  { icon: Siren, title: "24/7 Emergency", description: "Round-the-clock emergency services with rapid response teams." },
  { icon: ShieldPlus, title: "ICU", description: "Multi-bed intensive care unit with advanced life support systems." },
  { icon: FlaskConical, title: "Laboratory", description: "In-house pathology lab with same-day test results available." },
  { icon: Pill, title: "Pharmacy", description: "24-hour pharmacy stocked with all essential medicines and supplies." },
  { icon: Truck, title: "Ambulance", description: "Fleet of fully equipped ambulances for emergency patient transport." },
  { icon: Droplets, title: "Blood Bank", description: "Licensed blood bank with all blood group availability and screening." },
];

export default function HospitalTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink("Hi! I'd like to book an appointment at City General Hospital.");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <ShieldPlus className="w-7 h-7 text-blue-700" />
              <span className="text-xl font-bold text-blue-700">City General Hospital</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-700 transition-colors font-medium text-sm"
                >
                  {link}
                </a>
              ))}
              <a
                href="tel:108"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Emergency: 108
              </a>
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
                className="block text-gray-600 hover:text-blue-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:108"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Emergency: 108
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-blue-200 font-semibold tracking-wide uppercase text-sm">
                  Trusted Healthcare Since 1995
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Caring for Your Health
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
                  State-of-the-art medical facilities with experienced doctors dedicated to providing
                  comprehensive healthcare for you and your family.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Book Appointment"
                    size="lg"
                    className="shadow-xl"
                  />
                  <a
                    href="#departments"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    Our Departments
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <ImagePlaceholder
                label="Hospital Building Photo"
                aspectRatio="4/3"
                icon="🏥"
                className="rounded-2xl shadow-2xl max-w-md mx-auto md:max-w-none border-4 border-white/20"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold uppercase tracking-wide text-sm mb-2">
                Our Specialties
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Departments</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Our hospital houses a wide range of specialized departments, each staffed with experienced
                professionals and equipped with modern technology.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <ScrollReveal key={dept.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-blue-100 h-full"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <dept.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{dept.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold uppercase tracking-wide text-sm mb-2">
                Meet Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Doctors</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Our team of highly qualified and experienced doctors are committed to delivering
                the best possible care to every patient.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <ScrollReveal key={doctor.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden"
                >
                  <ImagePlaceholder
                    label={`${doctor.name} Photo`}
                    aspectRatio="1/1"
                    icon="👨‍⚕️"
                    className="w-full"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-700 font-medium text-sm mt-1">{doctor.specialization}</p>
                    <div className="flex items-center justify-center gap-1 mt-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-center gap-0.5 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold uppercase tracking-wide text-sm mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Facilities</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Equipped with modern infrastructure and technology to provide the highest standard of medical care.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <ScrollReveal key={facility.title} delay={index * 0.1}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-blue-100">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{facility.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-red-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Emergency? Call Now!</h2>
                  <p className="text-red-100 text-lg mt-1">Available 24 hours, 7 days a week</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:108"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full text-lg font-bold hover:bg-red-50 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call 108
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldPlus className="w-6 h-6 text-blue-300" />
                <span className="text-lg font-bold">City General Hospital</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Providing quality healthcare services to our community with compassion, expertise, and modern medical technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-200 mb-4 uppercase text-sm tracking-wide">
                Address
              </h4>
              <div className="flex items-start gap-2 text-blue-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  123, Hospital Road, Civil Lines,
                  <br />
                  Saharanpur, Uttar Pradesh - 247001
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-200 mb-4 uppercase text-sm tracking-wide">
                Departments
              </h4>
              <ul className="space-y-2">
                {departments.slice(0, 5).map((dept) => (
                  <li key={dept.title}>
                    <span className="text-blue-300 text-sm">{dept.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-200 mb-4 uppercase text-sm tracking-wide">
                Contact Us
              </h4>
              <p className="text-blue-300 text-sm mb-1">Emergency: 108</p>
              <p className="text-blue-300 text-sm mb-4">Reception: +91 98765 43210</p>
              <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
            </div>
          </div>
          <div className="border-t border-blue-800 mt-10 pt-6 text-center">
            <p className="text-blue-400 text-sm">
              &copy; {new Date().getFullYear()} City General Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
