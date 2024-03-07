import SecondaryDisplay from "@/components/SecondaryDisplay/SecondaryDisplay";
import BoltSubscriptionComponent from "@/components/Subscriptions/BoltSubscriptionComponent";
import React from "react";

function SecondaryDisplayPage() {
  return (
    <main>
      <SecondaryDisplay />
      <BoltSubscriptionComponent subscriptionIds={[]} />
    </main>
  );
}

export default SecondaryDisplayPage;
