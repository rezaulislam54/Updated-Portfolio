import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Platforms from './components/Platforms';
import WorkProcess from './components/WorkProcess';
import Services from './components/Services';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const notify = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleCopyText = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      notify(`Copied ${label} to clipboard!`, 'success');
      setTimeout(() => setCopiedText(''), 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Particle dynamic canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Stats />
        <About onCopyText={handleCopyText} copiedText={copiedText} />
        <Skills />
        <Projects />
        <Platforms />
        <WorkProcess />
        <Services />
        <ExperienceEducation />
        <Contact 
          onCopyText={handleCopyText} 
          copiedText={copiedText} 
          onNotify={notify} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </div>
  );
}
