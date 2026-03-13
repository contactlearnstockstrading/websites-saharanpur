import { siteConfig } from "@/config/site-config";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mysaharanpur.store";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.business.name,
    description:
      "Saharanpur's #1 website design agency. 23+ ready-to-launch templates for local businesses. Get your business online in 24 hours.",
    url: siteUrl,
    telephone: siteConfig.whatsapp.phoneNumber,
    email: siteConfig.business.email,
    founder: {
      "@type": "Person",
      name: siteConfig.business.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "6/6236, New Madhav Nagar, Near Company Garden Gate",
      addressLocality: "Saharanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "247001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.9680",
      longitude: "77.5460",
    },
    areaServed: {
      "@type": "City",
      name: "Saharanpur",
    },
    priceRange: "₹2,999 - ₹14,999",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [] as string[],
    serviceType: [
      "Website Design",
      "Web Development",
      "Business Website",
      "Template Customization",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.business.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsapp.phoneNumber,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
    founder: {
      "@type": "Person",
      name: siteConfig.business.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "6/6236, New Madhav Nagar, Near Company Garden Gate",
      addressLocality: "Saharanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "247001",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.business.name,
    url: siteUrl,
    description:
      "23+ premium website templates for local businesses in Saharanpur. Doctors, bakeries, salons, gyms, restaurants & more.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.business.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/#templates?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.business.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Saharanpur",
    },
    serviceType: "Website Design",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
