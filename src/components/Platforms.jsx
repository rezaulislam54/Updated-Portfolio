import React from 'react';
import { Smartphone, Tablet, Monitor, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Platforms() {
  const { platforms } = portfolioData;

  const platformIcons = {
    Smartphone: <Smartphone className="w-7 h-7 text-brand-cyan" />,
    Tablet: <Tablet className="w-7 h-7 text-brand-violet" />,
    Monitor: <Monitor className="w-7 h-7 text-brand-pink" />,
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with UPPERCASE */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CROSS-PLATFORM COMPATIBILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 uppercase">
            ENGINEERED FOR <span className="text-gradient-cyan">EVERY SCREEN & DEVICE</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            100% fluid responsive design guaranteeing pixel-perfect typography, smooth gestures, and optimal loading speeds on any viewport.
          </p>
        </div>

        {/* 3 Device Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((plat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-[14px] border border-slate-800/80 hover:border-brand-cyan/40 text-center flex flex-col items-center group transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-[10px] bg-dark-900 border border-slate-800 flex items-center justify-center mb-4 shadow-md shadow-black/40">
                {platformIcons[plat.icon]}
              </div>

              <h3 className="text-base font-bold text-white mb-1 uppercase tracking-wide">{plat.name}</h3>
              <span className="text-[11px] font-mono text-brand-cyan mb-2 uppercase">{plat.screen}</span>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{plat.description}</p>

              <div className="mt-auto inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>FULLY OPTIMIZED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
