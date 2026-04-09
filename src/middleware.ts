import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const supportedLocales = ["en", "fr", "de", "nl"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore fichiers (images, css, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Vérifie si une langue est déjà dans l'URL
  const pathnameHasLocale = supportedLocales.some((locale) =>
    pathname.startsWith(`/${locale}`),
  );

  if (pathnameHasLocale) return;

  // 👉 Detect browser language
  const acceptLang = request.headers.get("accept-language");

  let detectedLocale = defaultLocale;

  if (acceptLang) {
    const browserLang = acceptLang.split(",")[0].split("-")[0];

    if (supportedLocales.includes(browserLang)) {
      detectedLocale = browserLang;
    }
  }

  // 👉 Redirect vers /lang
  return NextResponse.redirect(
    new URL(`/${detectedLocale}${pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
