import { cookies } from "next/headers";
import axios, { AxiosInstance } from "axios";
import { apiBaseUrl } from "@/lib/apiBaseUrl";
import { setNextCookies } from "@/lib/axiosClient";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export class AppServerSideRequests {
  axiosInstance: AxiosInstance;

  constructor(cookies: () => ReadonlyRequestCookies) {
    this.axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      withCredentials: true,
      timeout: 30000,
      headers: {
        ContentType: "application/json",
        cookie: setNextCookies(cookies()),
      },
    });
  }
}
