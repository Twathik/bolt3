import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "../.wundergraph/generated/client";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const client = createClient({
    baseURL: "http://api.bolt3.local",
    extraHeaders: { cookie: request.headers.get("cookie") || "" },
  });

  try {
    await client.fetchUser();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/webapp/:path*", "/admin/:path*"],
};
