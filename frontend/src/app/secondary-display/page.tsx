import getUser from "@/components/ApiCalls/getUser";
import SecondaryDisplay from "@/components/SecondaryDisplay/SecondaryDisplay";
import SubscribeToSecondaryDisplayWebSocket from "@/components/SecondaryDisplay/SubscribeToSecondaryDisplayWebSocket";
import React from "react";

async function SecondaryDisplayPage() {
  const user = await getUser();
  return (
    <main>
      <SecondaryDisplay user={user} />
      <SubscribeToSecondaryDisplayWebSocket />
    </main>
  );
}

export default SecondaryDisplayPage;
