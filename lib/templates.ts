import { templates, type Template } from "@/config/templates-data";

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(category: string): Template[] {
  if (category === "all") return templates;
  return templates.filter((t) => t.category === category);
}

export function getAllSlugs(): string[] {
  return templates.map((t) => t.slug);
}
