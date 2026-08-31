import React from 'react';
import { Sparkles, Search, Layout, Code, Server, CheckCircle, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function WorkProcess() {
  const { workProcess } = portfolioData;

  const iconMap = {
    Search: <Search className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    CheckCircle: <CheckCircle className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
  };

  return (
    <section id="process" className="py-10 sm:py-16 md:py-20 relative overflow-hidden bg-slate-950/60">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 26px heading on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW I WORK</span>
          </div>
          <h2 className="text-[26px] sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 uppercase leading-tight">
            STRUCTURED <span className="text-gradient-cyan">WORK PROCESS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            From the initial ideation to production deployment, every step is executed with precision, clean code architecture, and high communication standards.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {workProcess.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-7 rounded-[14px] relative overflow-hidden border border-slate-800/80 hover:border-brand-cyan/40 group flex flex-col justify-between transition-all duration-200"
            >
              {/* Step Number Backdrop */}
              <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-extrabold font-mono text-slate-800/30 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                {step.step}
              </div>

              <div>
                {/* Step Icon Badge */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[10px] bg-gradient-to-br ${step.color} p-[1.5px] mb-4 sm:mb-5 shadow-md shadow-cyan-500/10`}>
                  <div className="w-full h-full bg-dark-900 rounded-[9px] flex items-center justify-center text-white">
                    {iconMap[step.icon]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom line progress */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                <span>PHASE {step.step}</span>
                <span className="text-brand-cyan font-bold">ACTIVE MILESTONE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
