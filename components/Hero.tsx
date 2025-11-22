import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-[#39ff14]">
            
            {/* Grid Background */}
            <div 
                className="absolute inset-0 z-0 opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(0px) scale(2)',
                    transformOrigin: 'bottom'
                }}
            ></div>

            <div className="z-10 p-6 max-w-4xl">
                <div className="inline-block border-2 border-[#ff00ff] px-4 py-1 mb-6 bg-black transform -skew-x-12">
                    <span className="font-pixel text-[#ff00ff] text-xs md:text-sm animate-pulse">EST. 1999 // HOSTED ON GEOCITIES</span>
                </div>
                
                <h1 className="font-pixel text-4xl md:text-6xl lg:text-8xl text-[#39ff14] mb-6 leading-tight text-shadow-neon tracking-tighter">
                    WELCOME TO THE <br />
                    <span className="text-white bg-[#000080] px-2">CYBER ZONE</span>
                </h1>

                <p className="font-term text-2xl md:text-3xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Enter the digital frontier. Experience the information superhighway like never before.
                    <br/>
                    <span className="text-[#ff00ff] animate-blink">_CURSOR_READY</span>
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button onClick={() => document.getElementById('terminal')?.scrollIntoView({behavior: 'smooth'})} className="bg-[#39ff14] text-black font-pixel py-4 px-8 border-b-8 border-r-8 border-[#1a8009] active:border-0 active:translate-y-2 transition-all hover:brightness-110 text-sm md:text-base">
                        ENTER TERMINAL
                    </button>
                    <button className="bg-[#000080] text-white font-pixel py-4 px-8 border-b-8 border-r-8 border-[#000040] active:border-0 active:translate-y-2 transition-all hover:brightness-125 text-sm md:text-base">
                        SIGN GUESTBOOK
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                 <img src="https://i.imgur.com/P6g12.png" alt="scroll down" className="w-8 h-8 opacity-0" /> {/* Placeholder for scroll indicator if needed, currently using pure CSS arrow below */}
                 <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-[#39ff14]"></div>
            </div>
        </div>
    );
};

export default Hero;