"use client";

import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4 bg-beige-300/50 text-beige-700">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-beige-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg font-body max-w-2xl mx-auto text-beige-600">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
