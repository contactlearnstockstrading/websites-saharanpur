"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
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
  ArrowUpRight,
  ArrowDownRight,
  Gem,
  Target,
  Award,
  Users,
  IndianRupee,
} from "lucide-react";

const tickerData = [
  { name: "NIFTY 50", value: "22,456.80", change: "+1.2%", up: true },
  { name: "SENSEX", value: "73,890.45", change: "+0.8%", up: true },
  { name: "BANK NIFTY", value: "47,234.50", change: "+1.5%", up: true },
  { name: "NIFTY IT", value: "38,120.35", change: "-0.3%", up: false },
  { name: "GOLD", value: "₹72,450", change: "+0.5%", up: true },
  { name: "CRUDE OIL", value: "$82.30", change: "-1.1%", up: false },
  { name: "NIFTY 50", value: "22,456.80", change: "+1.2%", up: true },
  { name: "SENSEX", value: "73,890.45", change: "+0.8%", up: true },
  { name: "BANK NIFTY", value: "47,234.50", change: "+1.5%", up: true },
  { name: "NIFTY IT", value: "38,120.35", change: "-0.3%", up: false },
  { name: "GOLD", value: "₹72,450", change: "+0.5%", up: true },
  { name: "CRUDE OIL", value: "$82.30", change: "-1.1%", up: false },
];

const services = [
  {
    name: "Demat Account Opening",
    icon: Wallet,
    description: "Open your Demat account in minutes with zero paperwork and instant activation.",
    highlight: "FREE",
  },
  {
    name: "IPO Advisory",
    icon: TrendingUp,
    description: "Get expert recommendations on upcoming IPOs and maximize your listing gains.",
    highlight: "PREMIUM",
  },
  {
    name: "Portfolio Management",
    icon: PieChart,
    description: "Professional portfolio management tailored to your risk appetite and goals.",
    highlight: "PMS",
  },
  {
    name: "Tax Planning",
    icon: Calculator,
    description: "Optimize your capital gains tax with smart investment strategies and planning.",
    highlight: "SAVE",
  },
];

const insights = [
  { title: "Market Rally: Nifty Crosses 22,000 Mark", date: "March 10, 2026", emoji: "📈", tag: "BULLISH" },
  { title: "Top 5 Stocks to Watch This Week", date: "March 8, 2026", emoji: "🔍", tag: "RESEARCH" },
  { title: "Budget Impact on Capital Markets", date: "March 5, 2026", emoji: "📊", tag: "ANALYSIS" },
];

const whyChooseUs = [
  { name: "Zero Brokerage", icon: Zap, description: "Trade equity delivery with absolutely zero brokerage charges.", stat: "₹0" },
  { name: "Expert Research", icon: Search, description: "Access in-depth research reports and actionable trade ideas daily.", stat: "50+" },
  { name: "24/7 Support", icon: Headphones, description: "Round-the-clock customer support via WhatsApp, call, and email.", stat: "24/7" },
  { name: "Secure Platform", icon: Shield, description: "Bank-grade encryption and 2FA to keep your investments safe.", stat: "100%" },
];

const stats = [
  { value: "50,000+", label: "Active Investors", icon: Users },
  { value: "₹500Cr+", label: "Assets Under Advisory", icon: IndianRupee },
  { value: "15+", label: "Years of Trust", icon: Award },
  { value: "99.9%", label: "Uptime Guarantee", icon: Target },
];

