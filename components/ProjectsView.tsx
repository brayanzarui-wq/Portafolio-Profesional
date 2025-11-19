import React, { useEffect, useState } from 'react';
import { X, Github, ExternalLink, Layers, ArrowRight, Monitor, Database, Layout, Lock, FileCode, Image as ImageIcon, FileText, Download, Maximize2, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsViewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReadme?: (project: Project) => void;
}

// Sub-component for handling gallery thumbnails safely
const GalleryThumbnail: React.FC<{ src: string; index: number; onClick: () => void }> = ({ src, index, onClick }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
       <div 
         className="group relative aspect-video rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50 cursor-default flex items-center justify-center"
       >
          <Code2 className="text-gray-700" size={20} />
       </div>
    );
  }

  return (
      <div 
          className="group relative aspect-video rounded-lg overflow-hidden border border-gray-700 cursor-pointer hover:border-brand-accent transition-colors bg-gray-900"
          onClick={onClick}
      >
          <img 
              src={src} 
              alt={`Captura ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 hover:opacity-100"
              onError={() => setError(true)}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <Maximize2 className="text-white drop-shadow-lg" size={20} />
          </div>
      </div>
  );
};

const ProjectsView: React.FC<ProjectsViewProps> = ({ isOpen, onClose, onOpenReadme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  
  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxError, setLightboxError] = useState(false);

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

  useEffect(() => {
    setCurrentImageIndex(0);
    setImgError(false); // Reset error state on project change
  }, [activeProject]);

  // Reset error when image index changes
  useEffect(() => {
    setImgError(false);
    setLightboxError(false);
  }, [currentImageIndex]);

  if (!isOpen && !isVisible) return null;

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeProject.gallery) {
        setCurrentImageIndex((prev) => (prev + 1) % activeProject.gallery!.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeProject.gallery) {
        setCurrentImageIndex((prev) => (prev - 1 + activeProject.gallery!.length) % activeProject.gallery!.length);
    }
  };

  // Helper to determine current image URL safe
  const currentImageUrl = activeProject.gallery && activeProject.gallery.length > 0
    ? activeProject.gallery[currentImageIndex]
    : activeProject.imageUrl;

  return (
    <>
      <div className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>

        {/* Main Container */}
        <div 
          className={`relative w-full max-w-6xl h-[95vh] bg-brand-dark/95 md:rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col md:flex-row transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          {/* Left Sidebar - Project Navigation */}
          <div className="w-full md:w-80 bg-brand-surface border-r border-gray-800 flex flex-col">
              <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <Layers className="text-brand-accent" />
                      Proyectos
                  </h2>
                  <button onClick={onClose} className="md:hidden text-gray-400">
                      <X />
                  </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                  {PROJECTS.map((project) => (
                      <button
                          key={project.id}
                          onClick={() => setActiveProject(project)}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                              activeProject.id === project.id 
                              ? 'bg-brand-dark border-brand-accent shadow-[0_0_15px_rgba(56,189,248,0.1)]' 
                              : 'bg-transparent border-transparent hover:bg-gray-800/50 text-gray-400'
                          }`}
                      >
                          <div className="flex justify-between items-start">
                              <h3 className={`font-bold text-sm ${activeProject.id === project.id ? 'text-white' : 'text-gray-300'}`}>
                                  {project.title}
                              </h3>
                              {project.isPrivate && <Lock size={12} className="text-yellow-500 mt-1" />}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                              {project.tags.slice(0, 2).map(tag => (
                                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-500 border border-gray-700">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                      </button>
                  ))}
              </div>
          </div>

          {/* Right Content - Project Details */}
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0f172a] relative">
              <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-black/50 rounded-full hover:bg-brand-accent hover:text-black text-white transition-colors hidden md:block">
                  <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                  
                  {/* Hero Image / Carousel Area */}
                  <div className="relative h-64 md:h-96 bg-black group flex items-center justify-center bg-gray-900">
                      {!imgError ? (
                          <img 
                              key={currentImageUrl} 
                              src={currentImageUrl}
                              alt={activeProject.title}
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                              onError={() => setImgError(true)}
                          />
                      ) : (
                          <div className="text-center p-8 flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-gray-800 to-brand-dark">
                              <Code2 size={64} className="text-gray-700 mb-4" />
                              <p className="text-gray-500 font-bold">Visualización no disponible</p>
                          </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none"></div>
                      
                      {!imgError && (
                        <button 
                            onClick={() => setIsLightboxOpen(true)}
                            className="absolute top-4 left-4 p-2 bg-black/50 rounded-lg text-white hover:bg-brand-accent hover:text-black transition-colors opacity-0 group-hover:opacity-100 pointer-events-auto"
                            title="Ver Pantalla Completa"
                        >
                            <Maximize2 size={20} />
                        </button>
                      )}

                      {/* Image Selector Dots */}
                      {activeProject.gallery && activeProject.gallery.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                              {activeProject.gallery.map((_, idx) => (
                                  <button 
                                      key={idx}
                                      onClick={() => handleImageSelect(idx)}
                                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                                          currentImageIndex === idx ? 'bg-brand-accent w-8' : 'bg-gray-500 hover:bg-gray-300'
                                      }`}
                                  />
                              ))}
                          </div>
                      )}
                  </div>

                  <div className="p-8 md:p-12 max-w-4xl mx-auto">
                      {/* Title & Links */}
                      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                          <div>
                              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{activeProject.title}</h1>
                              <div className="flex flex-wrap gap-2 mb-6">
                                  {activeProject.tags.map(tag => (
                                      <span key={tag} className="px-3 py-1 bg-brand-purple/10 border border-brand-purple/30 text-brand-purple rounded-full text-sm font-medium">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                          </div>
                          <div className="flex gap-3">
                              {activeProject.isPrivate ? (
                                  <button
                                      onClick={() => onOpenReadme && onOpenReadme(activeProject)}
                                      className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500 hover:text-black text-yellow-500 rounded-lg transition-all font-medium border border-yellow-500/50"
                                  >
                                      <FileCode size={18} />
                                      <span>Arquitectura</span>
                                  </button>
                              ) : (
                                  activeProject.github && (
                                      <a 
                                          href={activeProject.github} 
                                          target="_blank" 
                                          rel="noopener noreferrer" 
                                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-white hover:text-black text-white rounded-lg transition-all font-medium border border-gray-700"
                                      >
                                          <Github size={18} />
                                          <span>Código</span>
                                      </a>
                                  )
                              )}

                              {activeProject.link && (
                                  <a 
                                      href={activeProject.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="flex items-center gap-2 px-4 py-2 bg-brand-accent hover:bg-brand-accent/80 text-brand-dark rounded-lg transition-all font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                                  >
                                      <ExternalLink size={18} />
                                      <span>Demo Live</span>
                                  </a>
                              )}
                          </div>
                      </div>

                      {/* Description & Workflow */}
                      <div className="grid md:grid-cols-3 gap-12">
                          <div className="md:col-span-2">
                              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                  <Monitor className="text-brand-accent" />
                                  Sobre el Proyecto
                              </h3>
                              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                  {activeProject.description}
                              </p>

                              {activeProject.workflow && (
                                  <div className="mt-12">
                                      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                                          <Database className="text-brand-purple" />
                                          Workflow de Desarrollo
                                      </h3>
                                      <div className="relative border-l-2 border-gray-800 ml-3 space-y-10">
                                          {activeProject.workflow.map((step, idx) => (
                                              <div key={idx} className="relative pl-8 group">
                                                  <div className="absolute -left-[9px] top-0 bg-brand-dark p-1 group-hover:scale-110 transition-transform">
                                                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-brand-accent to-brand-purple"></div>
                                                  </div>
                                                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">
                                                      {step.title}
                                                  </h4>
                                                  <p className="text-gray-400 text-sm">
                                                      {step.description}
                                                  </p>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              )}
                          </div>

                          {/* Sidebar */}
                          <div className="space-y-8">
                              <div className="bg-brand-surface border border-gray-800 rounded-xl p-6">
                                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                      <Layout size={16} />
                                      Tech Stack
                                  </h3>
                                  <div className="flex flex-wrap gap-2">
                                      {activeProject.tags.map(tag => (
                                          <span key={tag} className="px-3 py-2 bg-brand-dark text-gray-300 text-sm rounded-lg border border-gray-700">
                                              {tag}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                              
                              <div className="p-6 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-xl border border-brand-accent/20">
                                  <h3 className="text-brand-accent font-bold mb-2">¿Te interesa?</h3>
                                  <p className="text-gray-400 text-sm mb-4">
                                      Puedo explicarte los detalles técnicos de esta implementación en una llamada.
                                  </p>
                                  <button onClick={onClose} className="text-sm font-bold text-white hover:text-brand-accent flex items-center gap-1">
                                      Contáctame <ArrowRight size={14} />
                                  </button>
                              </div>
                          </div>
                      </div>

                      {/* Bottom Section: Attachments */}
                      <div className="mt-16 pt-10 border-t border-gray-800">
                          <h2 className="text-2xl font-display font-bold text-white mb-8">Material Adjunto</h2>
                          
                          <div className="grid md:grid-cols-3 gap-12">
                              {/* Gallery Grid */}
                              <div className="md:col-span-2">
                                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                      <ImageIcon size={16} />
                                      Capturas de Pantalla
                                  </h3>
                                  {activeProject.gallery && activeProject.gallery.length > 0 ? (
                                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                          {activeProject.gallery.map((img, idx) => (
                                              <GalleryThumbnail 
                                                  key={idx}
                                                  src={img}
                                                  index={idx}
                                                  onClick={() => {
                                                      handleImageSelect(idx);
                                                      setIsLightboxOpen(true);
                                                  }}
                                              />
                                          ))}
                                      </div>
                                  ) : (
                                      <p className="text-gray-500 italic text-sm">No hay capturas adicionales.</p>
                                  )}
                              </div>

                              {/* Manual / PDF */}
                              <div>
                                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                      <FileText size={16} />
                                      Documentación
                                  </h3>
                                  
                                  {activeProject.manualUrl ? (
                                      <div className="bg-[#161b22] border border-gray-700 rounded-xl p-1 hover:border-brand-purple transition-colors group">
                                          <div className="p-4">
                                              <div className="flex items-start justify-between mb-3">
                                                  <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
                                                      <FileText size={24} />
                                                  </div>
                                                  <span className="text-[10px] font-mono text-gray-500 bg-black px-2 py-1 rounded uppercase border border-gray-800">PDF</span>
                                              </div>
                                              <h4 className="text-white font-bold mb-1 truncate">Manual de Usuario</h4>
                                              <p className="text-gray-500 text-xs mb-0">Guía completa de uso.</p>
                                          </div>
                                          
                                          <a 
                                              href={activeProject.manualUrl} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-brand-purple hover:text-white text-gray-300 text-sm font-bold rounded-b-lg transition-all"
                                          >
                                              <Download size={16} />
                                              Descargar Archivo
                                          </a>
                                      </div>
                                  ) : (
                                      <div className="border border-dashed border-gray-700 rounded-xl p-6 text-center bg-white/5">
                                          <p className="text-gray-500 text-xs">Documentación no disponible.</p>
                                      </div>
                                  )}
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && activeProject.gallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in">
            <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-50"
            >
                <X size={32} />
            </button>
            
            <button 
                onClick={(e) => prevImage(e)}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
                <ChevronLeft size={32} />
            </button>

            {/* Lightbox Image with Error Handling */}
            <div className="relative flex items-center justify-center w-full h-full">
                {!lightboxError ? (
                    <img 
                        key={currentImageUrl + '-lightbox'}
                        src={activeProject.gallery[currentImageIndex]} 
                        alt="Full screen preview" 
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded shadow-2xl"
                        onError={() => setLightboxError(true)}
                    />
                ) : (
                     <div className="text-center p-8 flex flex-col items-center justify-center">
                        <Code2 size={64} className="text-gray-700 mb-4" />
                        <p className="text-gray-500 font-bold">Vista previa no disponible</p>
                    </div>
                )}
            </div>

            <button 
                onClick={(e) => nextImage(e)}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
                <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm font-mono backdrop-blur-sm border border-white/10">
                {currentImageIndex + 1} / {activeProject.gallery.length}
            </div>
        </div>
      )}
    </>
  );
};

export default ProjectsView;