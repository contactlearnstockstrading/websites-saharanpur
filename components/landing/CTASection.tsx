import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="relative max-w-4xl mx-auto text-center overflow-hidden rounded-3xl p-12 md:p-16">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-pink-600 to-violet-700" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              Ready to Stand Out?
            </h2>
            <p className="text-lg text-white/70 font-body mb-8 max-w-xl mx-auto">
              Join 50+ businesses in Saharanpur who already have a professional
              website. Get yours in just 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 font-body font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-body font-semibold text-lg rounded-full transition-all hover:bg-white/20 hover:scale-105"
              >
                View Templates
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
