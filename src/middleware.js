import { NextResponse } from "next/server";

let locales = ["en", "ru", "uz"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Static fayllar (rasmlar, shriftlar) uchun middleware ishlamasligi kerak
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.includes("/static/") ||
    pathname.match(/\.(.*)$/) // rasm, favicon, svg va h.k.
  ) {
    return;
  }

  // Pathda til bormi yoki yo'qligini tekshirish
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Agar til bo'lmasa, default 'uz' (yoki 'en') ga yo'naltirish
  const locale = "uz";
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Bu middleware barcha sahifalarda ishlaydi, faqat _next va statik fayllardan tashqari
    "/((?!_next|api|favicon.ico).*)",
  ],
};
