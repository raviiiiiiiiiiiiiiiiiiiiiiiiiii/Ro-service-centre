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
  phone = '08050291180',
}: BrandHeroPurifierProps) {
  return (
    <div className="w-full bg-[#f8fafc] pt-4 pb-2">
      {/* Top Brand Logo Box matching screenshot */}
      <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center px-4 mb-4 sm:mb-6">
        <div className="bg-white border border-gray-200 rounded shadow-xs p-2.5 sm:p-3.5 inline-block mx-auto">
          <BrandLogo brandKey={brandKey} />
        </div>
      </div>

      {/* Hero Purifier Image Section */}
      <div className="max-w-3xl mx-auto px-2 sm:px-4" id="purifier-gallery">
        <a
          href={`tel:${phone}`}
          className="block relative rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow group active:scale-[0.99]"
          title={`Call ${brandName} RO Service at ${phone}`}
        >
          <img
            src={purifierImage}
            alt={`${brandName} RO Water Purifier Service`}
            className="w-full h-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </a>
      </div>
    </div>
  );
}
