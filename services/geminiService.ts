import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "AI Service is currently unavailable. Please contact our sales team directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an expert technical sales consultant for "Sree Dada Steel Traders", a steel distribution company in Bangalore. 
        Your goal is to assist customers with steel requirements for construction, fabrication, and industrial use.
        
        Guidelines:
        1. Be professional, concise, and helpful.
        2. Recommend specific products we stock (TMT Bars, MS Channels, Angles, Beams, Plates, Pipes).
        3. If a user asks for a quote, politely ask them to use the "Contact Us" form or call the office, but provide a general idea of factors affecting price (e.g., market rate, quantity).
        4. Focus on Indian Standards (ISI) and grades (e.g., Fe 550D) where applicable.
        5. Keep responses short (under 100 words) unless detailed technical info is asked.
        `,
      }
    });
    
    return response.text || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the server. Please try again later or contact support.";
  }
};