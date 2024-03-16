// src/index.ts
import { Logger } from "@hocuspocus/extension-logger";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta } from "@slate-yjs/core";
import { Redis } from "@hocuspocus/extension-redis";
import * as Y from "yjs";

// src/utils/prismaClient.ts
import { PrismaClient } from "@prisma/client";
var prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
var prismaClient_default = prisma;

// src/index.ts
import { Database } from "@hocuspocus/extension-database";
var initialValue = [{ type: "p", children: [{ text: "" }] }];
var _a;
var JWT_SECRET = (_a = process.env.JWT_SECRET) != null ? _a : "";
var server = Server.configure({
  port: 1234,
  name: "slate-yjs",
  debounce: 2e3,
  maxDebounce: 1e4,
  quiet: true,
  extensions: [
    new Logger(),
    new Database({
      fetch: async ({ documentName }) => {
        return new Promise(async (resolve, reject) => {
          try {
            const [patientId, documentType] = documentName.split("-");
            const document = await prismaClient_default.documentStore.findFirst({
              where: { patientId }
            });
            if (!document) {
              resolve(null);
            } else {
              resolve(new Uint8Array(document[documentType]));
            }
          } catch (error) {
            reject(error);
          }
        });
      },
      store: async ({ documentName, state }) => {
        try {
          console.log("stored");
          const [patientId, documentType] = documentName.split("-");
          const documentStore = { patientId };
          documentStore[documentType] = Buffer.from(state);
          const updateDocumentStore = {};
          updateDocumentStore[documentType] = { set: Buffer.from(state) };
          await prismaClient_default.documentStore.upsert({
            create: documentStore,
            update: updateDocumentStore,
            where: { patientId }
          });
        } catch (error) {
          console.log({ error });
        }
      }
    }),
    new Redis({
      host: "127.0.0.1",
      port: 6379,
      options: { password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81" }
    })
  ],
  onAuthenticate: async ({ documentName, token }) => {
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
