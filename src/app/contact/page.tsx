export const revalidate = 60; 
import type { Metadata } from 'next';
import Head from 'next/head';
import { SITE_URL } from "@/lib/constants"; 

export const metadata: Metadata = {
  title: 'Contact | DigiCountdown Timer',
  description: 'Have questions or feedback? Get in touch with the DigiCountdown Timer team.',
  keywords: ['contact countdown timer', 'get in touch', 'DigiCountdown Timer support'],
  openGraph: {
    title: 'Contact | DigiCountdown Timer',
    description: 'Reach out to the DigiCountdown Timer team.',
    url: `${SITE_URL}/contact`,
    siteName: 'DigiCountdown Timer',
    images: [
      {
        url: `${SITE_URL}/og-image-contact.png`,
        width: 1200,
        height: 630,
        alt: 'Contact DigiCountdown Timer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | DigiCountdown Timer',
    description: 'We would love to hear from you!',
    images: [`${SITE_URL}/og-image-contact.png`],
  },
};
export default async function ContactPage() {
  return (
    <div>
      <Head>
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: `${SITE_URL}/contact`,
              name: "Contact | Countdown Timer X",
              description:
                "Have questions or feedback? Get in touch with the Countdown Timer team.",
              publisher: {
                "@type": "Organization",
                name: "DigiCountdown Timer",
                url: `${SITE_URL}`,
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "raooolex@proton.me",
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12 flex items-center justify-center">
        <div className="max-w-xl w-full bg-black border border-blue-300 rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-white mb-8 text-center">
            Have questions? Send us a message and we'll get back to you as soon as possible.
          </p>

          <p className="mt-6 text-center text-green-400 font-semibold">
            Note: This form is currently not working. Please email us at: raoolex@proton.me
          </p>

          <form action="/contact" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-blue-300 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-blue-300 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-blue-300 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
