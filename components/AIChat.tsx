import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de este portafolio. Pregúntame sobre la experiencia, proyectos o habilidades de Brayan.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userText);

    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-gradient-to-r from-brand-accent to-brand-purple text-brand-dark font-bold py-3 px-5 rounded-full shadow-lg hover:shadow-brand-accent/50 transition-all hover:scale-105 animate-bounce-subtle"
        >
          <Sparkles className="w-5 h-5" />
          <span>Pregúntale a la IA</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-brand-surface border border-gray-700 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-brand-dark p-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-accent/20 rounded-lg">
                <Bot className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Asistente Virtual</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  En línea (Gemini)
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-surface">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-purple text-white rounded-br-none' 
                    : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-none border border-gray-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-brand-dark border-t border-gray-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="¿En qué proyectos ha trabajado?"
                className="w-full bg-gray-900 text-white text-sm rounded-full py-3 pl-4 pr-12 border border-gray-700 focus:border-brand-accent focus:outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 p-1.5 bg-brand-accent text-brand-dark rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 text-center mt-2">Powered by Google Gemini</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;