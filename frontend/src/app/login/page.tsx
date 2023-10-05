/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth, useUser } from "@/components/wg-generated/nextjs";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import LoginComponent from "@/components/Login/loginComponent";

export default function Example() {
  const { data, isLoading } = useUser();
  const router = useRouter();

  if (isLoading === false && data !== undefined && data !== null) {
    router.replace("/webapp");
  }
  return <>{isLoading ? <Loading /> : <LoginComponent />}</>;
}
