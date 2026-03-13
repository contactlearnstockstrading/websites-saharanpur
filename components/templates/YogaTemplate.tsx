"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Leaf,
  Heart,
  Sun,
  Star,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  Wind,
  Flame,
  Sparkles,
  Users,
  Award,
  Timer,
} from "lucide-react";

const yogaStyles = [
  {
    name: "Hatha Yoga",
    icon: Sun,
    description: "Traditional postures and breathing techniques for balance, flexibility, and inner peace.",
    level: "All Levels",
    emoji: "🧘",
  },
  {
    name: "Ashtanga Yoga",
    icon: Flame,
    description: "Dynamic and physically demanding practice with a set sequence of postures for strength.",
    level: "Intermediate",
    emoji: "🔥",
  },
  {
    name: "Pranayama & Meditation",
    icon: Wind,
    description: "Ancient breathing exercises and guided meditation for mental clarity and stress relief.",
    level: "All Levels",
    emoji: "🌬️",
  },
  {
    name: "Power Yoga",
    icon: Sparkles,
    description: "High-intensity yoga combining strength training and flexibility for fitness enthusiasts.",
    level: "Advanced",
    emoji: "💪",
  },
  {
    name: "Therapeutic Yoga",
    icon: Heart,
    description: "Gentle yoga for chronic pain, back issues, arthritis, diabetes, and stress management.",
    level: "Beginner",
    emoji: "💚",
  },
  {
    name: "Kids Yoga",
    icon: Star,
    description: "Fun, engaging yoga sessions designed for children to improve focus and flexibility.",
    level: "Ages 5-15",
    emoji: "🌟",
  },
];

const schedule = [
  { session: "Early Morning", time: "5:30 AM - 7:00 AM", type: "Hatha + Pranayama", spots: "20 spots" },
  { session: "Morning Batch", time: "7:30 AM - 9:00 AM", type: "Power Yoga / Ashtanga", spots: "15 spots" },
  { session: "Ladies Special", time: "10:00 AM - 11:30 AM", type: "Gentle Yoga", spots: "15 spots" },
  { session: "Evening Batch", time: "5:30 PM - 7:00 PM", type: "Mixed / Therapeutic", spots: "20 spots" },
  { session: "Weekend Workshop", time: "8:00 AM - 10:00 AM", type: "Special Sessions", spots: "25 spots" },
];

const benefits = [
  "Reduce stress & anxiety",
  "Improve flexibility",
  "Build core strength",
  "Better sleep quality",
  "Control blood pressure",
  "Boost immunity",
  "Weight management",
  "Mental clarity",
];

const testimonials = [
  {
    name: "Anita Sharma",
    initials: "AS",
    rating: 5,
    text: "My chronic back pain is gone after 3 months of therapeutic yoga. The instructor is extremely knowledgeable about anatomy and adjusts poses for each person.",
  },
  {
    name: "Deepak Gupta",
    initials: "DG",
    rating: 5,
    text: "Lost 12 kgs in 6 months with power yoga. The morning batch is energizing and sets the tone for the entire day. Best decision I ever made.",
  },
  {
    name: "Kavita Jain",
    initials: "KJ",
    rating: 5,
    text: "The pranayama sessions have completely transformed my anxiety. I feel calmer, more focused, and sleep better. Beautiful, peaceful studio environment.",
  },
];

const pricingPlans = [
  { name: "Monthly", price: "1,500", duration: "/month", features: ["All regular classes", "Choose any 1 batch", "Basic guidance"] },
  { name: "Quarterly", price: "3,999", duration: "/3 months", features: ["All regular classes", "Any 2 batches", "Personalized plan", "Diet guidance"], popular: true },
  { name: "Annual", price: "12,999", duration: "/year", features: ["Unlimited classes", "All batches access", "Personal mentoring", "Diet plan", "Workshops free"] },
];

