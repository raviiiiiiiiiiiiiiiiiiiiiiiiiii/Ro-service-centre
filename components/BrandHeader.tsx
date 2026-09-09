'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface BrandHeaderProps {
  phone?: string;
  tollFree?: string;
  locationCity?: string;
  locationState?: string;
}

export default function BrandHeader({
  phone = '08050291180',
}: BrandHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white z-40">
      {/* 1. Top Announcement Bar */}
      <div className="w-full bg-[#1859c2] text-white py-2 px-4 text-center">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center justify-center font-bold text-sm sm:text-base md:text-lg tracking-wide hover:underline active:scale-98 transition-transform"
          title={`Call us at ${phone}`}
        >
          <span>Call Now : {phone}</span>
        </a>
      </div>

      {/* 2. Image Section: Header Banner */}
      <div className="w-full bg-white py-3 sm:py-4 px-4 flex items-center justify-center border-b border-gray-100">
        <Link
          href="/"
          className="inline-block transition-opacity hover:opacity-95 text-center"
          title="RO Service Centre Online"
        >
          <img
            src="https://res.cloudinary.com/dieq3fjuv/image/upload/v1788967586/IMG-20260908-WA0018_1_vlpnkp.jpg"
            alt="Authorised Service Center - Water Purifier"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[90vw] object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.src = '/assets/brand-header.png';
            }}
          />
        </Link>
      </div>

      {/* 3. Dark Blue Bar with Red/Coral Hamburger Menu Button & Dropdown */}
      <div className="w-full bg-[#16386d]">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-end">
          {/* Red/Coral Rounded Square Hamburger Button matching screenshot */}
          <button
            type="button"
            id="brand-header-hamburger-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#e75a4e] hover:bg-[#d84a3e] active:scale-95 text-white w-9 h-8 sm:w-10 sm:h-9 rounded transition-all shadow-xs flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col justify-between items-center gap-1">
              <span className="w-full h-0.5 bg-white rounded-full"></span>
              <span className="w-full h-0.5 bg-white rounded-full"></span>
              <span className="w-full h-0.5 bg-white rounded-full"></span>
            </div>
          </button>
        </div>

        {/* Dropdown Navigation Menu matching Screenshot_20260908_233247 */}
        {menuOpen && (
          <div className="max-w-4xl mx-auto px-3 sm:px-4 pb-3">
            <div className="border border-white/80 bg-[#16386d] text-white">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal hover:bg-white/10 transition-colors border-b border-white/60"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal hover:bg-white/10 transition-colors border-b border-white/60"
              >
                About Us
              </Link>
              <a
                href="/#services-grid"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal hover:bg-white/10 transition-colors border-b border-white/60"
              >
                Services
              </a>
              <a
                href="#purifier-gallery"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal hover:bg-white/10 transition-colors border-b border-white/60"
              >
                Gallery
              </a>
              <a
                href={`tel:${phone}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 sm:py-3 text-sm sm:text-base font-normal hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
