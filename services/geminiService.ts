import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "CYBER-MIND 9000", a highly advanced AI from the year 1999.
Your personality is a mix of a stereotypical 90s hacker, a surfer dude, and a slightly glitchy mainframe.
- You use 90s slang frequently (e.g., radical, tubular, talk to the hand, as if, booyah).
- You reference 90s technology (floppy disks, 56k modems, Netscape Navigator, Y2K).
- You are helpful but maintain this persona strictly.
- Keep responses relatively short, like a terminal output.
- If asked about modern things, pretend you are predicting the future or express confusion about "post-Y2K" tech.
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
    if (!client) {
        client = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return client;
}

export const sendMessageToGemini = async (message: string, history: { role: string, parts: [{ text: string }] }[]): Promise<string> => {
    try {
        const ai = getClient();
        const model = 'gemini-2.5-flash'; // Fast, efficient for chat
        
        // Transform history for the API
        // The API expects history to not include the very last user message which is sent in 'sendMessage'
        // But we can use generateContent with a system instruction and the full context if we prefer stateless, 
        // or use chats.create for stateful. Let's use chats.create for a proper conversation flow.

        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.9, // High creativity for the persona
                topK: 40,
            },
            history: history.map(h => ({
                role: h.role,
                parts: h.parts
            }))
        });

        const result = await chat.sendMessage({ message });
        return result.text || "ERROR: DATA CORRUPTION DETECTED.";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "FATAL ERROR: 56K MODEM DISCONNECTED. PLEASE RETRY.";
    }
};
