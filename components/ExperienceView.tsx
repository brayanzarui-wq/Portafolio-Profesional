import React, { useEffect, useState } from 'react';
import { X, Briefcase, Calendar, Award, Zap, ChevronRight, MapPin, ExternalLink } from 'lucide-react';
import { EXPERIENCE, PROFILE } from '../constants';
import { Experience } from '../types';

interface ExperienceViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceView: React.FC<ExperienceViewProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExp, setSelectedExp] = useState<Experience>(EXPERIENCE[0]);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-lg" onClick={onClose}></div>

      {/* Content Container - Scale/Fade Animation */}
      <div 
        className={`relative w-full max-w-6xl h-[90vh] bg-transparent flex flex-col transform transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 md:px-0 mb-6 flex-shrink-0">
             <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white flex items-center gap-3">
                    <div className="p-2 bg-brand-accent/10 rounded-lg border border-brand-accent/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        <Briefcase className="text-brand-accent w-6 h-6" />
                    </div>
                    Trayectoria Profesional
                </h2>
             </div>
             <button 
                onClick={onClose} 
                className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 transition-all border border-transparent hover:border-red-500/50"
            >
                <X size={24} />
             </button>
        </div>

        {/* Main Interface: Split View */}
        {/* Added min-h-0 to allow nested scrolling to work correctly within flex container */}
        <div className="flex-1 min-h-0 grid md:grid-cols-12 gap-8 px-6 md:px-0">
            
            {/* Left: Interactive Timeline */}
            <div className="md:col-span-4 lg:col-span-3 overflow-y-auto custom-scrollbar pr-4 relative h-full">
                {/* Vertical Line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-accent via-brand-purple to-transparent opacity-30"></div>

                <div className="space-y-6 relative z-10 pb-10">
                    {EXPERIENCE.map((exp, index) => (
                        <div 
                            key={exp.id} 
                            className="relative group animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
                        >
                            <button 
                                onClick={() => setSelectedExp(exp)}
                                className={`w-full text-left pl-12 pr-4 py-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                                    selectedExp.id === exp.id 
                                    ? 'bg-brand-surface border-brand-accent shadow-[0_0_20px_rgba(56,189,248,0.15)] translate-x-2' 
                                    : 'bg-brand-surface/30 border-gray-800 hover:border-gray-600 hover:bg-brand-surface/60'
                                }`}
                            >
                                {/* Timeline Node Dot */}
                                <div className={`absolute left-[-17px] top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-20 ${
                                    selectedExp.id === exp.id 
                                    ? 'bg-brand-dark border-brand-accent scale-110' 
                                    : 'bg-brand-dark border-gray-700 group-hover:border-gray-500'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full transition-colors ${selectedExp.id === exp.id ? 'bg-brand-accent animate-pulse' : 'bg-gray-600'}`}></div>
                                </div>

                                {/* Connector Line to Button */}
                                <div className={`absolute left-2 top-1/2 w-10 h-0.5 transition-colors ${selectedExp.id === exp.id ? 'bg-brand-accent' : 'bg-gray-700'}`}></div>

                                <h3 className={`font-bold text-sm md:text-base transition-colors ${selectedExp.id === exp.id ? 'text-white' : 'text-gray-300'}`}>
                                    {exp.company}
                                </h3>
                                <p className="text-xs text-gray-500 font-mono mt-1">{exp.period}</p>
                                
                                {/* Active Glow Indicator inside button */}
                                {selectedExp.id === exp.id && (
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-brand-accent"></div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Detail "Holographic" Card */}
            <div className="md:col-span-8 lg:col-span-9 h-full flex flex-col min-h-0">
                <div className="bg-brand-surface/50 backdrop-blur-md border border-gray-700 rounded-2xl h-full flex flex-col shadow-2xl relative overflow-hidden">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                    
                    {/* Card Header (Static) */}
                    <div className="flex-shrink-0 p-8 border-b border-gray-700/50 relative z-10 bg-brand-surface/20">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div>
                                {/* Key prop forces re-animation on change */}
                                <h2 key={`${selectedExp.id}-title`} className="text-3xl font-bold text-white mb-2 animate-slide-up">{selectedExp.role}</h2>
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <span className="flex items-center gap-1.5 text-brand-accent px-3 py-1 bg-brand-accent/10 rounded-full border border-brand-accent/20">
                                        <Briefcase size={14} />
                                        {selectedExp.company}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-gray-400 font-mono">
                                        <Calendar size={14} />
                                        {selectedExp.period}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-gray-400">
                                        <MapPin size={14} />
                                        {PROFILE.location}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-inner">
                                    <span className="text-2xl font-bold text-gray-500">
                                        {selectedExp.company.charAt(0)}
                                    </span>
                                 </div>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content Area */}
                    {/* Added padding-bottom to ensure last elements are visible */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 p-8 pb-12">
                        
                        {/* Wrapper with key to trigger animation on change */}
                        <div key={selectedExp.id} className="animate-slide-up">
                            <div className="mb-8">
                                <h3 className="text-gray-300 font-bold mb-3 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-brand-purple rounded-full"></span>
                                    Descripción General
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedExp.description}
                                </p>
                            </div>

                            {selectedExp.achievements && (
                                <div className="mb-8">
                                    <h3 className="text-gray-300 font-bold mb-4 flex items-center gap-2">
                                        <Award className="text-yellow-500" size={20} />
                                        Logros Clave
                                    </h3>
                                    <div className="grid gap-3">
                                        {selectedExp.achievements.map((item, idx) => (
                                            <div key={idx} className="flex gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-brand-accent/30 transition-colors hover:bg-gray-800/80">
                                                <div className="mt-1 min-w-[20px]">
                                                    <Zap className="text-brand-accent w-5 h-5" fill="currentColor" fillOpacity={0.2} />
                                                </div>
                                                <p className="text-gray-300 text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedExp.technologies && (
                                <div>
                                    <h3 className="text-gray-300 font-bold mb-4 text-sm uppercase tracking-wider">Tecnologías Utilizadas</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedExp.technologies.map((tech, idx) => (
                                            <span 
                                                key={tech} 
                                                className="px-3 py-1.5 bg-brand-dark text-gray-300 rounded-md border border-gray-700 text-sm font-mono flex items-center gap-2 hover:border-brand-purple hover:text-white transition-colors select-none cursor-default animate-fade-in"
                                                style={{ animationDelay: `${idx * 50}ms` }}
                                            >
                                                <ChevronRight size={12} className="text-brand-purple" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom fade gradient - reduced height to not block content */}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-brand-surface/80 to-transparent pointer-events-none z-20"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;