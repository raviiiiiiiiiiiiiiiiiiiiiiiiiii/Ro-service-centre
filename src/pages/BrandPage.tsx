import { ShieldCheck, Bike, Wrench, IndianRupee, ArrowRight, Phone, CheckCircle2, Droplet, PowerOff, Gauge, FlaskConical, ChevronDown } from 'lucide-react';
import { WhyChooseUs, Testimonials, CTABanner, QuickBooking } from '../components/Sections';

export interface BrandData {
  name: string;
  title: string;
  description: string;
  heroImage: string;
  services: { title: string; desc: string; }[];
  problems: { title: string; desc: string; icon: any; }[];
  faqs: { q: string; a: string; }[];
}

export default function BrandPage({ data }: { data: BrandData }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background pb-spacing-3xl pt-spacing-xl">
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-spacing-xl items-center">
            <div className="flex flex-col items-start order-2 lg:order-1">
              <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface mb-spacing-xs">
                {data.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-spacing-lg leading-relaxed">
                {data.description}
              </p>
              <div className="flex flex-wrap items-center gap-spacing-md">
                <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-secondary transition-all" href="#quick-booking">
                  <span>Book Service</span>
                  <ArrowRight size={18} />
                </a>
                <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all" href="tel:08050291180">
                  <Phone size={18} />
                  <span>Call 08050291180</span>
                </a>
              </div>
            </div>
            <div className="relative flex justify-center order-1 lg:order-2">
               <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
                 <img className="w-full h-[360px] object-cover" src={data.heroImage} alt={`${data.name} Service`} />
               </div>
            </div>
          </div>
          
          <QuickBooking />
        </div>
      </section>

      <section className="py-spacing-3xl bg-surface" id="services-grid">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="text-center max-w-2xl mx-auto mb-spacing-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-2xs">
              {data.name} Services We Provide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-spacing-lg">
            {data.services.map((svc, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-2xl p-spacing-lg shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-spacing-md">
                  <Wrench size={24} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-2xs">{svc.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-spacing-3xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="text-center max-w-2xl mx-auto mb-spacing-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-2xs">
              Common {data.name} Problems We Fix
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-md">
            {data.problems.map((prob, i) => (
              <div key={i} className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm flex items-start gap-spacing-md">
                <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0">
                  <prob.icon size={24} />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-spacing-3xs">{prob.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-spacing-xs">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhyChooseUs />

      <section className="py-spacing-3xl bg-surface">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="text-center max-w-2xl mx-auto mb-spacing-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-2xs">
              {data.name} Service FAQs
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-spacing-sm">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-surface-container-lowest rounded-2xl p-spacing-md shadow-sm transition-all open:shadow-md">
                <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none outline-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="text-primary group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pt-spacing-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
