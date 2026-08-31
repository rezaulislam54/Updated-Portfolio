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
    Code2: <Code2 className="w-5 h-5 text-brand-cyan" />,
    Award: <Award className="w-5 h-5 text-brand-violet" />,
    Users: <Users className="w-5 h-5 text-brand-emerald" />,
    Flame: <Flame className="w-5 h-5 text-brand-amber" />,
  };

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="glass-card p-4 sm:p-6 rounded-[14px] flex items-center gap-3 sm:gap-4 border border-slate-800/80 hover:border-brand-cyan/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="p-3 sm:p-3.5 rounded-[12px] bg-dark-900 border border-slate-800 text-brand-cyan group-hover:scale-105 transition-transform duration-300 shadow-md">
                {statIcons[stat.icon]}
              </div>

              {/* Number and Label */}
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono">
                    {isVisible ? stat.value : '0'}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-brand-cyan">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300 font-mono tracking-wider uppercase">
                  {stat.label}
                </p>
                <p className="text-[10px] text-slate-400 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
