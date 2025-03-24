import React from 'react';

export default function DesignPrinciples() {
  const principles = [
    {
      title: "Clarity",
      description: "Information should be presented clearly and concisely, making it easy for users to find what they need and understand our content.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Consistency",
      description: "Applying consistent patterns and established components builds a cohesive experience that helps users easily navigate and interact with our platforms.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    {
      title: "Inclusivity",
      description: "Our design should be accessible to all users regardless of their abilities or circumstances, ensuring no one is excluded from accessing content.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "As a technology organization, our design should reflect our forward-thinking approach while remaining intuitive and functional for all users.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Design Principles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {principles.map((principle, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="text-blue-600 mb-4">
              {principle.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
            <p className="text-gray-600">{principle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
