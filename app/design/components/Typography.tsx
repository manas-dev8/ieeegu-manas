import React from 'react';

export default function Typography() {
  const fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Typography</h2>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Font Family</h3>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-2 text-sm text-gray-500">Primary Font</p>
          <p style={{ fontFamily }} className="text-2xl text-black">
            Inter
          </p>
          <p className="mt-4 text-gray-600">
            The Inter font is a variable font family designed for computer screens.
            It features a tall x-height to aid in readability of mixed-case text.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="font-light">Light</div>
            <div className="font-normal">Regular</div>
            <div className="font-medium">Medium</div>
            <div className="font-semibold">Semi-bold</div>
            <div className="font-bold">Bold</div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Type Scale</h3>
        </div>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">h1 / 36px / font-bold</p>
            <h1 className="text-5xl text-black font-bold">Heading Level 1</h1>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">h2 / 30px / font-bold</p>
            <h2 className="text-4xl text-black font-bold">Heading Level 2</h2>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">h3 / 24px / font-bold</p>
            <h3 className="text-3xl text-black  font-bold">Heading Level 3</h3>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">h4 / 20px / font-bold</p>
            <h4 className="text-2xl  text-black font-bold">Heading Level 4</h4>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">h5 / 18px / font-bold</p>
            <h5 className="text-xl  text-black font-bold">Heading Level 5</h5>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">h6 / 16px / font-bold</p>
            <h6 className="text-lg text-black font-bold">Heading Level 6</h6>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">Body / 16px / font-normal</p>
            <p className="text-base text-black ">
              This is the standard body text used across the IEEE GU website. It has good readability
              and is set at 16px with comfortable line height for easy scanning of content.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2 text-xs text-gray-500">Small / 14px / font-normal</p>
            <p className="text-sm text-black ">
              This is smaller text used for secondary information, captions, and footnotes where space is limited but readability is still important.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
