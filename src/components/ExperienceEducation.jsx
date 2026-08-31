import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 26px heading on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>QUALIFICATIONS & BACKGROUND</span>
          </div>
          <h2 className="text-[26px] sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 uppercase leading-tight">
            EXPERIENCE & <span className="text-gradient-cyan">EDUCATION</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Hands-on professional internship experience paired with structured academic training in Computer Science and MERN Stack Engineering.
          </p>
        </div>

        {/* Dual Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Left Column: Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-2.5 rounded-[10px] bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-white uppercase tracking-wide">WORK EXPERIENCE</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">Professional Internship & Teamwork</p>
              </div>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-5 sm:pl-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-dark-950 border-2 border-brand-cyan shadow-md shadow-cyan-500/40" />

                  <div className="glass-card p-5 sm:p-7 rounded-[14px] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200">
                    {/* Header badge & period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                      <span className="px-2.5 py-0.5 sm:py-1 rounded-[6px] text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {exp.type}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-1.5 uppercase">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Role Title & Company */}
                    <h4 className="text-sm sm:text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
                      {exp.role}
                    </h4>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-cyan font-medium mb-3 sm:mb-4 uppercase">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {exp.skillsUsed.map((sk, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 uppercase"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}

              {/* Certifications Card nested under Experience */}
              {certifications.map((cert) => (
                <div key={cert.id} className="relative group pt-2">
                  <div className="absolute -left-[27px] sm:-left-[39px] top-4 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-dark-950 border-2 border-brand-violet shadow-md shadow-violet-500/40" />

                  <div className="glass-card p-5 sm:p-6 rounded-[14px] border border-violet-500/30 hover:border-violet-500/50 transition-all duration-200 bg-gradient-to-br from-violet-950/20 to-dark-900/60">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-violet" />
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">{cert.badge}</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase">{cert.issued}</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-wide">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-2.5 sm:mb-3 uppercase">{cert.institution}</p>
                    <p className="text-xs text-slate-300 mb-3">{cert.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((sk, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono bg-violet-950/50 text-violet-300 border border-violet-800/40 uppercase">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Education */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-2.5 rounded-[10px] bg-violet-500/10 border border-violet-500/30 text-violet-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-white uppercase tracking-wide">EDUCATIONAL JOURNEY</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">Academic Degrees & Qualifications</p>
              </div>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 pl-5 sm:pl-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-dark-950 border-2 border-brand-violet shadow-md shadow-violet-500/40" />

                  <div className="glass-card p-5 sm:p-7 rounded-[14px] border border-slate-800/80 hover:border-violet-500/40 transition-all duration-200">
                    {/* Header badge & period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                      <span className="px-2.5 py-0.5 sm:py-1 rounded-[6px] text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-violet-500/10 text-violet-300 border border-violet-500/30">
                        {edu.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-1.5 uppercase">
                        <Calendar className="w-3.5 h-3.5 text-brand-violet" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h4 className="text-sm sm:text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors uppercase tracking-wide">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-2.5 sm:mb-3 uppercase">
                      <Building2 className="w-4 h-4 text-violet-400" />
                      <span>{edu.institution}</span>
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded-[6px] text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 mb-2.5 sm:mb-3 uppercase tracking-wider">
                      {edu.status}
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
