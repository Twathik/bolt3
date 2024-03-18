import React from "react";
import type { PublicUser } from "../wg-generated/client";
import SecondaryDisplay from "./SecondaryDisplay";
import { WebsocketProvider } from "../Websockets/WebsocketProvider";

function SecondaryDisplayRootComponent({ user }: { user: PublicUser }) {
  return (
    <>
      <WebsocketProvider />
      <SecondaryDisplay user={user} />
    </>
  );
}

export default SecondaryDisplayRootComponent;
