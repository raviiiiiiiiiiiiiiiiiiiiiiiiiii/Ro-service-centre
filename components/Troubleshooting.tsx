import { Droplet, CheckCircle2, PowerOff, Gauge, FlaskConical } from 'lucide-react';

export function Troubleshooting() {
  return (
    <section className="py-spacing-3xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-spacing-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-2xs">
            Common RO Problems We Fix Fast
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Is your water purifier showing symptoms of choking or leakage? Our Bangalore specialists resolve it on the spot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-md">
          <div className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-spacing-md">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
              <Droplet size={24} />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-3xs">Machine Leakage & Flooding</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-xs">
                Loose tube connectors, damaged elbow joints, or cracked filter housing causing continuous kitchen counter drip.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                <CheckCircle2 size={16} /> Fixed in under 45 minutes
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-spacing-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0">
              <PowerOff size={24} />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-3xs">Power Failure & Unit Not Turning ON</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-xs">
                Faulty 24V/36V SMPS power supply adapter, defective low-pressure switch, or internal circuit tripping.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                <CheckCircle2 size={16} /> Original power supply replacement
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-spacing-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0">
              <Gauge size={24} />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-3xs">Low Water Flow or Slow Dispensing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-xs">
                Choked pre-sediment filter from Bangalore borewell silt or scaling on the micro-pores of the RO membrane.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                <CheckCircle2 size={16} /> Complete membrane flush & replacement
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-spacing-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0">
              <FlaskConical size={24} />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-3xs">Foul Water Taste or High TDS Readings</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-xs">
                Exhausted post-carbon activated mineral cartridge or depleted TDS controller delivering bitter or brackish water.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
                <CheckCircle2 size={16} /> Instant calibrated TDS restoration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Troubleshooting;
