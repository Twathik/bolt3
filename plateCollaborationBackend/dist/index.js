// src/index.ts
import {
  Server
} from "@hocuspocus/server";
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
import jwt from "jsonwebtoken";
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
  onAuthenticate: async ({ token }) => {
    const { userId, editorKey } = jwt.verify(
      token,
      JWT_SECRET
    );
    if (!userId || !editorKey)
      throw Error();
    await prismaClient_default.user.findFirstOrThrow({
      where: {
        AND: [
          { userId: { equals: userId } },
          { editorKey: { equals: editorKey } }
        ]
      }
    });
  },
  async onChange() {
    console.log("triggered");
  },
  async onLoadDocument({
    documentName,
    document
  }) {
    const [patientId, documentType] = documentName.split("-");
    const documentStore = await prismaClient_default.documentStore.findFirst({
      where: {
        patientId,
        patientDocumentType: documentType
      }
    });
    if (documentStore == null ? void 0 : documentStore.content) {
      Y.applyUpdate(document, new Uint8Array(documentStore.content));
    } else {
      const insertDelta = slateNodesToInsertDelta([
        {
          type: "p",
          children: [{ text: "" }]
        }
      ]);
      const sharedRoot = document.get("content", Y.XmlText);
      sharedRoot.applyDelta(insertDelta);
    }
    return document;
  },
  async onStoreDocument({ document, documentName }) {
    try {
      console.log("stored");
      const textContent = JSON.stringify(
        yTextToSlateElement(document.get("content", Y.XmlText))
      );
      const state = Buffer.from(Y.encodeStateAsUpdate(document));
      const [patientId, documentType] = documentName.split("-");
      await prismaClient_default.documentStore.upsert({
        create: {
          patientId,
          patientDocumentType: documentType,
          content: Buffer.from(state),
          textContent
        },
        update: {
          content: { set: Buffer.from(state) },
          textContent: { set: textContent }
        },
        where: {
          patientId_patientDocumentType: {
            patientId,
            patientDocumentType: documentType
          }
        }
      });
    } catch (error) {
      console.log({ error });
    }
  }
});
server.listen();
