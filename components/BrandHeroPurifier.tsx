'use client';

import React from 'react';
import BrandLogo from '@/components/BrandLogo';

interface BrandHeroPurifierProps {
  brandName: string;
  brandKey: string;
  purifierImage: string;
  phone?: string;
}

export default function BrandHeroPurifier({
  brandName,
  brandKey,
  purifierImage,
  phone = '08050291180'
}: BrandHeroPurifierProps) {
  return (
    <div className="w-full bg-[#f8fafc] pt-2 pb-0">
      {/* Top Brand Logo Box */}
      <div className="max-w-sm sm:max-w-md mx-auto text-center px-4 mb-5">
        <div className="bg-white border border-gray-200 rounded shadow-sm p-2 sm:p-3 inline-block mx-auto">
          <BrandLogo brandKey={brandKey} />
        </div>
      </div>

      {/* Blue Circular Hero Graphic Container */}
      <div className="relative max-w-4xl mx-auto px-4 overflow-hidden" id="purifier-gallery">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[460px] bg-gradient-to-b from-[#114b9b] via-[#104287] to-[#0a2e63] rounded-sm overflow-hidden flex items-center justify-center shadow-lg">
          {/* Subtle decorative concentric water ripples */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[180px] sm:w-[280px] md:w-[360px] h-[180px] sm:h-[280px] md:h-[360px] rounded-full border border-cyan-300/40 animate-pulse"></div>
            <div className="absolute w-[260px] sm:w-[400px] md:w-[500px] h-[260px] sm:h-[400px] md:h-[500px] rounded-full border border-cyan-400/25"></div>
            <div className="absolute w-[340px] sm:w-[520px] md:w-[650px] h-[340px] sm:h-[520px] md:h-[650px] rounded-full border border-cyan-300/15"></div>
          </div>

          {/* Floating water bubble highlights */}
          <div className="absolute top-6 left-12 w-4 h-4 rounded-full bg-cyan-300/30 blur-[1px]"></div>
          <div className="absolute bottom-12 left-24 w-6 h-6 rounded-full bg-white/20 blur-[1px]"></div>
          <div className="absolute top-16 right-20 w-5 h-5 rounded-full bg-cyan-200/25 blur-[1px]"></div>

          {/* Brand Badge in Top-Right Corner */}
          <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20">
            <div className="bg-white/95 backdrop-blur-sm border border-cyan-400/40 rounded-sm p-1.5 sm:p-2 shadow-md">
              <span className="text-[#004e9a] font-extrabold text-[10px] sm:text-xs tracking-wider uppercase block text-center">
                {brandName}
              </span>
              <span className="text-[#0284c7] font-semibold text-[8px] sm:text-[9px] tracking-tight block text-center">
                {brandKey === 'kent' ? 'Mineral RO™ Purifier' : 'RO Water Purifier'}
              </span>
            </div>
          </div>

          {/* Central RO Purifier Appliance Display with circular badges */}
          <div className="relative z-10 flex items-center justify-center w-full h-full p-4 sm:p-6">
            {/* Purifier Machine Image */}
            <div className="relative w-44 sm:w-60 md:w-72 h-52 sm:h-72 md:h-80 flex items-center justify-center">
              {/* Purifier Image */}
              <img
                src={purifierImage}
                alt={`${brandName} RO Purifier`}
                className="max-w-full max-h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105"
              />

              {/* Tech Badges Orbiting Purifier */}
              {/* RO Badge (Top Left) */}
              <div className="absolute -top-2 left-0 sm:-left-6 md:-left-10 z-20 flex flex-col items-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 border-2 border-[#009ee2] shadow-lg flex items-center justify-center">
                  <span className="text-[#004e9a] font-black text-xs sm:text-sm md:text-base">RO</span>
                </div>
              </div>

              {/* UF Badge (Top Center) */}
              <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border-2 border-[#009ee2] shadow-lg flex items-center justify-center">
                  <span className="text-[#004e9a] font-black text-[11px] sm:text-xs md:text-sm">UF</span>
                </div>
              </div>

              {/* UV Badge (Top Right) */}
              <div className="absolute -top-2 right-0 sm:-right-6 md:-right-10 z-20 flex flex-col items-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 border-2 border-[#009ee2] shadow-lg flex items-center justify-center">
                  <span className="text-[#004e9a] font-black text-xs sm:text-sm md:text-base">UV</span>
                </div>
              </div>

              {/* TDS Control Badge (Bottom Left) */}
              <div className="absolute bottom-2 left-0 sm:-left-8 md:-left-12 z-20 flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 border-2 border-[#009ee2] shadow-lg flex flex-col items-center justify-center p-1 text-center leading-tight">
                  <span className="text-[#004e9a] font-black text-[11px] sm:text-xs">TDS</span>
                  <span className="text-[#009ee2] font-bold text-[8px] sm:text-[9px] uppercase tracking-tighter">Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
