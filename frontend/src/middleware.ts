/* eslint-disable consistent-return */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./components/wg-generated/client";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (
    !request.nextUrl.pathname.startsWith("/_next") &&
    !request.nextUrl.pathname.startsWith("/favicon")
  ) {
    const response = NextResponse.next();
    try {
      const client = createClient({
        extraHeaders: { cookie: request.headers.get("cookie") || "" },
        baseURL: "http://api.bolt3.local",
      });

      const user = await client.fetchUser();
      if (request.nextUrl.pathname.startsWith("/user")) {
        return response;
      }

      if (request.nextUrl.pathname.startsWith("/login")) {
        if (user) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }

      if (request.nextUrl.pathname.startsWith("/app-storage")) {
        console.log({ url: request.url });
        return NextResponse.rewrite(
          "http://storage.bolt3.local/uploads/" +
            request.url.split("/").slice(-1)[0]
        );
      }
    } catch (error) {
      console.log({ error });
      if (request.nextUrl.pathname.startsWith("/login")) {
        return response;
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
/* export const config = {
  matcher: '/about/:path*',
}; */
