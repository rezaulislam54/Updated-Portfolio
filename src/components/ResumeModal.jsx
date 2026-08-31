import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo, experience, education, certifications, skillCategories, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card with 14px rounded corners */}
      <div className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/90 rounded-[14px] shadow-2xl overflow-hidden z-10 my-auto animate-fadeIn max-h-[92vh] flex flex-col">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-950/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"></span>
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Curriculum Vitae Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-[10px] bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-1.5 hover:scale-105 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-[10px] bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 hover:rotate-90 transition-all duration-300"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable & Scrollable View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950/50 text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">
              {personalInfo.name}
            </h1>
            <p className="text-base text-brand-cyan font-semibold mb-3">
              Full Stack Web Developer (MERN Stack Specialist)
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                {personalInfo.address}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 text-gradient-cyan">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 text-gradient-cyan flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Work Experience</span>
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-[12px] bg-dark-900 border border-slate-800 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-400 mb-2">{exp.company} • {exp.type}</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 text-gradient-cyan flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Featured Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-[12px] bg-dark-900 border border-slate-800 hover:border-cyan-500/30 transition-all">
                  <div className="font-bold text-white text-sm mb-1">{proj.title}</div>
                  <div className="text-[11px] text-cyan-400 font-mono mb-2">{proj.techStack.slice(0, 4).join(', ')}</div>
                  <p className="text-xs text-slate-300 line-clamp-2">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 text-gradient-cyan">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-[12px] bg-dark-900 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1">{cat.name}:</span>
                  <span className="text-slate-400">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 text-gradient-cyan flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Education</span>
              </h2>
              <div className="space-y-2.5">
                {education.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-[12px] bg-dark-900 border border-slate-800">
                    <div className="font-bold text-white text-xs">{edu.degree}</div>
                    <div className="text-[11px] text-slate-400">{edu.institution} ({edu.period})</div>
                    <div className="text-[10px] text-emerald-400 font-mono">{edu.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 text-gradient-cyan flex items-center gap-2">
                <Award className="w-4 h-4 text-violet-400 animate-pulse" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-2.5">
                {certifications.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-[12px] bg-dark-900 border border-slate-800">
                    <div className="font-bold text-white text-xs">{cert.title}</div>
                    <div className="text-[11px] text-slate-400">{cert.institution} • {cert.issued}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-dark-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Md. Rezaul Islam • Portfolio 2026</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-[10px] text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-95 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
