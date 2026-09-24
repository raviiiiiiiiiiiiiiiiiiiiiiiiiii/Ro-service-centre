import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Map of supported brand subdomains to their internal Next.js route paths
const BRAND_SUBDOMAINS: Record<string, string> = {
  kent: '/kent-service',
  'kent-service': '/kent-service',
  'kent-ro': '/kent-service',
  aquaguard: '/aquaguard-service',
  'aquaguard-service': '/aquaguard-service',
  'aquaguard-ro': '/aquaguard-service',
  pureit: '/pureit-service',
  'pureit-service': '/pureit-service',
  'pureit-ro': '/pureit-service',
  aosmith: '/aosmith-service',
  'ao-smith': '/aosmith-service',
  'aosmith-service': '/aosmith-service',
  'ao-smith-service': '/aosmith-service',
  'aosmith-ro': '/aosmith-service',
  lg: '/lg-service',
  'lg-service': '/lg-service',
  'lg-ro': '/lg-service',
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Skip static assets, APIs, and Next.js internal paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // Retrieve hostname from x-forwarded-host (common in Vercel & proxies) or host header
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || '';
  const hostname = host.split(':')[0].toLowerCase();

  // Extract subdomain:
  // e.g. "kent.mydomain.in" -> parts: ["kent", "mydomain", "in"] -> subdomain = "kent"
  // e.g. "www.kent.mydomain.in" -> parts: ["www", "kent", "mydomain", "in"] -> subdomain = "kent"
  // e.g. "kent.localhost:3000" -> subdomain = "kent"
  const parts = hostname.split('.');
  let subdomain = '';

  if (parts.length >= 2) {
    if (parts[0] === 'www' && parts.length >= 3) {
      subdomain = parts[1];
    } else if (parts[0] !== 'www') {
      subdomain = parts[0];
    }
  }

  const targetBrandPath = BRAND_SUBDOMAINS[subdomain];

  if (targetBrandPath) {
    // When visiting the root "/" of the brand subdomain (e.g. kent.mydomain.in/ or kent.mydomain.in/?gclid=xyz),
    // internally rewrite to the brand landing page (/kent-service).
    //
    // CRITICAL FOR GOOGLE ADS:
    // - NextResponse.rewrite returns an HTTP 200 OK directly (no 301/302 HTTP redirects).
    // - The URL in the user's browser / ad click remains unchanged: https://kent.mydomain.in/
    // - All query parameters (gclid, gbraid, wbraid, utm_*, etc.) are strictly preserved.
    // - Prevents Google Ads Destination Mismatch and Redirect Violation errors.
    if (pathname === '/') {
      url.pathname = targetBrandPath;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
