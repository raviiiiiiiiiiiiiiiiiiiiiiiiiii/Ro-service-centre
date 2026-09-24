'use client';

import React from 'react';
import { Phone } from 'lucide-react';

interface FloatingCallButtonProps {
  phone?: string;
}

export default function FloatingCallButton({ phone = '08050291180' }: FloatingCallButtonProps) {
  return (
    <aside
      aria-label="Click To Call"
      className="fixed bottom-20 right-3 sm:bottom-6 sm:right-6 z-40 select-none transition-transform hover:scale-105 active:scale-95 duration-200"
    >
      <a
        href={`tel:${phone}`}
        className="inline-flex items-center bg-[#007ad6] hover:bg-[#006bb8] text-white rounded-full p-1 pr-3 sm:pr-3.5 shadow-[0_4px_18px_rgba(0,122,214,0.45)] border border-white/60 transition-all group"
        title={`Click To Call ${phone}`}
      >
        {/* Left circular cyan phone badge matching reference image */}
        <div className="w-8 h-8 rounded-full bg-[#00a8e8] border-[1.5px] border-white flex items-center justify-center text-white shrink-0 shadow-xs mr-2">
          <Phone
            size={15}
            className="fill-current text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"
          />
        </div>

        {/* Right column: Click To Call + white capsule with phone number */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-white font-extrabold text-[11px] sm:text-[12px] tracking-tight leading-none mb-0.5 drop-shadow-xs font-sans">
            Click To Call
          </span>
          <div className="bg-white rounded-full px-2 sm:px-2.5 py-[1px] shadow-xs leading-none">
            <span className="text-black font-black text-[11px] sm:text-[12px] tracking-normal font-sans">
              {phone}
            </span>
          </div>
        </div>
      </a>
    </aside>
  );
}
