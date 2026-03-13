"use client";

import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  UtensilsCrossed,
  Star,
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  Flame,
  Leaf,
  Award,
  Users,
} from "lucide-react";

const menuCategories = [
  { name: "Starters", emoji: "🥗", items: "15+ dishes", description: "Crispy, tangy, and flavorful starters to begin your meal.", color: "from-amber-500 to-orange-600" },
  { name: "Main Course", emoji: "🍛", items: "25+ dishes", description: "Rich gravies, biryanis, and thali combos for every taste.", color: "from-red-500 to-rose-600" },
  { name: "Tandoor Special", emoji: "🔥", items: "12+ dishes", description: "Fresh from the tandoor — naan, roti, tikka, and more.", color: "from-orange-500 to-red-600" },
  { name: "Chinese", emoji: "🍜", items: "18+ dishes", description: "Indo-Chinese favourites — manchurian, noodles, fried rice.", color: "from-yellow-500 to-amber-600" },
  { name: "South Indian", emoji: "🥘", items: "10+ dishes", description: "Dosa, idli, uttapam, and vada with authentic chutneys.", color: "from-green-500 to-emerald-600" },
  { name: "Desserts & Drinks", emoji: "🍨", items: "15+ items", description: "Gulab jamun, ice cream, lassi, shakes, and fresh juices.", color: "from-pink-500 to-rose-600" },
];

const specialities = [
  { name: "Pure Veg Kitchen", icon: Leaf, description: "100% vegetarian kitchen with no compromise on taste or quality." },
  { name: "Live Tandoor", icon: Flame, description: "Watch your food being prepared fresh in our open live tandoor." },
  { name: "Family Dining", icon: Users, description: "Spacious AC hall with seating for 150+, perfect for family gatherings." },
  { name: "Award Winning", icon: Award, description: "Rated #1 vegetarian restaurant in Saharanpur on Google & Zomato." },
];

const testimonials = [
  {
    name: "Ankit Sharma",
    initials: "AS",
    rating: 5,
    text: "Best paneer tikka in Saharanpur! The taste is consistent every time we visit. Great for family dinners. AC hall is very comfortable and clean.",
  },
  {
    name: "Sonal Gupta",
    initials: "SG",
    rating: 5,
    text: "We hosted our anniversary dinner here. The food was outstanding and the staff was very courteous. The thali is amazing value for money. Highly recommended!",
  },
  {
    name: "Ravi Bansal",
    initials: "RB",
    rating: 5,
    text: "Their Chinese is the best in the city. Manchurian and hakka noodles are our go-to order. Home delivery via WhatsApp is super convenient.",
  },
];

export default function RestaurantTemplate() {
  const whatsAppLink = getWhatsAppLink("Hi! I'd like to place an order / book a table at Saffron Kitchen.");

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-rose-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">Saffron</span>
              <span className="text-white"> Kitchen</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#menu" className="hover:text-rose-400 transition-colors">Menu</a>
            <a href="#specialities" className="hover:text-rose-400 transition-colors">Specialities</a>
            <a href="#reviews" className="hover:text-rose-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          </div>
          <WhatsAppButton href={whatsAppLink} label="Book Table" size="sm" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(225,29,72,0.1),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.08),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(225,29,72,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(225,29,72,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold mb-6">
                  <Leaf className="w-4 h-4" />
                  Pure Veg | Since 2005
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span className="text-white">Taste the</span>
                  <br />
                  <span className="bg-gradient-to-r from-rose-400 via-red-400 to-amber-400 bg-clip-text text-transparent">Tradition</span>
                </h1>
                <p className="text-lg text-white/45 mb-10 max-w-lg leading-relaxed">
                  Saharanpur&apos;s favourite family restaurant serving authentic North Indian, Chinese,
                  and South Indian cuisine. Dine in our AC hall or order home delivery via WhatsApp.
                </p>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton href={whatsAppLink} label="Order on WhatsApp" size="lg" />
                  <a href="#menu" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-rose-500/30 text-rose-400 rounded-full hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300">
                    View Menu <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/15 to-amber-500/10 rounded-3xl blur-2xl" />
                <ImagePlaceholder label="Restaurant Interior / Food" aspectRatio="4/3" className="rounded-2xl border border-rose-500/20 relative" icon="🍽️" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-rose-500/10 bg-rose-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "95+", label: "Dishes on Menu" },
              { value: "20+", label: "Years Serving" },
              { value: "4.7★", label: "Google Rating" },
              { value: "150+", label: "Seating Capacity" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center py-4">
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-300 to-amber-400 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-sm text-white/35 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Explore</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">Menu</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.08}>
                <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-rose-500/10 rounded-2xl p-8 hover:border-rose-500/25 transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-6`}>{cat.emoji}</div>
                  <h3 className="text-lg font-bold mb-1 text-white">{cat.name}</h3>
                  <p className="text-xs text-rose-400/60 font-semibold mb-2">{cat.items}</p>
                  <p className="text-sm text-white/40 leading-relaxed">{cat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section id="specialities" className="py-24 bg-gradient-to-b from-transparent via-rose-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Why Us</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">Specialities</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {specialities.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <div className="group flex items-start gap-4 bg-gradient-to-b from-white/[0.04] to-transparent border border-rose-500/10 rounded-2xl p-6 hover:border-rose-500/25 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-amber-500/5 flex items-center justify-center border border-rose-500/10 shrink-0">
                    <item.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">{item.name}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-rose-400/70 font-semibold uppercase tracking-widest text-sm mb-3">Reviews</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Foodies <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">Say</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.12}>
                <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-rose-500/10 rounded-2xl p-8 hover:border-rose-500/20 transition-all duration-500">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < review.rating ? "text-amber-400 fill-amber-400" : "text-white/10"}`} />
                    ))}
                  </div>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center text-white font-bold text-sm">{review.initials}</div>
                    <span className="font-semibold text-white text-sm">{review.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-red-600 to-amber-600" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative p-12 md:p-20 text-center">
                <div className="text-5xl mb-6">🍽️</div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Hungry? Order Now!</h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Book a table for dine-in or order home delivery via WhatsApp. Fresh food, fast delivery, right to your doorstep.</p>
                <WhatsAppButton href={getWhatsAppLink("Hi! I'd like to order food from Saffron Kitchen.")} label="Order on WhatsApp" size="lg" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-rose-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center"><UtensilsCrossed className="w-5 h-5 text-white" /></div>
                <span className="text-lg font-bold"><span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">Saffron</span> Kitchen</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">Saharanpur&apos;s favourite pure veg family restaurant since 2005. Authentic flavours, warm hospitality.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Restaurant Info</h4>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-rose-400/60" /><span>11:00 AM - 11:00 PM (Daily)</span></div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-rose-400/60" /><span>Court Road, Saharanpur, UP</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-rose-400/60" /><span>+91 98765 43210</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Order Now</h4>
              <p className="text-sm text-white/40 mb-5 leading-relaxed">Order home delivery or book a table on WhatsApp. We deliver across Saharanpur!</p>
              <WhatsAppButton href={whatsAppLink} label="WhatsApp Us" size="md" />
            </div>
          </div>
          <div className="border-t border-rose-500/10 mt-12 pt-8 text-center text-xs text-white/15">&copy; {new Date().getFullYear()} Saffron Kitchen. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
