import React from 'react';

const RetroEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden crt-overlay">
      <div className="scanline"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)]"></div>
    </div>
  );
};

export default RetroEffects;