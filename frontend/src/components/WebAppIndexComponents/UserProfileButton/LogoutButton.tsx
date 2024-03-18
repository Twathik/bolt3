"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/wg-generated/nextjs";
import { useBoltStore } from "@/stores/boltStore";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

function LogoutButton() {
  const navigate = useRouter();
  const { logout } = useAuth();
  const closeTabs = useBoltStore((store) => store.closeTabs);

  const logoutUser = useCallback(() => {
    logout({ logoutOpenidConnectProvider: true });
    closeTabs();
    navigate.replace("/login");
  }, [closeTabs, logout, navigate]);
  return (
    <Button
      variant="destructive"
      onClick={logoutUser}
      className="flex flex-col justify-center item-center rounded-md p-6 no-underline outline-non">
      Se deconnecter
    </Button>
  );
}

export default LogoutButton;
