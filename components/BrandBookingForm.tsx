'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Phone, Calendar, Clock, Wrench } from 'lucide-react';

export const BRAND_OPTIONS = [
  'Blue Star',
  'Whirlpool',
  'Kent',
  'Aquaguard',
  'Pureit',
  'AO Smith',
  'LG',
  'Havells',
  'Zero B',
  'Aqua Pearl',
  'V-Guard',
  'Livpure',
  'Other Brands',
];

export const SERVICE_OPTIONS = [
  'Water Purifier Service',
  'Water Purifier Repair',
  'Water Purifier Filter Replacement',
  'Water Purifier AMC',
];

interface BrandBookingFormProps {
  brandName?: string;
  phone?: string;
  isHomepage?: boolean;
}

export default function BrandBookingForm({ 
  brandName = 'RO', 
  phone = '08050291180',
  isHomepage = false,
}: BrandBookingFormProps) {
  // Determine initial brand: on brand pages it fills automatically from brandName; on homepage it starts empty
  const defaultBrand = !isHomepage && brandName && brandName !== 'RO' && brandName !== 'Multi-Brand'
    ? brandName
    : '';

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    postalCode: '',
  });

  const [selectedBrand, setSelectedBrand] = useState<string>(defaultBrand);
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [loading, setLoading] = useState(false);

  // Sync selectedBrand if brandName prop changes
  useEffect(() => {
    if (!isHomepage && brandName && brandName !== 'RO' && brandName !== 'Multi-Brand') {
      setSelectedBrand(brandName);
    }
  }, [brandName, isHomepage]);

  // Construct the full service name dynamically
  const getFullServiceName = (serviceType: string, brand: string) => {
    if (!serviceType) return '';
    if (!brand || brand === 'Other Brands') {
      return serviceType;
    }
    return `${brand} ${serviceType}`;
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBrand = e.target.value;
    setSelectedBrand(newBrand);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please enter your Name and Mobile number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const randomCode = 'RO-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomCode);
      setSubmitted(true);
      setLoading(false);
    }, 500);
  };

  const currentServiceName = getFullServiceName(selectedServiceType, selectedBrand);

  return (
    <div className="w-full max-w-xl mx-auto px-4 scroll-mt-24 sm:scroll-mt-28" id="appointment-form">
      <div className="bg-white border border-gray-200 shadow-md rounded-md p-6 sm:p-8">
        <h3 className="text-[#1a62d6] text-2xl font-normal text-center mb-6 tracking-tight">
          Book Appointment Now
        </h3>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="text-gray-900 font-bold text-lg">Appointment Scheduled!</h4>
              <p className="text-gray-600 text-sm mt-1">
                Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Our verified technician has been dispatched.
              </p>
              <div className="mt-3 inline-block bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded">
                Booking ID: {bookingRef}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-4 text-left text-xs text-gray-700 space-y-2">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#1a62d6] flex-shrink-0" />
                <span>Estimated Arrival: <strong>Within 60-90 minutes</strong></span>
              </div>
              {selectedBrand && (
                <div className="flex items-center gap-2">
                  <Wrench size={14} className="text-[#1a62d6] flex-shrink-0" />
                  <span>Brand: <strong>{selectedBrand}</strong></span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#1a62d6] flex-shrink-0" />
                <span>Service Required: <strong>{currentServiceName || `${selectedBrand || brandName || 'RO'} Water Purifier Service`}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 bg-[#d9383a] text-white text-xs font-semibold px-5 py-2.5 rounded hover:bg-[#c22e30] transition-colors"
              >
                <Phone size={14} /> Call Support Now: {phone}
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', mobile: '', address: '', postalCode: '' });
                setSelectedServiceType('');
                if (isHomepage) setSelectedBrand('');
              }}
              className="text-xs text-blue-600 hover:underline block mx-auto mt-2 cursor-pointer"
            >
              Book Another Service
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a62d6] focus:ring-1 focus:ring-[#1a62d6]"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Mobile No."
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
                className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a62d6] focus:ring-1 focus:ring-[#1a62d6]"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a62d6] focus:ring-1 focus:ring-[#1a62d6]"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a62d6] focus:ring-1 focus:ring-[#1a62d6]"
              />
            </div>

            {/* Select Brand Option - Automatically pre-filled on brand pages, selectable on homepage */}
            <div>
              <select
                id="brand-select"
                value={selectedBrand}
                onChange={handleBrandChange}
                className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#1a62d6] focus:ring-1 focus:ring-[#1a62d6]"
              >
                <option value="">Select Brand</option>
                {BRAND_OPTIONS.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Required Section */}
            <div>
              <select
                id="service-required-select"
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#1a62d6] focus:ring-1 focus:ring-[#1a62d6]"
              >
                <option value="">Select Service Required</option>
                {SERVICE_OPTIONS.map((serviceType) => {
                  const label = getFullServiceName(serviceType, selectedBrand);
                  return (
                    <option key={serviceType} value={serviceType}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#d9383a] hover:bg-[#c22e30] active:bg-[#b02527] text-white font-medium text-sm px-6 py-2 rounded transition-colors shadow-sm disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

