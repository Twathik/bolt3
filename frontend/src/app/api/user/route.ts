import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const auth = request.headers.get("Authorization");

  if (auth !== "Bearer test")
    return Response.json("unauthorized", {
      status: 403,
      statusText: "unauthorized",
    });
  return Response.json({
    user: {
      hello: "test",
    },
  });
}
