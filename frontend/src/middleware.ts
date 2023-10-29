import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PublicUser, createClient } from "./components/wg-generated/client";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const client = createClient({
    baseURL: "http://api.bolt3.local",
    extraHeaders: { cookie: request.headers.get("cookie") || "" },
  });
  let user: PublicUser | null = null;
  try {
    user = await client.fetchUser();
  } catch (error) {}

  if (request.nextUrl.pathname.startsWith("/api/wg")) {
    let pathname = request.nextUrl.pathname.replace("/api/wg", "");
    const url = new URL(
      pathname + request.nextUrl.search,
      "http://localhost:9991",
    );
    const headers = new Headers({
      ContentType: "application/json",
      cookie: request.headers.get("cookie") || "",
    });
    const response = NextResponse.rewrite(url, { request: { headers } });
    return response;
  }

  /* if (user === null && !request.nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/login", request.url));
  if (user !== null && request.nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/webapp/search", request.url)); */

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/webapp/:path*", "/admin/:path*", "/api/wg/:path*", "/login"],
};
