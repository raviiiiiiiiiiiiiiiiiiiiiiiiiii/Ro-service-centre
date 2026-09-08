import { Wrench, ShieldCheck, Filter, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section className="py-spacing-3xl bg-surface" id="services-grid">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-spacing-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-2xs">
            Complete RO Care for Your Home & Office
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            From fast installation to precision repair, we provide transparent end-to-end RO solutions across Bangalore.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-spacing-lg">
          <div className="bg-surface-container-lowest rounded-2xl p-spacing-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-spacing-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Wrench size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">RO Installation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-md">
                Hassle-free installation and safe wall mounting by certified experts. Complete pre-filter inlet setup and pressure valve calibration.
              </p>
            </div>
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#quick-booking">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-spacing-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-spacing-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Wrench size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">RO Repair</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-md">
                Quick and reliable resolution for water leakages, motor tripping, constant vibration noise, and low dispensing flow.
              </p>
            </div>
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#quick-booking">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-spacing-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-spacing-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">RO AMC Plans</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-md">
                Annual Maintenance Contracts with scheduled checkups, free filter renewals, and emergency repairs for uninterrupted pure water.
              </p>
            </div>
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#quick-booking">
              <span>View Plans</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-spacing-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-spacing-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Filter size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">Filter Replacement</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-md">
                100% genuine sediment filters, pre-carbon blocks, RO membranes, and mineral cartridges to restore natural taste and correct TDS levels.
              </p>
            </div>
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#quick-booking">
              <span>View Pricing</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
