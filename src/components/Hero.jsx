import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Send, 
  Mail, 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personalInfo } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDuration = 2000;

    let timer;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, personalInfo.roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-10 sm:pt-28 sm:pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-cyan/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-brand-pink/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Image Avatar (ORDER 1 on Mobile, ORDER 2 on Desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center relative py-4 sm:py-6">
            
            {/* Rigid Fixed-Size Square Container - Larger on Desktop (420px) */}
            <div className="relative w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] flex items-center justify-center flex-shrink-0">
              
              {/* Outer Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-violet-500/25 to-pink-500/25 blur-3xl pointer-events-none" />

              {/* Orbiting Ring */}
              <div className="absolute -inset-3 rounded-full border border-cyan-500/30 animate-spin-slow pointer-events-none" />

              {/* Main Pure Circular Avatar Card */}
              <div className="relative w-full h-full rounded-full p-[4px] sm:p-[5px] bg-gradient-to-tr from-brand-cyan via-brand-violet to-brand-pink shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-900 via-dark-900 to-dark-950 flex items-center justify-center relative">
                  
                  {/* Transparent Portrait */}
                  <img
                    src="/images/hero-photo.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Subtle bottom shadow overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-950/85 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* 4 Floating Badges - Clean 4-Corner Anchoring with ZERO OVERLAP */}
              
              {/* 1. React.js (Top-Right Corner) */}
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-4 lg:-right-6 z-20 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-[12px] glass-card flex items-center gap-1.5 sm:gap-2 border border-cyan-500/50 shadow-xl shadow-cyan-500/25 bg-dark-900/90 backdrop-blur-md">
                <span className="text-base sm:text-lg">⚛️</span>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight uppercase font-mono">React.js</div>
                  <div className="text-[8px] sm:text-[9px] text-cyan-400 font-mono uppercase">Frontend</div>
                </div>
              </div>

              {/* 2. Tailwind CSS (Top-Left Corner) */}
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-4 lg:-left-6 z-20 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-[12px] glass-card flex items-center gap-1.5 sm:gap-2 border border-pink-500/50 shadow-xl shadow-pink-500/25 bg-dark-900/90 backdrop-blur-md">
                <span className="text-base sm:text-lg">🎨</span>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight uppercase font-mono">Tailwind</div>
                  <div className="text-[8px] sm:text-[9px] text-pink-400 font-mono uppercase">Styling</div>
                </div>
              </div>

              {/* 3. Node.js (Bottom-Left Corner) */}
              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-4 lg:-left-6 z-20 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-[12px] glass-card flex items-center gap-1.5 sm:gap-2 border border-emerald-500/50 shadow-xl shadow-emerald-500/25 bg-dark-900/90 backdrop-blur-md">
                <span className="text-base sm:text-lg">🟢</span>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight uppercase font-mono">Node.js</div>
                  <div className="text-[8px] sm:text-[9px] text-emerald-400 font-mono uppercase">Backend</div>
                </div>
              </div>

              {/* 4. MongoDB (Bottom-Right Corner) */}
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-4 lg:-right-6 z-20 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-[12px] glass-card flex items-center gap-1.5 sm:gap-2 border border-violet-500/50 shadow-xl shadow-violet-500/25 bg-dark-900/90 backdrop-blur-md">
                <span className="text-base sm:text-lg">🍃</span>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight uppercase font-mono">MongoDB</div>
                  <div className="text-[8px] sm:text-[9px] text-violet-400 font-mono uppercase">Database</div>
                </div>
              </div>

              {/* Center-Bottom Role Badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-30 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-[10px] bg-dark-950/95 border border-cyan-500/60 backdrop-blur-md shadow-2xl shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
                  MERN ARCHITECT
                </span>
              </div>

            </div>

          </div>

          {/* Intro Text & Actions (ORDER 2 on Mobile, ORDER 1 on Desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-cyan/30 backdrop-blur-md shadow-lg shadow-cyan-500/10 mb-4 sm:mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-wide uppercase">
                AVAILABLE FOR NEW PROJECTS & FULL-TIME ROLES
              </span>
            </div>

            {/* Main Greeting & Name with Comfortable Line Height */}
            <div className="mb-3 sm:mb-4 space-y-1 sm:space-y-2">
              <span className="block text-[22px] sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide uppercase leading-relaxed">
                HELLO, I'M
              </span>
              <h1 className="text-[26px] sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-gradient-brand leading-relaxed uppercase">
                {personalInfo.name}
              </h1>
            </div>

            {/* Typewriter Dynamic Role */}
            <div className="flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-bold text-slate-200 min-h-[34px] sm:min-h-[38px] mb-4 sm:mb-6">
              <span className="text-slate-400 uppercase">I BUILD</span>
              <span className="text-brand-cyan font-mono border-b-2 border-brand-cyan/80 pb-0.5 uppercase">
                {displayedText}
              </span>
              <span className="w-1 h-5 sm:h-6 bg-brand-cyan animate-pulse inline-block"></span>
            </div>

            {/* Bio summary with 14px on mobile */}
            <p className="text-slate-300 text-[14px] sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              A results-driven <strong className="text-white font-semibold">MERN Stack Developer</strong> passionate about creating fast, resilient, and responsive web applications. Specialized in <span className="text-cyan-400 font-medium">React.js</span>, <span className="text-violet-400 font-medium">Node.js</span>, <span className="text-emerald-400 font-medium">MongoDB</span>, and <span className="text-sky-400 font-medium">Tailwind CSS</span>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-6 sm:mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-[12px] font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink hover:opacity-95 shadow-xl shadow-brand-cyan/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-[12px] font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a
                href="https://wa.me/8801826847490"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 sm:py-3.5 rounded-[12px] font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-950/60 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>WHATSAPP CHAT</span>
              </a>
            </div>

            {/* Social Icons Bar & Quick Contacts */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">CONNECT:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-[10px] bg-dark-900 border border-slate-800 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-[10px] bg-dark-900 border border-slate-800 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-[10px] bg-dark-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="p-2 sm:p-2.5 rounded-[10px] bg-dark-900 border border-slate-800 text-slate-300 hover:text-brand-pink hover:border-brand-pink/50 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>RANGPUR, DHAKA, BANGLADESH</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
