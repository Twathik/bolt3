import type {
  ComboboxOnSelectItem,
  ComboboxProps,
} from "@udecode/plate-combobox";
import { getPluginOptions, useEditorRef } from "@udecode/plate-common";
import { type MentionPlugin } from "@udecode/plate-mention";

import { DrugCombobox } from "./drug-combobox";
import { DrugMentionKey } from "./drug-plugin-key";
import { useCallback } from "react";
import getMentionOnSelectItemWithMetadata from "@/lib/utils/getMentionOnSelectItemWithMetadata";
import type { ItemWithMetadata } from "@/lib/interfaces/itemWithMetadata";
import { useBoltStore } from "@/stores/boltStore";
import { ReadyState } from "react-use-websocket";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { v4 as uuid } from "uuid";
import type { WebsocketConnectionType } from "@/stores/boltStoreType";

export function MentionDrugCombobox({
  pluginKey = DrugMentionKey,
  id = pluginKey,
  socket,
  ...props
}: Partial<ComboboxProps> & {
  pluginKey?: string;
  socket: WebsocketConnectionType | null;
}) {
  const editor = useEditorRef();
  const patient = useBoltStore((s) => s.patient);

  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey);
  const onSelectItem: ComboboxOnSelectItem<undefined> = useCallback(
    (editor, item) => {
      getMentionOnSelectItemWithMetadata({
        key: pluginKey,
      })(editor, item as ItemWithMetadata);

      if (socket && socket.readyState === ReadyState.OPEN && patient) {
        const message: WebsocketMessageInterface = {
          id: uuid(),
          destination: ["sd-prescription-widget"],
          global: true,
          type: "prescription",
          payload: {
            operation: "add",
            prescription: (item as ItemWithMetadata).metadata,
          },
          subscriptionIds: [patient.id],
        };
        console.log({ messageToSend: message });

        socket.sendJsonMessage(message);
      }
    },
    [patient, pluginKey, socket]
  );

  return (
    <div onMouseDown={(e) => e.preventDefault()}>
      <DrugCombobox
        id={id}
        trigger={trigger!}
        controlled
        onSelectItem={onSelectItem}
        {...props}
      />
    </div>
  );
}
