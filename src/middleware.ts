import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['tr', 'en'];
const defaultLocale = 'tr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  // Simple check for English preference, default to Turkish (tr)
  const acceptLanguage = request.headers.get('accept-language');
  let locale = defaultLocale;
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0].toLowerCase();
    if (preferred.startsWith('en')) {
      locale = 'en';
    }
  }

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Match all paths except:
    // - api routes (/api)
    // - static files in _next
    // - static files in public folder (e.g. favicon.ico, images, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
