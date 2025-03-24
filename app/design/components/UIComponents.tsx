import React from 'react';

export default function UIComponents() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">UI Components</h2>
      
      {/* Buttons */}
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Buttons</h3>
        </div>
        
        <div className="space-y-8">
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Primary Buttons</h4>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition">
                Primary Button
              </button>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition text-sm">
                Small Button
              </button>
              <button disabled className="bg-blue-400 text-white font-bold py-3 px-6 rounded-full cursor-not-allowed">
                Disabled
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Secondary Buttons</h4>
            <div className="flex flex-wrap gap-4">
              <button className="border border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition">
                Secondary Button
              </button>
              <button className="border border-blue-600 text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-50 transition text-sm">
                Small Button
              </button>
              <button disabled className="border border-gray-400 text-gray-400 font-bold py-3 px-6 rounded-full cursor-not-allowed">
                Disabled
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cards */}
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Cards</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-300 h-40"></div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Card Title</h4>
              <p className="text-gray-600 mb-4">This is a standard content card with an image, heading, and description.</p>
              <button className="text-blue-600 font-bold hover:underline">Learn More</button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-bold text-xl mb-2">Simple Card</h4>
            <p className="text-gray-600">This is a simpler card variation without an image that can be used for text content.</p>
          </div>
          
          <div className="bg-blue-600 text-white rounded-xl shadow-md p-6">
            <h4 className="font-bold text-xl mb-2">Accent Card</h4>
            <p className="text-blue-100">This is an accent card that uses brand colors to highlight important content.</p>
          </div>
        </div>
      </div>
      
      {/* Form Elements */}
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Form Elements</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Text Inputs</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Standard Input</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter text here" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Input with Error</label>
                <input 
                  type="text" 
                  className="w-full border border-red-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value="Invalid input" 
                />
                <p className="text-red-500 text-sm mt-1">This field contains an error</p>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Textarea</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter multiple lines of text"
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Selection Controls</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="checkbox1" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox1" className="ml-2 text-gray-700">Checkbox option</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="checkbox2" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked
                    readOnly
                  />
                  <label htmlFor="checkbox2" className="ml-2 text-gray-700">Selected checkbox</label>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="radio1" 
                    name="radio-group" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="radio1" className="ml-2 text-gray-700">Radio option 1</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="radio2" 
                    name="radio-group" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    checked
                    readOnly
                  />
                  <label htmlFor="radio2" className="ml-2 text-gray-700">Radio option 2</label>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Dropdown Select</label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Alert & Notification Components */}
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Alerts & Notifications</h3>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
            <p className="font-bold">Information</p>
            <p>This is an informational message for the user.</p>
          </div>
          
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
            <p className="font-bold">Success</p>
            <p>The operation completed successfully.</p>
          </div>
          
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
            <p className="font-bold">Warning</p>
            <p>Please be careful with this action.</p>
          </div>
          
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">Error</p>
            <p>Something went wrong. Please try again.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
