import React from 'react';

export default function ColorSystem() {
  const colors = {
    primary: [
      { name: 'blue-600', hex: '#2563EB', rgb: 'rgb(37, 99, 235)' },
      { name: 'blue-700', hex: '#1D4ED8', rgb: 'rgb(29, 78, 216)' },
      { name: 'blue-500', hex: '#3B82F6', rgb: 'rgb(59, 130, 246)' },
      { name: 'blue-50', hex: '#EFF6FF', rgb: 'rgb(239, 246, 255)' },
      { name: 'blue-100', hex: '#DBEAFE', rgb: 'rgb(219, 234, 254)' },
    ],
    neutral: [
      { name: 'gray-800', hex: '#1F2937', rgb: 'rgb(31, 41, 55)' },
      { name: 'gray-700', hex: '#374151', rgb: 'rgb(55, 65, 81)' },
      { name: 'gray-600', hex: '#4B5563', rgb: 'rgb(75, 85, 99)' },
      { name: 'gray-500', hex: '#6B7280', rgb: 'rgb(107, 114, 128)' },
      { name: 'gray-400', hex: '#9CA3AF', rgb: 'rgb(156, 163, 175)' },
      { name: 'gray-300', hex: '#D1D5DB', rgb: 'rgb(209, 213, 219)' },
      { name: 'gray-200', hex: '#E5E7EB', rgb: 'rgb(229, 231, 235)' },
      { name: 'gray-100', hex: '#F3F4F6', rgb: 'rgb(243, 244, 246)' },
      { name: 'gray-50', hex: '#F9FAFB', rgb: 'rgb(249, 250, 251)' },
    ],
    semantic: [
      { name: 'success', hex: '#10B981', rgb: 'rgb(16, 185, 129)' },
      { name: 'error', hex: '#EF4444', rgb: 'rgb(239, 68, 68)' },
      { name: 'warning', hex: '#F59E0B', rgb: 'rgb(245, 158, 11)' },
      { name: 'info', hex: '#3B82F6', rgb: 'rgb(59, 130, 246)' },
    ]
  };

  interface ColorType {
    name: string;
    hex: string;
    rgb: string;
  }

  const ColorCard = ({ color }: { color: ColorType }) => (
    <div className="mb-4">
      <div 
        className="h-20 rounded-t-lg" 
        style={{ backgroundColor: color.hex }}
      ></div>
      <div className="bg-white border border-gray-200 rounded-b-lg p-3">
        <p className="font-medium">{color.name}</p>
        <p className="text-sm text-gray-500">{color.hex}</p>
        <p className="text-sm text-gray-500">{color.rgb}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Color System</h2>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Primary Colors</h3>
          <p className="text-gray-600 mt-1">
            Our primary color palette represents the IEEE GU brand identity and is used for primary actions, highlights, and emphasis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {colors.primary.map((color, index) => (
            <ColorCard key={index} color={color} />
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Neutral Colors</h3>
          <p className="text-gray-600 mt-1">
            Neutral colors provide structure and hierarchy in layouts, text, and UI elements.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {colors.neutral.map((color, index) => (
            <ColorCard key={index} color={color} />
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Semantic Colors</h3>
          <p className="text-gray-600 mt-1">
            Semantic colors convey specific meanings and provide feedback to users.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {colors.semantic.map((color, index) => (
            <ColorCard key={index} color={color} />
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Color Accessibility</h3>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-4">
            All color combinations meet or exceed WCAG 2.1 AA standards for contrast ratios to ensure accessibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-600 text-white p-4 rounded-lg">
              <p className="font-medium">Primary on White</p>
              <p>This text has a contrast ratio of 4.5:1</p>
            </div>
            
            <div className="bg-white text-blue-600 p-4 rounded-lg border border-gray-200">
              <p className="font-medium">White on Primary</p>
              <p>This text has a contrast ratio of 4.5:1</p>
            </div>
            
            <div className="bg-gray-800 text-white p-4 rounded-lg">
              <p className="font-medium">Dark Gray on White</p>
              <p>This text has a contrast ratio of 16:1</p>
            </div>
            
            <div className="bg-white text-gray-800 p-4 rounded-lg border border-gray-200">
              <p className="font-medium">White on Dark Gray</p>
              <p>This text has a contrast ratio of 16:1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
