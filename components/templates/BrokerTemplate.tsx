"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import {
  BarChart3,
  Wallet,
  TrendingUp,
  PieChart,
  Calculator,
  Shield,
  Headphones,
  Zap,
  Search,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";

const tickerData = [
  { name: "NIFTY 50", value: "22,456.80", change: "+1.2%" },
  { name: "SENSEX", value: "73,890.45", change: "+0.8%" },
  { name: "BANK NIFTY", value: "47,234.50", change: "+1.5%" },
  { name: "NIFTY 50", value: "22,456.80", change: "+1.2%" },
  { name: "SENSEX", value: "73,890.45", change: "+0.8%" },
  { name: "BANK NIFTY", value: "47,234.50", change: "+1.5%" },
];

const services = [
  {
    name: "Demat Account Opening",
    icon: Wallet,
    description: "Open your Demat account in minutes with zero paperwork and instant activation.",
  },
  {
    name: "IPO Advisory",
    icon: TrendingUp,
    description: "Get expert recommendations on upcoming IPOs and maximize your listing gains.",
  },
  {
    name: "Portfolio Management",
    icon: PieChart,
    description: "Professional portfolio management tailored to your risk appetite and goals.",
  },
  {
    name: "Tax Planning",
    icon: Calculator,
    description: "Optimize your capital gains tax with smart investment strategies and planning.",
  },
];

const insights = [
  { title: "Market Rally: Nifty Crosses 22,000 Mark", date: "March 10, 2026", emoji: "📈" },
  { title: "Top 5 Stocks to Watch This Week", date: "March 8, 2026", emoji: "🔍" },
  { title: "Budget Impact on Capital Markets", date: "March 5, 2026", emoji: "📊" },
];

const whyChooseUs = [
  { name: "Zero Brokerage", icon: Zap, description: "Trade equity delivery with absolutely zero brokerage charges." },
  { name: "Expert Research", icon: Search, description: "Access in-depth research reports and actionable trade ideas daily." },
  { name: "24/7 Support", icon: Headphones, description: "Round-the-clock customer support via WhatsApp, call, and email." },
  { name: "Secure Platform", icon: Shield, description: "Bank-grade encryption and 2FA to keep your investments safe." },
];

export default function BrokerTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to open a Demat account with TradeX Pro.");

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-yellow-500" />
            <span className="text-xl font-bold tracking-wide text-white">
              TradeX Pro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
            <a href="#insights" className="hover:text-yellow-500 transition-colors">Insights</a>
            <a href="#why-us" className="hover:text-yellow-500 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Get Started" size="sm" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/50 to-gray-950 z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_30%,_rgba(234,179,8,0.25),_transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-4"
              >
                SEBI Registered Stock Broker
              </motion.span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Smart Trading{" "}
                <span className="text-yellow-500">Starts Here</span>
              </h1>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                Experience seamless trading with zero brokerage on equity delivery,
                expert research, and a platform built for both beginners and seasoned investors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WhatsAppButton href={whatsAppLink} label="Open Demat Account" size="lg" />
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-gray-950 transition-all duration-300"
                >
                  Explore Services <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live Ticker Strip */}
      <section className="bg-gray-900 border-y border-yellow-500/15 py-3 overflow-hidden">
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap"
          >
            {tickerData.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="font-semibold text-white/80">{item.name}</span>
                <span className="text-white font-bold">{item.value}</span>
                <span className="text-green-400 font-semibold">{item.change}</span>
                <span className="text-white/20">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="text-yellow-500">Services</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Comprehensive financial services designed to help you build and grow your wealth.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gray-900 border border-yellow-500/15 rounded-xl p-8 text-center hover:border-yellow-500/40 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <service.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                  <p className="text-sm text-white/50">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Account Opening CTA */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-400/10 border border-yellow-500/20 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Open Your <span className="text-yellow-500">Demat Account</span> Today
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
                Join thousands of smart investors. Zero account opening charges, instant activation,
                and start trading within minutes. All you need is your Aadhaar and PAN.
              </p>
              <WhatsAppButton
                href={getWhatsAppLink("Hi! I'd like to open a Demat account with TradeX Pro.")}
                label="Open Free Demat Account"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Market Insights */}
      <section id="insights" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Market <span className="text-yellow-500">Insights</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Stay ahead with our latest research, analysis, and market commentary.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <ImagePlaceholder
                    label={article.title}
                    aspectRatio="16/9"
                    icon={article.emoji}
                    className="rounded-none"
                  />
                  <div className="p-6">
                    <p className="text-xs text-yellow-500/70 font-medium mb-2">{article.date}</p>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose <span className="text-yellow-500">TradeX Pro</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Trusted by over 50,000 investors across India for reliable and transparent trading.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gray-900 border border-yellow-500/15 rounded-xl p-8 text-center hover:border-yellow-500/40 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <item.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                  <p className="text-sm text-white/50">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-yellow-500/15 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold text-white">TradeX Pro</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-3">
                Your trusted partner for smart investing. SEBI registered stock broker
                offering demat, trading, and advisory services.
              </p>
              <p className="text-white/30 text-xs">
                SEBI Registration: INZ000XXXXXX
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  <span>Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Start Trading</h4>
              <p className="text-sm text-white/50 mb-4">
                Open your free Demat account today and start building your wealth with expert guidance.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-yellow-500/10 mt-10 pt-6">
            <p className="text-xs text-white/30 text-center mb-2">
              Disclaimer: Investments in the securities market are subject to market risks. Read all related documents carefully before investing.
            </p>
            <p className="text-xs text-white/20 text-center">
              &copy; {new Date().getFullYear()} TradeX Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
