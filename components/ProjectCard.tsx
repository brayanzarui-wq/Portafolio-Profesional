import React, { useState } from 'react';
import { Github, ExternalLink, Lock, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenReadme?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenReadme }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-brand-surface rounded-xl overflow-hidden border border-gray-800 hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden bg-gray-900 relative">
        {!imgError ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-brand-dark">
             <Code2 size={48} className="text-gray-700 mb-2" />
             <span className="text-xs text-gray-600 font-mono uppercase tracking-wider">Preview</span>
          </div>
        )}

        <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.isPrivate ? (
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenReadme) onOpenReadme(project);
                    }}
                    className="p-3 bg-white/10 rounded-full hover:bg-yellow-500 hover:text-black text-white transition-colors backdrop-blur-sm flex items-center gap-2 px-4"
                    title="Ver Detalles Técnicos"
                >
                    <Lock size={18} />
                    <span className="text-sm font-bold">Privado</span>
                </button>
            ) : (
                project.github && (
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white/10 rounded-full hover:bg-brand-accent hover:text-brand-dark text-white transition-colors backdrop-blur-sm"
                        title="Ver Código en GitHub"
                    >
                        <Github size={20} />
                    </a>
                )
            )}
            
            {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white/10 rounded-full hover:bg-brand-accent hover:text-brand-dark text-white transition-colors backdrop-blur-sm"
                    title="Ver Proyecto en Vivo"
                >
                    <ExternalLink size={20} />
                </a>
            )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs rounded bg-brand-dark border border-gray-700 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;