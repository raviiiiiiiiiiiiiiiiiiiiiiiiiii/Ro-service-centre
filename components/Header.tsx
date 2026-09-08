'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Droplets, ArrowRight, Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const announcements = [
    "⚡ Bangalore Doorstep Service in 60-90 Mins",
    "⏰ 8:00 AM - 9:00 PM (All 7 Days)",
    "📍 Serving All Major Areas in Bangalore",
    "📞 Call Now: +91 88774 37666 / 08050291180"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-primary text-on-primary text-center text-[13px] font-medium h-[32px] flex items-center justify-center relative overflow-hidden">
        {announcements.map((text, idx) => (
          <div 
            key={idx} 
            className={`absolute w-full px-4 transition-all duration-500 ease-in-out flex items-center justify-center gap-2 ${idx === announcementIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-spacing-md">
        <div className="flex items-center gap-spacing-sm">
          <Link className="flex items-center gap-spacing-xs" href="/" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
              <Droplets size={24} />
            </div>
            <div>
              <div className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">RO Service Centre</div>
              <div className="font-label-sm text-label-sm text-tertiary tracking-normal">Pure Water · Healthy Life</div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-spacing-lg">
          <Link className="transition-colors text-primary font-bold" href="/">Home</Link>
          <div className="relative group py-spacing-xs">
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md flex items-center gap-spacing-3xs" href="/#services-grid">Services</a>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block z-50">
              <div className="flex flex-col bg-surface/95 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-[0_20px_40px_-10px_rgba(13,110,253,0.15)] p-2 min-w-[240px]">
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">RO Repair Service</a>
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">Filter & Membrane Change</a>
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">Installation / Relocation</a>
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">Annual AMC Plans</a>
              </div>
            </div>
          </div>
          <div className="relative group py-spacing-xs">
            <span className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md flex items-center gap-spacing-3xs cursor-pointer">Company</span>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block z-50">
              <div className="flex flex-col bg-surface/95 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-[0_20px_40px_-10px_rgba(13,110,253,0.15)] p-2 min-w-[200px]">
                <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/about">About Us</Link>
                <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/terms-and-conditions">Terms & Conditions</Link>
                <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="tel:08050291180">Contact</a>
        </nav>
        
        <div className="hidden lg:flex items-center gap-spacing-sm">
          <a className="hidden sm:inline-flex items-center gap-spacing-xs px-spacing-md py-spacing-xs rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all" href="tel:08050291180">
            <Phone size={18} />08050291180
          </a>
          <a className="inline-flex items-center gap-spacing-xs px-spacing-lg py-spacing-xs rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-[0_4px_16px_-2px_rgba(13,110,253,0.25)]" href="tel:08050291180">
            Book Service<ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-spacing-sm">
          <a className="inline-flex items-center gap-spacing-3xs px-spacing-sm py-spacing-2xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm" href="tel:08050291180">
            <Phone size={14} />Call
          </a>
          <button 
            className="p-spacing-2xs text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-surface/98 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-2xl overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="flex flex-col p-4 gap-2">
            <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 text-primary font-label-lg text-label-lg" href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            <div className="px-4 pt-3 pb-1">
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Services</div>
              <div className="flex flex-col gap-1">
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>RO Repair Service</a>
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>Filter & Membrane Change</a>
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>Installation / Relocation</a>
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>Annual AMC Plans</a>
              </div>
            </div>
            
            <div className="h-px bg-outline-variant/30 mx-4 my-2"></div>
            
            <div className="px-4 pt-1 pb-3">
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Company</div>
              <div className="flex flex-col gap-1">
                <Link className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/terms-and-conditions" onClick={() => setMobileMenuOpen(false)}>Terms & Conditions</Link>
                <Link className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/privacy-policy" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
