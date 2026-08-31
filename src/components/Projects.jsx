import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Info, 
  ArrowUpRight, 
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'FULL STACK (MERN)', 'E-COMMERCE', 'FRONTEND & UI/UX'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with UPPERCASE */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            FEATURED <span className="text-gradient-cyan">PROJECTS</span> & APPLICATIONS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A curated showcase of real-world web applications built with the MERN stack, robust API architectures, and pixel-perfect user interfaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-white shadow-md shadow-cyan-500/20'
                    : 'bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-[14px] overflow-hidden border border-slate-800/90 hover:border-cyan-500/40 flex flex-col group transition-all duration-200 shadow-lg"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={`/projects/${project.id}.svg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/original_site_2.png';
                  }}
                />
                
                {/* Category & Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-[6px] text-[10px] font-mono font-bold uppercase tracking-wider bg-dark-950/85 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-md">
                    {project.badge || project.category}
                  </span>
                </div>

                {/* Quick Details Floating Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 p-2 rounded-[8px] bg-dark-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:text-brand-cyan hover:border-brand-cyan/60"
                  title="View Case Study Details"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1.5 flex items-center justify-between uppercase tracking-wide">
                    <span>{project.title}</span>
                    <FolderGit2 className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mb-3 uppercase tracking-wider">
                    {project.tagline}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono bg-slate-900 text-cyan-400 border border-slate-800">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      <span>DETAILS</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-[8px] bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 transition-all"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-[8px] text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-cyan to-brand-violet hover:opacity-90 transition-all flex items-center gap-1 shadow-md shadow-cyan-500/20"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal rendering */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
