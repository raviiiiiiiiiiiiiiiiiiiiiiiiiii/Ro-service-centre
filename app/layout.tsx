import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import LayoutContent from '@/components/LayoutContent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'RO Service Centre Online',
  description: 'Professional RO repair, service and installation at your doorstep.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/homepage-hero.webp" />
        <link rel="preload" as="image" href="/assets/homepage-logo.webp" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
