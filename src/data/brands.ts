import { Droplet, PowerOff, Gauge, FlaskConical } from 'lucide-react';
import { BrandData } from '../pages/BrandPage';

export const brandData: Record<string, BrandData> = {
  lg: {
    name: 'LG',
    title: 'Expert LG RO Repair & Service in Bangalore',
    description: 'Specialized doorstep service for LG PuriCare and other LG water purifiers. We provide genuine LG spare parts, membrane replacement, and complete AMC solutions across Bangalore.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
    services: [
      { title: 'LG RO Repair', desc: 'Fast repair for LG PuriCare water leakages, motor issues, and power failures.' },
      { title: 'Filter Replacement', desc: 'Genuine LG sediment filters, pre-carbon filters, and RO membrane replacement.' },
      { title: 'Installation', desc: 'Safe wall mounting and uninstallation of LG RO during home relocation.' },
      { title: 'LG AMC Plans', desc: 'Comprehensive Annual Maintenance Contracts for worry-free LG purifier usage.' }
    ],
    problems: [
      { title: 'LG PuriCare Leakage', desc: 'Water dripping from the filter housing or inlet valve.', icon: Droplet },
      { title: 'Not Turning On', desc: 'Power supply or SMPS adapter failure in LG RO units.', icon: PowerOff },
      { title: 'Low Water Flow', desc: 'Choked pre-filter or membrane causing slow water dispensing.', icon: Gauge },
      { title: 'Bad Water Taste', desc: 'Depleted post-carbon filter leading to poor tasting water.', icon: FlaskConical }
    ],
    faqs: [
      { q: 'Do you use genuine LG PuriCare spare parts?', a: 'Yes, we only use 100% genuine and compatible spare parts for all LG RO repair and services to ensure optimal performance.' },
      { q: 'How long does a typical LG RO service take?', a: 'A standard LG RO servicing or filter replacement takes about 45 to 60 minutes. Our technicians arrive within 60-90 minutes of your booking in Bangalore.' }
    ]
  },
  aquaguard: {
    name: 'Aquaguard',
    title: 'Trusted Aquaguard Repair & Service in Bangalore',
    description: 'Expert servicing for Aquaguard Active Copper, Biotron, and other Eureka Forbes water purifiers. Doorstep repair, filter replacement, and AMC plans.',
    heroImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=800&q=80',
    services: [
      { title: 'Aquaguard Repair', desc: 'Expert resolution for pump failures, leakages, and circuit issues.' },
      { title: 'Active Copper Service', desc: 'Specialized maintenance for Active Copper and Biotron cartridges.' },
      { title: 'Filter Replacement', desc: 'Genuine pre-filter, RO membrane, and carbon filter changes.' },
      { title: 'Aquaguard AMC', desc: 'Complete annual maintenance plans covering regular checkups and parts.' }
    ],
    problems: [
      { title: 'Water Leakage', desc: 'Common dripping issues from elbows and connectors.', icon: Droplet },
      { title: 'Beeping Sound/Alarm', desc: 'Filter change alerts or UV lamp failure warnings.', icon: PowerOff },
      { title: 'Slow Dispensing', desc: 'Clogged filters or membrane reducing the water flow rate.', icon: Gauge },
      { title: 'Taste Issues', desc: 'High TDS or lack of Active Copper cartridge effectiveness.', icon: FlaskConical }
    ],
    faqs: [
      { q: 'Can you service Aquaguard Active Copper models?', a: 'Yes, our technicians are fully trained to service and replace cartridges for Aquaguard Active Copper and Biotron models.' },
      { q: 'Is there a warranty on Aquaguard spare parts?', a: 'We provide a post-service warranty on all major spare parts replaced during the service, including pumps and membranes.' }
    ]
  },
  kent: {
    name: 'Kent',
    title: 'Reliable Kent RO Service in Bangalore',
    description: 'Professional repair and maintenance for Kent Grand, Prime, Supreme, Pearl, and Mineral RO models. Doorstep service in 60-90 minutes.',
    heroImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    services: [
      { title: 'Kent RO Repair', desc: 'Troubleshooting and repair for all Kent Mineral RO models.' },
      { title: 'Filter & Membrane', desc: 'Replacement of Kent sediment, carbon filters, and RO membranes.' },
      { title: 'Installation/Uninstallation', desc: 'Professional setup and relocation services for Kent purifiers.' },
      { title: 'Kent AMC Plans', desc: 'Affordable Annual Maintenance Contracts for Kent RO systems.' }
    ],
    problems: [
      { title: 'Continuous Waste Water', desc: 'Auto-flush valve or solenoid valve failure causing constant drain.', icon: Droplet },
      { title: 'Dead Machine', desc: 'SMPS power adapter failure in Kent RO units.', icon: PowerOff },
      { title: 'Tank Not Filling', desc: 'Low pressure switch issue or choked RO membrane.', icon: Gauge },
      { title: 'UV Lamp Failure', desc: 'UV barrel issues or blown UV lamp requiring replacement.', icon: FlaskConical }
    ],
    faqs: [
      { q: 'Do you service Kent Grand Plus models?', a: 'Yes, we service all Kent models including Kent Grand, Grand Plus, Prime, Supreme, Pearl, and other Mineral RO variants.' },
      { q: 'How often should Kent RO filters be changed?', a: 'Generally, the pre-filter should be changed every 3-6 months, and inline filters/membrane every 12-15 months depending on water quality.' }
    ]
  },
  pureit: {
    name: 'Pureit',
    title: 'Expert Pureit RO Service & GKK Replacement',
    description: 'Fast and reliable Pureit RO repair and Germkill Kit (GKK) replacement in Bangalore. Genuine spares and doorstep service.',
    heroImage: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80',
    services: [
      { title: 'Pureit RO Repair', desc: 'Quick fixes for Pureit water purifiers, including leakages and motor issues.' },
      { title: 'GKK Replacement', desc: 'Genuine Germkill Kit (GKK) replacement for continuous safe water.' },
      { title: 'Installation', desc: 'Expert uninstallation and installation services during shifting.' },
      { title: 'Pureit AMC', desc: 'Annual maintenance contracts to keep your Pureit running smoothly.' }
    ],
    problems: [
      { title: 'Red Light Blinking', desc: 'Indicator for Germkill Kit (GKK) exhaustion requiring replacement.', icon: PowerOff },
      { title: 'Water Leakage', desc: 'Dripping from the tank or internal pipe connections.', icon: Droplet },
      { title: 'Slow Purified Water', desc: 'Blockage in the micro-fibre mesh or RO membrane.', icon: Gauge },
      { title: 'Unusual Noise', desc: 'Vibrations or noise from the booster pump.', icon: FlaskConical }
    ],
    faqs: [
      { q: 'Do you provide original Pureit Germkill Kits?', a: 'Yes, we provide and install 100% genuine Pureit Germkill Kits (GKK) for all applicable models.' },
      { q: 'Why is my Pureit RO beeping continuously?', a: 'Continuous beeping or a red blinking light usually indicates that the Germkill Kit has expired and needs immediate replacement.' }
    ]
  },
  aosmith: {
    name: 'AO Smith',
    title: 'AO Smith RO Service & Repair in Bangalore',
    description: 'Specialized doorstep service for AO Smith water purifiers. Expert handling of MIN-TECH, SCM filters, Z8, Z9, and other premium models.',
    heroImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
    services: [
      { title: 'AO Smith Repair', desc: 'Expert troubleshooting for AO Smith RO purifiers and smart displays.' },
      { title: 'MIN-TECH Filter Change', desc: 'Replacement of SCM, MIN-TECH, and advance RO membranes.' },
      { title: 'Installation Services', desc: 'Professional setup and relocation for AO Smith Z-series.' },
      { title: 'AO Smith AMC', desc: 'Comprehensive maintenance plans for premium AO Smith models.' }
    ],
    problems: [
      { title: 'Display Errors', desc: 'Fixing error codes or touch panel issues on Z8/Z9 models.', icon: PowerOff },
      { title: 'Hot Water Not Working', desc: 'Heating element or thermostat issues in hot water RO models.', icon: FlaskConical },
      { title: 'Tank Filling Slowly', desc: 'Choked pre-filters or RO membrane requiring flush.', icon: Gauge },
      { title: 'Leakage Near Tap', desc: 'Dripping from the dispensing faucet or internal valves.', icon: Droplet }
    ],
    faqs: [
      { q: 'Can you service the AO Smith Z8 and Z9 models with hot water?', a: 'Yes, our technicians are experienced in servicing premium AO Smith models like Z8 and Z9, including their hot water dispensing mechanisms.' },
      { q: 'What is MIN-TECH and do you replace it?', a: 'MIN-TECH adds essential minerals back to the water. We provide genuine replacements for MIN-TECH and Silver Charged Membrane (SCM) filters.' }
    ]
  }
};
