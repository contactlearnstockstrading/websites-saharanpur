"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Music,
  Mic2,
  Star,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  CalendarDays,
  Headphones,
} from "lucide-react";

const instruments = [
  { name: "Harmonium", emoji: "🎹", description: "Classical and devotional harmonium for all levels. Learn ragas, bhajans, and film songs.", level: "All Levels" },
  { name: "Tabla", emoji: "🥁", description: "Traditional tabla training with taal theory, compositions, and accompaniment skills.", level: "All Levels" },
  { name: "Guitar", emoji: "🎸", description: "Acoustic and electric guitar — chords, fingerpicking, strumming, and lead techniques.", level: "All Levels" },
  { name: "Keyboard / Piano", emoji: "🎹", description: "Western and Indian keyboard with music theory, sight reading, and performance skills.", level: "All Levels" },
  { name: "Vocal (Classical)", emoji: "🎤", description: "Hindustani classical vocal training — ragas, bandish, taan, alaap, and sargam practice.", level: "All Levels" },
  { name: "Vocal (Light Music)", emoji: "🎙️", description: "Bollywood, ghazal, bhajan, and light vocal training with breathing and mic techniques.", level: "All Levels" },
];

const programs = [
  {
    name: "Foundation Course",
    icon: Music,
    description: "Perfect for beginners. Learn basics of sur, taal, notation, and your chosen instrument.",
    duration: "3 Months",
    tag: "BEGINNER",
  },
  {
    name: "Intermediate Course",
    icon: Headphones,
    description: "Deepen your skills with advanced ragas, compositions, and performance techniques.",
    duration: "6 Months",
    tag: "INTERMEDIATE",
  },
  {
    name: "Performance Ready",
    icon: Mic2,
    description: "Stage performance preparation, recording techniques, and professional musicianship.",
    duration: "1 Year",
    tag: "ADVANCED",
  },
  {
    name: "Exam Preparation",
    icon: Award,
    description: "Preparation for Prayag Sangeet Samiti, Gandharva Mahavidyalaya, and university exams.",
    duration: "As Needed",
    tag: "CERTIFICATION",
  },
];

const schedule = [
  { batch: "Morning Batch", time: "7:00 AM - 9:00 AM", for: "Vocal / Harmonium" },
  { batch: "Afternoon Batch", time: "3:00 PM - 5:00 PM", for: "Guitar / Keyboard" },
  { batch: "Evening Batch", time: "5:30 PM - 7:30 PM", for: "All Instruments" },
  { batch: "Weekend Special", time: "10:00 AM - 1:00 PM", for: "Tabla / Advanced" },
];

const testimonials = [
  {
    name: "Priya Verma",
    initials: "PV",
    rating: 5,
    text: "My daughter started harmonium at age 8 and now performs at school functions. Guruji's patience and method of teaching is outstanding. She passed Prayag Sangeet exam with distinction!",
  },
  {
    name: "Rohit Bansal",
    initials: "RB",
    rating: 5,
    text: "Learnt guitar from absolute scratch. Within 6 months I was playing songs confidently. The classes are fun, well-structured, and the studio has great instruments to practice on.",
  },
  {
    name: "Meera Devi",
    initials: "MD",
    rating: 5,
    text: "At 55, I thought it was too late to learn singing. But Guruji made me believe in myself. Now I sing bhajans at our local mandir. Music is truly healing. Highly recommended!",
  },
];

const pricingPlans = [
  { name: "Individual", price: "2,000", duration: "/month", features: ["1-on-1 sessions", "3 classes per week", "Choose any instrument", "Flexible timing"] },
  { name: "Group Batch", price: "1,200", duration: "/month", features: ["4-6 students", "3 classes per week", "Instrument provided", "Theory included"], popular: true },
  { name: "Home Tuition", price: "3,500", duration: "/month", features: ["Teacher visits home", "3 classes per week", "Personalized curriculum", "Exam preparation"] },
];

