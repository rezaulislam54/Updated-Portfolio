import React, { useState, useEffect, useRef } from 'react';
import { Award, Code2, Users, Flame, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Stats() {
  const { stats } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const statIcons = {
    Code2: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
    Award: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />,
    Users: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    Flame: <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />,
  };

  const iconBgStyles = {
    Code2: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-cyan-500/10',
    Award: 'bg-violet-500/10 border-violet-500/30 text-violet-400 shadow-violet-500/10',
    Users: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/10',
    Flame: 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/10',
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id || index}
              className="glass-card p-3.5 sm:p-5 rounded-[14px] flex items-center gap-3 sm:gap-4 border border-slate-800/80 hover:border-brand-cyan/40 transition-all duration-300 group"
            >
              {/* Icon Frame */}
              <div className={`p-2.5 sm:p-3 rounded-[12px] border ${iconBgStyles[stat.icon] || 'bg-slate-900 border-slate-800 text-cyan-400'} group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0 flex items-center justify-center`}>
                {statIcons[stat.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
              </div>

              {/* Number and Label */}
              <div className="min-w-0">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-mono">
                    {isVisible ? stat.value : '0+'}
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-brand-cyan">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-300 font-mono tracking-wider uppercase truncate">
                  {stat.label}
                </p>
                <p className="text-[9px] text-slate-400 hidden sm:block truncate">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
