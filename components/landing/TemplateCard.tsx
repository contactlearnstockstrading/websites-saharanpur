"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, MessageCircle } from "lucide-react";
import { type Template } from "@/config/templates-data";
import { getWhatsAppLinkForTemplate } from "@/lib/whatsapp";

interface Props {
  template: Template;
  index: number;
}

export default function TemplateCard({ template, index }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-beige-50 border border-beige-300/60 rounded-2xl overflow-hidden hover:border-beige-400 hover:shadow-lg hover:shadow-beige-400/20 transition-all"
    >
      {/* Mini Preview Area */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-beige-200 to-beige-300 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div
              className="text-3xl font-heading font-bold opacity-30"
              style={{ color: template.color }}
            >
              {template.name}
            </div>
            <div className="text-xs font-body mt-2 text-beige-500">Template Preview</div>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-medium text-white"
          style={{ backgroundColor: template.color + "cc" }}
        >
          {template.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-beige-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Link
            href={`/templates/${template.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-beige-50 text-beige-900 text-sm font-body font-semibold rounded-full hover:bg-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Link>
          <a
            href={getWhatsAppLinkForTemplate(template.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white text-sm font-body font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Get This
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-beige-900 text-lg mb-1">
          {template.name}
        </h3>
        <p className="text-sm text-beige-600 font-body mb-3 line-clamp-2">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {template.features.map((feature) => (
            <span
              key={feature}
              className="px-2.5 py-1 bg-beige-200/60 text-beige-700 text-xs font-body rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
