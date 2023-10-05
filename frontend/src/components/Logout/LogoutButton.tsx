"use client";
import React from "react";
import { useAuth } from "../wg-generated/nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        console.log("ok");
        logout({
          after: () => router.replace("/login"),
          logoutOpenidConnectProvider: true,
        });
      }}
    >
      Logout
    </button>
  );
}