export default function BrokerTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to open a Demat account with TradeX Pro.");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="text-amber-400">TradeX</span>{" "}
              <span className="text-white">Pro</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#insights" className="hover:text-amber-400 transition-colors">Insights</a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Get Started" size="sm" />
        </div>
      </nav>

      {/* Live Ticker Strip */}
      <section className="bg-gradient-to-r from-amber-950/40 via-black to-amber-950/40 border-b border-amber-500/10 py-3 overflow-hidden">
        <div className="relative">
          <div className="flex gap-8 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
            {tickerData.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm">
                <span className="font-medium text-white/50">{item.name}</span>
                <span className="text-white font-bold">{item.value}</span>
                <span className={`flex items-center gap-0.5 font-semibold ${item.up ? "text-emerald-400" : "text-red-400"}`}>
                  {item.up ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {item.change}
                </span>
                <span className="text-amber-500/30 ml-2">|</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Luxury gold gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.12),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(217,119,6,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
                  <Gem className="w-4 h-4" />
                  SEBI Registered Stock Broker
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Smart</span>{" "}
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Trading</span>
                  <br />
                  <span className="text-white">Starts Here</span>
                </h1>
                <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed">
                  Experience seamless trading with zero brokerage on equity delivery,
                  expert research, and a platform built for both beginners and seasoned investors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Open Demat Account" size="lg" />
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-amber-500/40 text-amber-400 rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
                  >
                    Explore Services <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder
                  label="Trading Dashboard Preview"
                  aspectRatio="4/3"
                  className="rounded-2xl border border-amber-500/20 relative"
                  icon="📊"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-6 border-y border-amber-500/10 bg-amber-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-yellow-500/5 flex items-center justify-center border border-amber-500/10">
                    <stat.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400/70 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Comprehensive financial services designed to help you build and grow your wealth.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-amber-500/10 rounded-2xl p-8 text-center hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[10px] font-bold tracking-wider">
                    {service.highlight}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 flex items-center justify-center group-hover:from-amber-500/25 group-hover:to-amber-600/10 transition-colors border border-amber-500/10">
                    <service.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Account Opening CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 text-white/90 text-sm font-semibold mb-6">
                  <Zap className="w-4 h-4" />
                  Takes Only 5 Minutes
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
                  Open Your Demat Account Today
                </h2>
                <p className="text-black/70 max-w-2xl mx-auto mb-10 text-lg">
                  Join thousands of smart investors. Zero account opening charges, instant activation,
                  and start trading within minutes. All you need is your Aadhaar and PAN.
                </p>
                <WhatsAppButton
                  href={getWhatsAppLink("Hi! I'd like to open a Demat account with TradeX Pro.")}
                  label="Open Free Demat Account"
                  size="lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Market Insights */}
      <section id="insights" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Stay Informed</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Market <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">Insights</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Stay ahead with our latest research, analysis, and market commentary.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.1}>
                <div className="group bg-gradient-to-b from-white/[0.04] to-transparent rounded-2xl overflow-hidden border border-amber-500/10 hover:border-amber-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative">
                    <ImagePlaceholder
                      label={article.title}
                      aspectRatio="16/9"
                      icon={article.emoji}
                      className="rounded-none"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-amber-400 text-[10px] font-bold tracking-wider">
                      {article.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-amber-500/60 font-medium mb-2">{article.date}</p>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-1.5 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-transparent via-amber-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Our Edge</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">TradeX Pro</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Trusted by over 50,000 investors across India for reliable and transparent trading.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-amber-500/10 rounded-2xl p-8 text-center hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-4">
                    {item.stat}
                  </div>
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 flex items-center justify-center border border-amber-500/10 group-hover:from-amber-500/25 group-hover:to-amber-600/10 transition-colors">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-amber-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg font-bold">
                  <span className="text-amber-400">TradeX</span> Pro
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Your trusted partner for smart investing. SEBI registered stock broker
                offering demat, trading, and advisory services.
              </p>
              <p className="text-amber-500/30 text-xs font-medium">
                SEBI Registration: INZ000XXXXXX
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-400/60" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-amber-400/60" />
                  <span>Court Road, Saharanpur, UP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400/60" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Start Trading</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">
                Open your free Demat account today and start building your wealth with expert guidance.
              </p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-amber-500/10 mt-12 pt-8">
            <p className="text-xs text-white/25 text-center mb-3 max-w-3xl mx-auto leading-relaxed">
              Disclaimer: Investments in the securities market are subject to market risks. Read all related documents carefully before investing.
            </p>
            <p className="text-xs text-white/15 text-center">
              &copy; {new Date().getFullYear()} TradeX Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
