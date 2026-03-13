"use client";

import { motion } from "framer-motion";
import { categories } from "@/config/templates-data";

interface Props {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ selected, onChange }: Props) {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-2">
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold whitespace-nowrap transition-all ${
              selected === cat.key
                ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg shadow-orange-500/20"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
