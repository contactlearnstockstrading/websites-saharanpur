"use client";

import { motion } from "framer-motion";
import { categories } from "@/config/templates-data";

interface Props {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ selected, onChange }: Props) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-2">
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-colors ${
              selected === cat.key
                ? "bg-beige-900 text-beige-100"
                : "bg-beige-300/50 text-beige-700 hover:bg-beige-300"
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
