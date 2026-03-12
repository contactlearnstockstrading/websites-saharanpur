export interface Template {
  slug: string;
  name: string;
  category: "healthcare" | "food" | "lifestyle" | "finance" | "retail";
  description: string;
  features: string[];
  color: string;
}

export const categories = [
  { key: "all", label: "All" },
  { key: "healthcare", label: "Healthcare" },
  { key: "food", label: "Food & Sweets" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "finance", label: "Finance" },
  { key: "retail", label: "Retail" },
] as const;

export const templates: Template[] = [
  {
    slug: "doctor",
    name: "Doctor / Physician",
    category: "healthcare",
    description: "Professional medical website with appointment booking, services showcase, and patient testimonials.",
    features: ["Appointment CTA", "Service Cards", "WhatsApp", "Timings"],
    color: "#6dd5ed",
  },
  {
    slug: "sweets-shop",
    name: "Sweets Shop",
    category: "food",
    description: "Traditional Indian sweets shop with product catalog, occasion ordering, and WhatsApp orders.",
    features: ["Product Catalog", "Occasion Orders", "WhatsApp Order", "Offers"],
    color: "#f5af19",
  },
  {
    slug: "bakery",
    name: "Bakery",
    category: "food",
    description: "Artisan bakery with menu showcase, custom cake ordering, and elegant product display.",
    features: ["Menu Display", "Custom Orders", "Gallery", "WhatsApp Order"],
    color: "#c9a96e",
  },
  {
    slug: "salon",
    name: "Salon / Parlour",
    category: "lifestyle",
    description: "Luxurious salon website with service pricing, portfolio gallery, and online booking.",
    features: ["Price List", "Gallery", "Team Profiles", "WhatsApp Booking"],
    color: "#e040fb",
  },
  {
    slug: "grocery",
    name: "Grocery Store",
    category: "retail",
    description: "Fresh grocery store with product categories, deals section, and delivery information.",
    features: ["Product Grid", "Deals Banner", "Delivery Info", "WhatsApp Order"],
    color: "#4caf50",
  },
  {
    slug: "cafe",
    name: "Cafe / Coffee Shop",
    category: "food",
    description: "Cozy cafe website with full menu, ambience gallery, and location details.",
    features: ["Full Menu", "Photo Gallery", "Location", "WhatsApp"],
    color: "#795548",
  },
  {
    slug: "hospital",
    name: "Hospital",
    category: "healthcare",
    description: "Professional hospital website with departments, doctor profiles, and emergency contact.",
    features: ["Departments", "Doctor Profiles", "Emergency CTA", "Facilities"],
    color: "#2196f3",
  },
  {
    slug: "clinic",
    name: "Clinic",
    category: "healthcare",
    description: "Personal clinic website with doctor profile, consultation timings, and patient reviews.",
    features: ["Doctor Profile", "Timings", "Reviews", "WhatsApp Booking"],
    color: "#66bb6a",
  },
  {
    slug: "paint-shop",
    name: "Paint Shop",
    category: "retail",
    description: "Colorful paint shop with colour explorer, product categories, and brand showcase.",
    features: ["Colour Swatches", "Product Categories", "Brands", "Consultation"],
    color: "#ff5722",
  },
  {
    slug: "mutual-funds",
    name: "Mutual Funds Advisor",
    category: "finance",
    description: "Professional financial advisor website with fund categories, SIP calculator, and consultation.",
    features: ["SIP Calculator", "Fund Categories", "Testimonials", "WhatsApp"],
    color: "#00bcd4",
  },
  {
    slug: "broker",
    name: "Stock Broker",
    category: "finance",
    description: "Premium stock broker website with live ticker, services, and account opening.",
    features: ["Live Ticker", "Services Grid", "Market Insights", "WhatsApp"],
    color: "#ffd700",
  },
  {
    slug: "general-store",
    name: "General Store",
    category: "retail",
    description: "Modern general store with product categories, bestsellers, and delivery information.",
    features: ["Product Grid", "Categories", "Reviews", "WhatsApp Order"],
    color: "#9c27b0",
  },
];
