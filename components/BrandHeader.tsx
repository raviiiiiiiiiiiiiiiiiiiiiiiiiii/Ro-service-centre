'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, X, ChevronDown } from 'lucide-react';

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
          className="inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base md:text-lg tracking-wide hover:underline active:scale-98 transition-transform"
          title={`Call us at ${phone}`}
        >
          <span>Call Now : {phone}</span>
        </a>
      </div>

      {/* 2. Image Section: Authorised Service Center Water Purifier */}
      <div className="w-full bg-white py-3 sm:py-4 px-4 flex items-center justify-center border-b border-gray-100">
        <Link
          href="/"
          className="inline-block transition-opacity hover:opacity-95 text-center"
          title="RO Service Centre Online"
        >
          <img
            src="https://res.cloudinary.com/dieq3fjuv/image/upload/v1788889605/Internet_20260908_231300_1_ivjnwr.png"
            alt="Authorised Service Center - Water Purifier"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[90vw] object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.src = '/assets/brand-header.png';
            }}
          />
        </Link>
      </div>

      {/* 3. Dark Blue Menu Bar with Red/Coral Hamburger Menu Button */}
      <div className="w-full bg-[#16386d] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-bold text-xs lg:text-sm tracking-wider text-white">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              HOME
            </Link>
            <a href="/#services-grid" className="hover:text-blue-200 transition-colors">
              SERVICES
            </a>
            <div className="relative group py-1">
              <span className="hover:text-blue-200 transition-colors cursor-pointer flex items-center gap-1">
                BRANDS <ChevronDown size={14} />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block z-50 pt-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[180px] text-gray-800">
                  <Link href="/kent-service" className="block px-4 py-2 hover:bg-blue-50 text-xs font-semibold">
                    KENT Service
                  </Link>
                  <Link href="/aquaguard-service" className="block px-4 py-2 hover:bg-blue-50 text-xs font-semibold">
                    Aquaguard Service
                  </Link>
                  <Link href="/pureit-service" className="block px-4 py-2 hover:bg-blue-50 text-xs font-semibold">
                    Pureit Service
                  </Link>
                  <Link href="/aosmith-service" className="block px-4 py-2 hover:bg-blue-50 text-xs font-semibold">
                    A.O. Smith Service
                  </Link>
                  <Link href="/lg-service" className="block px-4 py-2 hover:bg-blue-50 text-xs font-semibold">
                    LG Service
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              ABOUT US
            </Link>
            <a href={`tel:${phone}`} className="hover:text-blue-200 transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Mobile spacing/label */}
          <div className="md:hidden">
            <span className="text-white/80 font-bold text-xs tracking-wider uppercase">Menu</span>
          </div>

          {/* Red/Coral Rounded Square Hamburger Button matching screenshot */}
          <button
            type="button"
            id="brand-header-hamburger-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#e75a4e] hover:bg-[#d84a3e] active:scale-95 text-white p-2 rounded-md transition-all shadow-xs flex items-center justify-center cursor-pointer ml-auto"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X size={22} className="stroke-[2.5]" />
            ) : (
              <div className="w-5 h-4 flex flex-col justify-between items-center py-0.5">
                <span className="w-full h-0.5 bg-white rounded-full"></span>
                <span className="w-full h-0.5 bg-white rounded-full"></span>
                <span className="w-full h-0.5 bg-white rounded-full"></span>
              </div>
            )}
          </button>
        </div>

        {/* Dropdown Navigation Menu */}
        {menuOpen && (
          <div className="border-t border-[#204a88] bg-[#122e5a] px-4 py-4 space-y-3 text-white shadow-xl">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block py-1.5 text-xs sm:text-sm font-bold tracking-wider hover:text-blue-200 border-b border-white/10"
            >
              HOME
            </Link>
            <a
              href="/#services-grid"
              onClick={() => setMenuOpen(false)}
              className="block py-1.5 text-xs sm:text-sm font-bold tracking-wider hover:text-blue-200 border-b border-white/10"
            >
              SERVICES
            </a>
            <div className="py-1 border-b border-white/10">
              <div className="text-[11px] font-black uppercase text-blue-200/70 tracking-wider mb-1.5">
                BRANDS
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <Link
                  href="/kent-service"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-xs font-semibold text-white/90 hover:text-white"
                >
                  KENT RO
                </Link>
                <Link
                  href="/aquaguard-service"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-xs font-semibold text-white/90 hover:text-white"
                >
                  Aquaguard
                </Link>
                <Link
                  href="/pureit-service"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-xs font-semibold text-white/90 hover:text-white"
                >
                  Pureit
                </Link>
                <Link
                  href="/aosmith-service"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-xs font-semibold text-white/90 hover:text-white"
                >
                  A.O. Smith
                </Link>
                <Link
                  href="/lg-service"
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-xs font-semibold text-white/90 hover:text-white"
                >
                  LG Puricare
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block py-1.5 text-xs sm:text-sm font-bold tracking-wider hover:text-blue-200 border-b border-white/10"
            >
              ABOUT US
            </Link>
            <a
              href={`tel:${phone}`}
              onClick={() => setMenuOpen(false)}
              className="block py-1.5 text-xs sm:text-sm font-bold tracking-wider text-blue-200 flex items-center gap-2"
            >
              <Phone size={14} className="fill-current" /> CALL US : {phone}
            </a>
            <a
              href="#appointment-form"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-2.5 bg-[#e75a4e] hover:bg-[#d84a3e] text-white font-black text-xs uppercase tracking-wider rounded shadow-md transition-colors"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
