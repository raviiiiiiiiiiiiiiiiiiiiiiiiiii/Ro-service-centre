'use client';

import React, { useState } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export function QuickBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch('https://formsubmit.co/ajax/syedsmaula786@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Quick Booking: ${data.name || 'Customer'} (${data.brand || 'RO Purifier'})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.error('QuickBooking error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="mt-spacing-2xl bg-surface-container-lowest rounded-2xl shadow-xl p-spacing-lg lg:p-spacing-xl relative z-20" id="quick-booking">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-spacing-xs mb-spacing-md">
        <div>
          <div className="inline-flex items-center gap-spacing-2xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
            <Clock size={16} /> Doorstep Service Within 60-90 Mins
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Book Fast RO Service Now</h2>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant max-w-sm">No advance payment required. Pay safely via UPI or cash after complete satisfaction and water TDS verification.</p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-900 space-y-2">
          <CheckCircle2 className="mx-auto text-emerald-600" size={32} />
          <h3 className="font-bold text-lg">Booking Confirmed!</h3>
          <p className="text-sm text-emerald-800">A certified technician has been dispatched to your Bangalore location within 60-90 minutes.</p>
        </div>
      ) : (
        <form 
          action="https://formsubmit.co/syedsmaula786@gmail.com"
          method="POST"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-spacing-sm" 
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="source" value="Quick Booking Widget" />

          <div>
            <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Full Name</label>
            <input name="name" className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest" placeholder="Suresh Kumar" required type="text" />
          </div>
          <div>
            <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Mobile Number</label>
            <div className="flex">
              <span className="px-spacing-xs py-spacing-xs bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-l-lg flex items-center">+91</span>
              <input name="mobile" className="w-full px-spacing-sm py-spacing-xs rounded-r-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest" pattern="[0-9]{10}" placeholder="98765 43210" required type="tel" />
            </div>
          </div>
          <div>
            <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Bangalore Pincode</label>
            <input name="pincode" className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest" pattern="[0-9]{6}" placeholder="560100" required type="text" />
          </div>
          <div>
            <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Brand</label>
            <select name="brand" className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest">
              <option>Kent RO</option>
              <option>Aquaguard / Eureka Forbes</option>
              <option>Pureit</option>
              <option>AO Smith</option>
              <option>LG Water Purifier</option>
              <option>Havells</option>
              <option>Livpure</option>
              <option>Blue Star</option>
              <option>Zero B</option>
              <option>Other Brand</option>
            </select>
          </div>
          <div>
            <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Service Required</label>
            <select name="serviceRequired" className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest">
              <option>RO Repair & Troubleshooting</option>
              <option>Filter & Membrane Replacement</option>
              <option>New Installation / Relocation</option>
              <option>Annual Maintenance (AMC)</option>
              <option>Emergency Water Leakage</option>
            </select>
          </div>
          <div className="flex items-end">
            <button 
              className="w-full py-spacing-xs px-spacing-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-spacing-2xs h-[42px] disabled:opacity-60 cursor-pointer" 
              type="submit"
              disabled={loading}
            >
              <span>{loading ? 'Sending...' : 'Confirm Booking'}</span>
              <CheckCircle2 size={16} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default QuickBooking;
