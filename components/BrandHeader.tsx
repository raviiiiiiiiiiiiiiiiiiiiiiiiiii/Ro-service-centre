'use client';

import React from 'react';
import Link from 'next/link';

interface BrandHeaderProps {
  phone?: string;
  tollFree?: string;
  locationCity?: string;
  locationState?: string;
}

export default function BrandHeader({}: BrandHeaderProps) {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm py-2.5 sm:py-3.5 px-4 flex items-center justify-center">
      <Link href="/" className="inline-block transition-opacity hover:opacity-95" title="RO Service Centre Online">
        <img
          src="https://res.cloudinary.com/dieq3fjuv/image/upload/v1788889605/Internet_20260908_231300_1_ivjnwr.png"
          alt="RO Service Centre Online Header"
          className="h-16 sm:h-20 md:h-22 w-auto max-w-[90vw] object-contain mx-auto"
          onError={(e) => {
            // Local fallback
            e.currentTarget.src = '/assets/brand-header.png';
          }}
        />
      </Link>
    </header>
  );
}
