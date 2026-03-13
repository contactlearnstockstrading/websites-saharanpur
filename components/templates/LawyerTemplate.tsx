"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Scale,
  Shield,
  FileText,
  Users,
  Award,
  Briefcase,
  Clock,
  Phone,
  MapPin,
  ChevronRight,
  Gavel,
  CheckCircle2,
  Star,
  Building2,
  Landmark,
  HandshakeIcon,
} from "lucide-react";

const practiceAreas = [
  {
    name: "Criminal Defense",
    icon: Gavel,
    description: "Expert defense in criminal cases including bail, FIR quashing, and trial representation.",
    cases: "500+",
  },
  {
    name: "Property & Real Estate",
    icon: Building2,
    description: "Property disputes, title verification, registry, mutation, and land acquisition matters.",
    cases: "800+",
  },
  {
    name: "Family Law",
    icon: Users,
    description: "Divorce, custody, maintenance, domestic violence, and matrimonial disputes handled sensitively.",
    cases: "400+",
  },
  {
    name: "Civil Litigation",
    icon: FileText,
    description: "Recovery suits, injunctions, specific performance, and all types of civil disputes.",
    cases: "600+",
  },
  {
    name: "Business & Corporate",
    icon: Briefcase,
    description: "Company registration, GST, contracts, partnerships, and commercial disputes.",
    cases: "300+",
  },
  {
    name: "Constitutional Law",
    icon: Landmark,
    description: "Writ petitions, fundamental rights, PIL, and constitutional remedies in High Court.",
    cases: "150+",
  },
];

const achievements = [
  { value: "2,500+", label: "Cases Handled", icon: FileText },
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "95%", label: "Success Rate", icon: CheckCircle2 },
  { value: "1,000+", label: "Happy Clients", icon: Users },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    initials: "RS",
    rating: 5,
    text: "Won my property dispute case that was pending for 8 years. The legal strategy was brilliant and the team kept me informed at every step.",
    case: "Property Dispute",
  },
  {
    name: "Priya Gupta",
    initials: "PG",
    rating: 5,
    text: "Handled my divorce case with great sensitivity and professionalism. Got favorable custody arrangement. Highly recommended for family matters.",
    case: "Family Law",
  },
  {
    name: "Amit Verma",
    initials: "AV",
    rating: 5,
    text: "Excellent criminal defense. Got bail within 24 hours and eventually the case was quashed. Very knowledgeable about UP courts and procedures.",
    case: "Criminal Defense",
  },
];

const processSteps = [
  { step: "01", title: "Free Consultation", description: "Discuss your case on WhatsApp or visit our office for a confidential consultation." },
  { step: "02", title: "Case Analysis", description: "We study your documents, research precedents, and prepare a winning strategy." },
  { step: "03", title: "Court Representation", description: "Our advocates represent you in court with strong arguments and evidence." },
  { step: "04", title: "Resolution", description: "We work tirelessly until your matter is resolved in your favor." },
];

export default function LawyerTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I need legal consultation regarding my case.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-amber-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wide text-white">Advocate</span>
              <span className="text-lg font-bold tracking-wide text-amber-500"> Sharma & Associates</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#practice" className="hover:text-amber-400 transition-colors">Practice Areas</a>
            <a href="#process" className="hover:text-amber-400 transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Free Consult" size="sm" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,119,6,0.1),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(180,83,9,0.06),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 border border-amber-600/20 text-amber-400 text-sm font-semibold mb-6">
                  <Shield className="w-4 h-4" />
                  Bar Council Registered | 20+ Years
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Justice</span>{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Delivered</span>
                  <br />
                  <span className="text-white">With Integrity</span>
                </h1>
                <p className="text-lg text-white/45 mb-10 max-w-lg leading-relaxed">
                  Saharanpur&apos;s most trusted legal firm. Expert advocates for criminal, civil,
                  property, family law, and corporate matters across all courts in UP.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Free Consultation" size="lg" />
                  <a
                    href="#practice"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-amber-600/30 text-amber-400 rounded-full hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300"
                  >
                    Practice Areas <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/15 to-amber-800/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Advocate Portrait / Office"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-amber-600/20 relative"
                  icon="⚖️"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-amber-700/10 bg-amber-600/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600/15 to-amber-700/5 flex items-center justify-center border border-amber-600/10">
                    <stat.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Expertise</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Practice <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Areas</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Comprehensive legal services across all major areas of law in District, High Court, and Tribunals.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => (
              <ScrollReveal key={area.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-amber-700/10 rounded-2xl p-8 hover:border-amber-600/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600/15 to-amber-700/5 flex items-center justify-center border border-amber-600/10 group-hover:from-amber-600/25 group-hover:to-amber-700/10 transition-colors">
                      <area.icon className="w-7 h-7 text-amber-500" />
                    </div>
                    <span className="text-xs font-bold text-amber-500/50 tracking-wider">{area.cases} CASES</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{area.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{area.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-gradient-to-b from-transparent via-amber-600/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400/70 font-semibold uppercase tracking-widest text-sm mb-3">How We Work</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Process</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-b from-amber-500/30 to-amber-600/5 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 text-white/90 text-sm font-semibold mb-6">
                  <HandshakeIcon className="w-4 h-4" />
                  First Consultation is Free
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Need Legal Help?
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
                  Don&apos;t fight your legal battles alone. Get expert legal advice from experienced
                  advocates. Contact us on WhatsApp for a free case evaluation.
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I need urgent legal consultation.")}
                  label="Get Free Legal Advice"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Client Voices</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Client <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Testimonials</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-amber-700/10 rounded-2xl p-8 hover:border-amber-600/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-4 h-4 ${si < review.rating ? "text-amber-400 fill-amber-400" : "text-white/10"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-amber-500/50 px-2 py-0.5 rounded bg-amber-500/10">
                      {review.case.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold text-sm">
                      {review.initials}
                    </div>
                    <div>
                      <span className="font-semibold text-white text-sm">{review.name}</span>
                      <div className="flex items-center gap-1 text-xs text-amber-400/50">
                        <CheckCircle2 className="w-3 h-3" /> Verified Client
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-amber-700/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Sharma & Associates
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-3">
                Experienced legal professionals providing expert advocacy in criminal, civil,
                property, family, and corporate law.
              </p>
              <p className="text-amber-500/30 text-xs">Bar Council of UP | Reg. No. UP/XXXX/XXXX</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Chamber Info</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-500/60" />
                  <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-amber-500/60" />
                  <span>Near District Court, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-500/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Get Legal Help</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                Facing a legal issue? Contact us for a free initial consultation and case evaluation.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-amber-700/10 mt-12 pt-8">
            <p className="text-xs text-white/15 text-center">
              &copy; {new Date().getFullYear()} Sharma & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
