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
  addressCity = 'No. 97, Neeladri Nagar, Electronics City Phase 1 Extension, Bengaluru, Karnataka',
  email = 'Contect@Roservicecentreonline24x7.in',
  phone = '08050291180'
}: BrandFooterProps) {
  return (
    <footer className="w-full bg-[#081426] text-white pt-8 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-t border-[#12284b]">
      <div className="max-w-5xl mx-auto space-y-5">
        {/* 3 Dashed / Outlined Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Address Box */}
          <div className="border border-dashed border-[#1a3869] rounded-sm p-4 text-center flex flex-col items-center justify-center bg-[#0a182e]/50 hover:border-[#0284c7] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#004e9a]/30 border border-[#009ee2]/50 flex items-center justify-center text-[#38bdf8] mb-2">
              <MapPin size={18} />
            </div>
            <div className="text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
              Address :
            </div>
            <div className="text-white text-xs sm:text-[13px] font-medium tracking-wide leading-relaxed">
              {addressCity}
            </div>
          </div>

          {/* Email Box */}
          <div className="border border-dashed border-[#1a3869] rounded-sm p-4 text-center flex flex-col items-center justify-center bg-[#0a182e]/50 hover:border-[#0284c7] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#004e9a]/30 border border-[#009ee2]/50 flex items-center justify-center text-[#38bdf8] mb-2">
              <Mail size={18} />
            </div>
            <div className="text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
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
          <div className="border border-dashed border-[#1a3869] rounded-sm p-4 text-center flex flex-col items-center justify-center bg-[#0a182e]/50 hover:border-[#0284c7] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#004e9a]/30 border border-[#009ee2]/50 flex items-center justify-center text-[#38bdf8] mb-2">
              <Phone size={18} />
            </div>
            <div className="text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
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

        {/* Disclaimer requested by user */}
        <div className="pt-3 border-t border-white/10 text-center text-xs sm:text-[13px] text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <p>
            <span className="font-semibold text-gray-200">Disclaimer: </span>
            Ro service centre is an independent multi-brand water purifier service center in Bangalore. We provide repair, maintenance, and genuine filter replacement services. Brand names and logos are used strictly for identification and compatibility purposes.
          </p>
        </div>

        {/* Legal Links (Privacy Policy, Terms And Conditions) */}
        <div className="pt-1 text-center">
          <div className="inline-flex items-center justify-center gap-6 sm:gap-8 text-xs font-medium text-[#ef4444] hover:text-[#f87171]">
            <Link href="/privacy-policy" className="hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline transition-colors">
              Terms And Conditions
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-2 text-center text-[11px] text-gray-500 font-normal">
          © Copyright RO Service Centre Online 2026 . All right reserved
        </div>
      </div>
    </footer>
  );
}
