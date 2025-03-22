"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ArrowLeft, Zap, Cpu, WifiOff, } from 'lucide-react';
import { ModeToggle } from '@/components/darktheme';

const circuitLines = [
  'M10,30 L50,30 L50,50 L90,50 L90,30 L130,30 L130,70 L170,70',
  'M190,70 L230,70 L230,30 L270,30 L270,50 L310,50 L310,20',
  'M10,100 L50,100 L50,140 L90,140 L90,100 L130,100 L150,120 L170,100',
  'M190,100 L210,80 L230,100 L230,140 L270,140 L290,120 L310,140',
  'M30,170 L30,210 L90,210 L90,170 L120,200 L150,170 L150,210',
  'M170,190 L230,190 L230,210 L270,210 L270,170 L310,170 L310,190 L350,190',
];

export default function NotFoundPage() {
  const [errorCode, setErrorCode] = useState('404');
  const [blinkState, setBlinkState] = useState(true);
  const { theme } = useTheme();
  const [showSparks, setShowSparks] = useState(false);

  useEffect(() => {
    // Blink the error code like a malfunctioning display
    const blinkInterval = setInterval(() => {
      setBlinkState((prev) => !prev);
    }, 800);

    // Generate random error codes for a "glitchy" effect
    const errorInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        // Sometimes show binary or hex
        setErrorCode(
          Math.random() > 0.5
            ? '0b' + (404).toString(2)
            : '0x' + (404).toString(16).toUpperCase()
        );
      } else {
        setErrorCode('404');
      }
    }, 2000);

    // Show sparks animation periodically
    const sparkInterval = setInterval(() => {
      setShowSparks(true);
      setTimeout(() => setShowSparks(false), 700);
    }, 5000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(errorInterval);
      clearInterval(sparkInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 flex flex-col">
      <div className="container mx-auto px-4 flex justify-end pt-6">
        <ModeToggle />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Circuit board background */}
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20 pointer-events-none">
          <svg width="100%" height="100%" className="stroke-blue-600 dark:stroke-blue-400">
            {circuitLines.map((path, i) => (
              <React.Fragment key={i}>
                <path 
                  d={path} 
                  fill="none" 
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                {/* Add circuit nodes */}
                {path.split(' ').filter(p => p.includes(',')).map((point, j) => {
                  const [x, y] = point.split(',');
                  return (
                    <circle 
                      key={`${i}-${j}`} 
                      cx={x} 
                      cy={y} 
                      r="3" 
                      className="fill-blue-600 dark:fill-blue-400"
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </svg>
        </div>

        {/* Main content */}
        <div className="z-10 text-center max-w-2xl">
          <div className="relative mb-8">
            <h1 
              className={`text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 ${
                blinkState ? 'opacity-100' : 'opacity-70'
              }`}
            >
              {errorCode}
            </h1>
            
            {/* Animated sparks */}
            {showSparks && (
              <>
                <Zap 
                  className="absolute -top-4 -right-3 text-yellow-400 animate-pulse" 
                  size={40} 
                />
                <Zap 
                  className="absolute -bottom-2 -left-5 text-yellow-400 animate-pulse" 
                  size={30}
                />
              </>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Connection Error: Page Not Found
          </h2>
          
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-4">
              <WifiOff className="w-8 h-8 text-red-500 mr-3" />
              <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Oops! Our engineers detected a <span className="font-mono font-bold">0 Ω</span> resistance in the circuit. 
              Looks like this connection has violated Ohm's Law!
            </p>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded text-left mb-4">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold text-yellow-700 dark:text-yellow-400">ERROR:</span> 404 Not Found<br/>
                <span className="font-bold text-yellow-700 dark:text-yellow-400">CAUSE:</span> Webpage oscillator operating at unexpected frequency<br/>
                <span className="font-bold text-yellow-700 dark:text-yellow-400">REMEDY:</span> Return to homepage and recalibrate
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "In theory, theory and practice are the same. In practice, they are not." - Engineering Proverb
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Visit Our Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Animated circuit component on bottom */}
      <div className="w-full h-16 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-blue-200 dark:bg-blue-900"></div>
        </div>
        <div 
          className="absolute h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 left-0 top-6 animate-[moveHorizontal_4s_linear_infinite]"
          style={{ boxShadow: '0 0 10px rgba(37, 99, 235, 0.7), 0 0 20px rgba(37, 99, 235, 0.5)' }}
        ></div>
      </div>

      <footer className="py-4 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>IEEE Student Branch, Galgotias University</p>
      </footer>
    </div>
  );
}
