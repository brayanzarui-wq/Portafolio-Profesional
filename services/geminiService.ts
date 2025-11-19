import { GoogleGenAI, Chat } from "@google/genai";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS } from "../constants";

// Initialize the client
// CRITICAL FOR VERCEL: Vite exposes env vars via import.meta.env and they must be prefixed with VITE_
// We check both methods to ensure compatibility with different build tools.
const apiKey = (import.meta as any).env?.VITE_API_KEY || process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

// Construct a system prompt based on the portfolio data
const systemContext = `
Eres el asistente de inteligencia artificial del portafolio profesional de ${PROFILE.name}.
Tu objetivo es actuar como un reclutador o representante profesional de ${PROFILE.name}.

Aquí está la información de ${PROFILE.name}:
Título: ${PROFILE.title}
Bio: ${PROFILE.bio}
Habilidades: ${SKILLS.map(s => s.name).join(', ')}
Experiencia: ${EXPERIENCE.map(e => `${e.role} en ${e.company} (${e.period}): ${e.description}`).join('; ')}
Proyectos: ${PROJECTS.map(p => `${p.title} (${p.tags.join(', ')}): ${p.description}`).join('; ')}

Instrucciones:
1. Responde de manera profesional, concisa y amable.
2. Si te preguntan sobre contacto, proporciona el email: ${PROFILE.email}.
3. Resalta las tecnologías clave cuando sea relevante.
4. Si te preguntan algo que no está en el contexto, responde honestamente que no tienes esa información pero sugiere contactar a ${PROFILE.name} directamente.
5. Habla en primera persona del plural (ej. "Nosotros hemos trabajado en...", "Alex tiene experiencia en...") o tercera persona refiriéndote a Alex.
6. El idioma principal es Español.
`;

let chatSession: Chat | null = null;

export const startChat = (): Chat => {
  if (!apiKey) {
    console.warn("Gemini API Key not found. Please set VITE_API_KEY in your environment variables.");
  }
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemContext,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    startChat();
  }
  
  // If still no session (likely due to missing API key handling in strict environments), try one last init or fail gracefully
  if (!chatSession && apiKey) {
      startChat();
  }

  if (!apiKey) return "Error de configuración: No se detectó la API Key (VITE_API_KEY).";

  try {
    if (!chatSession) return "Error iniciando sesión de chat.";
    
    const result = await chatSession.sendMessage({ message });
    return result.text || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hubo un error al conectar con la IA. Por favor intenta más tarde.";
  }
};