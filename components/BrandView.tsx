'use client';

import React from 'react';
import { Phone, Clock, Calendar } from 'lucide-react';
import type { BrandData } from '@/data/brands';
import BrandHeader from '@/components/BrandHeader';
import BrandBookingForm from '@/components/BrandBookingForm';
import BrandFooter from '@/components/BrandFooter';
import WaterSplashIllustration from '@/components/WaterSplashIllustration';
import FAQAccordion from '@/components/FAQAccordion';
import FloatingCallButton from '@/components/FloatingCallButton';

interface BrandViewProps {
  data: BrandData;
}

export default function BrandView({ data }: BrandViewProps) {
  const brandName = data.name;
  const phone = '08050291180';
  const email = 'Contect@Roservicecentreonline24x7.in';
  const address = 'No. 97, Neeladri Nagar, Electronics City Phase 1 Extension, Bengaluru, Karnataka';
  const city = 'BENGALURU';
  const state = 'Karnataka';

  const scrollToLeadForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = formElement.querySelector('input') as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#1859c2] selection:text-white">
      {/* 1. Header with Logo, Location, Toll Free, and Navigation Bar */}
      <BrandHeader
        phone={phone}
        tollFree="18001201622"
        locationCity="Bengaluru"
        locationState={state}
        logoImage={data.logoImage}
      />

      {/* 2. Hero Purifier Graphic (Natural aspect ratio, uncropped as-is) */}
      <div className="w-full bg-[#f8fafc] pt-4 pb-6">
        <div className="max-w-3xl mx-auto px-2 sm:px-4" id="purifier-gallery">
          <a
            href={`tel:${phone}`}
            className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 bg-white"
            title={`Call ${brandName} RO Water Purifier Service at ${phone}`}
          >
            <img
              src={data.heroImage}
              alt={`${brandName} RO Water Purifier Service Center Bangalore - Doorstep Technician`}
              width={768}
              height={432}
              className="w-full h-auto block mx-auto"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-10">
        
        {/* 3. Title and Subheading */}
        <section className="text-center space-y-2">
          <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {data.pageTitle}
          </h1>
          {data.subheading && (
            <p className="text-[#1a62d6] font-semibold text-base sm:text-lg md:text-xl">
              {data.subheading}
            </p>
          )}
        </section>

        {/* Lead Form */}
        <div className="pt-2 pb-2">
          <BrandBookingForm brandName={brandName} phone={phone} />
        </div>

        {/* Introduction text moved below form */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 max-w-3xl mx-auto text-center">
          {data.introParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* 4. Mid-Page Bring Home Banner (Natural aspect ratio, uncropped as-is) */}
        <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-2 sm:px-4">
          <a
            href={`tel:${phone}`}
            className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 bg-white"
            title={`Call ${brandName} RO Water Purifier Service at ${phone}`}
          >
            <img
              src={data.secondImage || data.heroImage}
              alt={`100% Pure & Safe Drinking Water - ${brandName} RO Water Purifier Service`}
              width={768}
              height={432}
              className="w-full h-auto block mx-auto"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        {/* 5. Our {Brand} Services in Bangalore */}
        <section className="space-y-4 text-center" id="services-grid">
          <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl tracking-tight text-center">
            {data.servicesHeading}
          </h2>
          <div className="space-y-2.5 max-w-xl mx-auto px-4">
            {data.services.map((item, idx) => {
              const text = item.replace(/^[✔\u2714\u2713•\-\*]\s*/, '');
              return (
                <p key={idx} className="text-center text-gray-900 font-medium text-base sm:text-lg">
                  <span className="text-emerald-600 font-bold text-lg sm:text-xl mr-2">✔</span>
                  <span>{text}</span>
                </p>
              );
            })}
          </div>
        </section>

        {/* 6. Common {Brand} Problems We Fix */}
        <section className="space-y-4 text-center">
          <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl tracking-tight text-center">
            {data.problemsHeading}
          </h2>
          <div className="space-y-2.5 max-w-xl mx-auto px-4">
            {data.problems.map((item, idx) => {
              const text = item.replace(/^[✔\u2714\u2713•\-\*]\s*/, '');
              return (
                <p key={idx} className="text-center text-gray-900 font-medium text-base sm:text-lg">
                  <span className="text-emerald-600 font-bold text-lg sm:text-xl mr-2">✔</span>
                  <span>{text}</span>
                </p>
              );
            })}
          </div>
        </section>

        {/* 7. Why Choose Our {Brand} Service Center */}
        <section className="space-y-4 text-center">
          <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl tracking-tight text-center">
            {data.whyChooseHeading}
          </h2>
          <div className="space-y-3 max-w-2xl mx-auto px-4 leading-relaxed">
            {data.whyChooseItems.map((rawItem, idx) => {
              const hasTick = /^[✔\u2714\u2713•\-\*]/.test(rawItem);
              const cleanItem = rawItem.replace(/^[✔\u2714\u2713•\-\*]\s*/, '');
              // Check if it has a title - description format with dash or colon
              const dashMatch = cleanItem.match(/^([^–—\:-]+?)\s*[–—\-]\s*(.+)$/);
              if (dashMatch) {
                const title = dashMatch[1].trim();
                const desc = dashMatch[2].trim();
                return (
                  <p key={idx} className="text-center text-gray-800 text-base sm:text-lg">
                    {hasTick && <span className="text-emerald-600 font-bold text-lg sm:text-xl mr-2">✔</span>}
                    <strong className="font-semibold text-gray-900">{title} – </strong>
                    <span className="text-gray-700">{desc}</span>
                  </p>
                );
              }
              return (
                <p key={idx} className="text-center text-gray-900 font-medium text-base sm:text-lg">
                  {hasTick && <span className="text-emerald-600 font-bold text-lg sm:text-xl mr-2">✔</span>}
                  <span>{cleanItem}</span>
                </p>
              );
            })}
          </div>
        </section>

        {/* Frequently Asked Questions (Accordion design matching screenshot) */}
        {data.faqs && data.faqs.length > 0 && (
          <FAQAccordion 
            faqs={data.faqs} 
            subtitle={`Everything you need to know about our ${brandName} RO repair & maintenance services in Bangalore.`}
          />
        )}

        {/* 8. Book {brandName} Ro Service Today (NO CHANGES - Kept intact as requested) */}
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
        <section className="text-center space-y-3 pt-2">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Need More Help?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {data.needMoreHelpText}
          </p>
          {data.needMoreHelpBullets && data.needMoreHelpBullets.length > 0 && (
            <div className="space-y-2 max-w-md mx-auto pt-1 px-4">
              {data.needMoreHelpBullets.map((bullet, idx) => {
                const text = bullet.replace(/^[✔\u2714\u2713•\-\*]\s*/, '');
                return (
                  <p key={idx} className="text-center text-gray-900 font-medium text-base sm:text-lg">
                    <span className="text-emerald-600 font-bold text-lg sm:text-xl mr-2">✔</span>
                    <span>{text}</span>
                  </p>
                );
              })}
            </div>
          )}
          <div className="pt-2">
            <a
              href={`tel:${phone}`}
              className="inline-block text-gray-900 hover:text-[#1a62d6] text-base sm:text-lg font-bold tracking-wide transition-colors"
            >
              Call Now: {phone}
            </a>
          </div>
        </section>
      </div>

      {/* Floating Call Icon matching reference image */}
      <FloatingCallButton phone={phone} />

      {/* 11. Dark Navy 3-Box Footer with Keywords & Disclaimer */}
      <BrandFooter
        addressCity={address}
        email={email}
        phone={phone}
        keywords={data.footerKeywords}
      />

      {/* Sticky Two-Button Footer: Call Us & Book Now */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 sm:py-3 px-3 sm:px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.18)]">
        <div className="max-w-xl mx-auto grid grid-cols-2 gap-2.5 sm:gap-4">
          {/* Call Us Button - Dials phone */}
          <a
            href={`tel:${phone}`}
            id="sticky-call-us-btn"
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 px-3 sm:px-5 bg-[#1859c2] hover:bg-[#12489c] text-white rounded-lg sm:rounded-xl font-black text-sm sm:text-base md:text-lg tracking-wide shadow-md active:scale-95 transition-all text-center group"
            title={`Call us at ${phone}`}
          >
            <Phone size={18} className="fill-current animate-pulse flex-shrink-0" />
            <span className="truncate">Call Us</span>
          </a>

          {/* Book Now Button - Scrolls to lead form */}
          <button
            type="button"
            id="sticky-book-now-btn"
            onClick={scrollToLeadForm}
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 px-3 sm:px-5 bg-[#d9383a] hover:bg-[#bf2628] text-white rounded-lg sm:rounded-xl font-black text-sm sm:text-base md:text-lg tracking-wide shadow-md active:scale-95 transition-all text-center cursor-pointer group"
            title="Book Service Appointment"
          >
            <Calendar size={18} className="flex-shrink-0" />
            <span className="truncate">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
