import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants';

interface HeroProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenProjects, onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-surface border border-brand-accent/30 text-brand-accent text-sm font-semibold mb-4">
            Disponible para nuevos proyectos
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Creando el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-purple">
              Futuro Digital
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            {PROFILE.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onOpenProjects}
              className="group px-8 py-3 bg-brand-accent text-brand-dark font-bold rounded-lg flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onOpenContact}
              className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-brand-purple hover:text-brand-purple transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>
        </div>

        <div className="relative hidden md:flex justify-center">
            {/* Abstract tech visualization */}
            <div className="relative w-80 h-80 bg-gradient-to-tr from-brand-accent to-brand-purple rounded-2xl rotate-6 opacity-80 blur-sm"></div>
            <div className="absolute top-4 right-10 w-80 h-80 bg-brand-surface border border-gray-700 rounded-2xl shadow-2xl p-6 flex flex-col justify-between">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-sm text-gray-400">
                    <p><span className="text-brand-purple">const</span> developer = <span className="text-brand-accent">{`{`}</span></p>
                    <p className="pl-4">name: <span className="text-green-400">"{PROFILE.name}"</span>,</p>
                    <p className="pl-4">role: <span className="text-green-400">"{PROFILE.title}"</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"AI"</span>]</p>
                    <p><span className="text-brand-accent">{`}`}</span>;</p>
                </div>
                <div className="mt-4 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent w-3/4 animate-pulse"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;