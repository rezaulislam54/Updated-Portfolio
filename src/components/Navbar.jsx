import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // If near the top, explicitly set active section to HOME
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Accurate Scroll Spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top - 80) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 sm:py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with Official Logo image */}
          <a
            href="#home"
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-[10px] bg-dark-900 border border-amber-500/30 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 group-hover:scale-105 shadow-md shadow-amber-500/10">
              <img
                src="/images/logo.png"
                alt="Md. Rezaul Islam Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-amber-400 transition-colors uppercase">
                MD. REZAUL ISLAM
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 -mt-0.5 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                FRONT END DEVELOPER (EXECUTIVE)
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/80 p-1.5 rounded-[14px] border border-slate-800/90 backdrop-blur-xl shadow-lg shadow-black/20">
            {navLinks.map((link) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              const isContact = link.name === 'CONTACT';

              // If it's CONTACT, always give it the dedicated cyan-to-violet gradient button style
              if (isContact) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection('contact')}
                    className="px-3.5 py-1.5 rounded-[10px] text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-90 shadow-md shadow-cyan-500/25 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                );
              }

              // For all other menu items, active state gets the EXACT same style as hover (no layout shift/dhakka)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(linkId)}
                  className={`px-3.5 py-1.5 rounded-[10px] text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                    isActive
                      ? 'bg-slate-800/90 text-cyan-300 border-slate-700/60 shadow-md shadow-cyan-500/10'
                      : 'text-slate-300 border-transparent hover:text-cyan-300 hover:bg-slate-800/90 hover:border-slate-700/60 hover:shadow-md hover:shadow-cyan-500/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-[10px] text-xs font-semibold uppercase tracking-wider text-slate-200 border border-slate-700/80 hover:border-brand-cyan/60 hover:text-brand-cyan hover:bg-slate-800/80 transition-all flex items-center gap-1.5 bg-dark-900/60 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME</span>
            </button>
            <a
              href="#contact"
              onClick={() => setActiveSection('contact')}
              className="px-4 py-2 rounded-[10px] text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink hover:opacity-95 shadow-md shadow-brand-cyan/20 transition-all flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>HIRE ME</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[10px] bg-dark-900/80 border border-slate-800 text-slate-200 hover:text-white hover:border-brand-cyan focus:outline-none transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-dark-950/95 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              const isContact = link.name === 'CONTACT';

              if (isContact) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection('contact');
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2.5 rounded-[12px] text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-brand-cyan to-brand-violet shadow-md shadow-cyan-500/25 transition-all text-center"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(linkId);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-[12px] text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                    isActive
                      ? 'bg-slate-800/90 text-cyan-300 border-slate-700/60 shadow-md shadow-cyan-500/10'
                      : 'text-slate-300 border-transparent hover:text-white hover:bg-slate-800/80 hover:border-slate-700/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-[10px] text-xs font-bold uppercase tracking-wider text-slate-200 border border-slate-700 bg-slate-900 flex items-center justify-center gap-2 hover:border-cyan-500/50 hover:bg-slate-800"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>VIEW / DOWNLOAD RESUME</span>
              </button>
              <a
                href="#contact"
                onClick={() => {
                  setActiveSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-[10px] text-xs font-bold uppercase tracking-wider text-center text-white bg-gradient-to-r from-brand-cyan to-brand-violet shadow-lg shadow-brand-cyan/20"
              >
                LET'S TALK & COLLABORATE
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
