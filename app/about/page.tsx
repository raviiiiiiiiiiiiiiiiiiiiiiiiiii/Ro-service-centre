import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Award, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import QuickBooking from '@/components/QuickBooking';

export const metadata: Metadata = {
  title: 'About Us | RO Service Centre Online Bangalore',
  description: 'Bangalore’s leading multi-brand RO water purifier service center. Certified technicians, authentic spare parts, and doorstep service in 60-90 minutes.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background pb-spacing-3xl pt-spacing-xl">
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-spacing-2xs text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-spacing-xs">
              <Droplets size={18} /> About RO Service Centre Online
            </div>
            <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface mb-spacing-xs">
              Dedicated to Pure & Safe Water in Bangalore
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-spacing-lg leading-relaxed">
              Officially registered MSME Enterprise (UDYAM-KR-03-0561611). We are a premier multi-brand water purifier service network dedicated to ensuring every home and business in Bangalore has continuous access to clean, healthy drinking water.
            </p>
            <div className="flex flex-wrap items-center gap-spacing-md">
              <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-secondary transition-all" href="#quick-booking">
                <span>Book Service Now</span>
                <ArrowRight size={18} />
              </a>
              <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all" href="tel:08050291180">
                <Phone size={18} />
                <span>Call 08050291180</span>
              </a>
            </div>
          </div>
          
          <QuickBooking />
        </div>
      </section>

      <section className="py-spacing-3xl bg-surface">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg">
            <div className="bg-surface-container-lowest p-spacing-xl rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-spacing-md">
                <ShieldCheck size={28} />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">Genuine Spare Parts</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We only supply genuine and high-rejection certified membranes, NSF-grade carbon blocks, and original booster pumps with warranties.
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-spacing-xl rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-spacing-md">
                <Clock size={28} />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">60-90 Min Response</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our active technician network covers all Bangalore tech hubs and residential zones with guaranteed prompt doorstep arrival.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-spacing-xl rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-spacing-md">
                <Award size={28} />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">Transparent Pricing</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                No hidden costs. Get upfront diagnosis, upfront quotes for spare parts, and verify TDS levels digitally before paying.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
