'use client';

import React from 'react';
import { Phone, Clock } from 'lucide-react';
import type { BrandData } from '@/data/brands';
import BrandHeader from '@/components/BrandHeader';
import BrandHeroPurifier from '@/components/BrandHeroPurifier';
import BrandMidBanner from '@/components/BrandMidBanner';
import BrandBookingForm from '@/components/BrandBookingForm';
import BrandFooter from '@/components/BrandFooter';
import WaterSplashIllustration from '@/components/WaterSplashIllustration';

interface BrandViewProps {
  data: BrandData;
}

export default function BrandView({ data }: BrandViewProps) {
  // Determine brand key
  const brandName = data.name;
  const brandKey = brandName.toLowerCase().replace(/\s+/g, '');
  const phone = '08050291180';
  const email = 'authorizedservicecenter111@gmail.com';
  const city = 'BENGALURU';
  const state = 'Karnataka';

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#1859c2] selection:text-white pb-20 sm:pb-24">
      {/* 1. Header with Logo, Location, Toll Free, and Navigation Bar */}
      <BrandHeader
        phone={phone}
        tollFree="18001201622"
        locationCity="Bengaluru"
        locationState={state}
      />

      {/* 2. Brand Logo Box, Hero Purifier Graphic with Tech Badges, and Royal Blue Call Banner */}
      <BrandHeroPurifier
        brandName={brandName}
        brandKey={brandKey}
        purifierImage={data.heroImage}
        phone={phone}
      />

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-10">
        
        {/* 3. Title and Introduction */}
        <section className="text-center space-y-4">
          <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {brandName} Ro Service Center
          </h1>
          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 max-w-3xl mx-auto">
            <p>
              Looking for a <strong className="font-semibold text-gray-900">reliable {brandName} Ro service center</strong> for your water heater or RO water purifier? We provide <strong className="font-semibold text-gray-900">professional repair, maintenance, and installation services</strong> for all {brandName} Ro models. Our experienced and factory-trained technicians deliver quick diagnosis, accurate repairs, and <strong className="font-semibold text-gray-900">long-lasting solutions</strong> to ensure uninterrupted performance of your appliance.
            </p>
            <p>
              Whether it&apos;s a malfunctioning geyser, reduced RO water flow, leakage, or error indicators, our service team is equipped with the right tools, technical expertise, and genuine spare parts to restore your appliance to optimal working condition.
            </p>
          </div>
        </section>

        {/* 4. Mid-Page Bring Home Banner */}
        <BrandMidBanner brandName={brandName} purifierImage={data.heroImage} />

        {/* 5. Our {Brand} Ro Services */}
        <section className="text-center space-y-4">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Our {brandName} Ro Services
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            <p>
              <strong className="font-semibold text-gray-900">{brandName} Ro Water Purifier Repair & Service</strong> – Complete troubleshooting and repair for power, leakage, and thermostat issues.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">{brandName} Ro Water Purifier Repair</strong> – Fix purification problems, filter issues, low flow, and error indicators.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Installation & Uninstallation Support</strong> – Safe and professional installation or removal of {brandName} Ro appliances.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Annual Maintenance Contracts (AMC)</strong> – Affordable AMC plans for regular servicing and preventive maintenance.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Genuine Spare Parts Replacement</strong> – Only high-quality and compatible spare parts used for long-term reliability.
            </p>
          </div>
        </section>

        {/* 6. Common {Brand} Ro Problems We Fix */}
        <section className="text-center space-y-4">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Common {brandName} Ro Problems We Fix
          </h2>
          <div className="space-y-1.5 text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            <p>Water heater not heating properly</p>
            <p>Geyser leakage, power failure, or tripping issues</p>
            <p>{brandName} Ro RO not purifying water effectively</p>
            <p>Low water flow or slow dispensing from RO purifier</p>
            <p>Error lights, warning indicators, or unusual noise</p>
          </div>
        </section>

        {/* 7. Why Choose Our {Brand} Ro Service Center? */}
        <section className="text-center space-y-4">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Why Choose Our {brandName} Ro Service Center?
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            <p>
              <strong className="font-semibold text-gray-900">Experienced & Verified Technicians</strong> – Skilled professionals trained to handle all {brandName} Ro models.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Same-Day Doorstep Service</strong> – Fast response and quick service at your location.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Affordable & Transparent Pricing</strong> – No hidden charges, clear cost estimates.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Support for All {brandName} Ro Models</strong> – Old and new water heaters and RO systems covered.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Customer Satisfaction Guaranteed</strong> – Quality service you can trust.
            </p>
          </div>
        </section>

        {/* 8. Book {Brand} Ro Service Today */}
        <section className="text-center space-y-3">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Book {brandName} Ro Service Today
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get <strong className="font-semibold text-gray-900">fast, dependable, and professional {brandName} Ro repair service</strong> at your doorstep. Our support team is ready to assist you with quick booking and immediate service scheduling.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-gray-800">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 hover:text-[#1a62d6] transition-colors"
            >
              <Phone size={18} className="text-gray-800 fill-current" />
              <span>Call Now for {brandName} Ro Service Support</span>
            </a>
            <div className="inline-flex items-center gap-2">
              <Clock size={18} className="text-gray-800" />
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </section>

        {/* 9. Need More Help? */}
        <section className="text-center space-y-2 pt-2">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Need More Help?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Connect instantly with our dedicated support team for service requests, pricing details, or technical assistance.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${phone}`}
              className="inline-block text-gray-900 hover:text-[#1a62d6] text-base sm:text-lg font-bold tracking-wide transition-colors"
            >
              Call Now: {phone}
            </a>
          </div>
        </section>

        {/* 10. Book Appointment Now Form with Decorative Water Splash */}
        <section className="relative pt-4 pb-8">
          {/* Decorative water splash along bottom left */}
          <div className="absolute -left-12 -bottom-4 w-60 sm:w-80 md:w-96 z-0 pointer-events-none opacity-80">
            <WaterSplashIllustration />
          </div>

          {/* Form Card */}
          <div className="relative z-10">
            <BrandBookingForm brandName={brandName} phone={phone} />
          </div>
        </section>
      </div>

      {/* 11. Dark Navy 3-Box Footer */}
      <BrandFooter
        addressCity={city}
        email={email}
        phone={phone}
      />

      {/* Floating 'Click To Call' Round Rectangular Pill */}
      <div className="fixed bottom-16 sm:bottom-18 right-4 sm:right-6 z-50">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center gap-2 sm:gap-2.5 bg-white hover:bg-slate-50 border-2 border-[#0077c8] text-[#004e9a] rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all font-bold group active:scale-95"
          title={`Click to call ${phone}`}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0077c8] group-hover:bg-[#005f9e] flex items-center justify-center text-white transition-colors shadow-sm">
            <Phone size={14} className="fill-current animate-pulse" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] sm:text-[10px] text-[#0077c8] font-black uppercase tracking-wider">
              Click To Call
            </span>
            <span className="text-xs sm:text-sm md:text-base font-black text-[#004e9a]">
              {phone}
            </span>
          </div>
        </a>
      </div>

      {/* Sticky Footer: Full-Width Call Now Line */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1859c2] hover:bg-[#1349a3] transition-colors py-2.5 sm:py-3 px-4 text-center shadow-[0_-4px_16px_rgba(0,0,0,0.25)] border-t border-white/20">
        <a 
          href={`tel:${phone}`} 
          className="inline-flex items-center justify-center gap-2.5 text-white font-black text-base sm:text-xl md:text-2xl tracking-wide hover:underline active:scale-98 transition-transform"
        >
          <Phone size={20} className="fill-current" />
          <span>Call Now : {phone}</span>
        </a>
      </div>
    </div>
  );
}
