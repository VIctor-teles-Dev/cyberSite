import React from 'react';
import { Save, Globe, Cpu, Zap, Music, Eye } from 'lucide-react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; color: string }> = ({ title, desc, icon, color }) => {
    const borderColor = color === 'pink' ? 'border-[#ff00ff]' : (color === 'cyan' ? 'border-[#00ffff]' : 'border-[#39ff14]');
    const textColor = color === 'pink' ? 'text-[#ff00ff]' : (color === 'cyan' ? 'text-[#00ffff]' : 'text-[#39ff14]');
    const shadowClass = color === 'pink' ? 'box-retro-pink' : 'box-retro'; // Simplified for this demo

    return (
        <div className={`bg-black border-2 ${borderColor} p-6 transform hover:-translate-y-1 transition-transform duration-200 ${shadowClass}`}>
            <div className={`mb-4 ${textColor}`}>
                {icon}
            </div>
            <h3 className={`font-pixel text-lg mb-2 ${textColor}`}>{title}</h3>
            <p className="font-term text-xl leading-tight text-gray-300">{desc}</p>
        </div>
    );
};

const Features: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="font-pixel text-2xl md:text-4xl text-[#00ffff] text-shadow-neon mb-4">SYSTEM CAPABILITIES</h2>
                <div className="h-1 w-full max-w-md mx-auto bg-[#00ffff]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                    title="HIGH SPEED SURFING" 
                    desc="Experience the web at blazing 56k speeds. No more waiting for images to load top-to-bottom!"
                    icon={<Zap size={48} />}
                    color="green"
                />
                <FeatureCard 
                    title="GLOBAL WEB RING" 
                    desc="Connect with other radical sites in our exclusive web ring. Join the community!"
                    icon={<Globe size={48} />}
                    color="pink"
                />
                <FeatureCard 
                    title="100% JAVA FREE" 
                    desc="Optimized for Netscape Navigator 4.0. We promise no crashing applets."
                    icon={<Cpu size={48} />}
                    color="cyan"
                />
                 <FeatureCard 
                    title="MIDI JUKEBOX" 
                    desc="Listen to the hottest 8-bit tunes while you browse. Auto-play enabled!"
                    icon={<Music size={48} />}
                    color="pink"
                />
                <FeatureCard 
                    title="FLOPPY BACKUP" 
                    desc="Don't lose your data. Download our site to a 3.5 inch disk today."
                    icon={<Save size={48} />}
                    color="cyan"
                />
                <FeatureCard 
                    title="UNDER CONST." 
                    desc="This section is permanently under construction. Check back in Y2K."
                    icon={<Eye size={48} />}
                    color="green"
                />
            </div>
        </section>
    );
};

export default Features;