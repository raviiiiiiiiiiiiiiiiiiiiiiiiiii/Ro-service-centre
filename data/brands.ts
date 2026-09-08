import type React from 'react';
import { Droplet, PowerOff, Gauge, FlaskConical, type LucideIcon } from 'lucide-react';

export interface BrandData {
  name: string;
  title: string;
  description: string;
  heroImage: string;
  services: { title: string; desc: string; }[];
  problems: { title: string; desc: string; icon: LucideIcon | React.ComponentType<{ size?: number; className?: string }>; }[];
  faqs: { q: string; a: string; }[];
}

export const brandData: Record<string, BrandData> = {
  lg: {
    name: 'LG',
    title: 'Expert LG RO Repair & Service in Bangalore',
    description: 'Specialized doorstep service for LG PuriCare and other LG water purifiers. We provide genuine LG spare parts, membrane replacement, and complete AMC solutions across Bangalore.',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194339_j4gjia.jpg',
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
      { q: 'How long does a typical LG RO service take?', a: 'A standard LG RO servicing or filter replacement takes about 45 to 60 minutes. Our technicians arrive within 60-90 minutes of your booking in Bangalore.' },
      { q: 'What is the recommended filter replacement schedule for LG water purifiers?', a: 'In Bangalore conditions with high groundwater TDS and borewell hardness, we recommend changing the external pre-sediment filter every 3 to 6 months, and the internal sediment, pre-carbon, and post-carbon filters every 10 to 12 months. The LG RO membrane typically lasts 18 to 24 months with regular pre-filter maintenance.' },
      { q: 'Why is water dispensing very slowly or tank taking long to fill in LG PuriCare?', a: 'Slow dispensing is commonly caused by choked pre-filters, reduced water pressure from the booster pump, or a clogged RO membrane due to sediment accumulation. Our technician will test inlet pressure, check the pump output, and flush or replace the blocked filters.' },
      { q: 'How do you resolve water leakage or tank overflow in LG RO purifiers?', a: 'Water leakage usually stems from loose quick-connect elbow fittings, worn-out O-rings inside filter housings, or a malfunctioning auto shut-off valve / float sensor that fails to stop filling. Our technician brings certified food-grade connectors and replacement valves to fix leaks on the spot.' },
      { q: 'Do you service all LG models including stainless steel tank and UV variants?', a: 'Yes, we service all LG residential water purifiers including LG PuriCare with Dual Protection Stainless Steel tanks, LG WW180, WW170, WW140, WW130, and digital display models with mineral booster technology.' },
      { q: 'What is included in an LG RO Annual Maintenance Contract (AMC)?', a: 'Our LG RO AMC includes 3 scheduled preventive checkups per year, complete replacement of sediment and carbon filter cartridges, sanitization of the stainless steel storage tank, unlimited breakdown visits, and zero labor charges throughout the contract period.' }
    ]
  },
  aquaguard: {
    name: 'Aquaguard',
    title: 'Trusted Aquaguard Repair & Service in Bangalore',
    description: 'Expert servicing for Aquaguard Active Copper, Biotron, and other Eureka Forbes water purifiers. Doorstep repair, filter replacement, and AMC plans.',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194328_pcq7uw.png',
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
      { q: 'Is there a warranty on Aquaguard spare parts?', a: 'We provide a post-service warranty on all major spare parts replaced during the service, including pumps and membranes.' },
      { q: 'Why is my Aquaguard purifier continuously beeping or showing a red light?', a: 'Continuous beeping or a flashing red LED on Aquaguard indicates a filter life expiry alert, UV lamp failure, or an electronic circuit fault. Our technician can inspect the system, replace the exhausted cartridge, and reset the electronic service indicator.' },
      { q: 'How frequently should Aquaguard filters and Active Copper cartridges be replaced?', a: 'In Bangalore, pre-sediment filter candles should be replaced every 3 to 4 months. The Chemi-Block, mineral cartridge, and Active Copper/Zinc booster cartridges should be renewed every 9 to 12 months to maintain essential mineral infusion and pure taste.' },
      { q: 'Why does my Aquaguard water taste bitter or different after a few months?', a: 'A bitter or altered taste typically signifies that the activated carbon cartridge has become saturated or the RO membrane salt rejection rate has shifted, causing TDS imbalances. Our technician will test your TDS with a digital lab meter and recalibrate the mineral regulator.' },
      { q: 'Can you repair Aquaguard booster pump and solenoid valve problems?', a: 'Yes, pump failure (unusual vibrating noise or complete loss of pressure) and faulty 24V solenoid valves (water not shutting off or not entering system) are repaired or replaced using high-grade authentic spares with warranty.' },
      { q: 'Do you service older Eureka Forbes Aquaguard models like Classic, Compact, and Magna?', a: 'Yes, we maintain and service all legacy and modern Aquaguard models, including Classic UV, Compact, Magna, Enhance, Geneus, Blaze, Superb, and newly launched IoT smart copper models across Bangalore.' }
    ]
  },
  kent: {
    name: 'Kent',
    title: 'Reliable Kent RO Service in Bangalore',
    description: 'Professional repair and maintenance for Kent Grand, Prime, Supreme, Pearl, and Mineral RO models. Doorstep service in 60-90 minutes.',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194243_himoc3.jpg',
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
      { q: 'How often should Kent RO filters be changed?', a: 'Generally, the pre-filter should be changed every 3-6 months, and inline filters/membrane every 12-15 months depending on water quality.' },
      { q: 'Why is waste water flowing continuously from my Kent RO machine even when the tank is full?', a: 'Continuous waste water discharge usually points to a defective Solenoid Valve (SV) that fails to close mechanically or an auto-cut-off low pressure/high pressure switch malfunction. Our technician can diagnose and replace the faulty SV in 30 minutes.' },
      { q: 'Why is my Kent RO not turning on or completely silent?', a: 'If there are no lights and no sound, the issue is typically a burnt 24V/36V SMPS power adapter caused by voltage spikes, a blown fuse, or a tripped internal sensor. We carry replacement SMPS adapters suitable for all Kent models in our service vehicle.' },
      { q: 'Can you calibrate the TDS Controller on Kent RO systems?', a: 'Yes, Kent systems feature a manual TDS controller valve that mixes purified water with mineral-retained water. If the water tastes overly flat or too hard, our technician will use a digital meter to calibrate the controller to the healthy WHO-recommended range of 50–120 PPM.' },
      { q: 'What causes loud humming or vibrating noises in a Kent RO purifier?', a: 'Loud humming or rattling is usually caused by air trapped in the filter chambers, a worn-out bearing in the RO booster pump, or high incoming water pressure causing pipe vibration. Our technician will bleed the air and check the pump mountings.' },
      { q: 'What does the Kent RO AMC plan cover?', a: 'Our Kent AMC plan covers scheduled filter changes (sediment, pre-carbon, post-carbon), RO membrane health testing, free breakdown callouts all year, sanitization of the water storage tank, and guaranteed prompt doorstep service within 60–90 minutes.' }
    ]
  },
  pureit: {
    name: 'Pureit',
    title: 'Expert Pureit RO Service & GKK Replacement',
    description: 'Fast and reliable Pureit RO repair and Germkill Kit (GKK) replacement in Bangalore. Genuine spares and doorstep service.',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194420_cdv3yx.jpg',
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
      { q: 'Why is my Pureit RO beeping continuously?', a: 'Continuous beeping or a red blinking light usually indicates that the Germkill Kit has expired and needs immediate replacement.' },
      { q: 'What are the different Pureit Germkill Kit (GKK) sizes and how do I know which one I need?', a: 'Pureit GKKs come in varying capacities such as GKK-1, GKK-2, and GKK-3 (rated for 2,000 to 6,000 liters depending on your model like Classic, Mineral RO, or Ultima). You do not need to worry about model specs—our technician checks your exact unit model and installs the exact compatible kit.' },
      { q: 'Why has the water stopped dispensing after the Pureit Germkill life indicator turned red?', a: 'Pureit purifiers feature an Auto Shut-Off mechanism that stops dispensing water when the Germkill Kit has reached the end of its purifying capacity to prevent drinking unpurified water. Replacing the GKK immediately unlocks the system and restores normal flow.' },
      { q: 'How long does a Pureit Germkill Kit typically last in Bangalore homes?', a: 'In typical Bangalore households of 3 to 5 people, a standard GKK lasts between 8 to 14 months depending on incoming borewell/tanker TDS and daily water consumption.' },
      { q: 'Can you resolve slow water filling or low tank capacity in Pureit RO purifiers?', a: 'Yes, slow filtration is commonly caused by clogged pre-sediment filters or scaling on the high-efficiency RO membrane. Our technician flushes the flow restrictor, cleans the sediment mesh, and replaces any exhausted stages.' },
      { q: 'Do you service advanced Pureit models such as Pureit Copper+, Eco Water Saver, and Marvella?', a: 'Yes, we service the complete Pureit range, including Pureit Copper+ RO with intelligent copper infusion, Eco Water Saver series, Ultima Mineral RO, and Marvella UV/RO models with digital displays.' }
    ]
  },
  aosmith: {
    name: 'AO Smith',
    title: 'AO Smith RO Service & Repair in Bangalore',
    description: 'Specialized doorstep service for AO Smith water purifiers. Expert handling of MIN-TECH, SCM filters, Z8, Z9, and other premium models.',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194311_vmj5ot.jpg',
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
      { q: 'What is MIN-TECH and do you replace it?', a: 'MIN-TECH adds essential minerals back to the water. We provide genuine replacements for MIN-TECH and Silver Charged Membrane (SCM) filters.' },
      { q: 'Why is an error code or alert icon flashing on my AO Smith digital display?', a: 'AO Smith purifiers feature smart digital indicators that flash codes when the RO membrane is exhausted, inlet water pressure is inadequate, or an internal sensor detects a fault. Our technician can interpret the error code, perform troubleshooting, and reset the indicator.' },
      { q: 'Why is hot water not dispensing or not hot enough in AO Smith Z8 or Z9 models?', a: 'Hot water issues are caused by an activated thermal safety cutout, a scaled heating element, or a faulty thermostat. Our specialized technicians can service the heating chamber, descale mineral buildup, and test safety thermostats.' },
      { q: 'How often should SCM (Silver Charged Membrane) and pre-filters be changed in AO Smith?', a: 'The external pre-filter should be replaced every 3 to 4 months due to Bangalore hard water sediments. The Silver Charged Membrane (SCM) and MIN-TECH mineralization cartridges are designed to last 12 to 15 months and should be replaced when mineral balance shifts.' },
      { q: 'Can you repair water leakage from the bottom or tap of an AO Smith purifier?', a: 'Yes, AO Smith purifiers use specialized push-fit connections and child-lock taps that can occasionally develop leaks from pressure surges. We carry genuine AO Smith replacement tap assemblies, O-rings, and solenoid connectors.' },
      { q: 'What are the benefits of choosing an Annual Maintenance Contract (AMC) for AO Smith?', a: 'AO Smith purifiers represent a premium investment with sensitive electronics. Our AMC plan covers periodic preventive maintenance, complimentary filter replacements, electronic sensor checks, hot water system servicing, and zero-cost emergency repair visits.' }
    ]
  }
};
