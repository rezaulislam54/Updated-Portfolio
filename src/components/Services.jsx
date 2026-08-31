import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Database, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const { services } = portfolioData;

  const serviceIcons = {
    Layers: <Layers className="w-6 h-6 text-brand-cyan" />,
    Palette: <Palette className="w-6 h-6 text-brand-violet" />,
    Database: <Database className="w-6 h-6 text-brand-emerald" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6 text-brand-amber" />,
    Zap: <Zap className="w-6 h-6 text-brand-pink" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with UPPERCASE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-violet-950/60 border border-violet-500/30 text-violet-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            SPECIALIZED <span className="text-gradient-violet">SERVICES</span> & SOLUTIONS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-standard engineering solutions tailored for startups, agencies, and businesses looking for dependable web applications.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="glass-card p-6 sm:p-8 rounded-[14px] border border-slate-800/80 hover:border-violet-500/40 group flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-[10px] bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-5 shadow-inner">
                  {serviceIcons[svc.icon]}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors uppercase tracking-wide">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order/Contact CTA */}
              <div className="pt-4 border-t border-slate-800/60">
                <a
                  href="#contact"
                  className="text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <span>REQUEST THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
