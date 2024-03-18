"use client";
import { useBoltStore } from "@/stores/boltStore";
import GetSelectedDisplay from "../../lib/utils/getSecondaryDisplay";
import type { PublicUser } from "../wg-generated/client";
import { useEffect } from "react";
import getUserState from "../plateEditor/lib/getUserState";

export default function SecondaryDisplay({
  user,
}: {
  user: PublicUser | undefined;
}) {
  const secondaryDisplay = useBoltStore((store) => store.secondaryDisplay);
  const setUser = useBoltStore((s) => s.setUser);
  useEffect(() => {
    if (user) setUser(getUserState(user));
  }, [setUser, user]);
  return <GetSelectedDisplay secondaryDisplay={secondaryDisplay} />;
}