export default function YogaTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to join yoga classes at Ananda Yoga Studio.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Ananda</span>
              <span className="text-white"> Yoga</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#classes" className="hover:text-emerald-400 transition-colors">Classes</a>
            <a href="#schedule" className="hover:text-emerald-400 transition-colors">Schedule</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Join Now" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(52,211,153,0.1),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,184,166,0.06),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Certified Yoga Instructor | 10+ Years
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Find Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                    Inner Peace
                  </span>
                </h1>
                <p className="text-lg text-white/45 mb-8 max-w-lg leading-relaxed">
                  Transform your mind, body, and soul with authentic yoga. From beginners to advanced
                  practitioners, find the perfect class at Saharanpur&apos;s most serene yoga studio.
                </p>

                {/* Benefits pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {benefits.slice(0, 4).map((benefit) => (
                    <span key={benefit} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/10 text-xs text-emerald-400/80">
                      <CheckCircle2 className="w-3 h-3" /> {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Book Free Trial" size="lg" />
                  <a
                    href="#classes"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-emerald-500/30 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300"
                  >
                    Explore Classes <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/15 to-teal-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Yoga Studio / Instructor"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-emerald-500/20 relative"
                  icon="🧘"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-emerald-500/10 bg-emerald-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Active Students", icon: Users },
              { value: "10+", label: "Years Experience", icon: Award },
              { value: "6", label: "Yoga Styles", icon: Leaf },
              { value: "4.9★", label: "Google Rating", icon: Star },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/5 flex items-center justify-center border border-emerald-500/10">
                    <stat.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Classes */}
      <section id="classes" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Classes</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Yoga <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Styles</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Choose from a variety of yoga styles suited to your goals and experience level.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaStyles.map((style, i) => (
              <ScrollReveal key={style.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-emerald-500/10 rounded-2xl p-8 hover:border-emerald-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-teal-500/5 flex items-center justify-center border border-emerald-500/10 text-2xl group-hover:from-emerald-500/25 group-hover:to-teal-500/10 transition-colors">
                      {style.emoji}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-emerald-500/60 px-2.5 py-0.5 rounded-md bg-emerald-500/10">
                      {style.level.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{style.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{style.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Timetable</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Class <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Schedule</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((slot, i) => (
              <ScrollReveal key={slot.session} delay={i * 0.08}>
                <div className="flex items-center justify-between bg-gradient-to-r from-white/[0.04] to-transparent border border-emerald-500/10 rounded-xl p-5 hover:border-emerald-500/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/5 flex items-center justify-center border border-emerald-500/10">
                      <Timer className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{slot.session}</h3>
                      <p className="text-xs text-white/35">{slot.type} &middot; {slot.spots}</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold text-sm">{slot.time}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Plans</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Membership <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Plans</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-b from-emerald-500/10 to-teal-500/5 border-2 border-emerald-500/30 scale-105"
                    : "bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold tracking-wider">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">₹{plan.price}</span>
                    <span className="text-white/30 text-sm ml-1">{plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={getWhatsAppLink(`Hi! I'm interested in the ${plan.name} yoga plan (₹${plan.price}).`)}
                    label="Join Now"
                    size="md"
                    className="w-full justify-center"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Transformations</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Student <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Stories</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-emerald-500/10 rounded-2xl p-8 hover:border-emerald-500/20 transition-all duration-500">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < review.rating ? "text-emerald-400 fill-emerald-400" : "text-white/10"}`} />
                    ))}
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <span className="font-semibold text-white text-sm">{review.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="text-5xl mb-6">🕉️</div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Your Journey to Wellness Starts Here
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                  Book a free trial class today. No experience needed — just bring a mat and
                  an open mind. Transform your health, one breath at a time.
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I'd like to book a free trial yoga class.")}
                  label="Book Free Trial Class"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-emerald-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Ananda</span> Yoga
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Authentic yoga practice in a serene environment. Certified instructors,
                small batches, and a focus on holistic wellness.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Studio</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400/60" />
                  <span>5:30 AM - 7:00 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400/60" />
                  <span>Near Devi Mandir, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Start Today</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                First class is free! Join our community of 500+ practitioners and begin your wellness journey.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-emerald-500/10 mt-12 pt-8 text-center text-xs text-white/15">
            &copy; {new Date().getFullYear()} Ananda Yoga Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
