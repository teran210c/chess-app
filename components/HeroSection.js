import React from 'react';

function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-teal-100">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          The best customer experiences
        </h1>
        <p className="text-gray-600 mb-6">
          Zendesk provides the complete customer service solution that’s easy to use and scales with your business.
        </p>
        <div className="space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
            Free trial
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-100">
            View demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/mano.jpeg"
          alt="Hero section illustration"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;