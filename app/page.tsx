'use client';

import React from 'react';
import { Phone, Clock, Calendar } from 'lucide-react';
import BrandHeader from '@/components/BrandHeader';
import BrandBookingForm from '@/components/BrandBookingForm';
import BrandFooter from '@/components/BrandFooter';
import WaterSplashIllustration from '@/components/WaterSplashIllustration';

export default function HomePage() {
  const brandName = 'Ro';
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
      />

      {/* 2. Hero Purifier Graphic with previous homepage technician image (No brand logo box, No brand selector) */}
      <div className="w-full bg-[#f8fafc] pt-4 pb-2">
        <div className="max-w-3xl mx-auto px-2 sm:px-4" id="purifier-gallery">
          <a
            href={`tel:${phone}`}
            className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group active:scale-[0.99] border border-gray-200 bg-white"
            title={`Call RO Water Purifier Service at ${phone}`}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk9HNCjhopbPFEMZ8DfINTyZFNwwELgCjTOHLRz3q6_Fw_BYuYY9R-_AcF1mt_yo1tlW2rAV3jtnStF0c6aA7i9LlgY4BDlcRnMk6mZdDFfHjqQFplXGpAMDGNIprVO3shf5Sjly778lt6cKrHpg5YER8v6RnNGaeWOULKJmswoohfz5JJgT4pwkwhXEYxnHwhAUS3W0pdnPakzFJHSrLnN-LjG74Iu7xFjoEctqnU-6kOWGYLKP7VxA"
              alt="RO Water Purifier Service Center Bangalore - Doorstep Technician"
              className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover object-top mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900">Doorstep RO Repair & Service in 60-90 Mins</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1859c2]">Call: {phone}</span>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-10">
        
        {/* 3. Title and Introduction */}
        <section className="text-center space-y-4">
          <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Ro Water Purifier Service Center in Bangalore
          </h1>
          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 max-w-3xl mx-auto">
            <p>
              Looking for a <strong className="font-semibold text-gray-900">reliable {brandName} service center</strong> for your water heater or RO water purifier? We provide <strong className="font-semibold text-gray-900">professional repair, maintenance, and installation services</strong> for all {brandName} models. Our experienced and factory-trained technicians deliver quick diagnosis, accurate repairs, and <strong className="font-semibold text-gray-900">long-lasting solutions</strong> to ensure uninterrupted performance of your appliance.
            </p>
            <p>
              Whether it&apos;s a malfunctioning geyser, reduced RO water flow, leakage, or error indicators, our service team is equipped with the right tools, technical expertise, and genuine spare parts to restore your appliance to optimal working condition.
            </p>
          </div>
        </section>

        {/* 4. Mid-Page Pure Water Banner (Previous homepage image) */}
        <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-2 sm:px-4">
          <a
            href={`tel:${phone}`}
            className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group active:scale-[0.99] border border-gray-200 bg-white"
            title={`Call RO Water Purifier Service at ${phone}`}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD84scjixxyU-5KYdES2jS_HsLZ9_C9KQxDqc4JgdczgASVd3t13MRcjBkM4pN2UgUcMUGsS6NiN9Wn-9NIk3NjRVefTecy0K6WDQQTSIatgwG6dlg8_ENlGtPVJh8NHxLZRNdVHgIgm9cXugaOpapTPiABq3bRYpDEYzmZXGp2Ghy7LjyUvzXfPszpb3TfpaYb6cXsS99KqOIsXDrFkw9C2t7O6vyNvf5a9MwWj9yCTCDD4nc-Xmckfw"
              alt="100% Pure & Safe Drinking Water - RO Water Purifier Service"
              className="w-full h-[220px] sm:h-[300px] md:h-[340px] object-cover mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm border border-gray-200">
              <div>
                <p className="text-xs text-gray-500 font-medium">100% Pure & Safe Drinking Water</p>
                <p className="text-xs sm:text-sm font-bold text-gray-900">Bring Home Purity & Health For Your Loved Ones</p>
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1859c2]">Instant Booking: {phone}</span>
            </div>
          </a>
        </div>

        {/* 5. Our Ro Services */}
        <section className="text-center space-y-4" id="services-grid">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Our {brandName} Services
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            <p>
              <strong className="font-semibold text-gray-900">{brandName} Water Purifier Repair & Service</strong> – Complete troubleshooting and repair for power, leakage, and thermostat issues.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">{brandName} Water Purifier Repair</strong> – Fix purification problems, filter issues, low flow, and error indicators.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Installation & Uninstallation Support</strong> – Safe and professional installation or removal of {brandName} appliances.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Annual Maintenance Contracts (AMC)</strong> – Affordable AMC plans for regular servicing and preventive maintenance.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Genuine Spare Parts Replacement</strong> – Only high-quality and compatible spare parts used for long-term reliability.
            </p>
          </div>
        </section>

        {/* 6. Common Ro Problems We Fix */}
        <section className="text-center space-y-4">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Common {brandName} Problems We Fix
          </h2>
          <div className="space-y-1.5 text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            <p>Water heater not heating properly</p>
            <p>Geyser leakage, power failure, or tripping issues</p>
            <p>{brandName} RO not purifying water effectively</p>
            <p>Low water flow or slow dispensing from RO purifier</p>
            <p>Error lights, warning indicators, or unusual noise</p>
          </div>
        </section>

        {/* 7. Why Choose Our Ro Service Center? */}
        <section className="text-center space-y-4">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Why Choose Our {brandName} Service Center?
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            <p>
              <strong className="font-semibold text-gray-900">Experienced & Verified Technicians</strong> – Skilled professionals trained to handle all {brandName} models.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Same-Day Doorstep Service</strong> – Fast response and quick service at your location.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Affordable & Transparent Pricing</strong> – No hidden charges, clear cost estimates.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Support for All {brandName} Models</strong> – Old and new water heaters and RO systems covered.
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Customer Satisfaction Guaranteed</strong> – Quality service you can trust.
            </p>
          </div>
        </section>

        {/* 8. Book Ro Service Today */}
        <section className="text-center space-y-3">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Book {brandName} Service Today
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get <strong className="font-semibold text-gray-900">fast, dependable, and professional {brandName} repair service</strong> at your doorstep. Our support team is ready to assist you with quick booking and immediate service scheduling.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-gray-800">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 hover:text-[#1a62d6] transition-colors"
            >
              <Phone size={18} className="text-gray-800 fill-current" />
              <span>Call Now for {brandName} Service Support</span>
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
            <BrandBookingForm brandName="RO" phone={phone} isHomepage={true} />
          </div>
        </section>
      </div>

      {/* 11. Dark Navy 3-Box Footer with Disclaimer */}
      <BrandFooter
        addressCity={address}
        email={email}
        phone={phone}
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
