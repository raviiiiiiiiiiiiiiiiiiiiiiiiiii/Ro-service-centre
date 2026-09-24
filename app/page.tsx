import React from 'react';
import { Phone, Clock, Calendar } from 'lucide-react';
import BrandHeader from '@/components/BrandHeader';
import BrandBookingForm from '@/components/BrandBookingForm';
import BrandFooter from '@/components/BrandFooter';
import WaterSplashIllustration from '@/components/WaterSplashIllustration';
import FAQAccordion from '@/components/FAQAccordion';
import FloatingCallButton from '@/components/FloatingCallButton';

export default function HomePage() {
  const phone = '08050291180';
  const email = 'Contect@Roservicecentreonline24x7.in';
  const address = 'No. 97, Neeladri Nagar, Electronics City Phase 1 Extension, Bengaluru, Karnataka';
  const state = 'Karnataka';

  const services = [
    '✔ Kent RO Repair & Service',
    '✔ Aquaguard RO Repair & Service',
    '✔ Pureit RO Repair & Service',
    '✔ AO Smith RO Repair & Service',
    '✔ LG RO Repair & Service',
    '✔ Livpure RO Repair & Service',
    '✔ Havells RO Repair & Service',
    '✔ V-Guard RO Repair & Service',
    '✔ ZeroB RO Repair & Service',
    '✔ RO AMC & Maintenance Service',
    '✔ RO Filter & Membrane Replacement',
    '✔ RO Installation & Uninstallation Service'
  ];

  const problems = [
    '✔ RO Not Dispensing Water',
    '✔ Low Water Pressure',
    '✔ Water Leakage Issues',
    '✔ Bad Taste or Odor in Water',
    '✔ Filter Replacement Alerts',
    '✔ RO Making Unusual Noise',
    '✔ Power Supply Issues',
    '✔ RO Not Purifying Water',
    '✔ Slow Water Flow',
    '✔ Tank Not Filling Properly',
    '✔ Water Overflow Problems',
    '✔ Regular Service & Maintenance Issues'
  ];

  const whyChooseItems = [
    '✔ Experienced RO Technicians',
    '✔ Same-Day Doorstep Service',
    '✔ Support for Major RO Brands',
    '✔ AMC & Maintenance Support',
    '✔ Genuine Filter & Spare Parts Support',
    '✔ Bangalore-Wide Service Coverage'
  ];

  const faqs = [
    {
      q: 'Q. Do you provide RO service in Bangalore?',
      a: 'A. Yes, we provide repair, AMC, installation, and filter replacement services across Bangalore.'
    },
    {
      q: 'Q. Do you offer same-day RO service?',
      a: 'A. Yes, same-day doorstep service is available in most Bangalore locations.'
    },
    {
      q: 'Q. Which RO brands do you support?',
      a: 'A. We support Kent, Aquaguard, Pureit, AO Smith, LG, Livpure, Havells, V-Guard, ZeroB, and other major brands.'
    },
    {
      q: 'Q. Do you replace RO filters and membranes?',
      a: 'A. Yes, we provide filter replacement and membrane replacement services.'
    },
    {
      q: 'Q. Do you provide AMC plans?',
      a: 'A. Yes, annual maintenance plans are available for regular servicing and support.'
    },
    {
      q: 'Q. How can I book an RO service appointment?',
      a: 'A. You can contact our support team and schedule a doorstep service visit.'
    }
  ];

  const needMoreHelpBullets = [
    '✔ Fast Customer Support',
    '✔ Easy Appointment Scheduling',
    '✔ Reliable Service Assistance',
    '✔ Bangalore-Wide Coverage'
  ];

  const footerKeywords = 'RO Service Center Bangalore | Kent RO Service | Aquaguard RO Service | Pureit RO Service | AO Smith RO Service | LG RO Service | Livpure RO Service | Havells RO Service | V-Guard RO Service | ZeroB RO Service';

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#1859c2] selection:text-white">
      {/* 1. Header with Logo, Location, Toll Free, and Navigation Bar */}
      <BrandHeader
        phone={phone}
        tollFree="18001201622"
        locationCity="Bengaluru"
        locationState={state}
        logoImage="/assets/homepage-logo.webp"
      />

      {/* 2. Hero Purifier Graphic with Doorstep Technician banner */}
      <div className="w-full bg-[#f8fafc] pt-4 pb-2">
        <div className="max-w-3xl mx-auto px-2 sm:px-4" id="purifier-gallery">
          <a
            href={`tel:${phone}`}
            className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group active:scale-[0.99] border border-gray-200 bg-white"
            title={`Call RO Water Purifier Service at ${phone}`}
          >
            <img
              src="/assets/homepage-hero.webp"
              alt="RO Water Purifier Service Center Bangalore - Doorstep Technician"
              width={768}
              height={420}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 768px, 768px"
              className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover object-top mx-auto"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs sm:text-sm font-semibold text-gray-900">Doorstep RO Repair & Service in 60-90 Mins</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1859c2]">Call: {phone}</span>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-10">
        
        {/* 3. Title */}
        <section className="text-center space-y-2">
          <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Water Purifier Service Center in Bangalore
          </h1>
          <p className="text-[#1a62d6] font-semibold text-base sm:text-lg md:text-xl">
            Fast, Reliable & Same-Day RO Repair Service at Your Doorstep
          </p>
        </section>

        {/* Lead Form */}
        <div className="pt-2 pb-2">
          <BrandBookingForm brandName="RO" phone={phone} isHomepage={true} />
        </div>

        {/* Introduction text moved below form */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 max-w-3xl mx-auto text-center">
          <p>
            Looking for a trusted RO Service Center in Bangalore? We provide professional RO repair, AMC, filter replacement, installation, uninstallation, and maintenance services for leading water purifier brands including Kent, Aquaguard, Pureit, AO Smith, LG, Livpure, Havells, V-Guard, and ZeroB. Our experienced technicians offer fast doorstep support and reliable service solutions across Bangalore.
          </p>
          <p>
            Whether your RO purifier is facing low water flow, water leakage, purification issues, unusual noise, or filter replacement alerts, our team can quickly diagnose and resolve the problem. Book your RO service today and keep your water purifier running efficiently.
          </p>
        </div>

        {/* 4. Mid-Page Pure Water Banner */}
        <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-2 sm:px-4">
          <a
            href={`tel:${phone}`}
            className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group active:scale-[0.99] border border-gray-200 bg-white"
            title={`Call RO Water Purifier Service at ${phone}`}
          >
            <img
              src="/assets/homepage-mid.webp"
              alt="100% Pure & Safe Drinking Water - RO Water Purifier Service"
              width={768}
              height={340}
              className="w-full h-[220px] sm:h-[300px] md:h-[340px] object-cover mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
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

        {/* 5. Our RO Services in Bangalore */}
        <section className="space-y-4 text-center" id="services-grid">
          <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl tracking-tight text-center">
            Our RO Services in Bangalore
          </h2>
          <div className="space-y-2.5 max-w-xl mx-auto px-4">
            {services.map((item, idx) => {
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

        {/* 6. Common RO Problems We Fix */}
        <section className="space-y-4 text-center">
          <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl tracking-tight text-center">
            Common RO Problems We Fix
          </h2>
          <div className="space-y-2.5 max-w-xl mx-auto px-4">
            {problems.map((item, idx) => {
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

        {/* 7. Why Choose Our RO Service Center Bangalore? */}
        <section className="space-y-4 text-center">
          <h2 className="text-[#1a62d6] font-bold text-2xl sm:text-3xl tracking-tight text-center">
            Why Choose Our RO Service Center Bangalore?
          </h2>
          <div className="space-y-3 max-w-2xl mx-auto px-4 leading-relaxed">
            {whyChooseItems.map((rawItem, idx) => {
              const hasTick = /^[✔\u2714\u2713•\-\*]/.test(rawItem);
              const cleanItem = rawItem.replace(/^[✔\u2714\u2713•\-\*]\s*/, '');
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
        {faqs && faqs.length > 0 && (
          <FAQAccordion 
            faqs={faqs} 
            subtitle="Everything you need to know about our RO repair & maintenance services in Bangalore."
          />
        )}

        {/* 8. Book Ro Service Today (NO CHANGES - Kept intact as requested) */}
        <section className="text-center space-y-3">
          <h2 className="text-[#1a62d6] font-semibold text-2xl sm:text-3xl tracking-tight">
            Book Ro Service Today
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get <strong className="font-semibold text-gray-900">fast, dependable, and professional Ro repair service</strong> at your doorstep. Our support team is ready to assist you with quick booking and immediate service scheduling.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-gray-800">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 hover:text-[#1a62d6] transition-colors"
            >
              <Phone size={18} className="text-gray-800 fill-current" />
              <span>Call Now for Ro Service Support</span>
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
            Need assistance with RO repair, AMC plans, filter replacement, or installation services? Our support team is ready to help with service booking, pricing information, and technical support across Bangalore.
          </p>
          {needMoreHelpBullets && needMoreHelpBullets.length > 0 && (
            <div className="space-y-2 max-w-md mx-auto pt-1 px-4">
              {needMoreHelpBullets.map((bullet, idx) => {
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
        keywords={footerKeywords}
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
          <a
            href="#appointment-form"
            id="sticky-book-now-btn"
            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 px-3 sm:px-5 bg-[#d9383a] hover:bg-[#bf2628] text-white rounded-lg sm:rounded-xl font-black text-sm sm:text-base md:text-lg tracking-wide shadow-md active:scale-95 transition-all text-center cursor-pointer group"
            title="Book Service Appointment"
          >
            <Calendar size={18} className="flex-shrink-0" />
            <span className="truncate">Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
