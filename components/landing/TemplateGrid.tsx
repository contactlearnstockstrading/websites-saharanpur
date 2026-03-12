"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { templates } from "@/config/templates-data";
import { getTemplatesByCategory } from "@/lib/templates";
import CategoryFilter from "./CategoryFilter";
import TemplateCard from "./TemplateCard";
import SectionHeader from "@/components/shared/SectionHeader";

export default function TemplateGrid() {
  const [category, setCategory] = useState("all");
  const filtered = getTemplatesByCategory(category);

  return (
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Templates"
        title="Choose Your Perfect Template"
        subtitle={`${templates.length} professionally designed templates for every type of business`}
      />

      <CategoryFilter selected={category} onChange={setCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((template, i) => (
            <TemplateCard key={template.slug} template={template} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
