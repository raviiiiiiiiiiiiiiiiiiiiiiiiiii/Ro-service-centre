import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Map of supported brand subdomains and aliases to their internal Next.js route paths
const BRAND_SUBDOMAINS: Record<string, string> = {
  // Kent
  kent: '/kent-service',
  'kent-service': '/kent-service',
  'kent-ro': '/kent-service',
  'kentro': '/kent-service',
  'kent-purifier': '/kent-service',

  // Aquaguard
  aquaguard: '/aquaguard-service',
  'aquaguard-service': '/aquaguard-service',
  'aquaguard-ro': '/aquaguard-service',
  'eureka-forbes': '/aquaguard-service',
  'eurekaforbes': '/aquaguard-service',
  'aquaguard-purifier': '/aquaguard-service',

  // Pureit
  pureit: '/pureit-service',
  'pureit-service': '/pureit-service',
  'pureit-ro': '/pureit-service',
  'hul-pureit': '/pureit-service',
  'pureit-purifier': '/pureit-service',

  // AO Smith
  aosmith: '/aosmith-service',
  'ao-smith': '/aosmith-service',
  ao_smith: '/aosmith-service',
  'aosmith-service': '/aosmith-service',
  'ao-smith-service': '/aosmith-service',
  'aosmith-ro': '/aosmith-service',
  'ao-smith-ro': '/aosmith-service',
  'aosmith-purifier': '/aosmith-service',

  // LG
  lg: '/lg-service',
  'lg-service': '/lg-service',
  'lg-ro': '/lg-service',
  'lgro': '/lg-service',
  'lg-purifier': '/lg-service',
  'lg-water-purifier': '/lg-service',
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // 1. Skip static assets, Next.js internals, and API endpoints
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml')
  ) {
    return NextResponse.next();
  }

  // 2. Retrieve hostname from x-forwarded-host (reverse proxies / Vercel / Cloudflare) or host header
  const rawHost = req.headers.get('x-forwarded-host') || req.headers.get('host') || '';
  const hostname = rawHost.split(':')[0].toLowerCase();

  // Also support direct header override for testing / proxy routing
  const headerSubdomain = req.headers.get('x-subdomain')?.toLowerCase();

  // 3. Extract subdomain from hostname:
  // e.g. "kent.mydomain.in"         -> parts: ["kent", "mydomain", "in"]         -> subdomain = "kent"
  // e.g. "kent.mydomain.co.in"      -> parts: ["kent", "mydomain", "co", "in"]   -> subdomain = "kent"
  // e.g. "www.kent.mydomain.in"     -> parts: ["www", "kent", "mydomain", "in"]   -> subdomain = "kent"
  // e.g. "kent.localhost"           -> parts: ["kent", "localhost"]              -> subdomain = "kent"
  const parts = hostname.split('.');
  let subdomain = headerSubdomain || '';

  if (!subdomain && parts.length >= 2) {
    if (parts[0] === 'www' && parts.length >= 3) {
      subdomain = parts[1];
    } else if (parts[0] !== 'www') {
      subdomain = parts[0];
    }
  }

  const targetBrandPath = BRAND_SUBDOMAINS[subdomain];

  // 4. Handle Subdomain Rewriting
  if (targetBrandPath) {
    // When visiting the root "/" of the brand subdomain (e.g. https://kent.mydomain.in/ or https://kent.mydomain.in/?gclid=xyz&utm_source=google),
    // internally rewrite the request to the brand landing page (/kent-service).
    //
    // BENEFITS:
    // - Zero HTTP redirects (returns HTTP 200 OK directly).
    // - The user's browser and Google Ads tracking URL remain https://kent.mydomain.in/
    // - All query parameters (gclid, gbraid, wbraid, utm_*, etc.) are preserved transparently.
    // - Fully prevents Google Ads Destination Mismatch violations.
    if (pathname === '/') {
      url.pathname = targetBrandPath;
      return NextResponse.rewrite(url);
    }

    // If the user visits /kent-service directly on the kent subdomain (https://kent.mydomain.in/kent-service),
    // rewrite it cleanly so it continues to work without error.
    if (pathname === targetBrandPath) {
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
     * - public files (images, svg, txt, xml, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
