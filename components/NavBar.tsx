import React, { useState } from 'react';
import { Menu, X, Monitor, Disc, Globe } from 'lucide-react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['HOME', 'ARCHIVES', 'WEB_RING', 'GUESTBOOK'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[#39ff14] px-4 py-3 font-pixel">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2 text-[#39ff14] animate-pulse">
                    <Monitor size={24} />
                    <span className="text-lg md:text-xl tracking-tighter">CYBER<span className="text-[#ff00ff]">WEB</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a 
                            key={item} 
                            href="#" 
                            className="text-[#39ff14] hover:text-[#ff00ff] hover:underline decoration-4 underline-offset-4 transition-colors"
                        >
                            [{item}]
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-[#39ff14] hover:bg-[#39ff14] hover:text-black p-1 border-2 border-[#39ff14]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b-4 border-[#39ff14] p-4 flex flex-col gap-4 shadow-lg">
                    {navItems.map((item) => (
                        <a 
                            key={item} 
                            href="#" 
                            className="text-[#39ff14] hover:bg-[#39ff14] hover:text-black p-2 block text-center border border-[#39ff14]"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;