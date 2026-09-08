import { ChevronDown } from 'lucide-react';

export function FAQ() {
  return (
    <section className="py-spacing-3xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-spacing-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-2xs">
            Frequently Asked Questions
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Everything you need to know about our RO repair & maintenance services in Bangalore.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-spacing-sm">
          <details className="group bg-surface-container-lowest rounded-2xl p-spacing-md shadow-sm transition-all open:shadow-md">
            <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none outline-none">
              <span>How quickly can a service technician visit my home in Bangalore?</span>
              <ChevronDown className="text-primary group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pt-spacing-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We provide prompt 60 to 90 minute doorstep service across all major Bangalore zones including Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Hebbal, and Jayanagar. For instant emergency dispatch, you can call 08050291180.
            </div>
          </details>
          
          <details className="group bg-surface-container-lowest rounded-2xl p-spacing-md shadow-sm transition-all open:shadow-md">
            <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none outline-none">
              <span>Which water purifier brands do you repair and service?</span>
              <ChevronDown className="text-primary group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pt-spacing-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We handle all leading brands including Kent RO, Eureka Forbes Aquaguard, Pureit, AO Smith, LG PuriCare, Havells, Livpure, Blue Star, and Zero B. Our vans carry genuine factory-sealed filters and electrical spares suitable for residential and commercial systems.
            </div>
          </details>
          
          <details className="group bg-surface-container-lowest rounded-2xl p-spacing-md shadow-sm transition-all open:shadow-md">
            <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none outline-none">
              <span>What is included in an Annual Maintenance Contract (AMC)?</span>
              <ChevronDown className="text-primary group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pt-spacing-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our comprehensive RO AMC plans include scheduled periodic checkups, free replacement of sediment, pre-carbon, and post-carbon filters, routine membrane health checks, complete machine sanitization, and zero labor cost for breakdown visits all year.
            </div>
          </details>
          
          <details className="group bg-surface-container-lowest rounded-2xl p-spacing-md shadow-sm transition-all open:shadow-md">
            <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none outline-none">
              <span>Do you offer a post-service warranty on spare parts?</span>
              <ChevronDown className="text-primary group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pt-spacing-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Yes, all genuine replacement parts (including RO booster pumps, SMPS adapters, solenoid valves, and RO membranes) are covered by an explicit service guarantee. We issue a digital invoice specifying the parts changed.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
