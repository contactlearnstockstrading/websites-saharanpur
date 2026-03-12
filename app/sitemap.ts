import { MetadataRoute } from "next";
import { templates } from "@/config/templates-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://shopwebsaharanpur.com";

  const templatePages = templates.map((t) => ({
    url: `${siteUrl}/templates/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...templatePages,
  ];
}
