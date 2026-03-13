"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mittal",
    initials: "RM",
    role: "Owner, Mittal Sweets",
    rating: 5,
    text: "Got my sweets shop website in just 2 days! Customers now order directly from WhatsApp. My sales increased 40% in the first month itself. Best investment for my business.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Dr. Priya Sharma",
    initials: "PS",
    role: "Dental Clinic, Saharanpur",
    rating: 5,
    text: "Very professional website with online appointment booking. My patients love it. The team was responsive and delivered exactly what I wanted within 24 hours.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Amit Bansal",
    initials: "AB",
    role: "Founder, LearnStocksTrading.com",
    rating: 5,
    text: "They built learnstockstrading.com for me — a complete stock trading education platform. Stunning design, fast loading, and perfectly optimized. Couldn't be happier!",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Kavita Gupta",
    initials: "KG",
    role: "Kavita's Beauty Salon",
    rating: 5,
    text: "My salon website looks absolutely gorgeous. The booking feature through WhatsApp has made my life so much easier. Getting 10+ new clients every month from the website.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Mohammad Arif",
    initials: "MA",
    role: "Arif General Store",
    rating: 5,
    text: "WhatsApp ordering through my website changed the game. Customers just browse products online and order. Home delivery business has doubled since we got the website.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "Sunita Agarwal",
    initials: "SA",
    role: "Sunita's Yoga Studio",
    rating: 4,
    text: "Beautiful website with class schedules and online enrollment. New students find us on Google now. The team understood exactly what a yoga studio needs.",
    gradient: "from-teal-500 to-cyan-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Testimonials"
        title="Loved by Local Businesses"
        subtitle="Here's what our clients in Saharanpur have to say about their websites"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.08}>
            <div className="relative bg-zinc-900 border border-white/5 rounded-2xl p-7 hover:border-white/10 transition-all group card-glow h-full flex flex-col">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/[0.04] absolute top-5 right-5 group-hover:text-white/[0.08] transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${
                      si < review.rating
                        ? "text-orange-400 fill-orange-400"
                        : "text-zinc-700"
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-zinc-400 font-body text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-sm">{review.name}</p>
                  <p className="text-zinc-500 font-body text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
