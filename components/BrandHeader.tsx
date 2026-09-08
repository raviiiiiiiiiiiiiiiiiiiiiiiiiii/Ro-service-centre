'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface BrandHeaderProps {
  phone?: string;
  tollFree?: string;
  locationCity?: string;
  locationState?: string;
}

export default function BrandHeader({
  phone = '08050291180',
}: BrandHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      {/* 1. Top Announcement Bar */}
      <div className="w-full bg-[#1859c2] text-white py-1.5 px-4 text-center">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center justify-center gap-2 font-black text-xs sm:text-sm tracking-wide hover:underline active:scale-98 transition-transform"
          title={`Call us at ${phone}`}
        >
          <Phone size={13} className="fill-current animate-pulse" />
          <span>Call Us : {phone}</span>
        </a>
      </div>

      {/* 2. Main Header Bar with Brand Image and Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Brand Header Image */}
        <Link
          href="/"
          className="inline-block transition-opacity hover:opacity-95 shrink-0"
          title="RO Service Centre Online"
        >
          <img
            src="https://res.cloudinary.com/dieq3fjuv/image/upload/v1788889605/Internet_20260908_231300_1_ivjnwr.png"
            alt="RO Service Centre Online Header"
            className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] sm:max-w-none object-contain"
            onError={(e) => {
              e.currentTarget.src = '/assets/brand-header.png';
            }}
          />
        </Link>

        {/* Desktop Header Menu */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-extrabold text-xs lg:text-sm tracking-wide text-gray-700">
          <Link href="/" className="hover:text-[#1859c2] transition-colors">
            HOME
          </Link>
          <a href="/#services-grid" className="hover:text-[#1859c2] transition-colors">
            SERVICES
          </a>

          {/* Brands Dropdown */}
          <div className="relative group py-1">
            <span className="hover:text-[#1859c2] transition-colors cursor-pointer flex items-center gap-1">
              BRANDS <ChevronDown size={14} />
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block z-50 pt-2">
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[180px]">
                <Link
                  href="/kent-service"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-xs font-semibold"
                >
                  KENT Service
                </Link>
                <Link
                  href="/aquaguard-service"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-xs font-semibold"
                >
                  Aquaguard Service
                </Link>
                <Link
                  href="/pureit-service"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-xs font-semibold"
                >
                  Pureit Service
                </Link>
                <Link
                  href="/aosmith-service"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-xs font-semibold"
                >
                  A.O. Smith Service
                </Link>
                <Link
                  href="/lg-service"
                  className="block px-4 py-2 hover:bg-blue-50 text-gray-800 text-xs font-semibold"
                >
                  LG Service
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-[#1859c2] transition-colors">
            ABOUT US
          </Link>
          <a href={`tel:${phone}`} className="hover:text-[#1859c2] transition-colors">
            CONTACT
          </a>
          <a
            href="#appointment-form"
            className="bg-[#1859c2] hover:bg-[#12489c] text-white px-3.5 py-1.5 rounded font-black text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            id="brand-header-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#1859c2] rounded-md border border-gray-200 active:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-2.5 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black text-gray-800 hover:text-[#1859c2] border-b border-gray-100 tracking-wider"
          >
            HOME
          </Link>
          <a
            href="/#services-grid"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black text-gray-800 hover:text-[#1859c2] border-b border-gray-100 tracking-wider"
          >
            SERVICES
          </a>
          <div className="py-1">
            <div className="text-[10px] font-black uppercase text-gray-400 tracking-wider mb-1">
              BRANDS
            </div>
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              <Link
                href="/kent-service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs font-bold text-gray-700 hover:text-[#1859c2]"
              >
                KENT RO
              </Link>
              <Link
                href="/aquaguard-service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs font-bold text-gray-700 hover:text-[#1859c2]"
              >
                Aquaguard
              </Link>
              <Link
                href="/pureit-service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs font-bold text-gray-700 hover:text-[#1859c2]"
              >
                Pureit
              </Link>
              <Link
                href="/aosmith-service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs font-bold text-gray-700 hover:text-[#1859c2]"
              >
                A.O. Smith
              </Link>
              <Link
                href="/lg-service"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs font-bold text-gray-700 hover:text-[#1859c2]"
              >
                LG Puricare
              </Link>
            </div>
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black text-gray-800 hover:text-[#1859c2] border-b border-gray-100 tracking-wider"
          >
            ABOUT US
          </Link>
          <a
            href={`tel:${phone}`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black text-[#1859c2] flex items-center gap-2 tracking-wider"
          >
            <Phone size={14} /> CALL US : {phone}
          </a>
          <a
            href="#appointment-form"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-2.5 bg-[#1859c2] hover:bg-[#12489c] text-white font-black text-xs rounded-md shadow-xs uppercase tracking-wider"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      )}
    </header>
  );
}
