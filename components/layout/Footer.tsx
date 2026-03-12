"use client";

import { siteConfig } from "@/config/site-config";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-beige-900 text-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-beige-600 flex items-center justify-center text-beige-100 font-bold text-sm">
                S
              </div>
              <span className="font-heading font-bold text-lg text-beige-50">
                {siteConfig.business.name}
              </span>
            </div>
            <p className="text-beige-400 font-body text-sm leading-relaxed">
              {siteConfig.business.tagline}. We build beautiful, ready-to-launch
              websites for local businesses in {siteConfig.business.city}.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-beige-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Templates", href: "#templates" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-beige-400 hover:text-beige-100 transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-beige-400">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-beige-400 hover:text-green-400 transition-colors font-body"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="flex items-center gap-2 text-sm text-beige-400 hover:text-beige-100 transition-colors font-body"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.business.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige-800 mt-8 pt-8 text-center">
          <p className="text-sm text-beige-500 font-body">
            &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
