import React from 'react';
import { Metadata } from 'next';
import Hero from '@/app/design/components/Hero';
import DesignPrinciples from '@/app/design/components/DesignPrinciples';
import Typography from '@/app/design/components/Typography';
import ColorSystem from '@/app/design/components/ColorSystem';
import SpacingGrid from '@/app/design/components/SpacingGrid';
import UIComponents from '@/app/design/components/UIComponents';
import Guidelines from '@/app/design/components/Guidelines';

export const metadata: Metadata = {
  title: 'IEEE GU Design System',
  description: 'The comprehensive design system for IEEE Galgotias University website',
};

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <nav className="py-8 mb-12 border-b sticky top-0 bg-white z-10">
          <ul className="flex flex-wrap gap-6">
            <li><a href="#principles" className="text-blue-600 hover:underline">Principles</a></li>
            <li><a href="#typography" className="text-blue-600 hover:underline">Typography</a></li>
            <li><a href="#colors" className="text-blue-600 hover:underline">Colors</a></li>
            <li><a href="#spacing" className="text-blue-600 hover:underline">Spacing & Grid</a></li>
            <li><a href="#components" className="text-blue-600 hover:underline">UI Components</a></li>
            <li><a href="#guidelines" className="text-blue-600 hover:underline">Guidelines</a></li>
          </ul>
        </nav>
        
        <section id="principles" className="mb-20">
          <DesignPrinciples />
        </section>
        
        <section id="typography" className="mb-20">
          <Typography />
        </section>
        
        <section id="colors" className="mb-20">
          <ColorSystem />
        </section>
        
        <section id="spacing" className="mb-20">
          <SpacingGrid />
        </section>
        
        <section id="components" className="mb-20">
          <UIComponents />
        </section>
        
        <section id="guidelines" className="mb-20">
          <Guidelines />
        </section>
      </div>
      
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center text-gray-400">
            <p>© 2023 IEEE Galgotias University. All rights reserved.</p>
            <p className="mt-2">This design system is for authorized use only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
