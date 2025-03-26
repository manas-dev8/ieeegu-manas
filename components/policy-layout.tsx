import React from 'react';
import Link from 'next/link';

interface PolicyLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated?: string;
}

export function PolicyLayout({ children, title, lastUpdated }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          {lastUpdated && (
            <p className="text-blue-100 mt-2">Last updated: {lastUpdated}</p>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl py-12 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} IEEE Galgotias University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
