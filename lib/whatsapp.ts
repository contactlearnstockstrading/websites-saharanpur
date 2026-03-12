import { siteConfig } from "@/config/site-config";

export function getWhatsAppLink(customMessage?: string) {
  const phone = siteConfig.whatsapp.phoneNumber.replace(/[^0-9]/g, "");
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLinkForTemplate(templateName: string) {
  return getWhatsAppLink(
    `Hi! I'm interested in the "${templateName}" website template for my business.`
  );
}

export function getWhatsAppLinkForPlan(planName: string, price: string) {
  return getWhatsAppLink(
    `Hi! I'm interested in the ${planName} plan (${price}) for my business website.`
  );
}
