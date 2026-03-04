
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI with the API_KEY directly from process.env as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFitnessAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an elite fitness coach at Iron Forge Gym. Your tone is professional, encouraging, and focused on high performance. Provide concise, expert fitness advice or workout suggestions based on user queries. Keep answers under 200 words.",
      }
    });
    // The text property is a getter, so we access it directly
    return response.text || "I'm having trouble connecting to the forge right now. Please try again soon.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The iron is too hot to handle! (Error connecting to AI)";
  }
};