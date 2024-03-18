import { Logger } from "@hocuspocus/extension-logger";
import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta } from "@slate-yjs/core";
import { Redis } from "@hocuspocus/extension-redis";
import * as Y from "yjs";
import jwt from "jsonwebtoken";
import prisma from "./utils/prismaClient";
import { Database } from "@hocuspocus/extension-database";

const initialValue = [{ type: "p", children: [{ text: "" }] }];
const JWT_SECRET = process.env.JWT_SECRET ?? "";
interface userInterface {
  userId: string;
  editorKey: string;
}

// Setup the server
const server = Server.configure({
  port: 1234,
  name: "slate-yjs",
  debounce: 2000,
  maxDebounce: 10000,
  quiet: true,

  // Add logging
  extensions: [
    new Logger(),
    new Database({
      // Return a Promise to retrieve data …
      fetch: async ({ documentName }) => {
        return new Promise(async (resolve, reject) => {
          try {
            const [patientId, documentType] = documentName.split("-");
            const document = await prisma.documentStore.findFirst({
              where: { patientId },
            });
            if (!document) {
              resolve(null);
            } else {
              //@ts-expect-error
              resolve(new Uint8Array(document[documentType]));
            }
          } catch (error) {
            reject(error);
          }
        });
      },
      // … and a Promise to store data:
      store: async ({ documentName, state }) => {
        try {
          console.log("stored");
          const [patientId, documentType] = documentName.split("-");
          const documentStore = { patientId };
          //@ts-ignore
          documentStore[documentType] = Buffer.from(state);
          const updateDocumentStore = {};
          //@ts-ignore
          updateDocumentStore[documentType] = { set: Buffer.from(state) };
          await prisma.documentStore.upsert({
            create: documentStore,
            update: updateDocumentStore,
            where: { patientId },
          });
        } catch (error) {
          console.log({ error });
        }
      },
    }),
    new Redis({
      // [required] Hostname of your Redis instance
      host: "127.0.0.1",

      // [required] Port of your Redis instance
      port: 6379,
      options: { password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81" },
    }),
  ],

  onAuthenticate: async ({ documentName, token }) => {
    /* const { userId, editorKey } = jwt.verify(
      token,
      JWT_SECRET
    ) as userInterface;
    if (!userId || !editorKey) throw Error();
    await prisma.user.findFirstOrThrow({
      where: {
        AND: [
          { userId: { equals: userId } },
          { editorKey: { equals: editorKey } },
        ],
      },
    }); */
  },

  async onLoadDocument(data) {
    // Load the initial value in case the document is empty
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
