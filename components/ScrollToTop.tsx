'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
