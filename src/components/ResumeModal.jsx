import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Globe, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo } = portfolioData;

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
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-800 bg-dark-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"></span>
            <h3 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
              CURRICULUM VITAE (MD REZAUL ISLAM)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Resume-Md-Rezaul-Islam.pdf"
              download="Resume-Md-Rezaul-Islam.pdf"
              className="px-3 py-1.5 rounded-[10px] bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-95 text-xs font-bold text-white shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-[10px] bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 hidden sm:flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-brand-cyan" />
              <span>PRINT</span>
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
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-slate-950/60 text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase mb-1">
              MD REZAUL ISLAM
            </h1>
            <p className="text-sm sm:text-base text-brand-cyan font-bold mb-3 uppercase tracking-wide">
              Front End Developer (Executive)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-300">
              <span>Rangpur, Dhaka, Bangladesh</span>
              <span>•</span>
              <a href="tel:01826847480" className="text-cyan-300 hover:underline">01826847480</a>
              <span>•</span>
              <a href="mailto:programmermdrezaulislam@gmail.com" className="text-violet-300 hover:underline">programmermdrezaulislam@gmail.com</a>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400 mt-2">
              <a href="https://github.com/rezaulislam54" target="_blank" rel="noreferrer" className="hover:text-cyan-400">github.com/rezaulislam54</a>
              <span>•</span>
              <a href="https://rezaul-islam-7b565.web.app" target="_blank" rel="noreferrer" className="hover:text-cyan-400">rezaul-islam-7b565.web.app</a>
              <span>•</span>
              <a href="https://linkedin.com/in/mdrezaul-islam" target="_blank" rel="noreferrer" className="hover:text-cyan-400">linkedin.com/in/mdrezaul-islam</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 pb-1 border-b border-slate-800 text-gradient-cyan">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Front-end web developer with hands-on experience building and maintaining sites on Wix, Wix Studio, Squarespace, and GoDaddy, plus full-stack projects in React, Node.js, Express.js, and MongoDB. Comfortable working across the stack, from custom Wix Velo code to backend logic and database design. Looking for an executive-level web development role with full ownership of client and product sites.
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-2.5 pb-1 border-b border-slate-800 text-gradient-cyan">
              CORE SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <p><strong className="text-white font-semibold">Languages:</strong> HTML, CSS, JavaScript (ES2020), TypeScript</p>
              <p><strong className="text-white font-semibold">Front-End:</strong> React.js, Tailwind CSS, Bootstrap</p>
              <p><strong className="text-white font-semibold">Back-End:</strong> Node.js, Express.js</p>
              <p><strong className="text-white font-semibold">Platforms:</strong> Wix, Wix Studio, Wix Velo, Squarespace, GoDaddy</p>
              <p><strong className="text-white font-semibold">Databases:</strong> MongoDB, Firebase</p>
              <p><strong className="text-white font-semibold">Tools:</strong> Git, GitHub, Netlify, Vercel</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 pb-1 border-b border-slate-800 text-gradient-cyan">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              
              {/* Job 1 */}
              <div className="p-4 rounded-[12px] bg-dark-900 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    Front End Developer (Executive) — <span className="text-cyan-400 font-semibold">Softvence Agency</span>
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold">1 Year 4 Months</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  <li>Built and maintained websites for clients on Wix, Wix Studio, Squarespace, and GoDaddy, handling layout, page structure, and site functionality.</li>
                  <li>Added custom functionality to Wix sites using Wix Velo when the built-in tools weren't enough.</li>
                  <li>Worked directly with clients to gather requirements and turn them into working sites.</li>
                  <li>Delivered mobile-responsive, easy-to-use designs on every project.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="p-4 rounded-[12px] bg-dark-900 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    MERN Stack Web Development (Intern) — <span className="text-cyan-400 font-semibold">Universe IT Institute</span>
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold">Jul 2024 – Oct 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  <li>Built and maintained web application features using React.js, Node.js, Express.js, and MongoDB.</li>
                  <li>Collaborated with the development team on full-stack functionality for live projects.</li>
                  <li>Based in Aftabnagar, Merul Badda, Dhaka.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 pb-1 border-b border-slate-800 text-gradient-cyan">
              PROJECTS
            </h2>
            <div className="space-y-3">
              
              <div className="p-3.5 rounded-[12px] bg-dark-900 border border-slate-800">
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  Shop.co E-Commerce <span className="text-[11px] text-cyan-400 font-normal font-mono">(React, Node.js, Express.js, MongoDB, Tailwind CSS)</span>
                </h3>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                  <li>Built a MERN stack e-commerce platform with user authentication, product management, and cart functionality.</li>
                  <li>Integrated an admin dashboard and a responsive design using Tailwind CSS for a seamless shopping experience.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-[12px] bg-dark-900 border border-slate-800">
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  Doctors-Appointment <span className="text-[11px] text-cyan-400 font-normal font-mono">(React, Firebase, Node.js, Express.js, MongoDB, Tailwind CSS)</span>
                </h3>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                  <li>Built a full-stack booking application for scheduling doctor appointments and tracking service history.</li>
                  <li>Added a streamlined interface for managing customer data.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-[12px] bg-dark-900 border border-slate-800">
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  Car Servicing Center <span className="text-[11px] text-cyan-400 font-normal font-mono">(React, Firebase, Node.js, Express.js, MongoDB, Tailwind CSS)</span>
                </h3>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-300">
                  <li>Built a full-stack application for managing car service bookings and tracking service history.</li>
                  <li>Delivered a streamlined interface for scheduling services and managing customer data.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 pb-1 border-b border-slate-800 text-gradient-cyan">
                EDUCATION
              </h2>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-[12px] bg-dark-900 border border-slate-800">
                  <div className="font-bold text-white">Diploma in Computer Engineering</div>
                  <div className="text-slate-400">Thakurgaon Polytechnic Institute — 2021 – 2024</div>
                  <div className="text-emerald-400 font-mono font-semibold text-[11px]">CGPA 3.37 / 4.00</div>
                </div>
                <div className="p-3 rounded-[12px] bg-dark-900 border border-slate-800">
                  <div className="font-bold text-white">Dakhil Examination</div>
                  <div className="text-slate-400">Boalmari Kanchdah Fazil Degree Madrasha — 2019 – 2020</div>
                  <div className="text-emerald-400 font-mono font-semibold text-[11px]">GPA 4.56 / 5.00</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 pb-1 border-b border-slate-800 text-gradient-cyan">
                LANGUAGES
              </h2>
              <div className="p-3.5 rounded-[12px] bg-dark-900 border border-slate-800 space-y-2 text-xs text-slate-300">
                <p><strong className="text-white">English:</strong> Reading: High, Writing: Medium, Speaking: Medium</p>
                <p><strong className="text-white">Bengali:</strong> Reading: Native, Writing: Native, Speaking: Native</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-slate-800 bg-dark-950/90 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Md. Rezaul Islam • Official Resume</span>
          <a
            href="/Resume-Md-Rezaul-Islam.pdf"
            download="Resume-Md-Rezaul-Islam.pdf"
            className="px-4 py-2 rounded-[10px] text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-95 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 hover:scale-105 transition-all uppercase tracking-wider"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD PDF RESUME</span>
          </a>
        </div>

      </div>
    </div>
  );
}
