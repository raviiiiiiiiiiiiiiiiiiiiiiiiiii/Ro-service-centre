import React from 'react';

interface BrandLogoProps {
  brandKey: string;
  className?: string;
}

export default function BrandLogo({ brandKey, className = '' }: BrandLogoProps) {
  const normalizedKey = brandKey.toLowerCase();

  switch (normalizedKey) {
    case 'kent':
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#004e9a] rounded-sm overflow-hidden bg-white shadow-sm ${className}`}>
          <div className="bg-[#004e9a] w-full px-6 py-1.5 flex items-center justify-center">
            <span className="text-white font-black text-2xl md:text-3xl tracking-wider font-sans">KENT</span>
          </div>
          <div className="bg-white w-full px-4 py-0.5 text-center border-b border-[#004e9a]/30">
            <span className="text-[#004e9a] font-bold text-sm md:text-base italic tracking-tight">Mineral RO™</span>
          </div>
          <div className="bg-[#004e9a] w-full px-4 py-0.5 text-center">
            <span className="text-white text-[11px] md:text-xs font-semibold uppercase tracking-wider">Water Purifiers</span>
          </div>
        </div>
      );

    case 'aquaguard':
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#123e78] rounded-sm overflow-hidden bg-white shadow-sm ${className}`}>
          <div className="bg-[#123e78] w-full px-6 py-2 flex items-center justify-center">
            <span className="text-white font-extrabold text-2xl md:text-3xl tracking-tight font-sans">Aquaguard</span>
          </div>
          <div className="bg-[#0e7490] w-full px-4 py-0.5 text-center">
            <span className="text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">Paani Ka Doctor</span>
          </div>
        </div>
      );

    case 'pureit':
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#0284c7] rounded-sm overflow-hidden bg-white shadow-sm ${className}`}>
          <div className="bg-[#0284c7] w-full px-6 py-1.5 flex items-center justify-center gap-1.5">
            <span className="text-white font-black text-2xl md:text-3xl tracking-tight lowercase font-sans">pureit</span>
          </div>
          <div className="bg-white w-full px-4 py-0.5 text-center border-t border-[#0284c7]/20">
            <span className="text-[#0369a1] text-[11px] md:text-xs font-bold uppercase tracking-wider">by Unilever</span>
          </div>
        </div>
      );

    case 'aosmith':
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#15803d] rounded-sm overflow-hidden bg-white shadow-sm ${className}`}>
          <div className="bg-[#15803d] w-full px-6 py-2 flex items-center justify-center">
            <span className="text-white font-black text-2xl md:text-3xl tracking-tight font-sans">A. O. Smith</span>
          </div>
          <div className="bg-white w-full px-4 py-0.5 text-center border-t border-[#15803d]/30">
            <span className="text-[#15803d] text-[11px] md:text-xs font-bold uppercase tracking-wider">Innovation Has A Name</span>
          </div>
        </div>
      );

    case 'lg':
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#a21caf] rounded-sm overflow-hidden bg-white shadow-sm ${className}`}>
          <div className="bg-[#a21caf] w-full px-6 py-1.5 flex items-center justify-center gap-2">
            <span className="text-white font-black text-2xl md:text-3xl tracking-wide font-sans">LG</span>
            <span className="text-white font-bold text-lg md:text-xl">PuriCare</span>
          </div>
          <div className="bg-white w-full px-4 py-0.5 text-center border-t border-[#a21caf]/20">
            <span className="text-[#a21caf] text-[11px] md:text-xs font-bold uppercase tracking-wider">True RO Water Purifier</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#004e9a] rounded-sm overflow-hidden bg-white shadow-sm ${className}`}>
          <div className="bg-[#004e9a] w-full px-6 py-2 flex items-center justify-center">
            <span className="text-white font-black text-2xl tracking-wider uppercase">{brandKey}</span>
          </div>
          <div className="bg-white w-full px-4 py-0.5 text-center">
            <span className="text-[#004e9a] text-xs font-bold uppercase tracking-wider">Water Purifier Service</span>
          </div>
        </div>
      );
  }
}
