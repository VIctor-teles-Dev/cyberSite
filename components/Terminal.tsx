import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([
        { 
            role: 'system', 
            text: 'CONNECTING TO MAINFRAME...\nCONNECTION ESTABLISHED.\nWELCOME TO CYBER-MIND 9000.\nASK ME ANYTHING, DUDE.',
            timestamp: new Date().toLocaleTimeString() 
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            role: 'user',
            text: input,
            timestamp: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Format history for the service
            const history = messages
                .filter(m => m.role !== 'system')
                .map(m => ({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.text }]
                })) as any;

            const responseText = await sendMessageToGemini(userMsg.text, history);

            const aiMsg: ChatMessage = {
                role: 'model',
                text: responseText,
                timestamp: new Date().toLocaleTimeString()
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-2 md:p-4 mt-8 font-term">
            <div className="bg-black border-4 border-[#39ff14] shadow-[8px_8px_0_0_rgba(57,255,20,0.5)] rounded-none flex flex-col h-[600px]">
                {/* Terminal Header */}
                <div className="bg-[#39ff14] text-black p-2 flex justify-between items-center font-bold font-pixel text-sm">
                    <div className="flex items-center gap-2">
                        <TerminalIcon size={16} />
                        <span>C:\CYBER_MIND\CHAT.EXE</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-black border border-black"></div>
                        <div className="w-3 h-3 bg-black border border-black"></div>
                        <div className="w-3 h-3 bg-black border border-black"></div>
                    </div>
                </div>

                {/* Terminal Output */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 font-xl scrollbar-thin scrollbar-thumb-[#39ff14]">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end text-[#ff00ff]' : 'items-start text-[#39ff14]'}`}>
                            <div className="text-xs opacity-50 mb-1">[{msg.timestamp}] {msg.role === 'user' ? 'USER@HOST' : 'ROOT@SYSTEM'}</div>
                            <div className={`max-w-[90%] p-2 border ${msg.role === 'user' ? 'border-[#ff00ff] bg-[#ff00ff]/10' : 'border-[#39ff14] bg-[#39ff14]/10'}`}>
                                <p className="whitespace-pre-wrap leading-snug text-lg md:text-xl">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start text-[#39ff14]">
                            <div className="text-xs opacity-50 mb-1">ROOT@SYSTEM</div>
                             <div className="ml-2 p-2">
                                <span className="animate-blink">PROCESSING...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Terminal Input */}
                <div className="border-t-2 border-[#39ff14] p-2 bg-black flex items-center gap-2">
                    <span className="text-[#39ff14] font-bold text-xl">{`>`}</span>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        className="flex-1 bg-transparent border-none outline-none text-[#39ff14] font-term text-2xl placeholder-[#39ff14]/30"
                        placeholder="ENTER COMMAND..."
                        autoComplete="off"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={isLoading}
                        className="bg-[#39ff14] text-black p-2 hover:bg-[#ff00ff] transition-colors disabled:opacity-50"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Terminal;