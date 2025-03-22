import React from 'react';

export default function SpacingGrid() {
  const spacingSizes = [
    { name: 'xs', value: '0.25rem', pixels: '4px' },
    { name: 'sm', value: '0.5rem', pixels: '8px' },
    { name: 'md', value: '1rem', pixels: '16px' },
    { name: 'lg', value: '1.5rem', pixels: '24px' },
    { name: 'xl', value: '2rem', pixels: '32px' },
    { name: '2xl', value: '3rem', pixels: '48px' },
    { name: '3xl', value: '4rem', pixels: '64px' },
    { name: '4xl', value: '6rem', pixels: '96px' },
  ];

  const gridSizes = [
    { name: 'xs', columns: 1 },
    { name: 'sm', columns: 2 },
    { name: 'md', columns: 4 },
    { name: 'lg', columns: 6 },
    { name: 'xl', columns: 12 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Spacing & Grid System</h2>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Spacing Scale</h3>
          <p className="text-gray-600 mt-1">
            Consistent spacing helps create visual harmony and improve readability.
          </p>
        </div>
        
        <div className="space-y-4">
          {spacingSizes.map((size) => (
            <div key={size.name} className="flex items-center">
              <div className="w-16 flex-shrink-0">
                <span className="text-sm font-medium">{size.name}</span>
              </div>
              <div 
                className="bg-blue-200 ml-4" 
                style={{ 
                  height: '16px',
                  width: size.value 
                }}
              ></div>
              <div className="ml-4 text-gray-600 text-sm">
                {size.value} / {size.pixels}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Usage Example</h4>
          <div className="border border-gray-300 p-4 rounded bg-white">
            <div className="flex flex-wrap gap-4">
              <div className="p-4 bg-blue-100 rounded">Padding: 16px</div>
              <div className="p-6 bg-blue-100 rounded">Padding: 24px</div>
              <div className="p-8 bg-blue-100 rounded">Padding: 32px</div>
            </div>
            
            <div className="mt-4 flex gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded"></div>
              <div className="w-16 h-16 bg-blue-500 rounded"></div>
              <div className="w-16 h-16 bg-blue-500 rounded"></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Elements with consistent spacing and gaps</p>
        </div>
      </div>
      
      <div className="mb-12">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-600">Grid System</h3>
          <p className="text-gray-600 mt-1">
            Our responsive grid system adapts to different screen sizes.
          </p>
        </div>
        
        <div className="space-y-8">
          {gridSizes.map((grid) => (
            <div key={grid.name} className="space-y-2">
              <p className="font-medium text-sm text-gray-600">{grid.name} breakpoint: {grid.columns} columns</p>
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${grid.columns}, 1fr)` }}>
                {Array(grid.columns).fill(0).map((_, i) => (
                  <div key={i} className="bg-blue-500 h-8 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="font-medium mb-3">Responsive Example</h4>
          <div className="border border-gray-300 p-4 rounded bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded">Item 1</div>
              <div className="bg-blue-100 p-4 rounded">Item 2</div>
              <div className="bg-blue-100 p-4 rounded">Item 3</div>
              <div className="bg-blue-100 p-4 rounded">Item 4</div>
              <div className="bg-blue-100 p-4 rounded">Item 5</div>
              <div className="bg-blue-100 p-4 rounded">Item 6</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Grid that changes from 1 to 3 columns based on screen size</p>
        </div>
      </div>
    </div>
  );
}
