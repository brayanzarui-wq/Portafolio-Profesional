import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AIChat from './components/AIChat';
import CVView from './components/CVView';
import ProjectsView from './components/ProjectsView';
import ExperienceView from './components/ExperienceView';
import ContactView from './components/ContactView';
import CodePreviewModal from './components/CodePreviewModal';
import { PROJECTS, SKILLS, EXPERIENCE, PROFILE } from './constants';
import { Briefcase, Code, Cpu, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Project } from './types';

const App: React.FC = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // State for Code/README Modal
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [selectedPrivateProject, setSelectedPrivateProject] = useState<Project | null>(null);

  const handleOpenReadme = (project: Project) => {
      setSelectedPrivateProject(project);
      setIsCodeModalOpen(true);
  };

  return (
    <div className="bg-brand-dark min-h-screen text-gray-200 selection:bg-brand-accent selection:text-brand-dark">
      <Header 
        onOpenCV={() => setIsCVOpen(true)} 
        onOpenProjects={() => setIsProjectsOpen(true)}
        onOpenExperience={() => setIsExperienceOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      
      {/* Overlays */}
      <CVView isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <ProjectsView 
        isOpen={isProjectsOpen} 
        onClose={() => setIsProjectsOpen(false)} 
        onOpenReadme={handleOpenReadme}
      />
      <ExperienceView isOpen={isExperienceOpen} onClose={() => setIsExperienceOpen(false)} />
      <ContactView isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      <CodePreviewModal 
        isOpen={isCodeModalOpen} 
        onClose={() => setIsCodeModalOpen(false)} 
        project={selectedPrivateProject} 
      />

      <main>
        <Hero 
            onOpenProjects={() => setIsProjectsOpen(true)} 
            onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Skills Section */}
        <section className="py-24 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-2">
                            <Cpu className="text-brand-purple" />
                            Habilidades Técnicas
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Mi stack tecnológico está enfocado en rendimiento, escalabilidad y experiencia de desarrollador.
                        </p>
                        <div className="space-y-6">
                            {['frontend', 'backend', 'design', 'tools'].map((category) => (
                                <div key={category}>
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-bold">{category}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {SKILLS.filter(s => s.category === category).map(skill => (
                                            <span key={skill.name} className="px-3 py-1.5 bg-brand-surface border border-gray-700 rounded-md text-sm text-gray-300 hover:border-brand-accent/50 hover:text-brand-accent transition-colors cursor-default">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Teaser (Replaced full timeline with summary card) */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-2">
                            <Briefcase className="text-brand-accent" />
                            Experiencia Reciente
                        </h2>
                        <div className="bg-brand-surface border border-gray-800 rounded-xl p-8 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Briefcase size={100} />
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-2">{EXPERIENCE[0].role}</h3>
                             <p className="text-brand-accent mb-4">{EXPERIENCE[0].company}</p>
                             <p className="text-gray-400 mb-6 line-clamp-3">
                                {EXPERIENCE[0].description}
                             </p>
                             <button 
                                onClick={() => setIsExperienceOpen(true)}
                                className="flex items-center gap-2 text-white font-bold hover:text-brand-accent transition-colors"
                             >
                                Ver Trayectoria Completa <ExternalLink size={16} />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Projects Preview Section */}
        <section className="py-24 bg-brand-surface/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <Code className="text-brand-accent" />
                    Proyectos Destacados
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Una selección de aplicaciones que demuestran mi capacidad para resolver problemas complejos con código limpio.
                    <br/>
                    <button onClick={() => setIsProjectsOpen(true)} className="text-brand-accent hover:underline mt-2 font-bold">
                        Ver detalles y workflow completo &rarr;
                    </button>
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map(project => (
                <div key={project.id} onClick={() => setIsProjectsOpen(true)} className="cursor-pointer">
                    <ProjectCard project={project} onOpenReadme={handleOpenReadme} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-brand-dark to-brand-surface">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-display font-bold text-white mb-8">¿Listo para trabajar juntos?</h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    Actualmente estoy buscando nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres saludar, mi bandeja de entrada está abierta.
                </p>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-3 bg-brand-purple text-white font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 mb-12 shadow-lg shadow-brand-purple/25"
                >
                  Abrir Centro de Contacto
                </button>
                
                <div className="flex justify-center gap-6 mb-8">
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-4 bg-brand-surface rounded-full text-gray-300 hover:text-white hover:bg-brand-purple transition-all hover:-translate-y-1">
                        <Github size={24} />
                    </a>
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-brand-surface rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all hover:-translate-y-1">
                        <Linkedin size={24} />
                    </a>
                </div>
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} {PROFILE.name}. Diseñado y construido con React & Tailwind.
                </p>
            </div>
        </section>
      </main>

      <AIChat />
    </div>
  );
};

export default App;