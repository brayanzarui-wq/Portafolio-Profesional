import React, { useEffect, useState } from 'react';
import { X, Lock, FileCode, Terminal, Shield } from 'lucide-react';
import { Project } from '../types';

interface CodePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const CodePreviewModal: React.FC<CodePreviewModalProps> = ({ isOpen, onClose, project }) => {
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
  if (!project) return null;

  // Simple function to parse fake markdown for display
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-2xl md:text-3xl font-bold text-white mb-4 mt-6 border-b border-gray-700 pb-2">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl md:text-2xl font-bold text-brand-accent mb-3 mt-6">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-bold text-brand-purple mb-2 mt-4">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('> ')) {
        return (
            <div key={index} className="border-l-4 border-yellow-500 bg-yellow-500/10 p-4 my-4 rounded-r-lg italic text-gray-300">
                {line.replace('> ', '')}
            </div>
        );
      }
      if (line.trim().startsWith('```')) {
        return null; // Skip code block markers for simplicity or handle specifically
      }
      if (line.includes('const ') || line.includes('import ') || line.includes('return ')) {
          return <div key={index} className="font-mono text-green-400 bg-black/30 px-4 py-0.5">{line}</div>
      }
      if (line.startsWith('- ')) {
        return (
            <li key={index} className="ml-4 list-disc text-gray-300 mb-1 pl-2 marker:text-brand-accent">
                {line.replace('- ', '')}
            </li>
        );
      }
      if (line.trim() === '') return <br key={index} />;
      
      return <p key={index} className="text-gray-300 mb-1 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className={`fixed inset-0 z-[80] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-3xl h-[85vh] bg-[#0d1117] rounded-xl shadow-2xl overflow-hidden border border-gray-700 flex flex-col transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
      >
        {/* Header - VS Code Style */}
        <div className="bg-[#161b22] border-b border-gray-700 p-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#0d1117] rounded-t-md border-t border-l border-r border-gray-700 relative top-[5px]">
                    <FileCode size={14} className="text-brand-accent" />
                    <span className="text-xs text-gray-300 font-mono">README.md</span>
                    <span className="text-xs text-gray-500 ml-2 border-l border-gray-700 pl-2">Solo Lectura</span>
                </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={18} />
            </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 font-sans">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-6 text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-lg border border-yellow-500/20 w-fit">
                    <Lock size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Repositorio Privado</span>
                </div>

                {project.readmeContent ? (
                    <div className="prose prose-invert max-w-none">
                        {renderContent(project.readmeContent)}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Shield size={48} className="mx-auto text-gray-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-400">Documentación Restringida</h3>
                        <p className="text-gray-500 mt-2">No hay detalles públicos disponibles para este proyecto.</p>
                    </div>
                )}

                <div className="mt-12 pt-6 border-t border-gray-800 flex items-center gap-3 text-gray-500 text-xs font-mono">
                    <Terminal size={14} />
                    <span>End of file</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreviewModal;