import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0a192f] text-white pt-spacing-3xl pb-spacing-xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-spacing-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing-xl">
          <div className="space-y-spacing-sm">
            <div className="flex items-center gap-spacing-xs">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
                <Droplets size={20} />
              </div>
              <span className="font-headline-sm text-headline-sm text-white">RO Service Centre</span>
            </div>
            <p className="text-body-sm font-body-sm text-white/70">Officially registered MSME Enterprise (UDYAM-KR-03-0561611). Premier multi-brand water purifier repair, original filters, certified membrane replacement, and AMC services across Bangalore.</p>
            <div className="pt-spacing-xs space-y-spacing-3xs text-label-sm font-label-sm">
              <div className="flex items-center gap-spacing-xs text-white/90">
                <ShieldCheck size={18} className="text-primary" />Certified Water Purifier Technicians
              </div>
              <div className="flex items-center gap-spacing-xs text-white/90">
                <Clock size={18} className="text-primary" />60-90 Min Express Doorstep Response
              </div>
            </div>
          </div>
          
          <div className="space-y-spacing-sm">
            <div className="font-headline-sm text-headline-sm text-white">Purifier Services</div>
            <ul className="space-y-spacing-xs text-body-sm font-body-sm text-white/70">
              <li className="hover:text-primary transition-colors"><a href="/#services-grid">Complete RO Repair & Diagnostics</a></li>
              <li className="hover:text-primary transition-colors"><a href="/#services-grid">Filter & RO Membrane Replacement</a></li>
              <li className="hover:text-primary transition-colors"><a href="/#services-grid">Installation & Relocation Service</a></li>
              <li className="hover:text-primary transition-colors"><a href="/#services-grid">Annual Maintenance Contract (AMC)</a></li>
              <li className="hover:text-primary transition-colors"><a href="/#services-grid">Commercial & Industrial RO Repair</a></li>
            </ul>
          </div>
          
          <div className="space-y-spacing-sm">
            <div className="font-headline-sm text-headline-sm text-white">Company & Legal</div>
            <ul className="space-y-spacing-xs text-body-sm font-body-sm text-white/70">
              <li className="hover:text-primary transition-colors"><Link href="/about">About Us</Link></li>
              <li className="hover:text-primary transition-colors"><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li className="hover:text-primary transition-colors"><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
              <li className="hover:text-primary transition-colors"><Link href="/cancellation-refund-policy">Cancellation & Refund Policy</Link></li>
              <li className="hover:text-primary transition-colors"><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div className="space-y-spacing-sm">
            <div className="font-headline-sm text-headline-sm text-white">Head Office & Support</div>
            <div className="space-y-spacing-xs text-body-sm font-body-sm text-white/70">
              <p className="flex items-start gap-spacing-xs">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>No. 97, Neeladri Nagar, Electronics City Phase 1 Extension, Bengaluru, Karnataka</span>
              </p>
              <p className="flex items-center gap-spacing-xs">
                <Phone size={18} className="text-primary shrink-0" />
                <a className="hover:text-white transition-colors" href="tel:08050291180">08050291180 / +91 88774 37666</a>
              </p>
              <p className="flex items-center gap-spacing-xs">
                <Mail size={18} className="text-primary shrink-0" />
                <a className="hover:text-white transition-colors" href="mailto:Contect@Roservicecentreonline24x7.in">Contect@Roservicecentreonline24x7.in</a>
              </p>
              <p className="flex items-center gap-spacing-xs">
                <Clock size={18} className="text-primary shrink-0" />
                <span>8:00 AM - 9:00 PM (All 7 Days)</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-spacing-xs pt-spacing-sm">
          <div className="font-label-md text-label-md text-white uppercase tracking-wider">Bangalore Service Coverage Areas</div>
          <p className="text-body-sm font-body-sm text-white/60 leading-relaxed">Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Jayanagar, JP Nagar, Hebbal, Yelahanka, Rajajinagar, Banashankari, Malleshwaram, Sarjapur Road, BTM Layout, KR Puram, Varthur, Mahadevapura, Bannerghatta Road, HBR Layout, RT Nagar, Basavanagudi, Kalyan Nagar, Brookefield, Thanisandra, Domlur, New BEL Road, CV Raman Nagar.</p>
        </div>
        
        <div className="pt-spacing-lg border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-spacing-md text-label-sm font-label-sm text-white/60">
          <div className="flex flex-wrap items-center justify-center gap-spacing-md">
            <Link className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-white transition-colors" href="/terms-and-conditions">Terms and Conditions</Link>
            <Link className="hover:text-white transition-colors" href="/cancellation-refund-policy">Cancellation & Refund Policy</Link>
            <Link className="hover:text-white transition-colors" href="/disclaimer">Disclaimer</Link>
            <Link className="hover:text-white transition-colors" href="/cookie-policy">Cookie Policy</Link>
          </div>
          <div>© 2026 RO Service Centre Online. All Rights Reserved.</div>
        </div>
        
        <div className="text-label-sm font-label-sm text-white/40 leading-relaxed text-center lg:text-left">
          <p>Disclaimer: &apos;RO Service Centre Online&apos; is an independent multi-brand service provider for RO water purifiers in Bangalore. Brand names, models, and logos (Kent, Aquaguard, Eureka Forbes, Pureit, AO Smith, LG, etc.) are registered trademarks of their respective owners and used purely for descriptive, repair, and reference purposes without representing official authorization.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
