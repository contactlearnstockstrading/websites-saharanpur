"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Phone,
  Star,
  MessageCircle,
  Stethoscope,
  Shield,
  Syringe,
  Activity,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink, getWhatsAppLinkForTemplate } from "@/lib/whatsapp";

const timings = [
  { session: "Morning", time: "9:00 AM - 12:00 PM", icon: "🌅", available: true },
  { session: "Afternoon", time: "2:00 PM - 5:00 PM", icon: "☀️", available: true },
  { session: "Evening", time: "6:00 PM - 8:00 PM", icon: "🌆", available: true },
  { session: "Sunday", time: "Closed", icon: "📅", available: false },
];

const services = [
  { icon: Stethoscope, name: "General Consultation", description: "Comprehensive health assessment and diagnosis for all age groups." },
  { icon: HeartPulse, name: "Health Checkup", description: "Complete body checkup packages with detailed reports and analysis." },
  { icon: Syringe, name: "Vaccination", description: "All essential vaccines for children and adults as per schedule." },
  { icon: Activity, name: "Chronic Disease Management", description: "Long-term care for diabetes, hypertension, thyroid, and more." },
  { icon: Shield, name: "Minor Procedures", description: "Wound care, suturing, abscess drainage, and minor surgeries." },
  { icon: FlaskConical, name: "Lab Tests", description: "On-site sample collection with quick and accurate test results." },
];

const reviews = [
  { name: "Rajesh K.", initials: "RK", rating: 5, text: "Dr. Sharma is very thorough and patient. He explains everything clearly and takes time to listen. Highly recommended!" },
  { name: "Priya M.", initials: "PM", rating: 5, text: "Best clinic in Saharanpur. Clean, hygienic, and the staff is very friendly. Never had to wait too long." },
  { name: "Amit S.", initials: "AS", rating: 4, text: "Great experience with health checkup. Reports were delivered on time and doctor explained everything in detail." },
];

export default function ClinicTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-emerald-800 text-lg">
                Care Clinic
              </span>
            </div>
            <WhatsAppButton
              href={getWhatsAppLinkForTemplate("Clinic")}
              label="Book Visit"
              size="sm"
            />
          </div>
        </div>
      </nav>

      {/* Doctor Profile Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder
                label="Add Doctor Photo"
                aspectRatio="3/4"
                className="max-w-sm mx-auto rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-body font-medium rounded-full mb-4">
                General Physician
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-3">
                Dr. Sharma
              </h1>
              <p className="text-lg text-gray-500 font-body mb-6">
                MBBS, MD (Medicine)
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-heading font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-500 font-body">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-heading font-bold text-emerald-600">4.9</span>
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="text-sm text-gray-500 font-body">200+ Reviews</div>
                </div>
              </div>

              <WhatsAppButton
                href={getWhatsAppLinkForTemplate("Clinic")}
                label="Book Appointment"
                size="lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Timings */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-10">
              Consultation Timings
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timings.map((slot, i) => (
              <ScrollReveal key={slot.session} delay={i * 0.1}>
                <div
                  className={`rounded-xl p-6 text-center border-2 transition-all ${
                    slot.available
                      ? "border-emerald-200 bg-emerald-50 hover:border-emerald-300"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="text-3xl mb-3">{slot.icon}</div>
                  <h3 className="font-heading font-bold text-gray-900 mb-1">
                    {slot.session}
                  </h3>
                  <p
                    className={`font-body text-sm ${
                      slot.available ? "text-emerald-700" : "text-red-600"
                    }`}
                  >
                    {slot.time}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-10">
              Services Offered
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-10">
              Patient Reviews
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.1}>
                <div className="bg-emerald-50 rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center">
                      <span className="font-heading font-bold text-emerald-700 text-sm">
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gray-900">
                        {review.name}
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-10">
              Visit Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <ImagePlaceholder
                label="Add Google Maps Embed"
                aspectRatio="4/3"
                className="rounded-xl"
                icon="🗺️"
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-500 font-body text-sm">
                      123 Health Street, Near City Center<br />
                      Saharanpur, UP 247001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-500 font-body text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-500 font-body text-sm">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-emerald-100 font-body text-lg mb-8">
              Quick and easy booking via WhatsApp. Get a consultation with Dr. Sharma.
            </p>
            <WhatsAppButton
              href={getWhatsAppLinkForTemplate("Clinic")}
              label="Book on WhatsApp"
              size="lg"
              className="bg-white !text-emerald-700 hover:!bg-emerald-50"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-bold text-lg">Care Clinic</span>
              </div>
              <p className="text-gray-400 font-body text-sm">
                Quality healthcare with a personal touch. Your trusted neighborhood clinic.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">
                Timings
              </h3>
              <p className="text-gray-400 font-body text-sm">Mon - Sat: 9 AM - 8 PM</p>
              <p className="text-gray-400 font-body text-sm">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">
                Contact
              </h3>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-body text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 font-body text-sm">
              &copy; {new Date().getFullYear()} Care Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
