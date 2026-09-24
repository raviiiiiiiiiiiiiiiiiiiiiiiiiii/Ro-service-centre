'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface BrandHeaderProps {
  phone?: string;
  tollFree?: string;
  locationCity?: string;
  locationState?: string;
  logoImage?: string;
}

export default function BrandHeader({
  phone = '08050291180',
  logoImage = '/assets/homepage-logo.webp',
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

      {/* 2. Image Section: Header Banner / Logo (Click scrolls to top of current page) */}
      <div className="w-full bg-white py-3 sm:py-4 px-4 flex items-center justify-center border-b border-gray-100">
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-block transition-opacity hover:opacity-95 text-center cursor-pointer bg-transparent border-0 p-0"
          title="Scroll to top of page"
          aria-label="Scroll to top of page"
        >
          <img
            src={logoImage}
            alt="Authorised Service Center - Water Purifier"
            width={360}
            height={84}
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[90vw] object-contain mx-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/assets/brand-header.png';
            }}
          />
        </button>
      </div>

      {/* 3. Dark Blue Bar with Continuous Sliding Announcement & Red/Coral Hamburger Menu Button */}
      <div className="w-full bg-[#16386d] overflow-hidden border-t border-b border-[#0f2952]">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Continuous Sliding Announcement Bar */}
          <div className="flex-1 overflow-hidden flex items-center min-w-0">
            <div className="overflow-hidden relative w-full select-none">
              <div className="animate-marquee-slide inline-flex items-center text-white/95 text-xs sm:text-sm font-medium tracking-wide">
                {/* First set */}
                <div className="inline-flex items-center shrink-0 pr-16 sm:pr-24">
                  <span>
                    Professional Doorstep RO Water Purifier Repair, Maintenance, Installation &amp; Filter Replacement Services Across Bangalore — Same Day Service Within 60 to 90 Minutes by Verified Technicians — Call Now:{' '}
                    <a href={`tel:${phone}`} className="hover:underline font-bold text-white tracking-wide">
                      {phone}
                    </a>
                  </span>
                </div>
                {/* Duplicate set for seamless continuous sliding */}
                <div className="inline-flex items-center shrink-0 pr-16 sm:pr-24" aria-hidden="true">
                  <span>
                    Professional Doorstep RO Water Purifier Repair, Maintenance, Installation &amp; Filter Replacement Services Across Bangalore — Same Day Service Within 60 to 90 Minutes by Verified Technicians — Call Now:{' '}
                    <a href={`tel:${phone}`} className="hover:underline font-bold text-white tracking-wide">
                      {phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Red/Coral Rounded Square Hamburger Button matching screenshot */}
          <button
            type="button"
            id="brand-header-hamburger-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#e75a4e] hover:bg-[#d84a3e] active:scale-95 text-white w-9 h-8 sm:w-10 sm:h-9 rounded transition-all shadow-xs flex items-center justify-center shrink-0 cursor-pointer ml-1"
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
