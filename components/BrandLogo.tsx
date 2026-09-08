'use client';

import React from 'react';

interface BrandLogoProps {
  brandKey: string;
  className?: string;
}

const BRAND_LOGOS: Record<string, { src: string; alt: string }> = {
  kent: {
    src: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0038_eea1tq.jpg',
    alt: 'Kent Mineral RO Water Purifiers Logo',
  },
  lg: {
    src: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786032689/images_5_t36ctz.png',
    alt: 'LG Puricare Water Purifier Logo',
  },
  aquaguard: {
    src: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0036_aymptj.jpg',
    alt: 'Aquaguard Water Purifier Logo',
  },
  pureit: {
    src: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0034_vmyqqk.jpg',
    alt: 'Pureit Water Purifier Logo',
  },
  aosmith: {
    src: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456694/IMG-20260822-WA0039_l3llhm.jpg',
    alt: 'A. O. Smith Water Purifier Logo',
  },
};

export default function BrandLogo({ brandKey, className = '' }: BrandLogoProps) {
  const normalizedKey = brandKey.toLowerCase().replace(/[\s\-_]+/g, '');

  if (
    normalizedKey === 'all' ||
    normalizedKey === 'home' ||
    normalizedKey === 'multi' ||
    normalizedKey === 'multibrand' ||
    normalizedKey === 'ro'
  ) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-1.5 bg-white rounded ${className}`}>
        {Object.entries(BRAND_LOGOS).map(([key, item]) => (
          <img
            key={key}
            src={item.src}
            alt={item.alt}
            className="h-8 sm:h-10 md:h-11 w-auto max-w-[95px] sm:max-w-[120px] object-contain px-1 transition-transform hover:scale-105"
          />
        ))}
      </div>
    );
  }

  const logo =
    BRAND_LOGOS[normalizedKey] ||
    (normalizedKey.includes('smith') ? BRAND_LOGOS.aosmith : null) ||
    (normalizedKey.includes('pure') ? BRAND_LOGOS.pureit : null) ||
    (normalizedKey.includes('aqua') ? BRAND_LOGOS.aquaguard : null);

  if (logo) {
    return (
      <div className={`inline-flex items-center justify-center p-1 bg-white rounded ${className}`}>
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-16 sm:h-20 md:h-24 w-auto max-w-[260px] sm:max-w-[300px] object-contain mx-auto"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center justify-center border-2 border-[#004e9a] rounded-sm overflow-hidden bg-white shadow-xs p-3 ${className}`}>
      <span className="text-[#004e9a] font-black text-2xl tracking-wider uppercase">{brandKey}</span>
      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Water Purifier Service</span>
    </div>
  );
}
