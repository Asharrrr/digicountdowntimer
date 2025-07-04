import dynamic from 'next/dynamic';
import type { Metadata } from 'next'; // Import Metadata type
import { SITE_URL } from "@/lib/constants"; // Ensure you have this constant defined in your constants file

export const metadata: Metadata = {
  title: "Free Online Countdown Timer -With Guide Simple & Reliable  Tool",
  description:
    "Use our free online countdown timer for events, study, workouts, and launches. Simple, accurate, no login required—start counting down instantly!",
  keywords: [
    "countdown timer",
    "online timer",
    "free timer",
    "digital countdown",
    "pomodoro timer",
    "event timer",
    "product launch timer",
    "flash sale timer",
  ],
  alternates: {
    canonical: `${SITE_URL}/`, // Canonical for the homepage
  },
  openGraph: {
    title: "Free Online Countdown Timer - Simple & Reliable",
    description: "Use our free online countdown timer to manage time effectively. Perfect for events, study sessions, product launches, and more. No login required.",
    url: `${SITE_URL}/`,
    siteName: "Countdown Timer",
    images: [
      {
        url: `${SITE_URL}/og-image-home.png`, // Adjust image path as needed
        width: 1200,
        height: 630,
        alt: "Free Online Countdown Timer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Countdown Timer - Simple & Reliable",
    description: "Use our free online countdown timer to manage time effectively. Perfect for events, study sessions, product launches, and more.",
    images: [`${SITE_URL}/og-image-home.png`], // Adjust image path as needed
  },
};

// Import your custom components
import TagsSection from "@/components/TagsSection";
import AboutAuthor from '@/components/eeat/AboutAuthor';
import HowItWorks from '@/components/eeat/HowItWorks';
import UseCases from '@/components/eeat/UseCases';
import TrustBadges from '@/components/eeat/TrustBadges';
import FAQSection from '@/components/eeat/FAQSection';
import Testimonials from '@/components/Testimonials';
import TimerTable from '@/components/eeat/table';
import ShareButtons from '@/components/share';

// Dynamically import components
const Countdown = dynamic(() => import('@/components/count-down'), {
  loading: () => <p>Loading Countdown...</p>,
  ssr: true,
});
const CountdownTimerGuide = dynamic(() => import('@/components/article'), {
  loading: () => <p>Loading Article...</p>,
  ssr: true,
});

export default function Home() {
 const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/`,
        "url": `${SITE_URL}/`,
        "name": metadata.title, // Reference title from metadata
        "description": metadata.description, // Reference description from metadata
        "inLanguage": "en-US",
        "datePublished": "2023-01-01T00:00:00Z",
        "dateModified": "2025-06-22T16:31:35Z", // Dynamically set current time based on execution
        "publisher": {
          "@type": "Person",
          "@id": `${SITE_URL}/#creator`,
          "name": "Ashar",
          "description": "Full-stack developer passionate about creating simple and powerful tools like Countdown Timer."
        },
        "mainEntity": {
          "@type": "WebApplication",
          "@id": `${SITE_URL}/#app`,
          "name": "Countdown Timer",
          "description": "A fast, reliable, and easy-to-use online countdown timer for managing time-sensitive tasks like live events, study sessions, product launches, and flash sales.",
          "applicationCategory": "Utility",
          "operatingSystem": "All",
          "featureList": [
            "Customizable time input",
            "Start, Pause, and Reset functionality",
            "Responsive design for desktop and mobile",
            "No login required",
            "Accurate to the second"
          ],
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "author": {
            "@id": `${SITE_URL}/#creator`
          }
        }
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#creator`,
        "name": "Ashar",
        "jobTitle": "Full-Stack Developer",
        "description": "Creator of Countdown Timer, passionate about building simple and effective tools."
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the countdown timer free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Countdown Timer X is 100% free to use and always will be."
            }
          },
          {
            "@type": "Question",
            "name": "Do you collect any data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No personal data is collected. We respect your privacy and do not store timers or usage data."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use it offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, it requires an internet connection. Offline mode is planned for a future release."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "@id": `${SITE_URL}/#review1`,
        "reviewBody": "Countdown Timer is a game changer! I use it daily for my Pomodoro work sessions. It's fast, simple, and never lets me down.",
        "author": {
          "@type": "Person",
          "name": "Alex Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "@id": `${SITE_URL}/#review2`,
        "reviewBody": "I needed a countdown for my online classes. This tool works on all devices and keeps my students focused. Highly recommended!",
        "author": {
          "@type": "Person",
          "name": "Priya Mehta"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "@id": `${SITE_URL}/#review3`,
        "reviewBody": "Exactly what I was looking for. No login, no ads, just a clean timer that works. The reset and pause features are perfect!",
        "author": {
          "@type": "Person",
          "name": "Mark Rivera"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD - This remains inside the component as a <script> tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Your existing page content components */}
      <div>
        <Countdown />

        <ShareButtons/>
        <AboutAuthor />
        <HowItWorks />
        <UseCases />
        <TrustBadges />
        <CountdownTimerGuide />
        <Testimonials/>
        <FAQSection />
        <TimerTable/>
        <TagsSection />
      </div>
    </>
  );
}
// // pages/index.tsx (or whatever your main page file is)

// import dynamic from 'next/dynamic';
// import Head from 'next/head'; // Import Head component

// // Import your custom components
// import TagsSection from "@/components/TagsSection";
// import AboutAuthor from '@/components/eeat/AboutAuthor';
// import HowItWorks from '@/components/eeat/HowItWorks';
// import UseCases from '@/components/eeat/UseCases';
// import TrustBadges from '@/components/eeat/TrustBadges';
// import FAQSection from '@/components/eeat/FAQSection';
// import Testimonials from '@/components/Testimonials';
// import TimerTable from '@/components/eeat/table';

// // Dynamically import components
// const Countdown = dynamic(() => import('@/components/count-down'), {
//   loading: () => <p>Loading Countdown...</p>,
//   ssr: true,
// });
// const CountdownTimerGuide = dynamic(() => import('@/components/article'), {
//   loading: () => <p>Loading Article...</p>,
//   ssr: true,
// });
// export const revalidate = 60; // Revalidate every 60 seconds
// export const SITE_URL = "http://localhost:3000"; // Replace with your actual site URL
// export default function Home() {
//   // Define schemaData directly within the component or
//   // if it's a very large and static object, you could define it outside
//   // or even fetch it if it were dynamic from an API.
//   // For this scenario, keeping it here is fine as it's specific to this page.
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "WebPage",
//         "@id": "https://your-countdown-timer-website.com/",
//         "url": "https://your-countdown-timer-website.com/",
//         "name": "Free Online Countdown Timer - Simple & Reliable",
//         "description": "Use our free online countdown timer to manage time effectively. Perfect for events, study sessions, product launches, and more. No login required, fast, and reliable.",
//         "inLanguage": "en-US",
//         "datePublished": "2023-01-01T00:00:00Z",
//         // Dynamically set dateModified to the current time for freshness
//         "dateModified": new Date().toISOString(), 
//         "publisher": {
//           "@type": "Person",
//           "@id": "https://your-countdown-timer-website.com/#creator",
//           "name": "Ashar",
//           "description": "Full-stack developer passionate about creating simple and powerful tools like Countdown Timer."
//         },
//         "mainEntity": {
//           "@type": "WebApplication",
//           "@id": "https://your-countdown-timer-website.com/#app",
//           "name": "Countdown Timer",
//           "description": "A fast, reliable, and easy-to-use online countdown timer for managing time-sensitive tasks like live events, study sessions, product launches, and flash sales.",
//           "applicationCategory": "Utility",
//           "operatingSystem": "All",
//           "featureList": [
//             "Customizable time input",
//             "Start, Pause, and Reset functionality",
//             "Responsive design for desktop and mobile",
//             "No login required",
//             "Accurate to the second"
//           ],
//           "offers": {
//             "@type": "Offer",
//             "price": "0",
//             "priceCurrency": "USD",
//             "availability": "https://schema.org/InStock"
//           },
//           "author": {
//             "@id": "https://your-countdown-timer-website.com/#creator"
//           }
//         }
//       },
//       {
//         "@type": "Person",
//         "@id": "https://your-countdown-timer-website.com/#creator",
//         "name": "Ashar",
//         "jobTitle": "Full-Stack Developer",
//         "description": "Creator of Countdown Timer, passionate about building simple and effective tools."
//       },
//       {
//         "@type": "FAQPage",
//         "@id": "https://your-countdown-timer-website.com/#faq",
//         "mainEntity": [
//           {
//             "@type": "Question",
//             "name": "Is the countdown timer free?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "Yes! Countdown Timer X is 100% free to use and always will be."
//             }
//           },
//           {
//             "@type": "Question",
//             "name": "Do you collect any data?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "No personal data is collected. We respect your privacy and do not store timers or usage data."
//             }
//           },
//           {
//             "@type": "Question",
//             "name": "Can I use it offline?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "Currently, it requires an internet connection. Offline mode is planned for a future release."
//             }
//           }
//         ]
//       },
//       {
//         "@type": "Review",
//         "@id": "https://your-countdown-timer-website.com/#review1",
//         "reviewBody": "Countdown Timer is a game changer! I use it daily for my Pomodoro work sessions. It's fast, simple, and never lets me down.",
//         "author": {
//           "@type": "Person",
//           "name": "Alex Johnson"
//         },
//         "reviewRating": {
//           "@type": "Rating",
//           "ratingValue": "5",
//           "bestRating": "5"
//         }
//       },
//       {
//         "@type": "Review",
//         "@id": "https://your-countdown-timer-website.com/#review2",
//         "reviewBody": "I needed a countdown for my online classes. This tool works on all devices and keeps my students focused. Highly recommended!",
//         "author": {
//           "@type": "Person",
//           "name": "Priya Mehta"
//         },
//         "reviewRating": {
//           "@type": "Rating",
//           "ratingValue": "5",
//           "bestRating": "5"
//         }
//       },
//       {
//         "@type": "Review",
//         "@id": "https://your-countdown-timer-website.com/#review3",
//         "reviewBody": "Exactly what I was looking for. No login, no ads, just a clean timer that works. The reset and pause features are perfect!",
//         "author": {
//           "@type": "Person",
//           "name": "Mark Rivera"
//         },
//         "reviewRating": {
//           "@type": "Rating",
//           "ratingValue": "5",
//           "bestRating": "5"
//         }
//       }
//     ]
//   };

//   return (
//     <>
//       <Head>
//         <title>Free Online Countdown Timer - Simple & Reliable</title>
//         <meta
//           name="description"
//           content="Use our free online countdown timer to manage time effectively. Perfect for events, study sessions, product launches, and more. No login required, fast, and reliable."
//         />
//         <meta
//           name="keywords"
//           content="countdown timer, online timer, free timer, digital countdown, pomodoro timer, event timer, product launch timer, flash sale timer"
//         />
//         <meta name="author" content="Ashar" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
//         {/* Open Graph Tags */}
//         <meta property="og:title" content="Free Online Countdown Timer - Simple & Reliable" />
//         <meta
//           property="og:description"
//           content="Use our free online countdown timer to manage time effectively. Perfect for events, study sessions, product launches, and more. No login required."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://your-countdown-timer-website.com/" />
//         <meta property="og:image" content="https://your-countdown-timer-website.com/og-image.jpg" />
//         <meta property="og:site_name" content="Countdown Timer" />
        
//         {/* Twitter Card Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Free Online Countdown Timer - Simple & Reliable" />
//         <meta
//           name="twitter:description"
//           content="Use our free online countdown timer to manage time effectively. Perfect for events, study sessions, product launches, and more."
//         />
//         <meta name="twitter:image" content="https://your-countdown-timer-website.com/og-image.jpg" />
//       </Head>
      
//       {/* Schema.org JSON-LD */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//       />

//       {/* Your existing page content components */}
//       <div>
//         <Countdown />
//         <AboutAuthor />
//         <HowItWorks />
//         <UseCases />
//         <TrustBadges />
//         <CountdownTimerGuide />
//         <Testimonials/>
//         <FAQSection />
//         <TimerTable/>
//         <TagsSection />
//       </div>
//     </>
//   );
// }
// export const metadata = {
//   title: "Countdown Timer - Home",
//   description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//   keywords: [
//     "countdown timer", 
//     "countdown app", 
//     "countdown timer tool", 
//     "countdown timer X", 
//     "tags", 
//     "articles", 
//     "Next.js"
//   ],
//   authors: [{ name: "Muhammad Ashar" }],
//   alternates: {
//     canonical: "http:localhost:3000/",
//   },
//   openGraph: {
//     title: "Countdown Timer - Home",
//     description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//     url: "https://countdowntimerx.com",
//     siteName: "Countdown Timer X",
//     images: [
//       {
//         url: "https://countdowntimerx.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Countdown Timer X",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Countdown Timer X - Home",
//     description: "Countdown Timer X - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//     images: ["https://countdowntimerx.com/og-image.png"],
//     creator: "@yourTwitterHandle", // Replace with actual handle
//   },
// };





// import dynamic from 'next/dynamic';
// import TagsSection from "@/components/TagsSection";
// import AboutAuthor from '@/components/eeat/AboutAuthor';
// import HowItWorks from '@/components/eeat/HowItWorks';
// import UseCases from '@/components/eeat/UseCases';
// import TrustBadges from '@/components/eeat/TrustBadges';
// import FAQSection from '@/components/eeat/FAQSection';
// import Testimonials from '@/components/Testimonials';
// import TimerTable from '@/components/eeat/table';
// const Countdown = dynamic(() => import('@/components/count-down'), {
//   loading: () => <p>Loading Countdown...</p>,
//   ssr: true, 
// });
// const CountdownTimerGuide = dynamic(() => import('@/components/article'), {
//   loading: () => <p>Loading Article...</p>,
//   ssr: true,
// });
// export default function Home() {
//   return (
//         <div>
//       <Countdown />
//       <AboutAuthor />
//       <HowItWorks />
//       <UseCases />
//       <TrustBadges />
//       <CountdownTimerGuide />
//       < Testimonials/>
//       < FAQSection />
//       < TimerTable/>
//       <TagsSection />
//     </div>
//   );
// }






///////////////////////////////////////////////////////////////////////////////////////////metadata for home page/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app/metadata.ts (or wherever you keep metadata in your project)
















// export const metadata = {
//   title: "Countdown Timer - Home",
//   description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//   keywords: "countdown timer, countdown app, countdown timer tool, countdown timer X, tags, articles, Next.js",
//   author: "Muhammad Ashar",
//   openGraph: {
//     title: "Countdown Timer - Home",
//     description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//     url: "https://yourdomain.com",
//     siteName: "Countdown Timer",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Countdown Timer X",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Countdown Timer X - Home",
//     description: "Countdown Timer X - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//     images: ["https://yourdomain.com/og-image.png"],
//     creator: "@yourTwitterHandle",
//   },
// };




