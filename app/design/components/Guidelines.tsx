import React from 'react';

export default function Guidelines() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">Community Guidelines</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-2xl font-bold mb-4">Using IEEE GU Assets</h3>
        <p className="text-gray-700 mb-6">
          When using IEEE Galgotias University assets, please adhere to the following guidelines to ensure 
          consistent representation of our brand across all platforms and collaborations.
        </p>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Logo Usage</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Always maintain the minimum clear space around the logo</li>
              <li>Do not alter the logo colors or proportions</li>
              <li>Use the provided logo files without modification</li>
              <li>The logo should always be clearly visible against its background</li>
              <li>For dark backgrounds, use the reversed (white) version of the logo</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Color Guidelines</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Primary blue (#2563EB) should be dominant in all branded materials</li>
              <li>Use the complete color palette as specified in the color system</li>
              <li>Maintain sufficient contrast ratios for accessibility</li>
              <li>Do not introduce additional colors without approval</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Typography</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Use Inter as the primary font family for all communications</li>
              <li>Follow the established type scale for consistency</li>
              <li>Maintain proper hierarchy with appropriate font sizes and weights</li>
              <li>Ensure text remains legible at all sizes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Photography & Imagery</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Use high-quality, professional images that reflect our academic environment</li>
              <li>Images should represent diversity and inclusivity</li>
              <li>When featuring technology, ensure it appears modern and relevant</li>
              <li>Obtain proper permissions before using photos of individuals</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Collaboration Guidelines</h3>
        <p className="text-gray-700 mb-6">
          When collaborating with IEEE Galgotias University on projects, events, or communications, please follow these guidelines:
        </p>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Brand Co-Presence</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Maintain equal visual weight between partner logos</li>
              <li>Adequate spacing must be maintained between different brand elements</li>
              <li>Follow co-branding approval processes before publication</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Communication Style</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Use clear, professional language consistent with academic standards</li>
              <li>Maintain IEEE GU's voice: knowledgeable, inspiring, and approachable</li>
              <li>Ensure all content is accurate and fact-checked</li>
              <li>Avoid jargon when communicating with general audiences</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Digital Presence</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Use consistent hashtags and mentions in social media</li>
              <li>Tag official IEEE GU accounts in relevant posts</li>
              <li>Follow link sharing protocols for websites and registration pages</li>
              <li>Ensure all digital materials are accessible and responsive</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-blue-600 mb-2">Approval Process</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Submit all materials using IEEE GU branding for review before publication</li>
              <li>Allow minimum 5 business days for approval of materials</li>
              <li>Provide context for how and where materials will be used</li>
              <li>Contact branding@ieeegu.org for approvals and questions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
