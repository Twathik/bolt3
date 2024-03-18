import { request as graphqlRequest, gql } from "graphql-request";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";

interface mobileDeviceAuth {
  authMobileApp: {
    id: string;
    accessToken: string;
    expireAt: string;
    mobileDeviceType: "DOCTOR" | "SECRETARY";
    connected: boolean;
  };
}
export const dynamic = "force-dynamic"; // "auto"

export async function GET(_request: NextRequest) {
  const headerList = headers();
  const auth = headerList.get("Authorization");

  if (auth === undefined || auth === null)
    throw new Response("unauthorized", {
      status: 403,
      statusText: "unauthorized",
    });
  const parse = auth.replace("Bearer ", "").split("##_##");
  const ignoredGqlTag = gql;
  const document = ignoredGqlTag`
    query authMobileApp($uuid: String!, $accessToken: String!) {
      authMobileApp(uuid: $uuid, accessToken: $accessToken) {
        id
        accessToken
        expireAt
        mobileDeviceType
      }
    }
  `;
  try {
    const auth_result: mobileDeviceAuth = await graphqlRequest(
      "http://localhost:4000/graphql",
      document,
      {
        uuid: parse![0],
        accessToken: parse![1],
      }
    );
    //
    if (!auth_result.authMobileApp)
      throw new Response("unauthorized", {
        status: 403,
        statusText: "unauthorized",
      });
    return Response.json({
      user: {
        accessToken: auth_result.authMobileApp.accessToken,
        expireAt: auth_result.authMobileApp.expireAt,
        mobileDeviceType: auth_result.authMobileApp.mobileDeviceType,
      },
    });
  } catch (error) {
    console.log({ error });
    throw new Response("unauthorized", {
      status: 403,
      statusText: "unauthorized",
    });
  }
}
