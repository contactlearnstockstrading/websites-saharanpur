import { notFound } from "next/navigation";
import { Metadata } from "next";
import { templates } from "@/config/templates-data";
import { getTemplateBySlug } from "@/lib/templates";
import DoctorTemplate from "@/components/templates/DoctorTemplate";
import SweetsTemplate from "@/components/templates/SweetsTemplate";
import BakeryTemplate from "@/components/templates/BakeryTemplate";
import SalonTemplate from "@/components/templates/SalonTemplate";
import GroceryTemplate from "@/components/templates/GroceryTemplate";
import CafeTemplate from "@/components/templates/CafeTemplate";
import HospitalTemplate from "@/components/templates/HospitalTemplate";
import ClinicTemplate from "@/components/templates/ClinicTemplate";
import PaintShopTemplate from "@/components/templates/PaintShopTemplate";
import MutualFundsTemplate from "@/components/templates/MutualFundsTemplate";
import BrokerTemplate from "@/components/templates/BrokerTemplate";
import GeneralStoreTemplate from "@/components/templates/GeneralStoreTemplate";

const templateComponents: Record<string, React.ComponentType> = {
  doctor: DoctorTemplate,
  "sweets-shop": SweetsTemplate,
  bakery: BakeryTemplate,
  salon: SalonTemplate,
  grocery: GroceryTemplate,
  cafe: CafeTemplate,
  hospital: HospitalTemplate,
  clinic: ClinicTemplate,
  "paint-shop": PaintShopTemplate,
  "mutual-funds": MutualFundsTemplate,
  broker: BrokerTemplate,
  "general-store": GeneralStoreTemplate,
};

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const template = getTemplateBySlug(params.slug);
  if (!template) return { title: "Template Not Found" };

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://shopwebsaharanpur.com";
  const pageUrl = `${siteUrl}/templates/${template.slug}`;
  const title = `${template.name} Website Template`;
  const description = `Professional website for ${template.name.toLowerCase()} in Saharanpur. ${template.description} Get yours in 24 hours.`;

  return {
    title,
    description,
    keywords: [
      `${template.name.toLowerCase()} website Saharanpur`,
      `${template.name.toLowerCase()} website design`,
      `${template.category} website template`,
      "business website Saharanpur",
      ...template.features,
    ],
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function TemplatePage({
  params,
}: {
  params: { slug: string };
}) {
  const Component = templateComponents[params.slug];
  if (!Component) notFound();

  return <Component />;
}
