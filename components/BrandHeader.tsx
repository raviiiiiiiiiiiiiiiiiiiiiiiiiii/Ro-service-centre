'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, ShieldCheck, Menu, X } from 'lucide-react';

interface BrandHeaderProps {
  phone?: string;
  tollFree?: string;
  locationCity?: string;
  locationState?: string;
}

export default function BrandHeader({
  phone = '08050291180',
  tollFree = '18001201622',
  locationCity = 'Bengaluru',
  locationState = 'Karnataka'
}: BrandHeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="w-full bg-white font-sans">
      {/* Top thin line */}
      <div className="w-full bg-[#f4f7fc] border-b border-gray-100 py-1 px-4 text-center">
        <a 
          href={`tel:${phone}`}
          className="text-[#1351b8] hover:text-[#0b3882] text-xs md:text-sm font-semibold tracking-wide transition-colors"
        >
          Call Now : {phone}
        </a>
      </div>

      {/* Main Brand Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Shield Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Shield with water splash badge */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </linearGradient>
                  <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                {/* Water splash wings */}
                <path d="M12,45 C5,38 8,24 22,25 C14,14 30,10 38,20 C42,12 55,14 55,24" fill="none" stroke="url(#splashGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                <path d="M88,45 C95,38 92,24 78,25 C86,14 70,10 62,20 C58,12 45,14 45,24" fill="none" stroke="url(#splashGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                {/* Shield Shape */}
                <path d="M50 8 C28 8 20 22 20 44 C20 68 45 88 50 92 C55 88 80 68 80 44 C80 22 72 8 50 8 Z" fill="url(#shieldGrad)" />
                {/* Inner Shield Border */}
                <path d="M50 14 C32 14 26 26 26 44 C26 64 46 80 50 84 C54 80 74 64 74 44 C74 26 68 14 50 14 Z" fill="#ffffff" />
                <path d="M50 18 C35 18 30 28 30 44 C30 61 47 75 50 78 C53 75 70 61 70 44 C70 28 65 18 50 18 Z" fill="url(#shieldGrad)" />
                {/* Checkmark */}
                <path d="M38 46 L46 54 L63 35" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="text-[#0e2a56] font-extrabold text-base md:text-lg leading-tight tracking-tight uppercase">
                Authorised
              </div>
              <div className="text-[#0e2a56] font-extrabold text-base md:text-lg leading-tight tracking-tight uppercase">
                Service Center
              </div>
              <div className="mt-0.5">
                <span className="inline-block bg-[#0284c7] text-white text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                  Water Purifier
                </span>
              </div>
            </div>
          </Link>

          {/* Mobile Click to Call Pill */}
          <div className="block md:hidden mt-2">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 bg-[#ffffff] border-2 border-[#1351b8] text-[#1351b8] rounded-full px-4 py-1.5 shadow-sm hover:bg-[#1351b8]/5 transition-colors font-bold text-xs"
            >
              <div className="w-5 h-5 rounded-full bg-[#1351b8] flex items-center justify-center text-white">
                <Phone size={12} />
              </div>
              <span>Click To Call {phone}</span>
            </a>
          </div>
        </div>

        {/* Desktop Header Info: Location & Toll Free */}
        <div className="hidden md:flex items-center gap-8">
          {/* Location */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-[#0ea5e9] flex items-center justify-center text-[#0284c7]">
              <MapPin size={18} />
            </div>
            <div className="text-left leading-tight">
              <div className="text-gray-700 text-xs font-medium">{locationCity}</div>
              <div className="text-gray-900 text-xs font-semibold">{locationState}</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-[#0ea5e9] flex items-center justify-center text-[#0284c7]">
              <Phone size={18} />
            </div>
            <div className="text-left leading-tight">
              <a href={`tel:${phone}`} className="text-[#1351b8] hover:underline text-sm font-bold block">
                {phone}
              </a>
              <span className="text-gray-500 text-xs">Toll Free / 24x7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-gradient-to-r from-[#173072] via-[#1d3d8f] to-[#254b9f] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-11">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-200 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-200 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link href="/#services-grid" className="text-white hover:text-cyan-200 text-sm font-medium transition-colors">
              Services
            </Link>
            <a href="#purifier-gallery" className="text-white hover:text-cyan-200 text-sm font-medium transition-colors">
              Gallery
            </a>
            <a href="#appointment-form" className="text-white hover:text-cyan-200 text-sm font-medium transition-colors">
              Contact Us
            </a>
          </div>

          {/* Desktop Call CTA Button */}
          <div className="hidden md:block">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1.5 bg-[#d9383a] hover:bg-[#c22e30] text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded transition-all shadow-sm active:scale-95"
            >
              <Phone size={14} className="fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Nav Header */}
          <div className="flex md:hidden items-center justify-between w-full">
            <span className="text-white text-xs font-semibold tracking-wide">
              Quick Menu
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-1 bg-[#d9383a] text-white text-[11px] font-semibold px-2.5 py-1 rounded"
              >
                <Phone size={12} /> Call Now
              </a>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="text-white p-1"
                aria-label="Toggle Navigation"
              >
                {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav dropdown */}
        {mobileNavOpen && (
          <div className="md:hidden bg-[#14295e] border-t border-white/10 px-4 py-3 space-y-2">
            <Link 
              href="/" 
              onClick={() => setMobileNavOpen(false)}
              className="block text-white text-sm py-1 hover:text-cyan-300"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileNavOpen(false)}
              className="block text-white text-sm py-1 hover:text-cyan-300"
            >
              About Us
            </Link>
            <Link 
              href="/#services-grid" 
              onClick={() => setMobileNavOpen(false)}
              className="block text-white text-sm py-1 hover:text-cyan-300"
            >
              Services
            </Link>
            <a 
              href="#purifier-gallery" 
              onClick={() => setMobileNavOpen(false)}
              className="block text-white text-sm py-1 hover:text-cyan-300"
            >
              Gallery
            </a>
            <a 
              href="#appointment-form" 
              onClick={() => setMobileNavOpen(false)}
              className="block text-white text-sm py-1 hover:text-cyan-300"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