export default function MusicTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to enroll for music classes at Sur Sangeet Academy.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-rose-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 to-indigo-600 flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Sur</span>
              <span className="text-white"> Sangeet</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#instruments" className="hover:text-rose-400 transition-colors">Instruments</a>
            <a href="#programs" className="hover:text-rose-400 transition-colors">Programs</a>
            <a href="#pricing" className="hover:text-rose-400 transition-colors">Pricing</a>
            <a href="#reviews" className="hover:text-rose-400 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Join Now" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,63,94,0.1),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold mb-6">
                  <Award className="w-4 h-4" />
                  Prayag Sangeet Samiti Affiliated
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Learn</span>
                  <br />
                  <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    Music
                  </span>
                  <span className="text-white">, Live</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Music
                  </span>
                </h1>
                <p className="text-lg text-white/45 mb-10 max-w-lg leading-relaxed">
                  Learn from a Visharad-certified music teacher with 15+ years of experience.
                  Vocal, harmonium, tabla, guitar, and keyboard classes for all ages in Saharanpur.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Book Free Demo" size="lg" />
                  <a
                    href="#instruments"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-rose-500/30 text-rose-400 rounded-full hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300"
                  >
                    Explore Classes <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/15 to-indigo-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Music Teacher / Studio"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-rose-500/20 relative"
                  icon="🎵"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-rose-500/10 bg-rose-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "1,000+", label: "Students Trained", icon: Users },
              { value: "15+", label: "Years Teaching", icon: Award },
              { value: "6", label: "Instruments", icon: Music },
              { value: "100%", label: "Exam Pass Rate", icon: Star },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-indigo-500/5 flex items-center justify-center border border-rose-500/10">
                    <stat.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-indigo-400 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section id="instruments" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">We Teach</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Instruments & <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Vocals</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Choose your instrument or vocal style. All classes include theory, practical, and performance training.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((inst, i) => (
              <ScrollReveal key={inst.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-rose-500/10 rounded-2xl p-8 hover:border-rose-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/15 to-indigo-500/5 flex items-center justify-center border border-rose-500/10 text-2xl group-hover:from-rose-500/25 group-hover:to-indigo-500/10 transition-colors">
                      {inst.emoji}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-rose-500/50 px-2.5 py-0.5 rounded-md bg-rose-500/10">
                      {inst.level.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{inst.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{inst.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Courses</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Programs</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <ScrollReveal key={program.name} delay={i * 0.1}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-rose-500/10 rounded-2xl p-8 hover:border-rose-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/15 to-indigo-500/5 flex items-center justify-center border border-rose-500/10 group-hover:from-rose-500/25 group-hover:to-indigo-500/10 transition-colors">
                      <program.icon className="w-7 h-7 text-rose-400" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold tracking-wider text-rose-500/50 px-2.5 py-0.5 rounded-md bg-rose-500/10 block mb-1">
                        {program.tag}
                      </span>
                      <span className="text-xs text-white/30">{program.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{program.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{program.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Timetable</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Class <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Schedule</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((slot, i) => (
              <ScrollReveal key={slot.batch} delay={i * 0.08}>
                <div className="flex items-center justify-between bg-gradient-to-r from-white/[0.04] to-transparent border border-rose-500/10 rounded-xl p-5 hover:border-rose-500/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/15 to-indigo-500/5 flex items-center justify-center border border-rose-500/10">
                      <CalendarDays className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{slot.batch}</h3>
                      <p className="text-xs text-white/35">{slot.for}</p>
                    </div>
                  </div>
                  <span className="text-rose-400 font-semibold text-sm">{slot.time}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Fees</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Fee <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Structure</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-b from-rose-500/10 to-indigo-500/5 border-2 border-rose-500/30 scale-105"
                    : "bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 text-white text-xs font-bold tracking-wider">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-rose-300 to-indigo-400 bg-clip-text text-transparent">₹{plan.price}</span>
                    <span className="text-white/30 text-sm ml-1">{plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={getWhatsAppLink(`Hi! I'm interested in the ${plan.name} music plan (₹${plan.price}/month).`)}
                    label="Enroll Now"
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
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Student Love</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                What Students <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-rose-500/10 rounded-2xl p-8 hover:border-rose-500/20 transition-all duration-500">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < review.rating ? "text-rose-400 fill-rose-400" : "text-white/10"}`} />
                    ))}
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
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
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-indigo-700" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="text-5xl mb-6">🎶</div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Start Your Musical Journey
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                  It&apos;s never too early or too late to learn music. Book a free demo class
                  today and discover the musician within you.
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I'd like to book a free demo music class at Sur Sangeet Academy.")}
                  label="Book Free Demo Class"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-rose-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 to-indigo-600 flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">Sur</span> Sangeet
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Learn music from a Visharad-certified teacher. Vocal, harmonium, tabla,
                guitar, and keyboard classes for all ages.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Academy</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-rose-400/60" />
                  <span>7:00 AM - 7:30 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-rose-400/60" />
                  <span>Near Ghanta Ghar, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-rose-400/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Admissions</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                New batches starting every month. Free demo class available. Contact us for details.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-rose-500/10 mt-12 pt-8 text-center text-xs text-white/15">
            &copy; {new Date().getFullYear()} Sur Sangeet Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
