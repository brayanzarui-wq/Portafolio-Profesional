import React, { useEffect, useState } from 'react';
import { X, Download, Mail, Github, Linkedin, MapPin, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PROFILE, EXPERIENCE, SKILLS, EDUCATION } from '../constants';

interface CVViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVView: React.FC<CVViewProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* CV Modal Container */}
      <div 
        className={`relative w-full max-w-5xl h-[90vh] bg-brand-dark rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col transform transition-all duration-500 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}
      >
        {/* Top Bar Actions */}
        <div className="h-14 bg-brand-surface border-b border-gray-800 flex items-center justify-between px-6 flex-shrink-0">
            <span className="text-gray-400 font-mono text-sm">curriculum_vitae_v2.pdf (Vista Previa)</span>
            <div className="flex gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 text-brand-accent rounded-md hover:bg-brand-accent hover:text-brand-dark transition-colors text-sm font-bold">
                    <Download size={16} />
                    <span>Descargar PDF</span>
                </button>
                <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors">
                    <X size={20} />
                </button>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0f172a]">
            <div className="p-8 md:p-12 max-w-4xl mx-auto">
                
                {/* CV Header with Creative Photo */}
                <div className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-700 pb-8 mb-8 animate-fade-in">
                    
                    {/* Photo Section with Creative Frame */}
                    <div className="flex-shrink-0 mx-auto md:mx-0 relative group">
                        {/* Animated Gradient Background/Ring */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-purple rounded-full opacity-70 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        {/* Photo */}
                        <img 
                            src={PROFILE.avatarUrl} 
                            alt={PROFILE.name} 
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500 shadow-2xl z-10 bg-gray-800"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300&q=80";
                                e.currentTarget.onerror = null;
                            }}
                        />
                        {/* Status indicator dot */}
                        <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-brand-dark rounded-full z-20" title="Disponible para trabajar"></div>
                    </div>

                    {/* Text Info */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{PROFILE.name}</h1>
                                <h2 className="text-xl text-brand-accent font-medium mb-4">{PROFILE.title}</h2>
                            </div>
                            
                            {/* Contact Info Compact Block */}
                            <div className="hidden md:flex flex-col items-end space-y-1.5 mb-4">
                                <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">
                                    <span>{PROFILE.email}</span>
                                    <Mail size={14} className="text-brand-purple" />
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 text-sm">
                                    <span>{PROFILE.location}</span>
                                    <MapPin size={14} className="text-brand-purple" />
                                </div>
                                <div className="flex gap-3 mt-1">
                                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors"><Github size={18} /></a>
                                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors"><Linkedin size={18} /></a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Extended Summary */}
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base text-justify md:text-left border-t border-gray-800/50 pt-4 mt-2">
                            {PROFILE.cvSummary}
                        </p>

                         {/* Mobile Contact Info (Visible only on small screens) */}
                         <div className="md:hidden flex flex-col items-center mt-6 space-y-2">
                             <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-gray-300 text-sm">
                                <Mail size={14} className="text-brand-purple" />
                                <span>{PROFILE.email}</span>
                             </a>
                             <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <MapPin size={14} className="text-brand-purple" />
                                <span>{PROFILE.location}</span>
                            </div>
                             <div className="flex gap-4 mt-2">
                                <a href={PROFILE.github} className="text-gray-400"><Github size={20} /></a>
                                <a href={PROFILE.linkedin} className="text-gray-400"><Linkedin size={20} /></a>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-3 gap-12">
                    
                    {/* Left Sidebar (Skills & Education) */}
                    <div className="space-y-10 animate-fade-in" style={{animationDelay: '100ms'}}>
                        
                        {/* Education */}
                        <section>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 border-l-4 border-brand-purple pl-3">
                                <GraduationCap size={18} className="text-brand-purple" />
                                Educación
                            </h3>
                            <div className="space-y-6">
                                {EDUCATION.map(edu => (
                                    <div key={edu.id}>
                                        <h4 className="text-white font-semibold">{edu.degree}</h4>
                                        <div className="text-brand-accent text-sm mb-1">{edu.institution}</div>
                                        <div className="text-gray-500 text-xs mb-2">{edu.period}</div>
                                        <p className="text-gray-400 text-sm leading-snug">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                         {/* Skills */}
                         <section>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 border-l-4 border-brand-accent pl-3">
                                <Code size={18} className="text-brand-accent" />
                                Habilidades
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-gray-400 text-xs uppercase mb-2 font-bold">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {SKILLS.filter(s => s.category === 'frontend').map(s => (
                                            <span key={s.name} className="px-2 py-1 bg-brand-surface text-gray-300 text-xs rounded border border-gray-700 hover:border-brand-accent/50 transition-colors">
                                                {s.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-xs uppercase mb-2 font-bold">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {SKILLS.filter(s => s.category === 'backend').map(s => (
                                            <span key={s.name} className="px-2 py-1 bg-brand-surface text-gray-300 text-xs rounded border border-gray-700 hover:border-brand-purple/50 transition-colors">
                                                {s.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-xs uppercase mb-2 font-bold">Herramientas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {SKILLS.filter(s => ['tools', 'design'].includes(s.category)).map(s => (
                                            <span key={s.name} className="px-2 py-1 bg-brand-surface text-gray-300 text-xs rounded border border-gray-700 hover:border-white/30 transition-colors">
                                                {s.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Experience) */}
                    <div className="md:col-span-2 animate-fade-in" style={{animationDelay: '200ms'}}>
                        <section>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2 border-l-4 border-blue-500 pl-3">
                                <Briefcase size={18} className="text-blue-500" />
                                Experiencia Profesional
                            </h3>
                            
                            <div className="relative border-l border-gray-800 ml-3 space-y-8 pb-8">
                                {EXPERIENCE.map((exp, idx) => (
                                    <div key={exp.id} className="relative pl-8 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-dark border-2 border-blue-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                            <h4 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">{exp.role}</h4>
                                            <span className="text-sm font-mono text-gray-500 bg-brand-surface px-2 py-0.5 rounded border border-gray-800">{exp.period}</span>
                                        </div>
                                        
                                        <div className="text-blue-400 font-medium mb-3 flex items-center gap-2">
                                            {exp.company}
                                        </div>
                                        
                                        <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects highlight text (Small footer inside CV) */}
                        <div className="mt-12 p-6 bg-gradient-to-r from-brand-surface to-brand-dark rounded-xl border border-gray-800 text-center">
                            <p className="text-gray-400 italic text-sm">
                                "Mi enfoque no es solo escribir código, sino construir soluciones que aporten valor real al negocio y a los usuarios finales."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CVView;