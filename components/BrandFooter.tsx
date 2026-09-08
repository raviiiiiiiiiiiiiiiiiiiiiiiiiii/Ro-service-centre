'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

interface BrandFooterProps {
  addressCity?: string;
  email?: string;
  phone?: string;
}

export default function BrandFooter({
  addressCity = 'BENGALURU',
  email = 'authorizedservicecenter111@gmail.com',
  phone = '08050291180'
}: BrandFooterProps) {
  return (
    <footer className="w-full bg-[#081426] text-white pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#12284b]">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* 3 Dashed / Outlined Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Address Box */}
          <div className="border border-dashed border-[#1a3869] rounded-sm p-5 text-center flex flex-col items-center justify-center bg-[#0a182e]/50 hover:border-[#0284c7] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#004e9a]/30 border border-[#009ee2]/50 flex items-center justify-center text-[#38bdf8] mb-2.5">
              <MapPin size={20} />
            </div>
            <div className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
              Address :
            </div>
            <div className="text-white text-sm font-bold tracking-wide">
              {addressCity}
            </div>
          </div>

          {/* Email Box */}
          <div className="border border-dashed border-[#1a3869] rounded-sm p-5 text-center flex flex-col items-center justify-center bg-[#0a182e]/50 hover:border-[#0284c7] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#004e9a]/30 border border-[#009ee2]/50 flex items-center justify-center text-[#38bdf8] mb-2.5">
              <Mail size={20} />
            </div>
            <div className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
              Email us :
            </div>
            <a 
              href={`mailto:${email}`}
              className="text-white hover:text-cyan-300 text-xs sm:text-sm font-bold tracking-tight transition-colors break-all"
            >
              {email}
            </a>
          </div>

          {/* Call Box */}
          <div className="border border-dashed border-[#1a3869] rounded-sm p-5 text-center flex flex-col items-center justify-center bg-[#0a182e]/50 hover:border-[#0284c7] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#004e9a]/30 border border-[#009ee2]/50 flex items-center justify-center text-[#38bdf8] mb-2.5">
              <Phone size={20} />
            </div>
            <div className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1">
              Call Now :
            </div>
            <a 
              href={`tel:${phone}`}
              className="text-white hover:text-cyan-300 text-sm font-bold tracking-wide transition-colors"
            >
              {phone}
            </a>
          </div>
        </div>

        {/* Legal Links (Privacy Policy, Terms And Conditions) */}
        <div className="pt-2 text-center">
          <div className="inline-flex items-center justify-center gap-8 text-xs font-medium text-[#ef4444] hover:text-[#f87171]">
            <Link href="/privacy-policy" className="hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline transition-colors">
              Terms And Conditions
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-white/5 text-center text-[11px] sm:text-xs text-gray-400 font-normal">
          © Copyright Authorised Service Center 2026 . All right reserved
        </div>
      </div>
    </footer>
  );
}
