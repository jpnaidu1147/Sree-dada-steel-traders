import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  let apiKey = process.env.API_KEY;

  // Handle API Key selection for AI Studio environment if key is missing
  if (!apiKey && typeof window !== 'undefined' && (window as any).aistudio) {
    try {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
        return "Please select an API key in the popup window and try your request again.";
      }
    } catch (e) {
      console.error("Error checking/selecting API key:", e);
    }
  }

  // Re-check api key in case it was just injected
  apiKey = process.env.API_KEY;

  if (!apiKey) {
    return "AI Service is currently unavailable. Please refresh the page and ensure you have selected a valid API Key.";
  }

  try {
    // Initialize AI client on demand with the current API key
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an expert technical sales consultant for "Shree Dada Steel Traders", a steel distribution company in Bangalore. 
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
    return "I am having trouble connecting to the AI server. Please try again later or contact support.";
  }
};