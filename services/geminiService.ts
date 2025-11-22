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

function readApiKey(): string | undefined {
    // Browser (Vite): only variables prefixed with VITE_ are injected into the client bundle
    if (typeof window !== 'undefined') {
        // `import.meta.env` is available in Vite-powered client builds
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return import.meta?.env?.VITE_GEMINI_API_KEY;
    }

    // Server / Node environment
    return process.env.API_KEY || process.env.VITE_GEMINI_API_KEY;
}

const getClient = () => {
    if (!client) {
        const apiKey = readApiKey();
        if (!apiKey) {
            throw new Error('Gemini API key not found. Set VITE_GEMINI_API_KEY (client) or API_KEY (server).');
        }
        client = new GoogleGenAI({ apiKey });
    }
    return client;
}

export const sendMessageToGemini = async (message: string, history: { role: string, parts: [{ text: string }] }[]): Promise<string> => {
    try {
        const ai = getClient();
        const model = 'gemini-2.5-flash'; // Fast, efficient for chat

        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.9,
                topK: 40,
            },
            history: history.map(h => ({ role: h.role, parts: h.parts }))
        });

        const result = await chat.sendMessage({ message });
        return (result as any).text || "ERROR: DATA CORRUPTION DETECTED.";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "FATAL ERROR: 56K MODEM DISCONNECTED. PLEASE RETRY.";
    }
};
