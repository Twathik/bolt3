import { Server } from "@hocuspocus/server";
import { slateNodesToInsertDelta, yTextToSlateElement } from "@slate-yjs/core";
import { Redis } from "@hocuspocus/extension-redis";
import * as Y from "yjs";
import prisma from "./utils/prismaClient";
import { PatientDocumentType } from "@prisma/client";
import redis, { RedisClientType } from "redis";
import debounce from "debounce";

const initialValue = [{ type: "p", children: [{ text: "" }] }];
let debounced: ReturnType<typeof debounce>;
const JWT_SECRET = process.env.JWT_SECRET ?? "";

const redisUrl = "redis://localhost:6379";

const publisher: RedisClientType = redis.createClient({
  url: redisUrl,
  password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81",
});

// Setup the server
const server = Server.configure({
  port: 1234,
  name: "slate-yjs",
  debounce: 2000,
  maxDebounce: 10000,
  quiet: true,

  // Add logging
  extensions: [
    // new Logger(),
    /*  new Database({
      // Return a Promise to retrieve data …
      fetch: async ({ documentName }) => {
        return new Promise(async (resolve, reject) => {
          try {
            console.log({ documentName });
            const [patientId, documentType] = documentName.split("-");
            const document = await prisma.documentStore.findFirst({
              where: {
                patientId,
                patientDocumentType: documentType as PatientDocumentType,
              },
            });

            if (!document) {
              resolve(null);
            } else {
              //@ts-expect-error
              resolve(new Uint8Array(document.content));
            }
          } catch (error) {
            reject(error);
          }
        });
      },
      // … and a Promise to store data:
      store: async ({ documentName, state, document }) => {
        try {
          const [patientId, documentType] = documentName.split("-");
          const sharedRoot = Y.decodeUpdate(state);
          
          //const slateContents = yTextToSlateElement(sharedRoot).children;
          console.dir({ sharedRoot }, { depth: 5 });

          await prisma.documentStore.upsert({
            create: {
              patientId,
              patientDocumentType: documentType as PatientDocumentType,
              content: Buffer.from(state),
            },
            update: { content: { set: Buffer.from(state) } },
            where: { patientId },
          });
        } catch (error) {
          console.log({ error });
        }
      },
    }), */
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

  onChange: async (data) => {
    const save = async () => {
      console.log("houra");
      const [patientId, documentType] = data.documentName.split("-");
      const sharedRoot = data.document.get("content", Y.XmlText) as Y.XmlText;
      const content = JSON.stringify(yTextToSlateElement(sharedRoot).children);
      await prisma.documentStore.upsert({
        create: {
          patientId,
          patientDocumentType: documentType as PatientDocumentType,
          content,
        },
        update: { content: { set: content } },
        where: { patientId },
      });
    };

    debounced?.clear();
    debounced = debounce(save, 4000);
    debounced();

    // ....
  },

  async onLoadDocument(data) {
    // Load the initial value in case the document is empty
    //await publisher.connect();
    const [patientId, documentType] = data.documentName.split("-");
    const documentStore = await prisma.documentStore.findFirst({
      where: {
        patientId,
        patientDocumentType: documentType as PatientDocumentType,
      },
    });
    if (documentStore) {
      const insertDelta = slateNodesToInsertDelta(
        JSON.parse(documentStore.content)
      );
      const sharedRoot = data.document.get("content", Y.XmlText) as Y.XmlText;
      sharedRoot.applyDelta(insertDelta);
    } else {
      const insertDelta = slateNodesToInsertDelta(initialValue);
      const sharedRoot = data.document.get("content", Y.XmlText) as Y.XmlText;
      sharedRoot.applyDelta(insertDelta);
    }

    /*  const [patientId] = data.document.name.split("-");
    const content = TiptapTransformer.fromYdoc(data.document);
    const message: WebsocketMessageInterface = {
      global: false,
      destination: ["folder", "secondary-display"],
      type: "patient",
      subscriptionIds: [patientId],
      payload: {
        operation: "update-clinicalData",
        content: JSON.stringify(content),
      },
    }; */
    /*  await publisher.publish(notificationTopic, JSON.stringify(message));

    await publisher.disconnect(); */

    return data.document;
  },
});

// Start the server

// server.enableMessageLogging();
server.listen();
