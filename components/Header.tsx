import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCV: () => void;
  onOpenProjects: () => void;
  onOpenExperience: () => void;
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCV, onOpenProjects, onOpenExperience, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenCV();
    setMenuOpen(false);
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenProjects();
    setMenuOpen(false);
  };

  const handleExperienceClick = (e: React.MouseEvent) => {
      e.preventDefault();
      onOpenExperience();
      setMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenContact();
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={handleHomeClick} className="text-2xl font-display font-bold bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent border-none bg-transparent cursor-pointer">
          Brayan.Dev
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={handleHomeClick}
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
          >
            Inicio
          </button>
          
          <button 
            onClick={handleAboutClick}
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
          >
            Sobre Mí (CV)
          </button>

          <button 
            onClick={handleProjectsClick}
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
          >
            Proyectos
          </button>

          <button 
            onClick={handleExperienceClick}
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
          >
            Experiencia
          </button>

          <button 
            onClick={handleContactClick}
            className="px-4 py-2 rounded-full border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all text-sm font-bold cursor-pointer"
          >
            Contáctame
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-surface border-t border-gray-800 p-6 flex flex-col gap-4 shadow-2xl h-screen">
           <button onClick={handleHomeClick} className="text-left text-gray-200 text-lg py-2 border-b border-gray-800 bg-transparent">Inicio</button>
           <button onClick={handleAboutClick} className="text-left text-gray-200 text-lg py-2 border-b border-gray-800 bg-transparent">Sobre Mí (CV)</button>
           <button onClick={handleProjectsClick} className="text-left text-gray-200 text-lg py-2 border-b border-gray-800 bg-transparent">Proyectos</button>
           <button onClick={handleExperienceClick} className="text-left text-gray-200 text-lg py-2 border-b border-gray-800 bg-transparent">Experiencia</button>
           <button onClick={handleContactClick} className="text-left text-brand-accent text-lg py-2 font-bold bg-transparent">Contáctame</button>
        </div>
      )}
    </header>
  );
};

export default Header;