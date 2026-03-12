"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowDown, MessageCircle } from "lucide-react";

const stats = [
  { label: "Templates", value: "12+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Delivery", value: "24hr" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-beige-200">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,115,85,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,115,85,.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-beige-400/40 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-beige-500/30 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-beige-900/5 border border-beige-400 text-sm text-beige-700 font-body mb-6"
        >
          Trusted by 50+ businesses in Saharanpur
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-beige-900 leading-tight mb-6"
        >
          Beautiful Websites for{" "}
          <span className="text-beige-600 italic">
            Every Shop
          </span>{" "}
          in Saharanpur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-beige-600 font-body max-w-2xl mx-auto mb-8"
        >
          Premium, ready-to-launch website templates for doctors, bakeries,
          salons, cafes, and more. Just add your images &amp; go live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#templates"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-beige-900 text-beige-100 font-body font-semibold rounded-full hover:bg-beige-800 transition-all hover:scale-105"
          >
            Explore Templates
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-body font-semibold rounded-full transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8 sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-beige-900">
                {stat.value}
              </div>
              <div className="text-sm text-beige-500 font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
