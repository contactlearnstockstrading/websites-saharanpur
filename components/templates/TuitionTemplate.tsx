"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  GraduationCap,
  Star,
  Award,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  Brain,
  Target,
  Lightbulb,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

const subjects = [
  { name: "Mathematics", emoji: "📐", grades: "6th - 12th", color: "from-blue-500 to-indigo-600" },
  { name: "Science (PCM/PCB)", emoji: "🔬", grades: "6th - 12th", color: "from-emerald-500 to-green-600" },
  { name: "English", emoji: "📝", grades: "1st - 12th", color: "from-purple-500 to-violet-600" },
  { name: "Hindi", emoji: "📖", grades: "1st - 12th", color: "from-orange-500 to-red-600" },
  { name: "Social Studies", emoji: "🌍", grades: "6th - 10th", color: "from-amber-500 to-orange-600" },
  { name: "Computer Science", emoji: "💻", grades: "8th - 12th", color: "from-cyan-500 to-blue-600" },
];

const programs = [
  {
    name: "Board Exam Prep",
    icon: GraduationCap,
    description: "Intensive preparation for CBSE, ICSE, and UP Board exams with previous year paper practice.",
    tag: "10th & 12th",
  },
  {
    name: "Competitive Exams",
    icon: Target,
    description: "Foundation and advanced courses for JEE, NEET, NDA, and other entrance exams.",
    tag: "JEE/NEET",
  },
  {
    name: "Foundation Course",
    icon: Brain,
    description: "Build strong fundamentals from Class 6 onwards with concept-based learning approach.",
    tag: "CLASS 6-9",
  },
  {
    name: "Doubt Sessions",
    icon: Lightbulb,
    description: "One-on-one doubt clearing sessions with teachers. Available daily after regular classes.",
    tag: "1-ON-1",
  },
];

const results = [
  { value: "98%", label: "Board Pass Rate" },
  { value: "50+", label: "Students Scored 90%+" },
  { value: "15+", label: "Years Teaching" },
  { value: "2,000+", label: "Students Taught" },
];

const testimonials = [
  {
    name: "Riya Agarwal",
    initials: "RA",
    rating: 5,
    text: "Scored 96% in 12th board thanks to Bright Minds. The teachers explain concepts so clearly. Best coaching in Saharanpur for PCM students.",
    result: "96% in 12th CBSE",
  },
  {
    name: "Amit Kumar",
    initials: "AK",
    rating: 5,
    text: "My son's math improved from 60% to 92% in just 6 months. The personal attention each student gets is remarkable. Highly recommended!",
    result: "92% in Mathematics",
  },
  {
    name: "Sneha Gupta",
    initials: "SG",
    rating: 5,
    text: "Got into NIT Kurukshetra with JEE Mains rank of 15,000. The competitive exam batch is excellent. Thank you Bright Minds!",
    result: "JEE Mains - AIR 15K",
  },
];

const batchTimings = [
  { batch: "Morning Batch", time: "6:00 AM - 8:00 AM", for: "Class 11-12 / JEE / NEET" },
  { batch: "School Batch", time: "3:00 PM - 5:00 PM", for: "Class 6-10" },
  { batch: "Evening Batch", time: "5:30 PM - 7:30 PM", for: "Class 11-12 Board" },
  { batch: "Weekend Batch", time: "9:00 AM - 1:00 PM", for: "Doubt / Test Series" },
];

