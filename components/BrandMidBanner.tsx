'use client';

import React from 'react';

interface BrandMidBannerProps {
  brandName: string;
  purifierImage: string;
}

export default function BrandMidBanner({ brandName, purifierImage }: BrandMidBannerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-8">
      <div className="relative w-full aspect-[2/1] sm:aspect-[2.4/1] md:aspect-[3/1] bg-gradient-to-r from-[#0d346c] via-[#0f4694] to-[#0a2e63] rounded-sm overflow-hidden shadow-lg border border-[#009ee2]/30 flex items-center justify-between p-4 sm:p-6 md:p-8">
        {/* Subtle background water ripples */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.25),transparent_60%)] pointer-events-none"></div>

        {/* Left text block */}
        <div className="relative z-10 max-w-[55%] sm:max-w-[50%] flex flex-col justify-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none mb-1">
            Bring Home
          </h2>
          <p className="text-cyan-200 text-xs sm:text-sm md:text-base font-normal mb-1">
            the Source of <span className="font-semibold text-white">Purity & Health</span>
          </p>
          <div className="text-[11px] sm:text-xs md:text-sm text-cyan-300 font-medium">
            with <span className="font-bold text-white uppercase">{brandName} GRAND</span>
          </div>
        </div>

        {/* Right Purifier Graphic with Tech Badges */}
        <div className="relative z-10 w-[45%] sm:w-[45%] h-full flex items-center justify-center">
          {/* Purifier image */}
          <div className="relative w-28 sm:w-40 md:w-48 h-28 sm:h-36 md:h-44 flex items-center justify-center">
            <img
              src={purifierImage}
              alt={`${brandName} RO Purifier`}
              className="max-w-full max-h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />

            {/* Orbiting feature circles */}
            <div className="absolute -top-1 left-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border-2 border-[#009ee2] shadow flex items-center justify-center">
              <span className="text-[#004e9a] font-extrabold text-[9px] sm:text-[10px]">RO</span>
            </div>

            <div className="absolute -top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border-2 border-[#009ee2] shadow flex items-center justify-center">
              <span className="text-[#004e9a] font-extrabold text-[9px] sm:text-[10px]">UV</span>
            </div>

            <div className="absolute top-4 right-[-10px] w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/95 border-2 border-[#009ee2] shadow flex items-center justify-center">
              <span className="text-[#004e9a] font-extrabold text-[8px] sm:text-[9px]">UF</span>
            </div>

            <div className="absolute bottom-0 left-[-8px] w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 border-2 border-[#009ee2] shadow flex flex-col items-center justify-center leading-none">
              <span className="text-[#004e9a] font-extrabold text-[8px] sm:text-[9px]">TDS</span>
              <span className="text-[#009ee2] text-[6px] uppercase font-bold">Control</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
