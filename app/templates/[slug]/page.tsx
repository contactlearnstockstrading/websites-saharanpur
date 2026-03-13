import { notFound } from "next/navigation";
import { Metadata } from "next";
import { templates } from "@/config/templates-data";
import { getTemplateBySlug } from "@/lib/templates";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
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
import LawyerTemplate from "@/components/templates/LawyerTemplate";
import WebDevTemplate from "@/components/templates/WebDevTemplate";
import TuitionTemplate from "@/components/templates/TuitionTemplate";
import YogaTemplate from "@/components/templates/YogaTemplate";
import MusicTemplate from "@/components/templates/MusicTemplate";
import GymTemplate from "@/components/templates/GymTemplate";
import RestaurantTemplate from "@/components/templates/RestaurantTemplate";
import PhotographyTemplate from "@/components/templates/PhotographyTemplate";
import JewelleryTemplate from "@/components/templates/JewelleryTemplate";
import PharmacyTemplate from "@/components/templates/PharmacyTemplate";
import RealEstateTemplate from "@/components/templates/RealEstateTemplate";

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
  lawyer: LawyerTemplate,
  "web-dev": WebDevTemplate,
  tuition: TuitionTemplate,
  yoga: YogaTemplate,
  music: MusicTemplate,
  gym: GymTemplate,
  restaurant: RestaurantTemplate,
  photography: PhotographyTemplate,
  jewellery: JewelleryTemplate,
  pharmacy: PharmacyTemplate,
  "real-estate": RealEstateTemplate,
};

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mysaharanpur.store";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const template = getTemplateBySlug(params.slug);
  if (!template) return { title: "Template Not Found" };

  const pageUrl = `${siteUrl}/templates/${template.slug}`;
  const title = `${template.name} Website Template — Professional ${template.name} Website Design Saharanpur`;
  const description = `Get a professional ${template.name.toLowerCase()} website in Saharanpur. ${template.description} Ready in 24 hours, starting ₹2,999. WhatsApp us now!`;

  return {
    title,
    description,
    keywords: [
      `${template.name.toLowerCase()} website Saharanpur`,
      `${template.name.toLowerCase()} website design`,
      `best ${template.name.toLowerCase()} website`,
      `${template.name.toLowerCase()} website template`,
      `${template.category} website template`,
      `website for ${template.name.toLowerCase()}`,
      "business website Saharanpur",
      "website design Saharanpur",
      ...template.features,
    ],
    openGraph: {
      title: `${template.name} Website Template | ShopWeb Saharanpur`,
      description,
      url: pageUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.name} Website Template | ShopWeb Saharanpur`,
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

  const template = getTemplateBySlug(params.slug);
  const pageUrl = `${siteUrl}/templates/${params.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Templates", url: `${siteUrl}/#templates` },
          { name: template?.name || params.slug, url: pageUrl },
        ]}
      />
      {template && (
        <ServiceJsonLd
          name={`${template.name} Website Design`}
          description={template.description}
          url={pageUrl}
        />
      )}
      <Component />
    </>
  );
}
