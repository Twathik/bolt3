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
    const Authorization = request.headers.get("Authorization");

    try {
      const client = createClient({
        extraHeaders: {
          cookie: request.headers.get("cookie") || "",
          Authorization: Authorization ?? "",
        },
        baseURL: "http://api.bolt3.local",
        requestTimeoutMs: 30000,
      });

      if (request.nextUrl.pathname.startsWith("/user")) {
        return response;
      }
      const user = await client.fetchUser();

      if (request.nextUrl.pathname.startsWith("/login")) {
        if (user) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }

      if (request.nextUrl.pathname.startsWith("/app-storage")) {
        return NextResponse.rewrite(
          "http://localhost:9000/uploads/" + request.url.split("/").slice(-1)[0]
        );
      }
    } catch (error) {
      console.log({ errorMiddlware: error });
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
