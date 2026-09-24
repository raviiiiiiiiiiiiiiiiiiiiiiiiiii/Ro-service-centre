export interface BrandData {
  id: string;
  name: string;
  pageTitle: string;
  subheading?: string;
  introParagraphs: string[];
  servicesHeading: string;
  services: string[];
  problemsHeading: string;
  problems: string[];
  whyChooseHeading: string;
  whyChooseItems: string[];
  faqs: { q: string; a: string; }[];
  needMoreHelpText: string;
  needMoreHelpBullets: string[];
  footerKeywords: string;
  heroImage: string;
  secondImage: string;
  applianceImage?: string;
  logoImage?: string;
  title: string;
  description: string;
}

export const brandData: Record<string, BrandData> = {
  kent: {
    id: 'kent',
    name: 'Kent',
    title: 'Kent Water Purifier Service Center in Bangalore | Fast Doorstep Repair',
    description: 'Looking for a trusted Kent Water Purifier Service Center in Bangalore? Professional Kent RO repair, AMC, installation, filter & membrane replacement across Bangalore.',
    pageTitle: 'Kent Water Purifier Service Center in Bangalore',
    subheading: 'Fast, Reliable & Same-Day Kent RO Repair Service at Your Doorstep',
    logoImage: '/assets/brands/kent-logo.webp',
    heroImage: '/assets/brands/kent-hero.webp',
    secondImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_900/v1788893064/file_00000000a2dc820ba19c675f2156d6ac_kgtmyd.png',
    applianceImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_800/v1786544412/IMG_20260812_194243_himoc3.jpg',
    introParagraphs: [
      'Looking for a trusted Kent RO Service Center in Bangalore? We provide professional Kent RO repair, AMC, installation, uninstallation, filter replacement, membrane replacement, and complete water purifier maintenance services across Bangalore. Our experienced technicians offer fast doorstep support, genuine spare parts, affordable pricing, and same-day service for all Kent RO water purifier models.',
      'Whether your Kent RO is not purifying water, has low water flow, leakage issues, unusual noise, bad taste in water, or filter replacement alerts, our expert team can diagnose and fix the problem quickly. Book your Kent RO service today and get reliable water purifier repair support anywhere in Bangalore.'
    ],
    servicesHeading: 'Our Kent RO Services in Bangalore',
    services: [
      '✔ Kent RO Repair Service',
      '✔ Kent RO AMC Service',
      '✔ Kent RO Filter Replacement',
      '✔ Kent RO Membrane Replacement',
      '✔ Kent RO Installation Service',
      '✔ Kent RO Uninstallation Service',
      '✔ Water Leakage Repair',
      '✔ Low Water Flow Issue Repair',
      '✔ RO Not Purifying Water Fix',
      '✔ Annual Maintenance Contracts',
      '✔ General Kent RO Maintenance',
      '✔ Genuine Spare Parts Replacement'
    ],
    problemsHeading: 'Common Kent RO Problems We Fix',
    problems: [
      '✔ RO Not Dispensing Water',
      '✔ Low Water Pressure',
      '✔ Water Leakage Issues',
      '✔ Bad Taste or Odor in Water',
      '✔ Filter Replacement Alerts',
      '✔ RO Making Unusual Noise',
      '✔ Power Supply Issues',
      '✔ RO Not Purifying Water',
      '✔ Slow Water Flow',
      '✔ Tank Not Filling Properly',
      '✔ Water Overflow Problems'
    ],
    whyChooseHeading: 'Why Choose Our Kent RO Service Center?',
    whyChooseItems: [
      'Same-Day Kent RO Service – Quick doorstep repair and maintenance across Bangalore',
      'Kent RO AMC & Maintenance Support – Regular servicing for better purifier performance.',
      'Support for All Kent RO Models – Repair, installation, AMC, and filter replacement services.',
      'Fast Response & Easy Booking – Hassle-free appointment scheduling and quick assistance.',
      'Trusted Kent RO Service in Bangalore – Professional water purifier repair and maintenance solutions.',
      'Bangalore-Wide Doorstep Support – Service available across major Bangalore locations.'
    ],
    faqs: [
      {
        q: 'Q. Do you provide Kent RO service in Bangalore?',
        a: 'A. Yes, we provide Kent RO repair, AMC, installation, and filter replacement services across Bangalore.'
      },
      {
        q: 'Q. Do you offer same-day Kent RO service?',
        a: 'A. Same-day doorstep service is available in most Bangalore locations.'
      },
      {
        q: 'Q. Do you provide Kent RO AMC plans?',
        a: 'A. Yes, annual maintenance plans are available for regular servicing and support.'
      },
      {
        q: 'Q. Do you replace Kent RO filters and membranes?',
        a: 'A. Yes, we provide filter replacement and membrane replacement services.'
      },
      {
        q: 'Q. Do you service all Kent RO models?',
        a: 'A. Yes, we support most domestic Kent RO water purifier models.'
      },
      {
        q: 'Q. How can I book a Kent RO service appointment?',
        a: 'A. You can contact our support team and schedule a doorstep service visit.'
      }
    ],
    needMoreHelpText: 'Need assistance with Kent RO repair, AMC plans, filter replacement, or installation services? Our support team is ready to help with service booking, pricing information, and technical support across Bangalore.',
    needMoreHelpBullets: [
      '✔ Fast Customer Support',
      '✔ Easy Appointment Scheduling',
      '✔ Reliable Service Assistance',
      '✔ Bangalore-Wide Coverage'
    ],
    footerKeywords: 'Kent RO Service Center Bangalore | Kent RO Repair Service | Kent RO AMC Service | Kent RO Filter Replacement | Kent RO Installation Service | Kent RO Maintenance Service | Kent Water Purifier Repair | Same-Day Kent RO Service | Kent RO Service Near Me'
  },
  aquaguard: {
    id: 'aquaguard',
    name: 'Aquaguard',
    title: 'Aquaguard Water Purifier Service Center in Bangalore | Doorstep Water Purifier Repair',
    description: 'Looking for a trusted Aquaguard Water Purifier Service Center in Bangalore? Professional Aquaguard RO repair, AMC, filter replacement, installation & maintenance.',
    pageTitle: 'Aquaguard Water Purifier Service Center in Bangalore',
    subheading: 'Fast, Reliable & Same-Day Aquaguard RO Repair Service at Your Doorstep',
    logoImage: '/assets/brands/aquaguard-logo.webp',
    heroImage: '/assets/brands/aquaguard-hero.webp',
    secondImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_900/v1788893065/file_000000006cf8820b8c51d3b4ca569f88_qtta1j.png',
    applianceImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_800/v1786544412/IMG_20260812_194328_pcq7uw.png',
    introParagraphs: [
      'Looking for a trusted Aquaguard RO Service Center in Bangalore? We provide professional Aquaguard RO repair, AMC, filter replacement, installation, uninstallation, and maintenance services for all Aquaguard water purifier models. Our experienced technicians offer fast doorstep support, genuine spare parts, and reliable service solutions across Bangalore.',
      'Whether your Aquaguard RO is not purifying water, has low water flow, leakage issues, unusual noise, or filter replacement alerts, our team can quickly diagnose and resolve the problem. Book your Aquaguard water service today and keep your water purifier running efficiently.'
    ],
    servicesHeading: 'Our Aquaguard RO Services in Bangalore',
    services: [
      '✔ Aquaguard RO Repair Service',
      '✔ Aquaguard RO AMC Service',
      '✔ Aquaguard RO Filter Replacement',
      '✔ Aquaguard RO Membrane Replacement',
      '✔ Aquaguard RO Installation Service',
      '✔ Aquaguard RO Uninstallation Service',
      '✔ Water Leakage Repair',
      '✔ Low Water Flow Issue Repair',
      '✔ RO Not Purifying Water Fix',
      '✔ Annual Maintenance Contracts',
      '✔ General Aquaguard RO Maintenance',
      '✔ Genuine Spare Parts Replacement'
    ],
    problemsHeading: 'Common Aquaguard RO Problems We Fix',
    problems: [
      '✔ RO Not Dispensing Water',
      '✔ Low Water Pressure',
      '✔ Water Leakage Issues',
      '✔ Bad Taste or Odor in Water',
      '✔ Filter Replacement Alerts',
      '✔ RO Making Unusual Noise',
      '✔ Power Supply Issues',
      '✔ RO Not Purifying Water',
      '✔ Slow Water Flow',
      '✔ Tank Not Filling Properly',
      '✔ Water Overflow Problems',
      '✔ Regular Service & Maintenance Issues'
    ],
    whyChooseHeading: 'Why Choose Our Aquaguard RO Service Center Bangalore?',
    whyChooseItems: [
      '✔ Experienced Aquaguard RO Technicians',
      '✔ Same-Day Doorstep Service',
      '✔ Aquaguard RO AMC & Maintenance Support',
      '✔ Genuine Filter & Spare Parts Support',
      '✔ Support for All Aquaguard RO Models',
      '✔ Bangalore-Wide Service Coverage'
    ],
    faqs: [
      {
        q: 'Q. Do you provide Aquaguard RO service in Bangalore?',
        a: 'A. Yes, we provide Aquaguard RO repair, AMC, installation, and filter replacement services across Bangalore.'
      },
      {
        q: 'Q. Do you offer same-day Aquaguard RO service?',
        a: 'A. Yes, same-day doorstep service is available in most Bangalore locations.'
      },
      {
        q: 'Q. Do you provide Aquaguard AMC plans?',
        a: 'A. Yes, annual maintenance plans are available for regular servicing and support.'
      },
      {
        q: 'Q. Do you replace Aquaguard filters and membranes?',
        a: 'A. Yes, we provide filter and membrane replacement services.'
      },
      {
        q: 'Q. Do you service all Aquaguard models?',
        a: 'A. Yes, we support most domestic Aquaguard water purifier models.'
      },
      {
        q: 'Q. How can I book an Aquaguard service appointment?',
        a: 'A. You can contact our support team and schedule a doorstep service visit.'
      }
    ],
    needMoreHelpText: 'Need assistance with Aquaguard RO repair, AMC plans, filter replacement, or installation services? Our support team is ready to help with service booking, pricing information, and technical support across Bangalore.',
    needMoreHelpBullets: [
      '✔ Fast Customer Support',
      '✔ Easy Appointment Scheduling',
      '✔ Reliable Service Assistance',
      '✔ Bangalore-Wide Coverage'
    ],
    footerKeywords: 'Aquaguard RO Service Center Bangalore | Aquaguard RO Repair Bangalore | Aquaguard RO AMC Service Bangalore | Aquaguard RO Filter Replacement Bangalore | Aquaguard RO Installation Service Bangalore | Aquaguard RO Maintenance Service Bangalore | Aquaguard Water Purifier Repair Bangalore | Aquaguard RO Technician Bangalore | Aquaguard RO Service Near Me'
  },
  pureit: {
    id: 'pureit',
    name: 'Pureit',
    title: 'Pureit Water Purifier Service Center in Bangalore | Doorstep Repair & GKK',
    description: 'Looking for a trusted Pureit RO Service Center in Bangalore? Professional Pureit RO repair, AMC, filter replacement, installation & maintenance.',
    pageTitle: 'Pureit Water Purifier Service Center in Bangalore',
    subheading: 'Fast, Reliable & Same-Day Pureit RO Repair Service at Your Doorstep',
    logoImage: '/assets/brands/pureit-logo.webp',
    heroImage: '/assets/brands/pureit-hero.webp',
    secondImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_900/v1788893064/file_00000000d7fc820b9a018cd17cb09d8c_hwjxqk.png',
    applianceImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_800/v1786544412/IMG_20260812_194420_cdv3yx.jpg',
    introParagraphs: [
      'Looking for a trusted Pureit RO Service Center in Bangalore? We provide professional Pureit RO repair, AMC, filter replacement, installation, uninstallation, and maintenance services for all Pureit water purifier models. Our experienced technicians offer fast doorstep support, genuine spare parts, and reliable service solutions across Bangalore.',
      'Whether your Pureit RO is not purifying water, has low water flow, leakage issues, unusual noise, or filter replacement alerts, our team can quickly diagnose and resolve the problem. Book your Pureit Water Purifier service today and keep your water purifier running efficiently.'
    ],
    servicesHeading: 'Our Pureit RO Services in Bangalore',
    services: [
      '✔ Pureit RO Repair Service',
      '✔ Pureit RO AMC Service',
      '✔ Pureit RO Filter Replacement',
      '✔ Pureit RO Membrane Replacement',
      '✔ Pureit RO Installation Service',
      '✔ Pureit RO Uninstallation Service',
      '✔ Water Leakage Repair',
      '✔ Low Water Flow Issue Repair',
      '✔ RO Not Purifying Water Fix',
      '✔ Annual Maintenance Contracts',
      '✔ General Pureit RO Maintenance',
      '✔ Genuine Spare Parts Replacement'
    ],
    problemsHeading: 'Common Pureit RO Problems We Fix',
    problems: [
      '✔ RO Not Dispensing Water',
      '✔ Low Water Pressure',
      '✔ Water Leakage Issues',
      '✔ Bad Taste or Odor in Water',
      '✔ Filter Replacement Alerts',
      '✔ RO Making Unusual Noise',
      '✔ Power Supply Issues',
      '✔ RO Not Purifying Water',
      '✔ Slow Water Flow',
      '✔ Tank Not Filling Properly',
      '✔ Water Overflow Problems',
      '✔ Regular Service & Maintenance Issues'
    ],
    whyChooseHeading: 'Why Choose Our Pureit RO Service Center Bangalore?',
    whyChooseItems: [
      '✔ Experienced Pureit RO Technicians',
      '✔ Same-Day Doorstep Service',
      '✔ Pureit RO AMC & Maintenance Support',
      '✔ Genuine Filter & Spare Parts Support',
      '✔ Support for All Pureit RO Models',
      '✔ Bangalore-Wide Service Coverage'
    ],
    faqs: [
      {
        q: 'Q. Do you provide Pureit RO service in Bangalore?',
        a: 'A. Yes, we provide Pureit RO repair, AMC, installation, and filter replacement services across Bangalore.'
      },
      {
        q: 'Q. Do you offer same-day Pureit RO service?',
        a: 'A. Yes, same-day doorstep service is available in most Bangalore locations.'
      },
      {
        q: 'Q. Do you provide Pureit RO AMC plans?',
        a: 'A. Yes, annual maintenance plans are available for regular servicing and support.'
      },
      {
        q: 'Q. Do you replace Pureit RO filters and membranes?',
        a: 'A. Yes, we provide filter and membrane replacement services.'
      },
      {
        q: 'Q. Do you service all Pureit RO models?',
        a: 'A. Yes, we support most domestic Pureit RO water purifier models.'
      },
      {
        q: 'Q. How can I book a Pureit RO service appointment?',
        a: 'A. You can contact our support team and schedule a doorstep service visit.'
      }
    ],
    needMoreHelpText: 'Need assistance with Pureit RO repair, AMC plans, filter replacement, or installation services? Our support team is ready to help with service booking, pricing information, and technical support across Bangalore.',
    needMoreHelpBullets: [
      '✔ Fast Customer Support',
      '✔ Easy Appointment Scheduling',
      '✔ Reliable Service Assistance',
      '✔ Bangalore-Wide Coverage'
    ],
    footerKeywords: 'Pureit RO Service Center Bangalore | Pureit RO Repair Bangalore | Pureit RO AMC Service Bangalore | Pureit RO Filter Replacement Bangalore | Pureit RO Installation Service Bangalore | Pureit RO Maintenance Service Bangalore | Pureit Water Purifier Repair Bangalore | Pureit RO Technician Bangalore | Pureit RO Service Near Me'
  },
  aosmith: {
    id: 'aosmith',
    name: 'AO Smith',
    title: 'AO Smith Water Purifier Service Center in Bangalore | Doorstep Repair',
    description: 'Looking for a trusted AO Smith RO Service Center in Bangalore? Professional AO Smith RO repair, AMC, filter replacement, installation & maintenance.',
    pageTitle: 'AO Smith Water Purifier Service Center in Bangalore',
    subheading: 'Fast, Reliable & Same-Day AO Smith RO Repair Service at Your Doorstep',
    logoImage: '/assets/brands/aosmith-logo.webp',
    heroImage: '/assets/brands/aosmith-hero.webp',
    secondImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_900/v1788893065/9e48f8d3086e064b01dc7098bedfb696e26146b54ce8058d6a87234e983b6dc2_ixhnla.png',
    applianceImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_800/v1786544412/IMG_20260812_194311_vmj5ot.jpg',
    introParagraphs: [
      'Looking for a trusted AO Smith RO Service Center in Bangalore? We provide professional AO Smith RO repair, AMC, filter replacement, installation, uninstallation, and maintenance services for all AO Smith water purifier models. Our experienced technicians offer fast doorstep support, genuine spare parts, and reliable service solutions across Bangalore.',
      'Whether your AO Smith RO is not purifying water, has low water flow, leakage issues, unusual noise, or filter replacement alerts, our team can quickly diagnose and resolve the problem. Book your AO Smith RO service today and keep your water purifier running efficiently.'
    ],
    servicesHeading: 'Our AO Smith RO Service in Bangalore',
    services: [
      '✔ AO Smith RO Repair Service',
      '✔ AO Smith RO AMC Service',
      '✔ AO Smith RO Filter Replacement',
      '✔ AO Smith RO Membrane Replacement',
      '✔ AO Smith RO Installation Service',
      '✔ AO Smith RO Uninstallation Service',
      '✔ Water Leakage Repair',
      '✔ Low Water Flow Issue Repair',
      '✔ RO Not Purifying Water Fix',
      '✔ Annual Maintenance Contracts',
      '✔ General AO Smith RO Maintenance',
      '✔ Genuine Spare Parts Replacement'
    ],
    problemsHeading: 'Common AO Smith RO Problems We Fix',
    problems: [
      '✔ RO Not Dispensing Water',
      '✔ Low Water Pressure',
      '✔ Water Leakage Issues',
      '✔ Bad Taste or Odor in Water',
      '✔ Filter Replacement Alerts',
      '✔ RO Making Unusual Noise',
      '✔ Power Supply Issues',
      '✔ RO Not Purifying Water',
      '✔ Slow Water Flow',
      '✔ Tank Not Filling Properly',
      '✔ Water Overflow Problems',
      '✔ Regular Service & Maintenance Issues'
    ],
    whyChooseHeading: 'Why Choose Our AO Smith RO Service Center Bangalore?',
    whyChooseItems: [
      '✔ Experienced AO Smith RO Technicians',
      '✔ Same-Day Doorstep Service',
      '✔ AO Smith RO AMC & Maintenance Support',
      '✔ Genuine Filter & Spare Parts Support',
      '✔ Support for All AO Smith RO Models',
      '✔ Bangalore-Wide Service Coverage'
    ],
    faqs: [
      {
        q: 'Q. Do you provide AO Smith RO service in Bangalore?',
        a: 'A. Yes, we provide AO Smith RO repair, AMC, installation, and filter replacement services across Bangalore.'
      },
      {
        q: 'Q. Do you offer same-day AO Smith RO service?',
        a: 'A. Yes, same-day doorstep service is available in most Bangalore locations.'
      },
      {
        q: 'Q. Do you provide AO Smith RO AMC plans?',
        a: 'A. Yes, annual maintenance plans are available for regular servicing and support.'
      },
      {
        q: 'Q. Do you replace AO Smith RO filters and membranes?',
        a: 'A. Yes, we provide filter and membrane replacement services.'
      },
      {
        q: 'Q. Do you service all AO Smith RO models?',
        a: 'A. Yes, we support most domestic AO Smith water purifier models.'
      },
      {
        q: 'Q. How can I book an AO Smith RO service appointment?',
        a: 'A. You can contact our support team and schedule a doorstep service visit.'
      }
    ],
    needMoreHelpText: 'Need assistance with AO Smith RO repair, AMC plans, filter replacement, or installation services? Our support team is ready to help with service booking, pricing information, and technical support across Bangalore.',
    needMoreHelpBullets: [
      '✔ Fast Customer Support',
      '✔ Easy Appointment Scheduling',
      '✔ Reliable Service Assistance',
      '✔ Bangalore-Wide Coverage'
    ],
    footerKeywords: 'AO Smith RO Service Center Bangalore | AO Smith RO Repair Bangalore | AO Smith RO AMC Service Bangalore | AO Smith RO Filter Replacement Bangalore | AO Smith RO Installation Service Bangalore | AO Smith RO Maintenance Service Bangalore | AO Smith Water Purifier Repair Bangalore | AO Smith RO Technician Bangalore | AO Smith RO Service Near Me'
  },
  lg: {
    id: 'lg',
    name: 'LG',
    title: 'LG Water Purifier Service Center in Bangalore | Doorstep Repair & Maintenance',
    description: 'Looking for a trusted LG RO Service Center in Bangalore? Professional LG RO repair, AMC, filter replacement, installation & maintenance.',
    pageTitle: 'LG Water Purifier Service Center in Bangalore',
    subheading: 'Fast, Reliable & Same-Day LG RO Repair Service at Your Doorstep',
    logoImage: '/assets/brands/lg-logo.webp',
    heroImage: '/assets/brands/lg-hero.webp',
    secondImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_900/v1788893065/file_00000000aeb881fab74192e565686842_lq6dcm.png',
    applianceImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/f_auto,q_auto,w_800/v1786544412/IMG_20260812_194339_j4gjia.jpg',
    introParagraphs: [
      'Looking for a trusted LG RO Service Center in Bangalore? We provide professional LG RO repair, AMC, filter replacement, installation, uninstallation, and maintenance services for all LG water purifier models. Our experienced technicians offer fast doorstep support, quality spare parts, and reliable service solutions across Bangalore.',
      'Whether your LG RO is not purifying water, has low water flow, leakage issues, unusual noise, or filter replacement alerts, our team can quickly diagnose and resolve the problem. Book your LG RO service today and keep your water purifier running efficiently.'
    ],
    servicesHeading: 'Our LG RO Services in Bangalore',
    services: [
      '✔ LG RO Repair Service',
      '✔ LG RO AMC Service',
      '✔ LG RO Filter Replacement',
      '✔ LG RO Membrane Replacement',
      '✔ LG RO Installation Service',
      '✔ LG RO Uninstallation Service',
      '✔ Water Leakage Repair',
      '✔ Low Water Flow Issue Repair',
      '✔ RO Not Purifying Water Fix',
      '✔ Annual Maintenance Contracts',
      '✔ General LG RO Maintenance',
      '✔ Genuine Spare Parts Replacement'
    ],
    problemsHeading: 'Common LG RO Problems We Fix',
    problems: [
      '✔ RO Not Dispensing Water',
      '✔ Low Water Pressure',
      '✔ Water Leakage Issues',
      '✔ Bad Taste or Odor in Water',
      '✔ Filter Replacement Alerts',
      '✔ RO Making Unusual Noise',
      '✔ Power Supply Issues',
      '✔ RO Not Purifying Water',
      '✔ Slow Water Flow',
      '✔ Tank Not Filling Properly',
      '✔ Water Overflow Problems',
      '✔ Regular Service & Maintenance Issues'
    ],
    whyChooseHeading: 'Why Choose Our LG RO Service Center Bangalore?',
    whyChooseItems: [
      '✔ Experienced LG RO Technicians',
      '✔ Same-Day Doorstep Service',
      '✔ LG RO AMC & Maintenance Support',
      '✔ Genuine Filter & Spare Parts Support',
      '✔ Support for All LG RO Models',
      '✔ Bangalore-Wide Service Coverage'
    ],
    faqs: [
      {
        q: 'Q. Do you provide LG RO service in Bangalore?',
        a: 'A. Yes, we provide LG RO repair, AMC, installation, and filter replacement services across Bangalore.'
      },
      {
        q: 'Q. Do you offer same-day LG RO service?',
        a: 'A. Yes, same-day doorstep service is available in most Bangalore locations.'
      },
      {
        q: 'Q. Do you provide LG RO AMC plans?',
        a: 'A. Yes, annual maintenance plans are available for regular servicing and support.'
      },
      {
        q: 'Q. Do you replace LG RO filters and membranes?',
        a: 'A. Yes, we provide filter and membrane replacement services.'
      },
      {
        q: 'Q. Do you service all LG RO models?',
        a: 'A. Yes, we support most domestic LG water purifier models.'
      },
      {
        q: 'Q. How can I book an LG RO service appointment?',
        a: 'A. You can contact our support team and schedule a doorstep service visit.'
      }
    ],
    needMoreHelpText: 'Need assistance with LG RO repair, AMC plans, filter replacement, or installation services? Our support team is ready to help with service booking, pricing information, and technical support across Bangalore.',
    needMoreHelpBullets: [
      '✔ Fast Customer Support',
      '✔ Easy Appointment Scheduling',
      '✔ Reliable Service Assistance',
      '✔ Bangalore-Wide Coverage'
    ],
    footerKeywords: 'LG RO Service Center Bangalore | LG RO Repair Bangalore | LG RO AMC Service Bangalore | LG RO Filter Replacement Bangalore | LG RO Installation Service Bangalore | LG RO Maintenance Service Bangalore | LG Water Purifier Repair Bangalore | LG RO Technician Bangalore | LG RO Service Near Me'
  }
};
