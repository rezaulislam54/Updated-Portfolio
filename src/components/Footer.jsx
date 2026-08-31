import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, FacebookIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-slate-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Brand & Tagline with official logo */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#home" className="flex items-center gap-3 mb-2 group">
              <div className="w-10 h-10 rounded-[10px] bg-dark-900 border border-amber-500/30 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 shadow-md shadow-amber-500/10">
                <img
                  src="/images/logo.png"
                  alt="Md. Rezaul Islam Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-wider text-white group-hover:text-amber-400 transition-colors uppercase">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Front End Developer (Executive) crafting high-impact digital experiences with modern web technologies.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] sm:text-xs font-semibold text-slate-400 hover:text-brand-cyan transition-colors uppercase tracking-wider py-1 px-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-[8px] bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-cyan/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-[8px] bg-dark-900 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-[8px] bg-dark-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="p-2.5 rounded-[8px] bg-dark-900 border border-slate-800 text-slate-400 hover:text-brand-pink hover:border-brand-pink/50 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright row with 100% mobile responsive formatting */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
            <span>COPYRIGHT © 2026 - ALL RIGHTS RESERVED BY</span>
            <span className="text-slate-300 font-semibold">{personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>AVAILABLE FOR HIRE</span>
            </span>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-[8px] bg-dark-900 border border-slate-800 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-all"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
