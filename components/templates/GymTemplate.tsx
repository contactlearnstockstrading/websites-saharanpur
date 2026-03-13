"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Dumbbell,
  Flame,
  Heart,
  Timer,
  Users,
  Award,
  Star,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  Zap,
  Target,
} from "lucide-react";

const programs = [
  { name: "Weight Training", icon: Dumbbell, description: "Build muscle and strength with guided weight training using premium equipment.", tag: "POPULAR", emoji: "💪" },
  { name: "Cardio & HIIT", icon: Flame, description: "Burn calories fast with high-intensity interval training and cardio sessions.", tag: "FAT LOSS", emoji: "🔥" },
  { name: "CrossFit", icon: Zap, description: "Functional fitness combining strength, agility, and endurance workouts.", tag: "INTENSE", emoji: "⚡" },
  { name: "Personal Training", icon: Target, description: "One-on-one sessions with certified trainers tailored to your goals.", tag: "1-ON-1", emoji: "🎯" },
  { name: "Zumba / Aerobics", icon: Heart, description: "Fun group classes for weight loss with dance-based cardio workouts.", tag: "GROUP", emoji: "💃" },
  { name: "Diet & Nutrition", icon: Award, description: "Personalized diet plans by certified nutritionists to complement your training.", tag: "INCLUDED", emoji: "🥗" },
];

const schedule = [
  { batch: "Morning Batch", time: "5:00 AM - 7:00 AM", for: "All Programs" },
  { batch: "Ladies Special", time: "10:00 AM - 12:00 PM", for: "Zumba / Aerobics / Weight" },
  { batch: "Evening Batch", time: "5:00 PM - 9:00 PM", for: "All Programs" },
  { batch: "Weekend Batch", time: "7:00 AM - 10:00 AM", for: "CrossFit / HIIT" },
];

const pricingPlans = [
  { name: "Monthly", price: "1,500", duration: "/month", features: ["Full gym access", "All equipment", "Locker facility", "Basic guidance"] },
  { name: "Quarterly", price: "3,999", duration: "/3 months", features: ["Full gym access", "Personal trainer (2x/week)", "Diet plan", "Body tracking"], popular: true },
  { name: "Annual", price: "11,999", duration: "/year", features: ["Unlimited access", "Personal trainer (daily)", "Custom diet plan", "Supplements guidance", "Free Zumba classes"] },
];

const testimonials = [
  {
    name: "Vikram Singh",
    initials: "VS",
    rating: 5,
    text: "Lost 15 kgs in 4 months! The trainers here are very knowledgeable and motivating. Best gym in Saharanpur without a doubt. Equipment is top-notch.",
  },
  {
    name: "Neha Agarwal",
    initials: "NA",
    rating: 5,
    text: "The ladies batch is amazing. Zumba classes are so fun and the environment is very comfortable. I've been coming here for a year and love every session.",
  },
  {
    name: "Rahul Gupta",
    initials: "RG",
    rating: 5,
    text: "Went from skinny to fit in 6 months. The personal training program is worth every rupee. Clean gym, great machines, and no overcrowding.",
  },
];

export default function GymTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to join Iron Fortress Gym.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-red-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Iron</span>
              <span className="text-white"> Fortress</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#programs" className="hover:text-red-400 transition-colors">Programs</a>
            <a href="#schedule" className="hover:text-red-400 transition-colors">Schedule</a>
            <a href="#pricing" className="hover:text-red-400 transition-colors">Pricing</a>
            <a href="#reviews" className="hover:text-red-400 transition-colors">Reviews</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Join Now" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(239,68,68,0.12),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-6">
                  <Flame className="w-4 h-4" />
                  Saharanpur&apos;s Premium Fitness Center
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Transform</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Your Body</span>
                </h1>
                <p className="text-lg text-white/45 mb-10 max-w-lg leading-relaxed">
                  State-of-the-art equipment, certified trainers, and personalized programs. Whether you want to lose weight, build muscle, or stay fit — we&apos;ve got you covered.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Start Free Trial" size="lg" />
                  <a href="#programs" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-red-500/30 text-red-400 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                    View Programs <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/15 to-orange-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder label="Gym Interior" aspectRatio="4/3" className="rounded-2xl border border-red-500/20 relative" icon="🏋️" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-red-500/10 bg-red-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Active Members", icon: Users },
              { value: "5+", label: "Certified Trainers", icon: Award },
              { value: "50+", label: "Equipment Machines", icon: Dumbbell },
              { value: "4.8★", label: "Google Rating", icon: Star },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/15 to-orange-500/5 flex items-center justify-center border border-red-500/10">
                    <stat.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-red-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Train Hard</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Programs</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <ScrollReveal key={program.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-red-500/10 rounded-2xl p-8 hover:border-red-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-red-500/10 text-red-400 text-[10px] font-bold tracking-wider">{program.tag}</div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/15 to-orange-500/5 flex items-center justify-center border border-red-500/10 text-2xl mb-6">{program.emoji}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{program.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{program.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 bg-gradient-to-b from-transparent via-red-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-red-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Timetable</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Gym <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Schedule</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((slot, i) => (
              <ScrollReveal key={slot.batch} delay={i * 0.08}>
                <div className="flex items-center justify-between bg-gradient-to-r from-white/[0.04] to-transparent border border-red-500/10 rounded-xl p-5 hover:border-red-500/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/15 to-orange-500/5 flex items-center justify-center border border-red-500/10">
                      <Timer className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{slot.batch}</h3>
                      <p className="text-xs text-white/35">{slot.for}</p>
                    </div>
                  </div>
                  <span className="text-red-400 font-semibold text-sm">{slot.time}</span>
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
              <span className="inline-block text-red-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Membership</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Choose Your <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Plan</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${plan.popular ? "bg-gradient-to-b from-red-500/10 to-orange-500/5 border-2 border-red-500/30 scale-105" : "bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10"}`}>
                  {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold tracking-wider">BEST VALUE</div>}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent">₹{plan.price}</span>
                    <span className="text-white/30 text-sm ml-1">{plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton href={getWhatsAppLink(`Hi! I'm interested in the ${plan.name} gym plan (₹${plan.price}).`)} label="Join Now" size="md" className="w-full justify-center" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-transparent via-red-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-red-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Transformations</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Member <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Reviews</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-red-500/10 rounded-2xl p-8 hover:border-red-500/20 transition-all duration-500">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < review.rating ? "text-red-400 fill-red-400" : "text-white/10"}`} />
                    ))}
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">{review.initials}</div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Start Your Transformation Today</h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free 3-day trial pass. No commitment, no pressure — just come and experience the best gym in Saharanpur.</p>
                <WhatsAppButton href={getWhatsAppLink("Hi! I'd like a free trial at Iron Fortress Gym.")} label="Get Free Trial Pass" size="lg" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center"><Dumbbell className="w-5 h-5 text-white" /></div>
                <span className="text-lg font-bold"><span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Iron</span> Fortress</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">Saharanpur&apos;s premium gym with world-class equipment, certified trainers, and a motivating environment for all fitness levels.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Gym Hours</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-red-400/60" /><span>5:00 AM - 9:00 PM (Mon - Sat)</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-red-400/60" /><span>Near Clock Tower, Saharanpur, UP</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-red-400/60" /><span>+91 98765 43210</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Join Today</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">Walk in for a free trial or contact us on WhatsApp to get started.</p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-red-500/10 mt-12 pt-8 text-center text-xs text-white/15">&copy; {new Date().getFullYear()} Iron Fortress Gym. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
