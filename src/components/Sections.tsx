import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Clock, MapPin, Phone, Droplets, User, ArrowRight, 
  ShieldCheck, Bike, Wrench, IndianRupee, CheckCircle2, 
  Filter, Award, Gauge, ThumbsUp, Droplet, PowerOff, 
  FlaskConical, ChevronDown, Mail, Menu, X, ChevronLeft, ChevronRight
} from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const announcements = [
    "⚡ Bangalore Doorstep Service in 60-90 Mins",
    "⏰ 8:00 AM - 9:00 PM (All 7 Days)",
    "📍 Serving All Major Areas in Bangalore",
    "📞 Call Now: +91 88774 37666 / 08050291180"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-primary text-on-primary text-center text-[13px] font-medium h-[32px] flex items-center justify-center relative overflow-hidden">
        {announcements.map((text, idx) => (
          <div 
            key={idx} 
            className={`absolute w-full px-4 transition-all duration-500 ease-in-out flex items-center justify-center gap-2 ${idx === announcementIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-spacing-md">
        <div className="flex items-center gap-spacing-sm">
          <Link className="flex items-center gap-spacing-xs" to="/" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
              <Droplets size={24} />
            </div>
            <div>
              <div className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">RO Service Centre</div>
              <div className="font-label-sm text-label-sm text-tertiary tracking-normal">Pure Water · Healthy Life</div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-spacing-lg">
          <Link className="transition-colors text-primary font-bold" to="/">Home</Link>
          <div className="relative group py-spacing-xs">
            <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md flex items-center gap-spacing-3xs" href="/#services-grid">Services</a>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block z-50">
              <div className="flex flex-col bg-surface/95 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-[0_20px_40px_-10px_rgba(13,110,253,0.15)] p-2 min-w-[240px]">
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">RO Repair Service</a>
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">Filter & Membrane Change</a>
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">Installation / Relocation</a>
                <a className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" href="/#services-grid">Annual AMC Plans</a>
              </div>
            </div>
          </div>
          <div className="relative group py-spacing-xs">
            <span className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md flex items-center gap-spacing-3xs cursor-pointer">Company</span>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block z-50">
              <div className="flex flex-col bg-surface/95 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-[0_20px_40px_-10px_rgba(13,110,253,0.15)] p-2 min-w-[200px]">
                <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" to="/about">About Us</Link>
                <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" to="/terms-and-conditions">Terms & Conditions</Link>
                <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors text-on-surface-variant text-label-md font-label-md" to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="hidden lg:flex items-center gap-spacing-sm">
          <a className="hidden sm:inline-flex items-center gap-spacing-xs px-spacing-md py-spacing-xs rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all" href="tel:08050291180">
            <Phone size={18} />08050291180
          </a>
          <a className="inline-flex items-center gap-spacing-xs px-spacing-lg py-spacing-xs rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-[0_4px_16px_-2px_rgba(13,110,253,0.25)]" href="tel:08050291180">
            Book Service<ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-spacing-sm">
          <a className="inline-flex items-center gap-spacing-3xs px-spacing-sm py-spacing-2xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm" href="tel:08050291180">
            <Phone size={14} />Call
          </a>
          <button 
            className="p-spacing-2xs text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-surface/98 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-2xl overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="flex flex-col p-4 gap-2">
            <Link className="px-4 py-3 rounded-xl hover:bg-primary/5 text-primary font-label-lg text-label-lg" to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            <div className="px-4 pt-3 pb-1">
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Services</div>
              <div className="flex flex-col gap-1">
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>RO Repair Service</a>
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>Filter & Membrane Change</a>
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>Installation / Relocation</a>
                <a className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" href="/#services-grid" onClick={() => setMobileMenuOpen(false)}>Annual AMC Plans</a>
              </div>
            </div>
            
            <div className="h-px bg-outline-variant/30 mx-4 my-2"></div>
            
            <div className="px-4 pt-1 pb-3">
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Company</div>
              <div className="flex flex-col gap-1">
                <Link className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" to="/terms-and-conditions" onClick={() => setMobileMenuOpen(false)}>Terms & Conditions</Link>
                <Link className="py-2.5 px-3 rounded-lg hover:bg-primary/5 text-on-surface font-label-md text-label-md" to="/privacy-policy" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#">
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
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#">
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
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#">
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
            <a className="inline-flex items-center gap-spacing-2xs text-primary font-label-md text-label-md group-hover:text-secondary font-semibold" href="#">
              <span>View Pricing</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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

export function Testimonials() {
  const reviews = [
    { name: "Suresh Kumar", area: "Whitefield", product: "Kent Grand Plus", text: "My Kent RO started leaking from the bottom connectors. The technician arrived within 40 minutes of calling 08050291180, fixed the leak, and replaced the sediment filter cleanly. Very transparent pricing!" },
    { name: "Ananya Sharma", area: "Koramangala 4th Block", product: "Aquaguard Active Copper", text: "Courteous and skilled technician. Tested our water TDS before and after service (dropped from 580 to 42 PPM). Great communication, no hidden fees, and excellent water taste." },
    { name: "Praveen Reddy", area: "HSR Layout Sector 1", product: "Pureit Ultima RO", text: "Got my Pureit GKK kit replaced on a Sunday morning. The team arranged a technician in under an hour. Quick job, genuine sealed parts, and digital receipt provided." },
    { name: "Vikram Singh", area: "Indiranagar", product: "AO Smith Z8", text: "Excellent and prompt service! They fixed my AO Smith display error within hours. The technician was extremely knowledgeable and carried the right tools." },
    { name: "Nisha Patel", area: "Electronic City", product: "LG PuriCare", text: "Booked an installation for my LG RO after shifting here. Very neat drill work and they ensured no pipes were hanging loose. I am very satisfied with their work." },
    { name: "Rahul Deshmukh", area: "Bellandur", product: "Kent Supreme", text: "The RO was completely dead due to power fluctuation. The technician quickly replaced the SMPS adaptor and verified everything. Quick and honest service." },
    { name: "Meera Krishnan", area: "Jayanagar", product: "Aquaguard Biotron", text: "Our AMC expired and I contacted them for a general service. Very affordable compared to the brand's direct service and they use fully authentic parts." },
    { name: "Syed Ahmed", area: "Hebbal", product: "Pureit Classic", text: "Fastest RO service in Bangalore! Booked at 11 AM and my filter was replaced by 12:30 PM. Good job team RO Service Centre Online." },
    { name: "Pooja Rao", area: "Marathahalli", product: "AO Smith Z9", text: "The hot water dispenser stopped working. Found their number online and gave them a call. They fixed the heating coil issue the same day." },
    { name: "Anil Kumar", area: "BTM Layout", product: "Kent Pearl", text: "I have been using their AMC service for 3 years now. Very punctual and they maintain a proper service log. Highly recommended for peace of mind." },
    { name: "Sneha V", area: "JP Nagar", product: "Havells Max", text: "Had a severe leakage issue that was flooding my kitchen counter. They responded to my emergency call immediately. A lifesaver!" },
    { name: "Karthik N", area: "Malleshwaram", product: "Aquaguard Enhance", text: "Clear pricing, no upsell gimmicks. The technician explained why the membrane was choked and showed me the blockages before replacing it." },
    { name: "Deepa R", area: "Yelahanka", product: "LG True RO", text: "Good behavior and they cleaned up the area after replacing the carbon filters. Water tastes absolutely perfect now. 5 stars from me." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / itemsToShow));
  };

  const prevSlide = () => {
    const totalPages = Math.ceil(reviews.length / itemsToShow);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-spacing-3xl bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-spacing-2xl gap-spacing-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              What Our Bangalore Customers Say
            </h2>
          </div>
          <div className="flex items-center justify-end gap-spacing-md w-full md:w-auto">
            <div className="flex flex-col items-end text-right">
              <div className="flex text-amber-500 text-lg">★★★★★</div>
              <span className="font-label-md text-label-md text-on-surface font-bold">4.9 / 5 Overall Rating</span>
              <span className="text-body-sm font-body-sm text-on-surface-variant">(1,420+ Verified Reviews)</span>
            </div>
            <div className="hidden md:flex items-center gap-spacing-xs">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors focus:outline-none">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors focus:outline-none">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-hidden snap-x snap-mandatory hide-scrollbar">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-spacing-sm snap-start">
                  <div className="bg-surface-container-lowest p-spacing-lg rounded-2xl shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="space-y-spacing-sm mb-spacing-md">
                      <div className="flex text-amber-500">★★★★★</div>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed italic line-clamp-5">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="pt-spacing-md border-t border-surface-container flex items-center gap-spacing-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center font-bold text-label-md shrink-0">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="font-label-md text-label-md text-on-surface font-semibold truncate">{review.name}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant text-[12px] truncate">{review.area} · {review.product}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex md:hidden items-center justify-center gap-spacing-md mt-spacing-xl">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface focus:outline-none hover:bg-surface-container-high">
              <ChevronLeft size={20} />
            </button>
            <div className="font-label-sm text-label-sm text-on-surface-variant">
              {currentIndex + 1} / {Math.ceil(reviews.length / itemsToShow)}
            </div>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface focus:outline-none hover:bg-surface-container-high">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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

export function CTABanner() {
  return (
    <section className="py-spacing-2xl bg-gradient-to-r from-primary to-secondary text-on-primary shadow-xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="flex flex-col md:flex-row items-center justify-between gap-spacing-lg text-center md:text-left">
          <div>
            <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-primary mb-1">
              Book Your RO Service Today
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/90">
              Clean water is just a call away. Get quick, certified, and reliable doorstep service across Bangalore.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-spacing-sm shrink-0">
            <Link className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-lg hover:bg-surface-container-high transition-all" to="/#quick-booking">
              <span>Book Service</span>
              <ArrowRight size={18} />
            </Link>
            <a className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-secondary transition-all" href="tel:08050291180">
              <Phone size={18} />
              <span>08050291180</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl p-spacing-xs shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex items-center gap-spacing-xs lg:hidden">
        <a className="flex-1 py-spacing-sm rounded-full bg-surface-container text-primary font-label-md text-label-md flex items-center justify-center gap-spacing-2xs" href="tel:08050291180">
          <Phone size={18} />Call Now
        </a>
        <a className="flex-1 py-spacing-sm rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-spacing-2xs shadow-[0_4px_14px_rgba(13,110,253,0.3)]" href="#">
          <Wrench size={18} />Book Service
        </a>
      </div>
      
      <footer className="w-full bg-surface-container-low text-on-surface-variant pt-spacing-3xl pb-spacing-xl">
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-spacing-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing-xl">
            <div className="space-y-spacing-sm">
              <div className="flex items-center gap-spacing-xs">
                <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Droplets size={20} />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface">RO Service Centre</span>
              </div>
              <p className="text-body-sm font-body-sm">Officially registered MSME Enterprise (UDYAM-KR-03-0561611). Premier multi-brand water purifier repair, original filters, certified membrane replacement, and AMC services across Bangalore.</p>
              <div className="pt-spacing-xs space-y-spacing-3xs text-label-sm font-label-sm">
                <div className="flex items-center gap-spacing-xs text-on-surface">
                  <ShieldCheck size={18} className="text-primary" />Certified Water Purifier Technicians
                </div>
                <div className="flex items-center gap-spacing-xs text-on-surface">
                  <Clock size={18} className="text-primary" />60-90 Min Express Doorstep Response
                </div>
              </div>
            </div>
            
            <div className="space-y-spacing-sm">
              <div className="font-headline-sm text-headline-sm text-on-surface">Purifier Services</div>
              <ul className="space-y-spacing-xs text-body-sm font-body-sm">
                <li className="hover:text-primary transition-colors"><a href="#">Complete RO Repair & Diagnostics</a></li>
                <li className="hover:text-primary transition-colors"><a href="#">Filter & RO Membrane Replacement</a></li>
                <li className="hover:text-primary transition-colors"><a href="#">Installation & Relocation Service</a></li>
                <li className="hover:text-primary transition-colors"><a href="#">Annual Maintenance Contract (AMC)</a></li>
                <li className="hover:text-primary transition-colors"><a href="#">Commercial & Industrial RO Repair</a></li>
              </ul>
            </div>
            
            <div className="space-y-spacing-sm">
              <div className="font-headline-sm text-headline-sm text-on-surface">Brand Centers</div>
              <ul className="space-y-spacing-xs text-body-sm font-body-sm">
                <li className="hover:text-primary transition-colors"><Link to="/kent-service">Kent RO Service Centre</Link></li>
                <li className="hover:text-primary transition-colors"><Link to="/aquaguard-service">Aquaguard Purifier Service</Link></li>
                <li className="hover:text-primary transition-colors"><Link to="/pureit-service">Pureit RO Service & Filter Kit</Link></li>
                <li className="hover:text-primary transition-colors"><Link to="/aosmith-service">AO Smith Purifier Maintenance</Link></li>
                <li className="hover:text-primary transition-colors"><Link to="/lg-service">LG Water Purifier Support</Link></li>
              </ul>
            </div>
            
            <div className="space-y-spacing-sm">
              <div className="font-headline-sm text-headline-sm text-on-surface">Head Office & Support</div>
              <div className="space-y-spacing-xs text-body-sm font-body-sm">
                <p className="flex items-start gap-spacing-xs">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>Bangalore, Karnataka, India</span>
                </p>
                <p className="flex items-center gap-spacing-xs">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a className="hover:text-primary" href="tel:08050291180">08050291180 / +91 88774 37666</a>
                </p>
                <p className="flex items-center gap-spacing-xs">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a className="hover:text-primary" href="mailto:contact@roservice24x7.in">contact@roservice24x7.in</a>
                </p>
                <p className="flex items-center gap-spacing-xs">
                  <Clock size={18} className="text-primary shrink-0" />
                  <span>8:00 AM - 9:00 PM (All 7 Days)</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-spacing-xs">
            <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Bangalore Service Coverage Areas</div>
            <p className="text-body-sm font-body-sm leading-relaxed">Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Jayanagar, JP Nagar, Hebbal, Yelahanka, Rajajinagar, Banashankari, Malleshwaram, Sarjapur Road, BTM Layout, KR Puram, Varthur, Mahadevapura, Bannerghatta Road, HBR Layout, RT Nagar, Basavanagudi, Kalyan Nagar, Brookefield, Thanisandra, Domlur, New BEL Road, CV Raman Nagar.</p>
          </div>
          
          <div className="pt-spacing-lg flex flex-col md:flex-row items-center justify-between gap-spacing-md text-label-sm font-label-sm">
            <div className="flex flex-wrap items-center gap-spacing-md">
              <Link className="hover:text-primary" to="/privacy-policy">Privacy Policy</Link>
              <Link className="hover:text-primary" to="/terms-and-conditions">Terms and Conditions</Link>
              <Link className="hover:text-primary" to="/cancellation-refund-policy">Cancellation & Refund Policy</Link>
              <Link className="hover:text-primary" to="/disclaimer">Disclaimer</Link>
              <Link className="hover:text-primary" to="/cookie-policy">Cookie Policy</Link>
            </div>
            <div>© 2024 RO Service Centre Online. All Rights Reserved.</div>
          </div>
          
          <div className="text-label-sm font-label-sm text-outline opacity-80 leading-relaxed">
            <p>Disclaimer: 'RO Service Centre Online' is an independent multi-brand service provider for RO water purifiers in Bangalore. Brand names, models, and logos (Kent, Aquaguard, Eureka Forbes, Pureit, AO Smith, LG, etc.) are registered trademarks of their respective owners and used purely for descriptive, repair, and reference purposes without representing official authorization.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
