import { NextResponse, type NextRequest } from "next/server";
import { getLocaleFromPathname } from "@/lib/locale";

const SPLASH_COOKIE = "twm-splash-seen";

/** Locale header for SSR + optional `?splash=1` intro reset. */
export function middleware(request: NextRequest) {
  const locale = getLocaleFromPathname(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-twm-locale", locale);

  if (!request.nextUrl.searchParams.has("splash")) {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  requestHeaders.set("x-twm-force-splash", "1");

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.cookies.set(SPLASH_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
