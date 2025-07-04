import React from 'react';

const AboutAuthor: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-200 mb-6">About the Creator</h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Hi, I'm <span className="font-semibold text-lime-400">Ashar</span>, a full-stack developer passionate about building simple, powerful tools like <span className="font-medium text-gray-200">Countdown Timer</span>.
          This tool was crafted to be fast, reliable, and easy to use for anyone managing time-sensitive tasks.
        </p>
      </div>
    </section>
  );
};

export default AboutAuthor;

