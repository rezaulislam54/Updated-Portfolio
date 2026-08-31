import React, { useState, useEffect } from 'react';

export default function LoadingSpinner({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500);
          }, 200);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060913] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

      {/* Central Spinner Graphics */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-6">
        
        {/* Outer Rotating Neon Cyan Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-500/60 animate-spin" style={{ animationDuration: '1.2s' }}></div>
        
        {/* Middle Counter-Rotating Violet Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-violet-400 border-l-pink-500/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.6s' }}></div>
        
        {/* Inner Golden Monogram Logo */}
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-xl shadow-cyan-500/20 overflow-hidden p-2">
          <img
            src="/images/logo.png"
            alt="Rezaul Islam Logo"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      {/* Progress Counter & Name */}
      <div className="text-center space-y-2 z-10">
        <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-widest uppercase">
          MD. REZAUL ISLAM
        </div>
        <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          INITIALIZING PORTFOLIO... <span className="text-white font-bold">{progress}%</span>
        </div>

        {/* Mini progress bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto mt-2">
          <div
            className="h-full bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
