"use client";

import { siteConfig } from "@/config/site-config";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Mail, Zap, MapPin, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-lg tracking-tight">
                {siteConfig.business.name}
              </span>
            </div>
            <p className="text-zinc-500 font-body text-sm leading-relaxed">
              {siteConfig.business.tagline}. We build stunning, ready-to-launch
              websites for local businesses in {siteConfig.business.city}.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-zinc-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Templates", href: "#templates" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-zinc-400">
              Office Location
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-zinc-500 font-body">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.business.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 font-body">
                <User className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{siteConfig.business.owner}, Founder</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-zinc-400">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-green-400 transition-colors font-body"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors font-body"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.business.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 font-body">
              &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { label: "About", href: "/about" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
