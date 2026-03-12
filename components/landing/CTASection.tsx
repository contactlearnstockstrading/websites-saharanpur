"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center bg-beige-900 rounded-3xl p-12 md:p-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-beige-50 mb-4">
          Ready to Get Your Business Online?
        </h2>
        <p className="text-lg text-beige-400 font-body mb-8 max-w-xl mx-auto">
          Join 50+ businesses in Saharanpur who already have a professional
          website. Get yours in just 24 hours.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-body font-semibold text-lg rounded-full transition-all hover:scale-105 hover:shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
