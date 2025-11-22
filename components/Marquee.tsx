import React from 'react';

interface MarqueeProps {
    text: string;
    speed?: number;
    direction?: 'left' | 'right';
    className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "" }) => {
  return (
    <div className={`relative flex overflow-x-hidden bg-[#000080] border-y-2 border-white text-white font-term text-2xl py-1 ${className}`}>
      <div className="animate-marquee whitespace-nowrap py-1">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;