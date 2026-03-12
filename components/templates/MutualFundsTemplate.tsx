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
} from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink, getWhatsAppLinkForTemplate } from "@/lib/whatsapp";

const fundCategories = [
  {
    name: "Equity Funds",
    returns: "12-15%",
    risk: "High",
    riskColor: "bg-red-100 text-red-700",
    description: "Invest in stocks for long-term wealth creation. Ideal for 5+ year horizon.",
    icon: TrendingUp,
  },
  {
    name: "Debt Funds",
    returns: "6-8%",
    risk: "Low",
    riskColor: "bg-green-100 text-green-700",
    description: "Stable returns with lower risk. Perfect for short to medium term goals.",
    icon: Shield,
  },
  {
    name: "Hybrid Funds",
    returns: "8-12%",
    risk: "Medium",
    riskColor: "bg-yellow-100 text-yellow-700",
    description: "Best of both worlds. Balanced mix of equity and debt instruments.",
    icon: PieChart,
  },
];

const whyInvest = [
  { icon: Landmark, title: "Tax Saving", description: "Save up to ₹46,800 tax under Section 80C with ELSS funds." },
  { icon: TrendingUp, title: "Beat Inflation", description: "Grow your money faster than inflation to maintain purchasing power." },
  { icon: BarChart3, title: "Power of Compounding", description: "Let your returns earn returns. Start early to maximize wealth." },
  { icon: PieChart, title: "Diversification", description: "Spread risk across multiple assets, sectors, and market caps." },
];

const testimonials = [
  { name: "Vikram J.", initials: "VJ", text: "Started SIP of ₹5,000 three years ago. My portfolio has grown beyond expectations. Great guidance!" },
  { name: "Sunita R.", initials: "SR", text: "Very transparent advice. They helped me plan my retirement corpus with a mix of equity and debt funds." },
  { name: "Mohit G.", initials: "MG", text: "Tax planning became so easy. ELSS recommendation saved me significant tax. Professional service." },
];

function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const rate = 12;

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const totalInvestment = monthly * months;
  const futureValue =
    monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const estimatedReturns = futureValue - totalInvestment;

  const formatCurrency = (num: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(num);

  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-cyan-400" />
        SIP Calculator
      </h3>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-300 font-body">Monthly Investment</label>
            <span className="text-sm text-cyan-400 font-body font-semibold">
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
            className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-xs text-gray-500 font-body mt-1">
            <span>₹500</span>
            <span>₹1,00,000</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-300 font-body">Time Period</label>
            <span className="text-sm text-cyan-400 font-body font-semibold">{years} years</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-xs text-gray-500 font-body mt-1">
            <span>1 yr</span>
            <span>30 yrs</span>
          </div>
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-400 font-body">
            Expected Return Rate: <strong className="text-cyan-400">{rate}% p.a.</strong>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-700/50 rounded-xl p-4 text-center">
          <div className="text-xs text-gray-400 font-body mb-1">Total Investment</div>
          <div className="text-lg font-heading font-bold text-white">
            {formatCurrency(totalInvestment)}
          </div>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-4 text-center">
          <div className="text-xs text-gray-400 font-body mb-1">Estimated Returns</div>
          <div className="text-lg font-heading font-bold text-green-400">
            {formatCurrency(estimatedReturns)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-4 text-center">
          <div className="text-xs text-gray-400 font-body mb-1">Total Value</div>
          <div className="text-lg font-heading font-bold text-cyan-400">
            {formatCurrency(futureValue)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MutualFundsTemplate() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-white text-lg">
                WealthGrow Advisors
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#calculator"
                className="hidden md:inline-block text-sm text-gray-300 hover:text-white font-body transition-colors"
              >
                SIP Calculator
              </a>
              <WhatsAppButton
                href={getWhatsAppLinkForTemplate("Mutual Funds Advisor")}
                label="Start SIP"
                size="sm"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-body mb-6"
          >
            <ArrowUpRight className="w-4 h-4" />
            AMFI Registered Mutual Fund Distributor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Grow Your Wealth,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Systematically
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 font-body max-w-2xl mx-auto mb-8"
          >
            Expert mutual fund advisory for wealth creation. Start your SIP
            today and let your money work for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <WhatsAppButton
              href={getWhatsAppLinkForTemplate("Mutual Funds Advisor")}
              label="Start Investing"
              size="lg"
            />
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-body font-semibold rounded-full transition-all border border-slate-700"
            >
              <Calculator className="w-5 h-5" />
              SIP Calculator
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fund Categories */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">
              Fund Categories
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundCategories.map((fund, i) => (
              <ScrollReveal key={fund.name} delay={i * 0.1}>
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/30 transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <fund.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    {fund.name}
                  </h3>
                  <p className="text-gray-400 font-body text-sm mb-4">
                    {fund.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 font-body">Avg. Returns</div>
                      <div className="text-lg font-heading font-bold text-cyan-400">
                        {fund.returns}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-body font-medium ${fund.riskColor}`}>
                      {fund.risk} Risk
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIP Calculator */}
      <section id="calculator" className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">
              Plan Your Investment
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <SIPCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">
              Why Invest in Mutual Funds?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvest.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all h-full">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-body text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-10">
              Client Testimonials
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="font-heading font-bold text-cyan-400 text-sm">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-white text-sm">{t.name}</div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 font-body text-sm leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Free Investment Consultation
            </h2>
            <p className="text-cyan-100 font-body text-lg mb-8">
              Get personalized mutual fund recommendations. No charges for consultation.
            </p>
            <WhatsAppButton
              href={getWhatsAppLinkForTemplate("Mutual Funds Advisor")}
              label="Book Free Consultation"
              size="lg"
              className="bg-white !text-blue-700 hover:!bg-blue-50"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 font-body text-center">
            Mutual fund investments are subject to market risks. Read all scheme related
            documents carefully. Past performance is not indicative of future returns.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-bold text-white">WealthGrow Advisors</span>
              </div>
              <p className="text-gray-400 font-body text-sm">
                Your trusted partner for wealth creation through mutual funds.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">
                Registration
              </h3>
              <p className="text-gray-500 font-body text-sm">
                AMFI Registration: ARN-XXXXXX
              </p>
              <p className="text-gray-500 font-body text-sm">
                EUIN: E-XXXXXX
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">
                Contact
              </h3>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-body text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 font-body text-sm">
              &copy; {new Date().getFullYear()} WealthGrow Advisors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
