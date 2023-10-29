import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const axiosInstance = axios.create({ baseURL: apiBaseUrl });

export function setNextCookies(nextCookies: ReadonlyRequestCookies): string {
  return `user=${nextCookies.get("user")?.value ?? ""};id=${
    nextCookies.get("id")?.value ?? ""
  };csrf=${nextCookies.get("csrf")?.value ?? ""}`;
}
