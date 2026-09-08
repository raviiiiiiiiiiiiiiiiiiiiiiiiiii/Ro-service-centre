import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface px-gutter-mobile lg:px-gutter-desktop">
      <div className="text-center max-w-md mx-auto">
        <h1 className="font-display-xl text-[120px] font-black text-primary leading-none mb-spacing-xs">404</h1>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-spacing-md">Page Not Found</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-spacing-xl">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-spacing-xs px-spacing-xl py-spacing-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-secondary transition-all"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
