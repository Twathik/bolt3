import type { WunderGraphClient } from "@/components/generated/client";
import { redirect } from "@remix-run/node";
import { createClientFromCookies } from "./wundergraph";

const createClientFromCookiesAndCheckUser = async (
  request: Request
): Promise<WunderGraphClient> => {
  const client = createClientFromCookies(request);
  try {
    await client.fetchUser();

    return client;
  } catch (error) {
    throw redirect("/login");
  }
};

export default createClientFromCookiesAndCheckUser;
