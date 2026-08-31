import React from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Compass 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onCopyText, copiedText }) {
  const { personalInfo } = portfolioData;

  const contactItems = [
    {
      id: 'phone',
      label: 'PHONE / MOBILE',
      value: personalInfo.phone,
      actionValue: personalInfo.phoneInternational,
      icon: <Phone className="w-4 h-4 text-brand-cyan" />,
      actionType: 'tel',
    },
    {
      id: 'email',
      label: 'EMAIL ADDRESS',
      value: personalInfo.email,
      actionValue: personalInfo.email,
      icon: <Mail className="w-4 h-4 text-brand-violet" />,
      actionType: 'mailto',
    },
    {
      id: 'address',
      label: 'LOCATION / ADDRESS',
      value: personalInfo.address,
      actionValue: personalInfo.address,
      icon: <MapPin className="w-4 h-4 text-brand-pink" />,
      actionType: 'copy',
    },
  ];

  const coreStrengths = [
    {
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      title: "FRONT END & CMS EXPERTISE",
      desc: "Deep knowledge in React.js, Tailwind CSS, Wix Studio, and custom Wix Velo scripting."
    },
    {
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      title: "CLEAN ARCHITECTURE",
      desc: "Writing modular, reusable, and maintainable code adhering to industry standards."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      title: "RELIABLE & FULL-STACK",
      desc: "Node.js REST APIs, MongoDB databases, Firebase Auth, and reliable deployment."
    },
    {
      icon: <Compass className="w-4 h-4 text-purple-400" />,
      title: "CLIENT-FIRST PROBLEM SOLVING",
      desc: "Turning business requirements into fast, mobile-responsive, production-ready sites."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 26px heading on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-[26px] sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 uppercase leading-tight">
            ABOUT <span className="text-gradient-cyan">ME</span> & CORE VALUES
          </h2>
          <p className="text-slate-400 text-[14px] sm:text-base leading-relaxed">
            Front End Developer (Executive) dedicated to building modern, user-friendly digital experiences that blend clean code architecture with high performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Bio Narrative & Strengths */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-card p-5 sm:p-8 rounded-[14px] border border-slate-800/80 mb-6">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="p-2.5 rounded-[10px] bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white uppercase tracking-wide">WHO I AM</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">Front End Developer (Executive) & MERN Specialist</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-[14px] sm:text-base leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-white font-semibold">Md. Rezaul Islam</strong>, a Front-End Web Developer with hands-on experience building and maintaining sites on <span className="text-cyan-400 font-medium">Wix, Wix Studio, Squarespace, and GoDaddy</span>, plus full-stack projects in <span className="text-violet-400 font-medium">React, Node.js, Express.js, and MongoDB</span>.
                </p>
                <p>
                  Comfortable working across the entire stack, from custom Wix Velo code to backend logic and database design. Looking for an executive-level web development role with full ownership of client and product sites.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm italic border-l-2 border-brand-cyan pl-3 py-1 bg-slate-900/40 rounded-r-[10px]">
                  "Great software is not just about writing code; it's about solving real human problems with elegance, speed, and reliability."
                </p>
              </div>
            </div>

            {/* 4 Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {coreStrengths.map((item, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-4 rounded-[14px] bg-dark-900/60 border border-slate-800/80 hover:border-brand-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-[8px] bg-slate-800/80 text-cyan-400">
                      {item.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Cards & Quick Details */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="glass-card p-5 sm:p-8 rounded-[14px] border border-slate-800/80 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">CONTACT INFORMATION</h3>
                <p className="text-xs text-slate-400 mb-5">Feel free to reach out directly via any of these channels:</p>

                <div className="space-y-3.5">
                  {contactItems.map((item) => {
                    const isCopied = copiedText === item.value;
                    return (
                      <div
                        key={item.id}
                        className="p-3.5 sm:p-4 rounded-[12px] bg-slate-900/80 border border-slate-800 hover:border-brand-cyan/40 transition-all duration-200 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="p-2 sm:p-2.5 rounded-[10px] bg-dark-950 border border-slate-800 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                              {item.label}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                              {item.value}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
                          {item.actionType === 'tel' && (
                            <a
                              href={`tel:${item.actionValue}`}
                              className="p-2 rounded-[8px] bg-slate-800 text-slate-300 hover:text-brand-cyan hover:bg-slate-700 transition-all"
                              title="Call"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          {item.actionType === 'mailto' && (
                            <a
                              href={`mailto:${item.actionValue}`}
                              className="p-2 rounded-[8px] bg-slate-800 text-slate-300 hover:text-brand-violet hover:bg-slate-700 transition-all"
                              title="Send Email"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <button
                            onClick={() => onCopyText(item.value, item.label)}
                            className="p-2 rounded-[8px] bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                            title={`Copy ${item.label}`}
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-5 p-4 rounded-[12px] bg-gradient-to-r from-emerald-950/50 to-teal-950/50 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">QUICK RESPONSE GUARANTEED</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300">Message on WhatsApp for instant replies</div>
                </div>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-[8px] bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 uppercase tracking-wider"
                >
                  CHAT NOW
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
