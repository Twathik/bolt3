import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import prisma from "@/lib/generalUtils/prismaClient";

export const dynamic = "force-dynamic"; // "auto"

export async function GET(request: NextRequest) {
  const headerList = headers();
  const auth = headerList.get("Authorization");

  try {
    if (auth !== undefined && auth !== null) {
      const parse = auth.replace("Bearer ", "").split("##_##");
      const mobileDevice = await prisma.mobileDevice.findUnique({
        where: {
          uuid_accessToken: { uuid: parse![0], accessToken: parse![1] },
        },
      });

      if (!mobileDevice) {
        const getMobileDevice = await prisma.mobileDevice.findFirst({
          where: { accessToken: { equals: parse![1] } },
        });

        if (!getMobileDevice) throw Error("No registred app");
        if (getMobileDevice.expireAt < new Date()) throw Error(" App expired");

        const updatedMobileDevice = await prisma.mobileDevice.update({
          where: { accessToken: parse![1] },
          data: {
            uuid: parse![0],
            connected: true,
          },
        });
        return Response.json({
          user: {
            accessToken: updatedMobileDevice.accessToken,
            expireAt: updatedMobileDevice.expireAt,
            mobileDeviceType: updatedMobileDevice.mobileDeviceType,
          },
        });
      }

      return Response.json({
        user: {
          accessToken: mobileDevice.accessToken,
          expireAt: mobileDevice.expireAt,
          mobileDeviceType: mobileDevice.mobileDeviceType,
        },
      });
    } else {
      const headers = new Headers();
      const cookie = request.headers.get("cookie");

      headers.append("cookie", cookie ?? "");
      const user = await fetch("http://api.bolt3.local/auth/user", {
        headers,
      });
      if (user.status === 204) {
        throw Response.json("unauthorized", {
          status: 403,
          statusText: "unauthorized",
        });
      }
      return Response.json({
        user,
      });
    }
  } catch (error) {
    console.log({ error });
    throw Response.json("unauthorized", {
      status: 403,
      statusText: "unauthorized",
    });
  }
}
