import React from 'react';

const faqs = [
  {
    q: "Is the countdown timer free?",
    a: "Yes! Countdown Timer X is 100% free to use and always will be.",
  },
  {
    q: "Do you collect any data?",
    a: "No personal data is collected. We respect your privacy and do not store timers or usage data.",
  },
  {
    q: "Can I use it offline?",
    a: "Currently, it requires an internet connection. Offline mode is planned for a future release.",
  },
  {
    q: "Does the timer work in the background?",
    a: "Yes, the timer continues to run even if you switch tabs or minimize the browser.",
  },
  {
    q: "Can I customize the timer sound or notification?",
    a: "Not yet, but custom sounds and alert options are on the roadmap.",
  },
  {
    q: "Is there a mobile version?",
    a: "Yes! The tool is fully responsive and works great on phones and tablets.",
  },
  {
    q: "Do I need to create an account?",
    a: "No sign-up or login is required. Just set the time and go.",
  },
  {
    q: "Can I embed this timer on my website?",
    a: "We're working on a widget version. Stay tuned!",
  },
  {
    q: "Will my timer reset if I refresh the page?",
    a: "Yes, refreshing the page will reset the timer. A persistent timer feature is coming soon.",
  },
  {
    q: "How accurate is the timer?",
    a: "It uses high-resolution browser APIs for precise countdowns, accurate to the second.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-black py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg text-lime-400">{faq.q}</h3>
            <p className="text-gray-200 mt-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}