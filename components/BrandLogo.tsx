import React from 'react';

interface BrandLogoProps {
  brandKey: string;
  className?: string;
}

export default function BrandLogo({ brandKey, className = '' }: BrandLogoProps) {
  const normalizedKey = brandKey.toLowerCase().replace(/\s+/g, '');

  switch (normalizedKey) {
    case 'kent':
      return (
        <div className={`inline-flex items-center justify-center p-1 bg-white rounded-md ${className}`}>
          <img
            src="/assets/logos/kent-mineral-ro.svg"
            alt="KENT Mineral RO™ Water Purifiers"
            className="h-20 sm:h-24 w-auto max-w-[280px] object-contain drop-shadow-sm"
          />
        </div>
      );

    case 'aquaguard':
      return (
        <div className={`inline-flex items-center justify-center p-2 bg-white rounded-md ${className}`}>
          <img
            src="/assets/logos/aquaguard.svg"
            alt="Aquaguard Paani Ka Doctor"
            className="h-18 sm:h-22 w-auto max-w-[280px] object-contain drop-shadow-sm"
          />
        </div>
      );

    case 'pureit':
      return (
        <div className={`inline-flex items-center justify-center p-2 bg-white rounded-md ${className}`}>
          <img
            src="/assets/logos/pureit.png"
            alt="Pureit Water Purifier by Unilever"
            className="h-16 sm:h-20 w-auto max-w-[240px] object-contain drop-shadow-sm"
          />
        </div>
      );

    case 'aosmith':
      return (
        <div className={`inline-flex items-center justify-center p-2 bg-white rounded-md ${className}`}>
          <img
            src="/assets/logos/aosmith.png"
            alt="A. O. Smith Water Purifier"
            className="h-14 sm:h-18 w-auto max-w-[240px] object-contain drop-shadow-sm"
          />
        </div>
      );

    case 'lg':
      return (
        <div className={`inline-flex items-center justify-center px-4 py-2 bg-white rounded-md border border-slate-200 shadow-sm ${className}`}>
          <div className="flex items-center gap-3">
            <img
              src="/assets/logos/lg.svg"
              alt="LG Electronics"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-slate-800 font-black text-xl tracking-tight leading-none">PuriCare</span>
              <span className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">True RO Purifier</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`inline-flex flex-col items-center justify-center border-2 border-[#004e9a] rounded-sm overflow-hidden bg-white shadow-sm p-3 ${className}`}>
          <span className="text-[#004e9a] font-black text-2xl tracking-wider uppercase">{brandKey}</span>
          <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Water Purifier Service</span>
        </div>
      );
  }
}
