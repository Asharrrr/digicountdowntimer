import { SITE_URL } from "@/lib/constants"; 
import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
export const revalidate = 40; 

export const metadata: Metadata = {
  title: "About | DigiCountdown Timer",
  description:
    "Explore the vision, values, and team behind Countdown Timer—your go-to countdown timer tool for productivity, goal tracking, and effective time management.",
  keywords: [
    "about countdown timer",
    "about us",
    "Countdown Timer team",
    "mission",
    "values",
    "team",
    "innovation",
    "technology",
    "productivity",
    "time management",
    "digital solutions",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About | DigiCountdown Timer ",
    description:
      "Meet the minds behind DigiCountdown Timer and what drives us.",
    url: `${SITE_URL}/about`,
    siteName: "DigiCountdown Timer",
    images: [
      {
        url: `${SITE_URL}/og-image-about.png`,
        width: 1200,
        height: 630,
        alt: "About DigiCountdown Timer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | DigiCountdown Timer",
    description:
      "Explore the vision, values, and team behind Countdown Timer—your go-to countdown timer tool for productivity, goal tracking, and effective time management.",
    images: [`${SITE_URL}/og-image-about.png`],
  },
};
// ///////////////////////////////////////////////////////////////////////////////////////////// // and have it in a separate file or at the top of this file.

const AboutPage = () => {
  return (
    <>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_URL}/about`,
              },
              headline: "About | DigiCountdown Timer",
              description:
                "Explore the vision, values, and team behind Countdown Timer—your go-to countdown timer tool for productivity, goal tracking, and effective time management.",
              name: "About Digi Countdown Timer",
              url: `${SITE_URL}/about`,
              publisher: {
                "@type": "Organization",
                name: "Digi Countdown Timer",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/logo.png`,
                },
              },
              image: {
                "@type": "ImageObject",
                url: `${SITE_URL}/og-image-about.png`,
                width: 1200,
                height: 630,
              },
              author: {
                "@type": "Person",
                name: "Ashar",
                url: `${SITE_URL}`,
              },
            }),
          }}
        />
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Page Title */}
          <section className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              At Countdown Timer, we are dedicated to providing precise,
              reliable, and user-friendly countdown timer solutions designed to
              help you manage your time effectively. Whether you're organizing
              events, launching products, or tracking important deadlines, our
              innovative timers are crafted with simplicity and accuracy in
              mind. We believe that managing time well is the key to
              productivity and success, and our mission is to empower
              individuals and businesses alike with the best tools to stay on
              track and meet their goals. With a focus on seamless user
              experience, modern design, and robust performance, Countdown Timer
              X is your trusted partner in time management.
            </p>
          </section>

          {/* Two Column Section */}
          <section className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-white leading-relaxed">
                Our mission is to deliver high-quality digital solutions that
                solve real-world problems and empower businesses through
                technology. We specialize in developing scalable web
                applications, intuitive user interfaces, and robust software
                systems tailored to meet the needs of modern users. By combining
                innovative thinking, user-centric design, and performance-driven
                development, we aim to create digital experiences that make a
                lasting impact.
              </p>
            </div>

            <div
              style={{ position: "relative", width: "100%", height: "300px" }}
            >
              <Image
                src="/about.webp"
                alt="Team working on a countdown timer, Digi Countdown Timer, 
                5 minute Timer, 10 minute Timer, 15 minute Timer, 20 minute Timer, 30 minute Timer, 1 hour Timer, 2 hour Timer, 3 hour Timer, 4 hour Timer, 5 hour Timer, 6 hour Timer, 7 hour Timer, 8 hour Timer, 9 hour Timer, 10 hour Timer"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </section>

          {/* Core Values Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation",
                  desc: "We embrace creativity, cutting-edge technologies, and forward-thinking solutions to drive continuous improvement and deliver exceptional digital experiences.",
                },
                {
                  title: "Integrity",
                  desc: "We uphold honesty, accountability, and transparency in every aspect of our process, ensuring trustworthy and ethical partnerships with clients and collaborators.",
                },
                {
                  title: "Collaboration",
                  desc: "We believe in teamwork, open communication, and building meaningful relationships to create impactful and scalable solutions together.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="border border-blue-300 p-6 rounded-xl hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-white">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default AboutPage;