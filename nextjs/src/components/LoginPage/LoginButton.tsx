"use client";
import React from "react";
import { useAuth } from "../wg-generated/nextjs";
import { Button } from "../ui/button";

function LoginButton() {
  const { login } = useAuth();
  return (
    <Button
      onClick={() => login("kc", "http://bolt3.local/webapp/search")}
      className="flex w-full justify-center rounded-md px-3 py-5 text-xl font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      S'authentifier
    </Button>
  );
}

export default LoginButton;
