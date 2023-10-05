"use client";
import { useAuth } from "@/components/wg-generated/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logout() {
  const { logout } = useAuth();
  const router = useRouter();
  logout({
    after: () => router.replace("/login"),
    logoutOpenidConnectProvider: true,
  });
  return null;
}
