import React, { useEffect, useState } from 'react';
import { X, Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink, Smartphone, QrCode } from 'lucide-react';
import { PROFILE } from '../constants';

interface ContactViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

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

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className={`fixed inset-0 z-[70] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>

      {/* Contact Modal */}
      <div 
        className={`relative w-full max-w-4xl bg-brand-dark rounded-2xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-500 ${isOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors">
            <X size={20} />
        </button>

        <div className="grid md:grid-cols-5 h-full min-h-[500px]">
            
            {/* Left: Digital Business Card Visual */}
            <div className="md:col-span-2 bg-gradient-to-br from-brand-surface to-brand-dark border-r border-gray-800 p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Decorator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-brand-purple"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full border-4 border-brand-surface shadow-xl overflow-hidden mb-6">
                        <img 
                            src={PROFILE.avatarUrl} 
                            alt={PROFILE.name} 
                            className="w-full h-full object-cover bg-gray-800" 
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300&q=80";
                                e.currentTarget.onerror = null;
                            }}
                        />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">{PROFILE.name}</h2>
                    <p className="text-brand-accent font-medium">{PROFILE.title}</p>
                    <div className="flex items-center gap-2 mt-4 text-green-400 text-sm bg-green-500/10 py-1 px-3 rounded-full w-fit border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Disponible para ofertas
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="bg-white p-4 rounded-xl w-32 h-32 mx-auto md:mx-0 mb-2 shadow-lg">
                        {/* Placeholder for QR Code - In production use a library like qrcode.react */}
                         <div className="w-full h-full bg-gray-900 flex items-center justify-center rounded">
                            <QrCode className="text-white w-12 h-12" />
                         </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center md:text-left">Escanea para guardar contacto</p>
                </div>
            </div>

            {/* Right: Interaction Hub */}
            <div className="md:col-span-3 bg-[#0f172a] p-8 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-6">Medios de Contacto</h3>
                
                <div className="grid grid-cols-1 gap-4">
                    
                    {/* Email Card */}
                    <div className="group relative bg-brand-surface border border-gray-800 rounded-xl p-4 hover:border-brand-accent/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent">
                                    <Mail size={20} />
                                </div>
                                <span className="text-gray-400 text-sm font-bold">Correo Electrónico</span>
                            </div>
                            <div className="flex gap-2">
                                <a 
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 hover:bg-brand-accent hover:text-brand-dark rounded-lg text-gray-300 transition-all duration-300 shadow-lg hover:shadow-brand-accent/25"
                                    title="Redactar correo en Gmail"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-black/20 rounded-lg p-3">
                            <span className="text-white font-mono text-sm truncate mr-2">{PROFILE.email}</span>
                            <button 
                                onClick={() => handleCopy(PROFILE.email, 'email')}
                                className="text-gray-400 hover:text-brand-accent transition-colors"
                                title="Copiar"
                            >
                                {copiedField === 'email' ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="group relative bg-brand-surface border border-gray-800 rounded-xl p-4 hover:border-brand-purple/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-brand-purple/10 rounded-lg text-brand-purple">
                                    <Phone size={20} />
                                </div>
                                <span className="text-gray-400 text-sm font-bold">Teléfono</span>
                            </div>
                             <div className="flex gap-2">
                                {/*<a 
                                    href={`tel:${PROFILE.phone}`} 
                                    className="p-2 bg-white/5 hover:bg-brand-purple hover:text-white rounded-lg text-gray-300 transition-all duration-300 shadow-lg hover:shadow-brand-purple/25"
                                    title="Llamar ahora"
                                >
                                    <Smartphone size={18} />
                                </a>*/}
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-black/20 rounded-lg p-3">
                            <span className="text-white font-mono text-sm">{PROFILE.phone}</span>
                             <button 
                                onClick={() => handleCopy(PROFILE.phone, 'phone')}
                                className="text-gray-400 hover:text-brand-purple transition-colors"
                                title="Copiar"
                            >
                                {copiedField === 'phone' ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Social Row */}
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <a 
                            href={PROFILE.linkedin} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex flex-col items-center justify-center p-4 bg-brand-surface border border-gray-800 rounded-xl hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all group"
                        >
                            <Linkedin size={24} className="text-gray-400 group-hover:text-white mb-2" />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">LinkedIn</span>
                        </a>
                         <a 
                            href={PROFILE.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex flex-col items-center justify-center p-4 bg-brand-surface border border-gray-800 rounded-xl hover:bg-white hover:text-black hover:border-transparent transition-all group"
                        >
                            <Github size={24} className="text-gray-400 group-hover:text-black mb-2" />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-black">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;