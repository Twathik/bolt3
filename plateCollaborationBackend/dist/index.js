// src/index.ts
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta, yTextToSlateElement } from "@slate-yjs/core";
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
import redis from "redis";
import debounce from "debounce";
var initialValue = [{ type: "p", children: [{ text: "" }] }];
var debounced;
var _a;
var JWT_SECRET = (_a = process.env.JWT_SECRET) != null ? _a : "";
var redisUrl = "redis://localhost:6379";
var publisher = redis.createClient({
  url: redisUrl,
  password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81"
});
var server = Server.configure({
  port: 1234,
  name: "slate-yjs",
  debounce: 2e3,
  maxDebounce: 1e4,
  quiet: true,
  extensions: [
    new Redis({
      host: "127.0.0.1",
      port: 6379,
      options: { password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81" }
    })
  ],
  onAuthenticate: async ({ documentName, token }) => {
  },
  onChange: async (data) => {
    const save = async () => {
      console.log("houra");
      const [patientId, documentType] = data.documentName.split("-");
      const sharedRoot = data.document.get("content", Y.XmlText);
      const content = JSON.stringify(yTextToSlateElement(sharedRoot).children);
      await prismaClient_default.documentStore.upsert({
        create: {
          patientId,
          patientDocumentType: documentType,
          content
        },
        update: { content: { set: content } },
        where: { patientId }
      });
    };
    debounced == null ? void 0 : debounced.clear();
    debounced = debounce(save, 4e3);
    debounced();
  },
  async onLoadDocument(data) {
    const [patientId, documentType] = data.documentName.split("-");
    const documentStore = await prismaClient_default.documentStore.findFirst({
      where: {
        patientId,
        patientDocumentType: documentType
      }
    });
    if (documentStore) {
      const insertDelta = slateNodesToInsertDelta(
        JSON.parse(documentStore.content)
      );
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    } else {
      const insertDelta = slateNodesToInsertDelta(initialValue);
      const sharedRoot = data.document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }
    return data.document;
  }
});
server.listen();
