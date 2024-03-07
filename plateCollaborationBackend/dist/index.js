// src/index.ts
import { Logger } from "@hocuspocus/extension-logger";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta } from "@slate-yjs/core";
import { Redis } from "@hocuspocus/extension-redis";
import * as Y from "yjs";
var initialValue = [{ type: "paragraph", children: [{ text: "hello" }] }];
var server = Server.configure({
  port: 1234,
  name: "slate-yjs",
  debounce: 2e3,
  maxDebounce: 1e4,
  quiet: false,
  extensions: [
    new Logger(),
    new Redis({
      host: "127.0.0.1",
      port: 6379,
      options: { password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81" }
    })
  ],
  onAuthenticate: async ({ documentName, token }) => {
    console.log({ auth: token });
    return true;
  },
  async onConnect({ connection }) {
  },
  onChange: async (data) => {
  },
  onAwarenessUpdate: async (data) => {
  },
  async onLoadDocument(data) {
    if (data.document.isEmpty("content")) {
      const insertDelta = slateNodesToInsertDelta(initialValue);
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }
    return data.document;
  }
});
server.enableMessageLogging();
server.listen();
