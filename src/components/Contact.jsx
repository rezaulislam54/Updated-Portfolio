import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  CheckCircle2, 
  Clock,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onCopyText, copiedText, onNotify }) {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onNotify) onNotify('Please fill in all required fields!', 'error');
      setErrorMessage('Please fill in your Name, Email, and Message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Direct Email Delivery via FormSubmit AJAX to programmermdrezaulislam@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/programmermdrezaulislam@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      if (onNotify) {
        onNotify('Message sent directly to Rezaul Islam! Thank you.', 'success');
      }

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 6000);

    } catch (error) {
      console.warn('Network send fallback:', error);
      setIsSubmitting(false);
      
      // Fallback: If network blocks third party endpoint, trigger mailto client
      window.location.href = `mailto:programmermdrezaulislam@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      setSubmitted(true);
      if (onNotify) {
        onNotify('Opening your mail client to send message...', 'info');
      }
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 relative overflow-hidden bg-slate-950/60">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 26px heading on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[10px] bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-[26px] sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 uppercase leading-tight">
            GET IN <span className="text-gradient-cyan">TOUCH</span> WITH ME
          </h2>
          <p className="text-slate-400 text-[14px] sm:text-base leading-relaxed">
            Have a project in mind, seeking a dedicated Front End & MERN developer, or want to collaborate? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="glass-card p-5 sm:p-8 rounded-[14px] border border-slate-800/80">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">LET'S TALK ABOUT YOUR NEXT PROJECT</h3>
              <p className="text-slate-400 text-[14px] leading-relaxed mb-5 sm:mb-6">
                I'm available for full-time executive roles, agency contracts, and freelance projects worldwide.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3.5">
                
                {/* Email item */}
                <div className="p-3.5 sm:p-4 rounded-[12px] bg-dark-900/80 border border-slate-800 hover:border-violet-500/40 transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 sm:p-2.5 rounded-[10px] bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">EMAIL ADDRESS</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-brand-violet truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => onCopyText(personalInfo.email, 'Email')}
                    className="p-2 rounded-[8px] bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedText === personalInfo.email ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="p-3.5 sm:p-4 rounded-[12px] bg-dark-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 sm:p-2.5 rounded-[10px] bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">PHONE / MOBILE</span>
                      <a href={`tel:${personalInfo.phoneInternational}`} className="text-xs sm:text-sm font-semibold text-white hover:text-brand-cyan truncate block">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => onCopyText(personalInfo.phone, 'Phone')}
                    className="p-2 rounded-[8px] bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex-shrink-0"
                    title="Copy Phone"
                  >
                    {copiedText === personalInfo.phone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Address item */}
                <div className="p-3.5 sm:p-4 rounded-[12px] bg-dark-900/80 border border-slate-800 hover:border-pink-500/40 transition-all duration-200 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 sm:p-2.5 rounded-[10px] bg-pink-500/10 border border-pink-500/20 text-pink-400">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">LOCATION</span>
                      <span className="text-xs sm:text-sm font-semibold text-white truncate block uppercase">
                        {personalInfo.address}
                      </span>
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-[6px] bg-emerald-950/60 border border-emerald-500/30 flex-shrink-0 uppercase font-bold">
                    ACTIVE
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Quick Connect */}
              <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-[12px] bg-gradient-to-r from-emerald-950/40 via-teal-950/40 to-slate-900 border border-emerald-500/40">
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 sm:p-2.5 rounded-[10px] bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">DIRECT WHATSAPP</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-300">Fastest way to get in touch</p>
                    </div>
                  </div>

                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-[8px] bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap uppercase tracking-wider"
                  >
                    OPEN CHAT
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Email Dispatch Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-5 sm:p-8 rounded-[14px] border border-slate-800/80 relative">
              
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">SEND A DIRECT MESSAGE</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-5 sm:mb-6">Messages submitted here are delivered straight to <strong className="text-cyan-400 font-mono">programmermdrezaulislam@gmail.com</strong>.</p>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-[10px] bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitted ? (
                <div className="py-10 sm:py-12 px-4 text-center rounded-[12px] bg-emerald-950/30 border border-emerald-500/40 animate-fadeIn">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[10px] bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">THANK YOU! MESSAGE DELIVERED TO REZAUL ISLAM.</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been sent to <span className="text-emerald-400 font-semibold font-mono">{personalInfo.email}</span>. You will receive a response shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        YOUR NAME <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[10px] bg-dark-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        YOUR EMAIL <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[10px] bg-dark-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Executive Role Offer / Web Project Collaboration"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[10px] bg-dark-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      YOUR MESSAGE <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message, project goals, timeline, or inquiries here..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[10px] bg-dark-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-3.5 px-6 rounded-[10px] font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink hover:opacity-90 shadow-lg shadow-brand-cyan/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>DISPATCHING MESSAGE...</span>
                      </span>
                    ) : (
                      <>
                        <span>SEND MESSAGE TO EMAIL</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 pt-1 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DIRECT INBOX DELIVERY: GUARANTEED RESPONSE</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
