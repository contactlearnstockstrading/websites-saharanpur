"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  PieChart,
  Calculator,
  BarChart3,
  Landmark,
  Star,
  MessageCircle,
  ArrowUpRight,
  IndianRupee,
  Target,
  Zap,
  Users,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";

const navLinks = ["Funds", "Calculator", "Why Invest", "Testimonials", "Contact"];

const fundCategories = [
  {
    name: "Equity Funds",
    returns: "12-15%",
    risk: "High",
    riskColor: "text-red-400",
    riskBg: "bg-red-500/10 border-red-500/20",
    description:
      "Invest in stocks for long-term wealth creation. Ideal for investors with 5+ year horizon seeking maximum growth.",
    icon: TrendingUp,
    accent: "#ef4444",
  },
  {
    name: "Debt Funds",
    returns: "6-8%",
    risk: "Low",
    riskColor: "text-emerald-400",
    riskBg: "bg-emerald-500/10 border-emerald-500/20",
    description:
      "Stable returns with lower risk. Perfect for conservative investors and short to medium term financial goals.",
    icon: Shield,
    accent: "#10b981",
  },
  {
    name: "Hybrid Funds",
    returns: "8-12%",
    risk: "Medium",
    riskColor: "text-amber-400",
    riskBg: "bg-amber-500/10 border-amber-500/20",
    description:
      "Best of both worlds. Balanced mix of equity and debt instruments for moderate risk appetite.",
    icon: PieChart,
    accent: "#f59e0b",
  },
];

const whyInvest = [
  {
    icon: Landmark,
    title: "Tax Saving",
    description: "Save up to ₹46,800 in tax under Section 80C with ELSS mutual funds.",
    stat: "₹46,800",
    statLabel: "Max Tax Saving",
  },
  {
    icon: TrendingUp,
    title: "Beat Inflation",
    description: "Grow your money faster than inflation to maintain and increase purchasing power.",
    stat: "12%+",
    statLabel: "Avg Equity Returns",
  },
  {
    icon: BarChart3,
    title: "Power of Compounding",
    description: "Let your returns earn returns. Starting early can multiply your wealth exponentially.",
    stat: "80x",
    statLabel: "30yr SIP Growth",
  },
  {
    icon: PieChart,
    title: "Diversification",
    description: "Spread risk across multiple assets, sectors, and market caps for stable growth.",
    stat: "500+",
    statLabel: "Stocks in 1 Fund",
  },
];

const testimonials = [
  {
    name: "Vikram Joshi",
    initials: "VJ",
    role: "Business Owner",
    text: "Started SIP of ₹5,000 three years ago. My portfolio has grown 40% beyond my total investment. Exceptional guidance from the WealthGrow team!",
    amount: "₹5,000/mo SIP",
  },
  {
    name: "Sunita Reddy",
    initials: "SR",
    role: "IT Professional",
    text: "Very transparent advice. They helped me plan my retirement corpus with a mix of equity and debt funds. I feel confident about my financial future.",
    amount: "₹15,000/mo SIP",
  },
  {
    name: "Mohit Gupta",
    initials: "MG",
    role: "Doctor",
    text: "Tax planning became so easy. ELSS recommendation saved me significant tax while building wealth simultaneously. Truly professional service.",
    amount: "₹25,000/mo SIP",
  },
];

function SIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(15);
  const rate = 12;

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const totalInvestment = monthly * months;
  const futureValue =
    monthly *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const estimatedReturns = futureValue - totalInvestment;
  const investmentPercent = (totalInvestment / futureValue) * 100;

  const formatCurrency = (num: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  const formatShort = (num: number) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return formatCurrency(num);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700/50 shadow-2xl shadow-cyan-500/5">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">SIP Calculator</h3>
          <p className="text-slate-400 text-sm">Plan your systematic investment</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm text-slate-300 font-medium">Monthly Investment</label>
              <span className="text-sm text-cyan-400 font-bold tabular-nums bg-cyan-500/10 px-3 py-0.5 rounded-full">
                {formatCurrency(monthly)}
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={100000}
              step={500}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>₹500</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm text-slate-300 font-medium">Investment Period</label>
              <span className="text-sm text-cyan-400 font-bold tabular-nums bg-cyan-500/10 px-3 py-0.5 rounded-full">
                {years} {years === 1 ? "Year" : "Years"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-700/30 rounded-xl px-4 py-3 border border-slate-700/50">
            <Target className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span className="text-sm text-slate-300">
              Expected Return Rate:{" "}
              <strong className="text-cyan-400">{rate}% p.a.</strong>
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-5">
          {/* Visual bar */}
          <div className="bg-slate-700/30 rounded-2xl p-5 border border-slate-700/50">
            <div className="flex items-end gap-1 mb-3 h-24">
              <div
                className="bg-cyan-500/30 rounded-t-lg flex-1 transition-all duration-500"
                style={{ height: `${investmentPercent}%` }}
              />
              <div
                className="bg-emerald-500/30 rounded-t-lg flex-1 transition-all duration-500"
                style={{ height: `${100 - investmentPercent}%` }}
              />
              <div className="bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-t-lg flex-1 h-full opacity-80" />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-500/50" /> Invested
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500/50" /> Returns
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400" /> Total
              </span>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-700/50">
            <div className="text-xs text-slate-400 mb-1">Total Investment</div>
            <div className="text-xl font-bold text-white tabular-nums">
              {formatShort(totalInvestment)}
            </div>
          </div>
          <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-700/50">
            <div className="text-xs text-slate-400 mb-1">Estimated Returns</div>
            <div className="text-xl font-bold text-emerald-400 tabular-nums">
              +{formatShort(estimatedReturns)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
            <div className="text-xs text-slate-400 mb-1">Total Value</div>
            <div className="text-2xl font-extrabold text-cyan-400 tabular-nums">
              {formatShort(futureValue)}
            </div>
          </div>
        </div>
      </div>

      {/* CTA inside calculator */}
      <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          Ready to start your SIP of <strong className="text-white">{formatCurrency(monthly)}/month</strong>?
        </p>
        <WhatsAppButton
          href={getWhatsAppLink(
            `Hi! I want to start a SIP of ${formatCurrency(monthly)}/month for ${years} years. Please guide me.`
          )}
          label="Start This SIP"
          size="md"
          className="shadow-lg shadow-green-500/10"
        />
      </div>
    </div>
  );
}

export default function MutualFundsTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = getWhatsAppLink(
    "Hi! I'm interested in mutual fund investments. Can you help me get started?"
  );

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base leading-tight">WealthGrow</span>
                <span className="text-[10px] text-cyan-400 font-medium tracking-wider uppercase">Advisors</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
              <WhatsAppButton href={whatsappLink} label="Start SIP" size="sm" />
            </div>
            <button
              className="md:hidden p-2 text-slate-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block text-slate-300 hover:text-white font-medium py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <WhatsAppButton href={whatsappLink} label="Start SIP" size="sm" />
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px]" />
        </div>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <ArrowUpRight className="w-4 h-4" />
                  AMFI Registered Mutual Fund Distributor
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Grow Your Wealth,{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Systematically
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                  Expert mutual fund advisory for long-term wealth creation. Start your SIP
                  today with as little as ₹500/month and let the power of compounding work for you.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <WhatsAppButton
                    href={whatsappLink}
                    label="Start Investing"
                    size="lg"
                    className="shadow-xl shadow-green-500/10"
                  />
                  <a
                    href="#calculator"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-700 hover:border-slate-600"
                  >
                    <Calculator className="w-5 h-5" />
                    SIP Calculator
                  </a>
                </div>
              </ScrollReveal>

              {/* Quick stats */}
              <ScrollReveal delay={0.25}>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "500+", label: "Clients" },
                    { value: "₹10Cr+", label: "AUM" },
                    { value: "8+", label: "Years" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-xl font-extrabold text-white">{s.value}</div>
                      <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <ImagePlaceholder
                label="Financial Growth Illustration"
                aspectRatio="4/3"
                icon="📈"
                className="rounded-3xl border border-slate-700/50 shadow-2xl shadow-cyan-500/5"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fund Categories */}
      <section id="funds" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <PieChart className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Investment Options</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Fund Categories
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Choose the right fund type based on your risk appetite, investment horizon,
                and financial goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundCategories.map((fund, i) => (
              <ScrollReveal key={fund.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/30 transition-all h-full group relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                    style={{ backgroundColor: `${fund.accent}10` }}
                  />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                      <fund.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-2">{fund.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {fund.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">Avg. Returns</div>
                        <div className="text-2xl font-extrabold text-cyan-400">{fund.returns}</div>
                      </div>
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${fund.riskBg} ${fund.riskColor}`}
                      >
                        {fund.risk} Risk
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIP Calculator */}
      <section id="calculator" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <IndianRupee className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Plan Your Future</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                SIP Investment Calculator
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                See how small monthly investments can grow into a massive corpus over time.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SIPCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Why Invest */}
      <section id="why-invest" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Why Invest in Mutual Funds?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Mutual funds offer the simplest path to wealth creation for every Indian investor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvest.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all h-full"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-extrabold text-cyan-400 mb-0.5">{item.stat}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-3">
                    {item.statLabel}
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Client Stories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center border border-cyan-500/20">
                      <span className="font-bold text-cyan-400 text-sm">{t.initials}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                    <div className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2.5 py-1 rounded-full">
                      {t.amount}
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-800" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">100% Free Consultation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Start Your Wealth Creation Journey
            </h2>
            <p className="text-cyan-100/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a personalized investment plan tailored to your financial goals. Our AMFI-certified
              advisors are ready to guide you at no extra cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                href={getWhatsAppLink(
                  "Hi! I'd like a free consultation for mutual fund investments. Please help me get started."
                )}
                label="Book Free Consultation"
                size="lg"
                className="shadow-2xl"
              />
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20"
              >
                <Calculator className="w-5 h-5" />
                Try SIP Calculator
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-5 bg-slate-800/50 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-slate-500 text-center leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> Mutual fund investments are subject
            to market risks. Read all scheme related documents carefully before investing.
            Past performance is not indicative of future returns. The information provided herein
            is for general informational purposes only and should not be construed as investment advice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1e] border-t border-slate-800/50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base">WealthGrow Advisors</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-4">
                Your trusted partner for systematic wealth creation through mutual funds.
                We help individuals and families achieve their financial goals with
                expert, unbiased advisory.
              </p>
              <WhatsAppButton href={whatsappLink} label="WhatsApp Us" size="sm" />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">
                Registration
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-slate-500">AMFI Registration: ARN-XXXXXX</p>
                <p className="text-slate-500">EUIN: E-XXXXXX</p>
                <p className="text-slate-500">Valid till: 31-Mar-2027</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Mail className="w-4 h-4" />
                  info@wealthgrow.in
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800/50 mt-10 pt-6 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} WealthGrow Advisors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
