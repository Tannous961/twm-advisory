import { NextResponse, type NextRequest } from "next/server";

const SPLASH_COOKIE = "twm-splash-seen";

/** `?splash=1` forces the intro: clear cookie + flag the request for SSR. */
export function middleware(request: NextRequest) {
  if (!request.nextUrl.searchParams.has("splash")) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
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
