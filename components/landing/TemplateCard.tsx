"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, MessageCircle } from "lucide-react";
import { type Template } from "@/config/templates-data";
import { getWhatsAppLinkForTemplate } from "@/lib/whatsapp";

interface Props {
  template: Template;
}

export default function TemplateCard({ template }: Props) {
  return (
    <motion.div
      layout
      initial={false}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden card-glow hover:border-white/10 transition-all"
    >
      {/* Mini Preview Area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${template.color}40, transparent)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div
              className="text-3xl font-heading font-bold opacity-40"
              style={{ color: template.color }}
            >
              {template.name}
            </div>
            <div className="text-xs font-body mt-2 text-zinc-600">
              Template Preview
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: template.color }}
        >
          {template.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Link
            href={`/templates/${template.slug}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-zinc-900 text-sm font-body font-bold rounded-full hover:bg-zinc-100 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Link>
          <a
            href={getWhatsAppLinkForTemplate(template.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-green-500 text-white text-sm font-body font-bold rounded-full hover:bg-green-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Get This
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-white text-lg mb-1.5 tracking-tight">
          {template.name}
        </h3>
        <p className="text-sm text-zinc-500 font-body mb-3 line-clamp-2">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {template.features.map((feature) => (
            <span
              key={feature}
              className="px-2.5 py-1 bg-white/5 text-zinc-400 text-xs font-body rounded-full border border-white/5"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
