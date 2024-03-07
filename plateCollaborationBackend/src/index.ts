import { Logger } from "@hocuspocus/extension-logger";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta } from "@slate-yjs/core";
import { Redis } from "@hocuspocus/extension-redis";
import * as Y from "yjs";

const initialValue = [{ type: "paragraph", children: [{ text: "hello" }] }];

// Setup the server
const server = Server.configure({
  port: 1234,
  name: "slate-yjs",
  debounce: 2000,
  maxDebounce: 10000,
  quiet: false,
  // Add logging
  extensions: [
    new Logger(),
    new Redis({
      // [required] Hostname of your Redis instance
      host: "127.0.0.1",

      // [required] Port of your Redis instance
      port: 6379,
      options: { password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81" },
    }),
  ],
  onAuthenticate: async ({ documentName, token }) => {
    console.log({ auth: token });
    return true;
  },
  async onConnect({ connection }) {
    //connection.requiresAuthentication = false;
  },
  onChange: async (data) => {
    //console.dir({ data }, { depth: 5 });
  },
  onAwarenessUpdate: async (data) => {
    //console.dir({ data }, { depth: 5 });
  },

  async onLoadDocument(data) {
    // Load the initial value in case the document is empty
    //console.dir({ data: data.context }, { depth: 5 });
    if (data.document.isEmpty("content")) {
      const insertDelta = slateNodesToInsertDelta(initialValue);
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }

    return data.document;
  },
});

// Start the server

server.enableMessageLogging();
server.listen();
