'use client';

import React from 'react';

// Solid 3-person silhouette icon matching reference design
function PeopleGroupIcon({ className = 'w-9 h-9 sm:w-11 sm:h-11' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 32"
      fill="currentColor"
      className={`${className} text-[#005bb7] flex-shrink-0`}
      aria-hidden="true"
    >
      {/* Center Person (Foreground, larger) */}
      <circle cx="22" cy="9.5" r="5.5" />
      <path d="M13 28c0-4.8 4-8.8 9-8.8s9 4 9 8.8v1.5H13V28z" />
      
      {/* Left Person (Background, slightly smaller) */}
      <circle cx="9" cy="11.5" r="4.2" />
      <path d="M2 28c0-3.8 2.8-6.9 6.5-7.4-.5 1.7-.8 3.6-.8 5.9v1.5H2V28z" />
      
      {/* Right Person (Background, slightly smaller) */}
      <circle cx="35" cy="11.5" r="4.2" />
      <path d="M35.5 20.6c3.7.5 6.5 3.6 6.5 7.4v1.5h-5.7v-1.5c0-2.3-.3-4.2-.8-5.9z" />
    </svg>
  );
}

// Solid 5-pointed star icon
function StarIcon({ className = 'w-3 h-3' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#f5a623"
      className={`${className} flex-shrink-0`}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Large Star for Item 2 matching reference
function BigStarIcon({ className = 'w-9 h-9 sm:w-11 sm:h-11' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#f5a623"
      className={`${className} flex-shrink-0 drop-shadow-xs`}
      aria-hidden="true"
    >
      <path d="M12 2.2l2.9 6.2 6.8.9-5 4.7 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.7 6.8-.9L12 2.2z" />
    </svg>
  );
}

// Crossed wrench and screwdriver tool icon matching reference design
function CrossedToolsIcon({ className = 'w-9 h-9 sm:w-11 sm:h-11' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="currentColor"
      className={`${className} text-[#005bb7] flex-shrink-0`}
      aria-hidden="true"
    >
      {/* Wrench - going from bottom-right to top-left */}
      <g transform="translate(18,18) rotate(-45) translate(-18,-18)">
        {/* Spanner head with open U-mouth at top */}
        <path d="M13 5.5 C13 2.5 15.2 0.5 18 0.5 C20.8 0.5 23 2.5 23 5.5 C23 6.8 22.4 8 21.5 8.9 L19.8 7.2 L16.2 7.2 L14.5 8.9 C13.6 8 13 6.8 13 5.5 Z" />
        {/* Shaft */}
        <rect x="16.2" y="8" width="3.6" height="21" rx="1.8" />
        {/* Rounded ring base */}
        <circle cx="18" cy="30" r="3.2" />
        <circle cx="18" cy="30" r="1.4" fill="white" />
      </g>

      {/* Screwdriver - going from bottom-left to top-right */}
      <g transform="translate(18,18) rotate(45) translate(-18,-18)">
        {/* Shaft */}
        <rect x="16.7" y="3" width="2.6" height="17" rx="1" />
        {/* Blade tip */}
        <path d="M15.8 3 h4.4 v-2 h-4.4 z" />
        {/* Handle */}
        <rect x="14.8" y="20" width="6.4" height="13" rx="2.5" />
        {/* Rib accents on handle */}
        <rect x="16" y="22" width="1.2" height="9" rx="0.6" fill="white" opacity="0.3" />
        <rect x="18.8" y="22" width="1.2" height="9" rx="0.6" fill="white" opacity="0.3" />
      </g>
    </svg>
  );
}

export default function BrandTrustStrip() {
  return (
    <section 
      aria-label="Service Highlights"
      className="w-full bg-white border-b border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-6 py-3 sm:py-3.5">
        <div className="grid grid-cols-3 items-center divide-x divide-gray-200">
          
          {/* 1. 1000+ Happy Customers */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-1 sm:px-4">
            <PeopleGroupIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <div className="flex flex-col text-left">
              <span className="text-[#004282] font-black text-base sm:text-xl md:text-2xl leading-none tracking-tight">
                1000+
              </span>
              <span className="text-[#003b7a] font-semibold text-[11px] sm:text-xs md:text-sm leading-tight mt-0.5 whitespace-nowrap">
                Happy Customers
              </span>
            </div>
          </div>

          {/* 2. 4.8 Rated Service with 5 Stars */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-1 sm:px-4">
            <BigStarIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <div className="flex flex-col text-left">
              <span className="text-[#004282] font-black text-base sm:text-xl md:text-2xl leading-none tracking-tight">
                4.8
              </span>
              {/* 5 Yellow Stars */}
              <div className="flex items-center gap-0.5 my-0.5 sm:my-1">
                <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                <StarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              </div>
              <span className="text-[#003b7a] font-semibold text-[11px] sm:text-xs md:text-sm leading-tight whitespace-nowrap">
                Rated Service
              </span>
            </div>
          </div>

          {/* 3. Expert RO Technicians */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-1 sm:px-4">
            <CrossedToolsIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <div className="flex flex-col text-left">
              <span className="text-[#004282] font-black text-base sm:text-xl md:text-2xl leading-none tracking-tight">
                Expert
              </span>
              <span className="text-[#003b7a] font-semibold text-[11px] sm:text-xs md:text-sm leading-tight mt-0.5 whitespace-nowrap">
                RO Technicians
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
