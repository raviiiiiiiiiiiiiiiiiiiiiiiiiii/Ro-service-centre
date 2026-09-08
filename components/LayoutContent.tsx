'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Check if current route is homepage or any of the brand landing pages
  const isCustomLayout = pathname === '/' || (pathname ? (
    pathname.endsWith('-service') || 
    pathname.includes('/kent-') || 
    pathname.includes('/aquaguard-') ||
    pathname.includes('/pureit-') ||
    pathname.includes('/lg-') ||
    pathname.includes('/aosmith-')
  ) : false);

  if (isCustomLayout) {
    return (
      <>
        <ScrollToTop />
        <main className="flex-grow w-full bg-white">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
