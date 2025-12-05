import { GoogleGenAI, Type } from "@google/genai";
import { InsightsData } from "../types";

// Initialize Gemini Client
// Note: In a real production build, ensure API_KEY is set in your environment.
// For this bridge page, we handle the case where it might be missing gracefully in the component.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const fetchMarketInsights = async (): Promise<InsightsData | null> => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Returning null to show fallback content.");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate 3 persuasive, short reasons why 'Yield Farming' or 'Staking' (passive crypto income) is superior to 'Day Trading' for beginners right now. Focus on safety, consistency, and time-saving. The tone should be professional and encouraging.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  icon: { type: Type.STRING, enum: ['trending', 'shield', 'clock'] }
                },
                required: ['title', 'description', 'icon']
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as InsightsData;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch insights from Gemini:", error);
    return null;
  }
};