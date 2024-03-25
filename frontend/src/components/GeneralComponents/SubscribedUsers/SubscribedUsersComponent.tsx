import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBoltStore } from "@/stores/boltStore";
import React, { useEffect, useMemo } from "react";
import { FaUserMd } from "react-icons/fa";

function SubscribedUsersComponent() {
  const subscribedUsers = useBoltStore((s) => s.subscribedUsers);
  const users = useMemo(
    () =>
      subscribedUsers.map((user) => (
        <div key={user.id} className="flex flex-row align-middle items-center">
          <span className="w-4 h-4 mx-4" style={{ color: user.color }}>
            <FaUserMd />
          </span>
          <span>{user.fullName}</span>
        </div>
      )),
    [subscribedUsers]
  );
  useEffect(() => {
    console.log({ subscribedUsers });
  }, [subscribedUsers]);
  return (
    <Card className="m-6 shadow-lg w-fit ">
      <CardHeader>
        <CardTitle className="text-center">
          Utilisateurs connéctés au document
        </CardTitle>
        <CardDescription>
          Liste des utilisateurs consultant en ce moment ce document
        </CardDescription>
      </CardHeader>
      <CardContent>{users}</CardContent>
    </Card>
  );
}

export default SubscribedUsersComponent;