export default function TuitionTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to enroll my child at Bright Minds Academy.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-orange-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Bright</span>
              <span className="text-white"> Minds</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#subjects" className="hover:text-orange-400 transition-colors">Subjects</a>
            <a href="#programs" className="hover:text-orange-400 transition-colors">Programs</a>
            <a href="#timings" className="hover:text-orange-400 transition-colors">Timings</a>
            <a href="#results" className="hover:text-orange-400 transition-colors">Results</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Enroll Now" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,146,60,0.12),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                  <Award className="w-4 h-4" />
                  Saharanpur&apos;s #1 Coaching Institute
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Where</span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Toppers</span>
                  <br />
                  <span className="text-white">Are Made</span>
                </h1>
                <p className="text-lg text-white/45 mb-10 max-w-lg leading-relaxed">
                  Expert coaching for Class 6-12, Board exams, JEE, and NEET. Small batch sizes,
                  personal attention, and a proven track record of results since 2010.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Enroll Now" size="lg" />
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-orange-500/30 text-orange-400 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    View Programs <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/15 to-amber-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Classroom / Students"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-orange-500/20 relative"
                  icon="📚"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-orange-500/10 bg-orange-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="text-center py-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-sm text-white/40 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange-400/70 font-semibold uppercase tracking-widest text-sm mb-3">We Teach</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Subjects <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Offered</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => (
              <ScrollReveal key={subject.name} delay={i * 0.08}>
                <div className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/25 transition-all duration-500 hover:-translate-y-1 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-2xl shrink-0`}>
                    {subject.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{subject.name}</h3>
                    <p className="text-sm text-white/35">{subject.grades}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Courses</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Programs</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <ScrollReveal key={program.name} delay={i * 0.1}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-orange-500/10 rounded-2xl p-8 hover:border-orange-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-orange-500/10 text-orange-400 text-[10px] font-bold tracking-wider">
                    {program.tag}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-500/5 flex items-center justify-center border border-orange-500/10 mb-6 group-hover:from-orange-500/25 group-hover:to-amber-500/10 transition-colors">
                    <program.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{program.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{program.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section id="timings" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Schedule</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Batch <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Timings</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {batchTimings.map((batch, i) => (
              <ScrollReveal key={batch.batch} delay={i * 0.1}>
                <div className="flex items-center justify-between bg-gradient-to-r from-white/[0.04] to-transparent border border-orange-500/10 rounded-xl p-5 hover:border-orange-500/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/15 to-amber-500/5 flex items-center justify-center border border-orange-500/10">
                      <CalendarDays className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{batch.batch}</h3>
                      <p className="text-xs text-white/35">{batch.for}</p>
                    </div>
                  </div>
                  <span className="text-orange-400 font-semibold text-sm">{batch.time}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-24 bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Success Stories</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Student <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Results</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-orange-500/10 rounded-2xl p-8 hover:border-orange-500/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} className={`w-4 h-4 ${si < review.rating ? "text-orange-400 fill-orange-400" : "text-white/10"}`} />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-orange-500/60 px-2 py-0.5 rounded bg-orange-500/10">
                      {review.result}
                    </span>
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <div>
                      <span className="font-semibold text-white text-sm">{review.name}</span>
                      <div className="flex items-center gap-1 text-xs text-orange-400/50">
                        <BadgeCheck className="w-3 h-3" /> Verified Student
                      </div>
                    </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
                  New Batch Starting Soon!
                </h2>
                <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
                  Limited seats available. Enroll today for our upcoming batch and give your
                  child the best education. Free demo class available!
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I'd like to book a free demo class at Bright Minds Academy.")}
                  label="Book Free Demo Class"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Bright</span> Minds
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Saharanpur&apos;s most trusted coaching institute. Expert faculty, proven results,
                and personal attention for every student.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Institute</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-400/60" />
                  <span>6:00 AM - 7:30 PM (Mon - Sat)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-orange-400/60" />
                  <span>Near Chowk, Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-400/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Admissions Open</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                New batch starting soon! Limited seats. Contact us for admission details and fee structure.
              </p>
              <WhatsAppButton href={whatsAppLink} label="Enquire Now" size="md" />
            </div>
          </div>
          <div className="border-t border-orange-500/10 mt-12 pt-8 text-center text-xs text-white/15">
            &copy; {new Date().getFullYear()} Bright Minds Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
