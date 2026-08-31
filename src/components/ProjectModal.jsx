import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content with 14px rounded corners */}
      <div className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-[14px] shadow-2xl shadow-black/80 overflow-hidden z-10 my-auto animate-fadeIn max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-950/60">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-[8px] text-xs font-mono font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Project Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-[10px] bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 hover:rotate-90 transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Project Preview Graphic with 12px corners */}
          <div className="relative w-full h-56 sm:h-72 rounded-[12px] overflow-hidden bg-slate-950 border border-slate-800 group">
            <img
              src={`/projects/${project.id}.svg`}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.src = '/images/original_site_2.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Header Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-cyan font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Deep Description */}
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan animate-spin-slow" />
              <span>Key Architecture & Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-[10px] bg-dark-950/60 border border-slate-800/80 flex items-start gap-2.5 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0 animate-pulse" />
                  <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-violet" />
              <span>Tech Stack Applied</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-[8px] text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-violet-500/40 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-slate-800 bg-dark-950/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.githubClient}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-[10px] text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:scale-105 transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Client Code</span>
            </a>
            {project.githubServer && (
              <a
                href={project.githubServer}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-[10px] text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Server className="w-4 h-4" />
                <span>Server Code</span>
              </a>
            )}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-[10px] text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-95 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2 ml-auto"
          >
            <span>Launch Live Preview</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
