import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function DispatchUserSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const setSubscribedUsers = useBoltStore((store) => store.setSubscribedUsers);
  const addSubscribedUser = useBoltStore((store) => store.addSubscribedUser);
  const removeSubscribedUser = useBoltStore(
    (store) => store.removeSubscribedUser
  );
  useEffect(() => {
    if (message.type === "subscribedUsers") {
      switch (message.payload.operation) {
        case "sync":
          setSubscribedUsers(message.payload.subscribedUsers);
          break;
        case "subscribe":
          addSubscribedUser(message.payload.subscribedUser);
          break;
        case "leave":
          removeSubscribedUser(message.payload.subscribedUser);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default DispatchUserSubscription;
