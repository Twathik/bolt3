import getUser from "@/components/ApiCalls/getUser";
import SecondaryDisplay from "@/components/SecondaryDisplay/SecondaryDisplay";
import React from "react";

async function SecondaryDisplayPage() {
  const user = await getUser();
  return (
    <main>
      <SecondaryDisplay user={user} />
    </main>
  );
}

export default SecondaryDisplayPage;
