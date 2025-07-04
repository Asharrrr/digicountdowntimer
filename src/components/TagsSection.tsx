import React from 'react';

export  const revalidate = 60; 

const itags = [
  'countdown timer',
  'countdown clock',
  'squarespace countdown timer',
  'online timer',
  'retirement countdown clock',
  '15 minute timer',
  '20 minute timer',
  'digital countdown clock',
  '2 minute timer',
  '3 minute timer',
  'free countdown timer',
  '30 minute hourglass',
  'large countdown clock',
  '1 minute timer',
  'free timer',
  'large countdown timer',
  'powerpoint timer',
  'digital countdown timer',
  'one minute timer',
  '10 minute timer',
  'wedding countdown clock',
  'countdown timer for squarespace',
  'count up timer',
  'countdown timer shopify',
  'visual countdown timer',
  '30 minute timer',
  'webflow countdown timer',
  'countdown timer download',
  'countdown clock timer',
  'large digital countdown clock',
  'christmas countdown clock',
  'led countdown timer',
  'holiday countdown timer',
  'large display countdown timer',
  'minute timer',
  'countdown timer online',
  'countdown clock online',
  'online timer clock',
  'sendtric',
  'presentation timer',
  'christmas timer',
  'squarespace countdown',
  'countdown watch',
  'countdown timer for website',
  'led countdown clock',
  'countdown clock for desktop',
  
];

const TagsSection = () => {
  return (
    <section className="w-full py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Tags</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {itags.map((itag) => (
            <span
            key={itag}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-xs font-serif hover:bg-blue-200 transition"
            >
              {itag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagsSection;
