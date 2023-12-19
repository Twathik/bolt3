import type { WunderGraphClient } from "@/components/generated/client";
import { redirect } from "@remix-run/node";
import { createClientFromCookies } from "./wundergraph";

const createClientFromCookiesAndCheckUser = async (
  request: Request
): Promise<WunderGraphClient> => {
  try {
    const client = createClientFromCookies(request);
    await client.fetchUser();
    return client;
  } catch (error) {
    throw redirect("/login");
  }
};

export default createClientFromCookiesAndCheckUser;
