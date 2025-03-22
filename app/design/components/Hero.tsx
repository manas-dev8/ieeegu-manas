import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-4">IEEE GU Design System</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              A comprehensive collection of design guidelines, components, and resources to create consistent 
              and cohesive experiences across IEEE Galgotias University digital platforms.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" />
              <path d="M30 35H70M30 50H70M30 65H70" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <rect x="40" y="30" width="20" height="10" fill="white" fillOpacity="0.3" />
              <rect x="45" y="45" width="25" height="10" fill="white" fillOpacity="0.5" />
              <rect x="35" y="60" width="15" height="10" fill="white" fillOpacity="0.7" />
            </svg>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-50 transition">
            Getting Started
          </button>
          <button className="border border-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Download Assets
          </button>
        </div>
      </div>
    </section>
  );
}
