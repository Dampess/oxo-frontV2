import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const supportedLocales = ["en", "fr", "de", "nl", "es", "it"] as const;
const defaultLocale = "en";
const localeCookieName = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (
    cookieLocale &&
    supportedLocales.includes(cookieLocale as (typeof supportedLocales)[number])
  ) {
    return cookieLocale;
  }

  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return defaultLocale;

  const browserLang = acceptLang.split(",")[0]?.split("-")[0]?.toLowerCase();
  if (
    browserLang &&
    supportedLocales.includes(browserLang as (typeof supportedLocales)[number])
  ) {
    return browserLang;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  // Détection forte seulement pour la racine
  if (pathname === "/") {
    url.pathname = `/${getPreferredLocale(request)}`;
    return NextResponse.redirect(url);
  }

  // Pour les autres routes non préfixées, stabilité > détection
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
