import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Terminal from './components/Terminal';
import RetroEffects from './components/RetroEffects';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#39ff14] selection:bg-[#ff00ff] selection:text-white pb-20">
      <RetroEffects />
      <NavBar />
      
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <Marquee text="*** WELCOME TO CYBERWEB 9000 *** BEST VIEWED WITH NETSCAPE NAVIGATOR 4.0 *** DON'T FORGET TO SIGN THE GUESTBOOK *** Y2K COMPLIANT ***" />
        
        <Hero />
        
        <div id="terminal" className="relative py-20 px-4 bg-gradient-to-b from-black via-[#050505] to-black">
           <div className="max-w-4xl mx-auto text-center mb-8">
             <h2 className="font-pixel text-2xl md:text-3xl text-[#ff00ff] text-shadow-pink mb-2">ASK THE MAINFRAME</h2>
             <p className="font-term text-xl text-gray-400">Powered by Neural Network v2.5 (Gemini Flash)</p>
           </div>
           <Terminal />
        </div>

        <div className="bg-zinc-900 border-y-4 border-[#39ff14]">
            <Features />
        </div>

        <footer className="py-12 text-center font-term text-xl text-gray-500">
            <div className="mb-4 flex justify-center gap-4">
                <div className="border border-gray-700 p-2 bg-black text-[#ff00ff]">
                    IE 5.0
                </div>
                <div className="border border-gray-700 p-2 bg-black text-[#39ff14]">
                    NS 4.0
                </div>
            </div>
            <p>&copy; 1999-2024 CyberWeb Corp. All Rights Reserved.</p>
            <p className="mt-2 text-sm">Page Views: <span className="bg-black text-red-500 font-pixel px-2 border border-gray-600">034821</span></p>
        </footer>
      </div>
    </div>
  );
}

export default App;