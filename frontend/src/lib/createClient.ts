import {
  createClient,
  type WunderGraphClient,
} from "@/components/wg-generated/client";
import getCookieData from "./utils/getCookiesData";

const createWgClient = async (): Promise<WunderGraphClient> => {
  const nextCookies = await getCookieData();
  let cookie = "";
  nextCookies.forEach((c) => {
    cookie = cookie.concat(`${c.name}=${c.value};`);
  });
  return createClient({
    extraHeaders: { cookie },
    baseURL: "http://api.bolt3.local",
    requestTimeoutMs: 10000,
    // customFetch: fetch,
  });
};

export default createWgClient;
