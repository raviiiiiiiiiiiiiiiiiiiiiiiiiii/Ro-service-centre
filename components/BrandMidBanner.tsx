'use client';

import React from 'react';

interface BrandMidBannerProps {
  brandName: string;
  bannerImage: string;
  phone?: string;
}

export default function BrandMidBanner({
  brandName,
  bannerImage,
  phone = '08050291180',
}: BrandMidBannerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-2 sm:px-4">
      <a
        href={`tel:${phone}`}
        className="block relative rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow group active:scale-[0.99]"
        title={`Call ${brandName} RO Water Purifier Service at ${phone}`}
      >
        <img
          src={bannerImage}
          alt={`Bring Home The Source Of Purity & Health with ${brandName} Water Purifier`}
          className="w-full h-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
        />
      </a>
    </div>
  );
}
