import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site-config";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mysaharanpur.store";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.business.name}. Learn how we collect, use, and protect your information on mysaharanpur.store.`,
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "March 13, 2026";

  return (
    <>
      <Navbar />
      <main className="bg-zinc-950 text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-heading font-bold mb-2">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm mb-10">Last updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 font-body text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Welcome to {siteConfig.business.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
                We are committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website{" "}
                <strong>mysaharanpur.store</strong> and any related services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Personal Information:</strong> Name, phone number, email address, and business details you voluntarily provide via WhatsApp or contact forms.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, device information, and IP address collected automatically.</li>
                <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies, including those from Google AdSense and Google Analytics, to improve user experience and serve relevant advertisements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To provide and maintain our website and services</li>
                <li>To communicate with you regarding our web development services</li>
                <li>To improve our website and user experience</li>
                <li>To display personalized advertisements through Google AdSense</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">4. Google AdSense & Advertising</h2>
              <p>
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies
                to serve ads based on your prior visits to our website and other websites. Google&apos;s use of
                advertising cookies enables it and its partners to serve ads based on your visit to our site
                and/or other sites on the Internet.
              </p>
              <p className="mt-2">
                You may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                  Google Ads Settings
                </a>. Alternatively, you can opt out of third-party vendor cookies by visiting{" "}
                <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                  aboutads.info
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">5. Cookies</h2>
              <p>
                Cookies are small data files placed on your device. We use essential cookies for site functionality
                and third-party cookies from Google for advertising and analytics. You can control cookies through
                your browser settings, but disabling them may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">6. Third-Party Services</h2>
              <p>We may use third-party services including:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Google AdSense</strong> — for displaying advertisements</li>
                <li><strong>Google Analytics</strong> — for website traffic analysis</li>
                <li><strong>WhatsApp</strong> — for business communication</li>
              </ul>
              <p className="mt-2">These services have their own privacy policies governing the use of your information.</p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">7. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However,
                no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">8. Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under 13. We do not knowingly collect personal
                information from children under 13. If we discover such data, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">9. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of personalized advertising</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-white mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
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
