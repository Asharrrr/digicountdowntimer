import {SITE_URL} from "@/lib/constants"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Script from "next/script";
export const metadata: Metadata = {
  title: {
    default: "Countdown Timer X",
    template: "%s | Countdown Timer X",
  },
  description: "Track time easily with Countdown Timer X – your free and accurate online countdown tool.",
  openGraph: {
    title: "Countdown Timer X",
    description: "Track time easily with Countdown Timer X – your free and accurate online countdown tool.",
    url: SITE_URL,
    siteName: "Countdown Timer X",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Countdown Timer X",
      },
    ],
    type: "website",
  },
};


  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
             {/* Website Schema */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Countdown Timer X",
              "url": SITE_URL,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Person / Creator Schema */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ashar",
              "url": `${SITE_URL}/about`,
              "sameAs": [
                "https://github.com/yourprofile",
                "https://twitter.com/yourprofile",
                "https://linkedin.com/in/yourprofile",
              ],
            }),
          }}
        />

        {/* Software Application (Timer Tool) */}
        <Script
          id="schema-software"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Countdown Timer X",
              "operatingSystem": "All",
              "applicationCategory": "ProductivityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "creator": {
                "@type": "Person",
                "name": "Ashar",
              },
              "url": SITE_URL,
            }),
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the countdown timer free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Countdown Timer X is 100% free to use and always will be.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do you collect any data?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No personal data is collected. We respect your privacy and do not store timers or usage data.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Can I use it offline?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Currently, it requires an internet connection. Offline mode is planned for a future release.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Does the timer work in the background?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the timer continues to run even if you switch tabs or minimize the browser.",
                  },
                },
              ],
            }),
          }}
        />
    </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapper>
        <Header />
        {children}
        <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
