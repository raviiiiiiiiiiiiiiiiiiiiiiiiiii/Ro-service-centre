'use client';

import { Clock, CheckCircle2 } from 'lucide-react';

export function QuickBooking() {
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
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-spacing-sm" onSubmit={(e) => { e.preventDefault(); alert('Booking received! A certified technician is being assigned to your Bangalore location.'); }}>
        <div>
          <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Full Name</label>
          <input className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest" placeholder="Suresh Kumar" required type="text" />
        </div>
        <div>
          <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Mobile Number</label>
          <div className="flex">
            <span className="px-spacing-xs py-spacing-xs bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-l-lg flex items-center">+91</span>
            <input className="w-full px-spacing-sm py-spacing-xs rounded-r-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest" pattern="[0-9]{10}" placeholder="98765 43210" required type="tel" />
          </div>
        </div>
        <div>
          <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Bangalore Pincode</label>
          <input className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest" pattern="[0-9]{6}" placeholder="560100" required type="text" />
        </div>
        <div>
          <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Brand</label>
          <select className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest">
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
          <select className="w-full px-spacing-sm py-spacing-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest">
            <option>RO Repair & Troubleshooting</option>
            <option>Filter & Membrane Replacement</option>
            <option>New Installation / Relocation</option>
            <option>Annual Maintenance (AMC)</option>
            <option>Emergency Water Leakage</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full py-spacing-xs px-spacing-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-spacing-2xs h-[42px]" type="submit">
            <span>Confirm Booking</span>
            <CheckCircle2 size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuickBooking;
