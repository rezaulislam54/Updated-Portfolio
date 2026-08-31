import React, { useState } from 'react';
import { Sparkles, Code2, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabIcons = {
    all: <Sparkles className="w-4 h-4" />,
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    tools: <Wrench className="w-4 h-4" />,
  };

  const tabs = [
    { id: 'all', label: 'ALL TECHNOLOGIES' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND & CLOUD' },
    { id: 'database', label: 'DATABASES' },
    { id: 'tools', label: 'TOOLS & DEVOPS' },
  ];

  const displayedSkills = activeTab === 'all'
    ? skillCategories.flatMap(cat => cat.skills)
    : skillCategories.find(cat => cat.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with UPPERCASE */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-violet-950/60 border border-violet-500/30 text-violet-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            MY <span className="text-gradient-violet">SKILLS</span> & TECH STACK
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested stack of modern frontend frameworks, backend microservices, robust databases, and continuous deployment tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-white shadow-md shadow-cyan-500/20'
                    : 'bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{tabIcons[tab.id]}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {displayedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-[14px] flex flex-col items-center text-center relative overflow-hidden group border border-slate-800/80 hover:border-brand-cyan/40 transition-all duration-200"
            >
              {/* Top gradient glow indicator */}
              <div 
                className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: skill.color || '#06b6d4' }}
              />

              {/* Icon Frame with smooth subtle hover */}
              <div className="w-12 h-12 rounded-[10px] bg-slate-900/90 border border-slate-800 flex items-center justify-center text-2xl mb-3 group-hover:scale-105 transition-transform duration-200 shadow-inner">
                <span>{skill.icon}</span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
                {skill.name}
              </h3>

              {/* Badge Level */}
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-[6px] bg-slate-800/90 text-slate-300 mb-3 border border-slate-700/60 uppercase">
                {skill.badge}
              </span>

              {/* Animated Progress Bar */}
              <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color || '#06b6d4'}, #8b5cf6)`
                  }}
                />
              </div>

              <div className="flex justify-between items-center w-full mt-1.5 px-0.5 text-[9px] font-mono text-slate-500 uppercase">
                <span>PROFICIENCY</span>
                <span className="text-slate-400 font-semibold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights Footer */}
        <div className="mt-12 p-6 rounded-[14px] bg-dark-900/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-[8px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">CONTINUOUS EVOLUTION</div>
              <div className="text-xs text-slate-400">Always learning modern libraries, TypeScript, Next.js App Router, and AI tooling.</div>
            </div>
          </div>

          <a
            href="#projects"
            className="text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-cyan-300 flex items-center gap-1.5 ml-auto"
          >
            <span>SEE THESE SKILLS IN ACTION</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
