import {
  createClient,
  type WunderGraphClient,
} from "@/components/wg-generated/client";
import { cookies } from "next/headers";

const createWgClient = async (): Promise<WunderGraphClient> => {
  const nextCookies = cookies().getAll();
  let cookie = "";
  nextCookies.forEach((c) => {
    cookie = cookie.concat(`${c.name}=${c.value};`);
  });
  return createClient({
    extraHeaders: { cookie },
    baseURL: "http://api.bolt3.local",
    customFetch: fetch,
  });
};

export default createWgClient;
