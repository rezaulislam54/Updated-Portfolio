import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Code2, HeartHandshake, Zap } from 'lucide-react';

export default function Stats() {
  const { stats } = portfolioData;

  const statIcons = [
    <Code2 className="w-6 h-6 text-brand-cyan transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />,
    <Award className="w-6 h-6 text-brand-violet transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />,
    <HeartHandshake className="w-6 h-6 text-brand-emerald transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />,
    <Zap className="w-6 h-6 text-brand-pink transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6 animate-pulse" />,
  ];

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-5 sm:p-6 rounded-[14px] flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden group border border-slate-800/80 hover:border-brand-cyan/45 transition-all duration-300"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-3 rounded-[12px] bg-slate-900/90 border border-slate-800/90 mb-3.5 group-hover:bg-slate-800 group-hover:border-cyan-500/40 transition-all duration-300 shadow-md">
              {statIcons[idx]}
            </div>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight group-hover:text-gradient-cyan transition-all duration-300">
              {item.value}
            </div>

            <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-0.5">
              {item.label}
            </div>

            <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
