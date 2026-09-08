import { ArrowRight, Phone, Bike, ShieldCheck, Wrench, IndianRupee } from 'lucide-react';
import QuickBooking from './QuickBooking';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background pb-spacing-3xl pt-spacing-xl">
      <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-tertiary-fixed-dim/20 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-spacing-xl items-center">
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            
            <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface mb-spacing-xs">
              Clean Water<br/>
              <span className="text-primary font-display-xl">Happier Families</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-spacing-lg leading-relaxed">
              Professional RO repair, service and installation at your doorstep. Keep your water pure, safe and healthy with expert care across Bangalore.
            </p>
            
            <div className="flex flex-wrap items-center gap-spacing-md mb-spacing-xl">
              <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-secondary transition-all hover:scale-[1.02] active:scale-[0.98]" href="#quick-booking">
                <span>Book Your Service</span>
                <ArrowRight size={18} />
              </a>
              <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all" href="tel:08050291180">
                <Phone size={18} className="fill-primary/20" />
                <span>Call Now</span>
              </a>
            </div>
            
            {/* Mobile Image (Visible only on mobile) */}
            <div className="relative flex lg:hidden justify-center w-full mb-spacing-xl mt-spacing-sm">
              <div className="absolute -top-6 right-2 sm:right-8 z-20 flex flex-col items-end">
                <span className="font-headline-sm text-headline-sm text-secondary italic tracking-tight font-semibold drop-shadow-sm">Pure Water Our Priority</span>
                <svg className="w-10 h-8 text-secondary -rotate-12 translate-x-2 drop-shadow-sm" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4c6 0 10 6 12 14"></path>
                  <path d="M12 18l4 2 2-4"></path>
                </svg>
              </div>
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
                <img className="w-full h-[360px] object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk9HNCjhopbPFEMZ8DfINTyZFNwwELgCjTOHLRz3q6_Fw_BYuYY9R-_AcF1mt_yo1tlW2rAV3jtnStF0c6aA7i9LlgY4BDlcRnMk6mZdDFfHjqQFplXGpAMDGNIprVO3shf5Sjly778lt6cKrHpg5YER8v6RnNGaeWOULKJmswoohfz5JJgT4pwkwhXEYxnHwhAUS3W0pdnPakzFJHSrLnN-LjG74Iu7xFjoEctqnU-6kOWGYLKP7VxA" alt="Technician" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-spacing-sm rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-spacing-xs">
                    <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
                    <span className="font-label-sm text-label-sm text-on-surface">32 Technicians Active Now in Bangalore</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold">60-90 Min Arrival</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-spacing-xs w-full">
              <div className="flex items-center gap-spacing-xs p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <Bike size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-on-surface truncate">Fast Service</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] truncate">In 60-90 Mins</div>
                </div>
              </div>
              <div className="flex items-center gap-spacing-xs p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-on-surface truncate">Original Parts</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] truncate">100% Genuine</div>
                </div>
              </div>
              <div className="flex items-center gap-spacing-xs p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <Wrench size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-on-surface truncate">Technicians</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] truncate">Trained & Verified</div>
                </div>
              </div>
              <div className="flex items-center gap-spacing-xs p-spacing-xs rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <IndianRupee size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-on-surface truncate">Affordable</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant text-[11px] truncate">Transparent Rates</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-5 relative justify-center mt-spacing-lg lg:mt-0 order-1 lg:order-2">
            <div className="absolute -top-4 right-8 z-20 flex flex-col items-end">
              <span className="font-headline-sm text-headline-sm text-secondary italic tracking-tight font-semibold">Pure Water Our Priority</span>
              <svg className="w-12 h-10 text-secondary -rotate-12 translate-x-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4c6 0 10 6 12 14"></path>
                <path d="M12 18l4 2 2-4"></path>
              </svg>
            </div>
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
              <img className="w-full h-[460px] object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk9HNCjhopbPFEMZ8DfINTyZFNwwELgCjTOHLRz3q6_Fw_BYuYY9R-_AcF1mt_yo1tlW2rAV3jtnStF0c6aA7i9LlgY4BDlcRnMk6mZdDFfHjqQFplXGpAMDGNIprVO3shf5Sjly778lt6cKrHpg5YER8v6RnNGaeWOULKJmswoohfz5JJgT4pwkwhXEYxnHwhAUS3W0pdnPakzFJHSrLnN-LjG74Iu7xFjoEctqnU-6kOWGYLKP7VxA" alt="Technician" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-spacing-sm rounded-xl shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-spacing-xs">
                  <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
                  <span className="font-label-sm text-label-sm text-on-surface">32 Technicians Active Now in Bangalore</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-bold">60-90 Min Arrival</span>
              </div>
            </div>
          </div>
        </div>

        <QuickBooking />
      </div>
    </section>
  );
}

export default Hero;
