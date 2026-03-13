"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Code2,
  Globe,
  Smartphone,
  Rocket,
  Palette,
  ShieldCheck,
  Zap,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  Search,
  MonitorSmartphone,
  Server,
  Layers,
} from "lucide-react";

const services = [
  {
    name: "Website Design",
    icon: Palette,
    description: "Stunning, responsive websites that look great on every device and convert visitors to customers.",
    tag: "POPULAR",
  },
  {
    name: "E-Commerce",
    icon: Globe,
    description: "Full-featured online stores with payment integration, inventory management, and order tracking.",
    tag: "PREMIUM",
  },
  {
    name: "Mobile Apps",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps for iOS and Android that your customers will love.",
    tag: "ADVANCED",
  },
  {
    name: "SEO & Marketing",
    icon: Search,
    description: "Get found on Google. On-page SEO, Google My Business, and digital marketing to grow your reach.",
    tag: "GROWTH",
  },
  {
    name: "Web Applications",
    icon: Layers,
    description: "Custom web apps for inventory, billing, CRM, and any business process automation you need.",
    tag: "CUSTOM",
  },
  {
    name: "Hosting & Support",
    icon: Server,
    description: "Fast, secure hosting with SSL, daily backups, and ongoing maintenance and support.",
    tag: "24/7",
  },
];

const portfolio = [
  { name: "Sweet Corner Website", category: "E-Commerce", emoji: "🍬" },
  { name: "Dr. Gupta Clinic", category: "Healthcare", emoji: "🏥" },
  { name: "FitLife Gym App", category: "Mobile App", emoji: "💪" },
  { name: "Sharma Electronics", category: "Business Website", emoji: "📱" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "2,999",
    description: "Perfect for small businesses starting online",
    features: ["5-Page Responsive Website", "WhatsApp Integration", "Google Maps", "Basic SEO Setup", "1 Year Hosting"],
    popular: false,
  },
  {
    name: "Business",
    price: "5,999",
    description: "Ideal for growing businesses",
    features: ["10-Page Custom Website", "WhatsApp + Call CTA", "Advanced SEO", "Admin Panel", "2 Year Hosting", "Social Media Links"],
    popular: true,
  },
  {
    name: "Premium",
    price: "9,999",
    description: "Complete digital solution",
    features: ["Unlimited Pages", "E-Commerce / Booking System", "Custom Design", "Full SEO Package", "3 Year Hosting", "Priority Support", "Mobile App (Basic)"],
    popular: false,
  },
];

const techStack = [
  { name: "React / Next.js", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "WordPress", emoji: "📝" },
  { name: "Flutter", emoji: "📱" },
  { name: "Shopify", emoji: "🛒" },
  { name: "AWS / Cloud", emoji: "☁️" },
];

const testimonials = [
  {
    name: "Vikram Jain",
    initials: "VJ",
    rating: 5,
    text: "Got my sweets shop website in just 2 days! Very professional design and customers are ordering through WhatsApp now. Best investment for my business.",
  },
  {
    name: "Dr. Meena",
    initials: "DM",
    rating: 5,
    text: "They built an amazing website for my clinic with online appointment booking. Patients love it. Very responsive team and great after-sales support.",
  },
  {
    name: "Arjun Traders",
    initials: "AT",
    rating: 5,
    text: "Our e-commerce website is getting orders from across UP now. They handled everything from design to payment gateway. Highly professional service.",
  },
];

export default function WebDevTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I need a website for my business.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pixel</span>
              <span className="text-white">Craft</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Get Quote" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.12),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
                  <Rocket className="w-4 h-4" />
                  #1 Web Agency in Saharanpur
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">We Build</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Digital Dreams
                  </span>
                </h1>
                <p className="text-lg text-white/45 mb-8 max-w-lg leading-relaxed">
                  Professional websites, e-commerce stores, and mobile apps for businesses in
                  Saharanpur. Get your website live in just 24-48 hours at unbeatable prices.
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {techStack.map((tech) => (
                    <span key={tech.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                      <span>{tech.emoji}</span> {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Get Free Quote" size="lg" />
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                  >
                    View Our Work <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Website Design Preview"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-cyan-500/20 relative"
                  icon="💻"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-cyan-500/10 bg-cyan-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Websites Delivered", icon: MonitorSmartphone },
              { value: "24hrs", label: "Average Delivery", icon: Zap },
              { value: "4.9★", label: "Client Rating", icon: Star },
              { value: "100%", label: "Client Satisfaction", icon: ShieldCheck },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/5 flex items-center justify-center border border-cyan-500/10">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-cyan-400/70 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                End-to-end digital solutions from design to deployment and beyond.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-cyan-500/10 rounded-2xl p-8 hover:border-cyan-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-wider">
                    {service.tag}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/5 flex items-center justify-center border border-cyan-500/10 mb-6 group-hover:from-cyan-500/25 group-hover:to-blue-500/10 transition-colors">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-cyan-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Our Work</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Recent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 0.1}>
                <div className="group bg-gradient-to-b from-white/[0.04] to-transparent rounded-2xl overflow-hidden border border-cyan-500/10 hover:border-cyan-500/25 transition-all duration-500 hover:-translate-y-1">
                  <ImagePlaceholder
                    label={project.name}
                    aspectRatio="16/9"
                    icon={project.emoji}
                    className="rounded-none"
                  />
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                      <p className="text-sm text-white/35">{project.category}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-cyan-400 transition-colors" />
                  </div>
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
              <span className="inline-block text-cyan-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Investment</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Transparent pricing with no hidden fees. Choose the plan that fits your business.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-gradient-to-b from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/30 scale-105"
                    : "bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold tracking-wider">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/35 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">₹{plan.price}</span>
                    <span className="text-white/30 text-sm ml-1">one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={getWhatsAppLink(`Hi! I'm interested in the ${plan.name} plan (₹${plan.price}).`)}
                    label="Get Started"
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
      <section className="py-24 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-cyan-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Happy Clients</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                What Clients <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-cyan-500/10 rounded-2xl p-8 hover:border-cyan-500/20 transition-all duration-500">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < review.rating ? "text-cyan-400 fill-cyan-400" : "text-white/10"}`} />
                    ))}
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
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
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Let&apos;s Build Something Amazing
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                  Your business deserves a stunning online presence. Get a free quote today
                  and have your website live within 24-48 hours.
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I need a website for my business. Can you share details?")}
                  label="Get Free Quote on WhatsApp"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-cyan-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pixel</span>Craft
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Professional website development, e-commerce, and mobile apps for businesses
                in Saharanpur and across UP.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Office</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-cyan-400/60" />
                  <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400/60" />
                  <span>Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Start a Project</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                Have an idea? Let&apos;s bring it to life. Get a free consultation and quote.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-cyan-500/10 mt-12 pt-8 text-center text-xs text-white/15">
            &copy; {new Date().getFullYear()} PixelCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
