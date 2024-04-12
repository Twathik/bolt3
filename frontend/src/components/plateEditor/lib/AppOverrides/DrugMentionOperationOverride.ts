import type { PlateEditor } from "@udecode/plate-common";
import type { WebsocketConnectionType } from "@/stores/boltStoreType";
import { v4 as uuid } from "uuid";
import { ReadyState } from "react-use-websocket";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import { DrugMentionKey } from "../../plate-app/Drug-plugin/drug-plugin-key";

const withDrugMentionOperationOverride = (
  editor: PlateEditor,
  socket: WebsocketConnectionType | null,
  patientId: string
) => {
  const { apply } = editor;

  editor.apply = (operation) => {
    if (operation.type === "remove_node") {
      const { node } = operation;

      if (node.type === DrugMentionKey) {
        if (socket && socket.readyState === ReadyState.OPEN) {
          const message: WebsocketMessageInterface = {
            id: uuid(),
            destination: ["sd-prescription-widget"],
            global: true,
            type: "prescription",
            payload: {
              operation: "remove",
              prescription: node.metadata as DrugHitInterface,
            },
            subscriptionIds: [patientId],
          };
          socket.sendJsonMessage(message);
          // console.log("removed");
        }
      }
    }

    // Other cases
    apply(operation);
  };

  return editor;
};

export default withDrugMentionOperationOverride;
