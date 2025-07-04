import React from "react";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy - DigiCountdown Timer",
  description:
    "Learn about our commitment to user privacy and data protection. DigiCountdown Timer does not collect personal data or use tracking cookies.",
  openGraph: {
    title: "Privacy Policy - DigiCountdown Timer",
    description:
      "Learn about our commitment to user privacy and data protection. DigiCountdown Timer does not collect personal data or use tracking cookies.",
    url: `${SITE_URL}/privacy`,
    siteName: "DigiCountdown Timer",
    images: [
      {
        url: `${SITE_URL}/og-image-privacypolicy.png`,
        width: 1200,
        height: 630,
        alt: "DigiCountdown Timer Privacy Policy",
      },
    ],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 bg-black text-white">
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "PrivacyPolicy",
      "name": "Privacy Policy - DigiCountdown Timer",
      "url": `${SITE_URL}/privacy`,
      "description":
        "Learn about our commitment to user privacy and data protection. DigiCountdown Timer does not collect personal data or use tracking cookies.",
      "publisher": {
        "@type": "Organization",
        "name": "DigiCountdown Timer",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`, // Replace with your actual logo URL
          "width": 200,
          "height": 60
        }
      },
      "inLanguage": "en",
      "datePublished": "2025-07-04", // Adjust to actual publish date
      "dateModified": "2025-07-04"
    })
  }}
/>

      <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>

      <p className="mb-4">
        At <span className="font-semibold text-white">DigiCountdown Timer</span>,
        your privacy is important to us. We are committed to being transparent
        about what data we collect — and more importantly, what we don't.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
        1. No Personal Data Collected
      </h2>
      <p className="mb-4">
        We do not collect, store, or share any personal data. You can use
        Countdown Timer X freely without creating an account or providing any
        personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
        2. Cookies & Analytics
      </h2>
      <p className="mb-4">
        We do not use cookies for tracking or analytics. Your session is
        completely private and not monitored.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
        3. Ads & Monetization
      </h2>
      <p className="mb-4">
        This site may display clean, non-intrusive ads to help support
        development and cover basic costs. We do not use personalized ad
        tracking or sell user data. It's just a way to earn a little pocket
        money while keeping the tool free for everyone.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
        4. Third-Party Services
      </h2>
      <p className="mb-4">
        We currently do not integrate with any third-party services that collect
        user data. If this changes, the policy will be updated accordingly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
        5. Updates to This Policy
      </h2>
      <p className="mb-4">
        We may occasionally update this Privacy Policy to reflect changes to the
        site. Any updates will be posted here, with the effective date clearly
        shown.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
        6. Contact
      </h2>
      <p>
        If you have any questions about this Privacy Policy, feel free to reach
        out via our{" "}
        <Link href="/contact" className="text-blue-400 underline">
          Contact
        </Link>{" "}
        page.
      </p>
    </main>
  );
}
