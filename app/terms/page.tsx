import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site-config";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mysaharanpur.store";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.business.name}. Read our terms and conditions for website design services in Saharanpur.`,
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function Terms() {
  const lastUpdated = "March 13, 2026";

  return (
    <>
      <Navbar />
      <main className="bg-zinc-950 text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-heading font-bold mb-2">Terms of Service</h1>
          <p className="text-zinc-500 text-sm mb-10">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 font-body text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using {siteConfig.business.name} (&ldquo;mysaharanpur.store&rdquo;), you agree
                to be bound by these Terms of Service. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">2. Services</h2>
              <p>
                {siteConfig.business.name} provides website design, development, and deployment services for
                local businesses in Saharanpur and surrounding areas. We showcase website templates that
                businesses can choose from and customize.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">3. Pricing & Payments</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>All prices displayed on the website are in Indian Rupees (INR)</li>
                <li>Prices are subject to change without prior notice</li>
                <li>Payment terms will be discussed and agreed upon via WhatsApp before starting any project</li>
                <li>We may require an advance payment before commencing work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">4. Website Templates</h2>
              <p>
                The templates displayed on our website are for demonstration purposes. The final website
                delivered to you will be customized with your content, images, and branding. Template
                designs may vary from the demo versions shown.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">5. Client Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide accurate and complete business information</li>
                <li>Supply all content, images, and materials needed for the website</li>
                <li>Review and approve the website before it goes live</li>
                <li>Ensure all content provided does not infringe on third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">6. Intellectual Property</h2>
              <p>
                Upon full payment, the client receives rights to use the website we build for them.
                We retain the right to showcase completed projects in our portfolio. The underlying
                templates and code framework remain our intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                {siteConfig.business.name} shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services or website. Our total
                liability shall not exceed the amount paid by the client for the specific service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">8. Advertisements</h2>
              <p>
                Our website may display third-party advertisements through Google AdSense. We are not
                responsible for the content of these advertisements. Clicking on ads is at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">9. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective
                immediately upon posting on this page. Continued use of the website constitutes
                acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">10. Governing Law</h2>
              <p>
                These terms shall be governed by the laws of India. Any disputes arising shall be
                subject to the jurisdiction of courts in Saharanpur, Uttar Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">11. Contact</h2>
              <p>For any questions regarding these terms:</p>
              <ul className="list-none space-y-1.5 mt-2">
                <li><strong>Owner:</strong> {siteConfig.business.owner}</li>
                <li><strong>Email:</strong> {siteConfig.business.email}</li>
                <li><strong>Address:</strong> {siteConfig.business.address}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
