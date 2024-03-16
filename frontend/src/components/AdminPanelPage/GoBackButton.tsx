/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { IoChevronBack } from "react-icons/io5";
import { useAppRouter } from "@/lib/utils/useAppRouter";

function GoBackButton() {
  const router = useAppRouter();
  const onClick = useCallback(() => router.push("/search"), [router]);
  return (
    <Button onClick={onClick} className="m-4">
      <span className="text-xl mx-3">
        <IoChevronBack />
      </span>
      Revenir à l'application
    </Button>
  );
}

export default GoBackButton;
