import { ShieldCheck, Award, Gauge, ThumbsUp, Phone } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-spacing-3xl bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-spacing-2xl items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-3 -left-2 z-20 hidden sm:flex flex-col items-start">
              <span className="font-headline-sm text-headline-sm text-primary italic font-semibold tracking-tight">Safe Water Better Tomorrow</span>
              <svg className="w-12 h-10 text-primary rotate-12 translate-x-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4c4 6 8 10 16 12"></path>
                <path d="M20 16l-3-4-1 4"></path>
              </svg>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
              <img className="w-full h-[480px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD84scjixxyU-5KYdES2jS_HsLZ9_C9KQxDqc4JgdczgASVd3t13MRcjBkM4pN2UgUcMUGsS6NiN9Wn-9NIk3NjRVefTecy0K6WDQQTSIatgwG6dlg8_ENlGtPVJh8NHxLZRNdVHgIgm9cXugaOpapTPiABq3bRYpDEYzmZXGp2Ghy7LjyUvzXfPszpb3TfpaYb6cXsS99KqOIsXDrFkw9C2t7O6vyNvf5a9MwWj9yCTCDD4nc-Xmckfw" alt="Glass of water" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 backdrop-blur-md p-spacing-sm rounded-xl shadow-lg flex items-center gap-spacing-sm">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold text-headline-sm">
                  45
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">PPM Safe TDS Level</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Calibrated with digital lab-grade TDS tester</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-sm">
              Your Trusted RO Service Partner in Bangalore
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-spacing-lg leading-relaxed">
              At RO Service Centre Online, we are committed to delivering clean and safe drinking water to every home. With experienced technicians, genuine parts, and a customer-first approach, we ensure your RO runs at its best.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-spacing-lg w-full mb-spacing-lg">
              <div className="md:col-span-8 space-y-spacing-sm">
                <div className="flex items-start gap-spacing-sm p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">Experienced & Verified Technicians</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Background-checked engineers with 5+ years expertise across all RO brands.</div>
                  </div>
                </div>
                <div className="flex items-start gap-spacing-sm p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">Genuine Spare Parts & High-Rejection Membranes</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Only authentic factory-sealed components for long-term health safety.</div>
                  </div>
                </div>
                <div className="flex items-start gap-spacing-sm p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Gauge size={18} />
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">On-Time Doorstep Service in 60–90 Mins</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Rapid dispatch across 30+ Bangalore tech corridors and residential hubs.</div>
                  </div>
                </div>
                <div className="flex items-start gap-spacing-sm p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <ThumbsUp size={18} />
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">Customer Satisfaction Guaranteed</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive post-service repair warranty and digital invoices.</div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4 flex flex-col justify-between gap-spacing-sm">
                <div className="bg-surface-container-lowest p-spacing-md rounded-2xl shadow-sm text-center">
                  <div className="font-headline-lg text-headline-lg text-primary leading-none">5+</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Years of Experience</div>
                </div>
                <div className="bg-surface-container-lowest p-spacing-md rounded-2xl shadow-sm text-center">
                  <div className="font-headline-lg text-headline-lg text-on-surface leading-none">10,000+</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Happy Customers in BLR</div>
                </div>
                <div className="bg-surface-container-lowest p-spacing-md rounded-2xl shadow-sm text-center">
                  <div className="font-headline-lg text-headline-lg text-secondary leading-none flex items-center justify-center gap-1">
                    <span>4.9</span>
                    <span className="text-amber-500 text-[24px]">★</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Google Customer Rating</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-spacing-md pt-spacing-xs">
              <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-secondary transition-all" href="tel:08050291180">
                <Phone size={18} />
                <span>Speak to Technical Advisor</span>
              </a>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Available 8:00 AM - 9:00 PM (All 7 Days)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
