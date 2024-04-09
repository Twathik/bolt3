import {
  Server,
  onLoadDocumentPayload,
  onChangePayload,
} from "@hocuspocus/server";
import { slateNodesToInsertDelta, yTextToSlateElement } from "@slate-yjs/core";
import { Redis } from "@hocuspocus/extension-redis";
import * as Y from "yjs";
import prisma from "./utils/prismaClient";
import { PatientDocumentType } from "@prisma/client";
import redis, { RedisClientType } from "redis";
import debounce from "debounce";
import jwt from "jsonwebtoken";
import { UserInterface } from "./utils/userInterface";
import { Database } from "@hocuspocus/extension-database";

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

    new Redis({
      // [required] Hostname of your Redis instance
      host: "127.0.0.1",

      // [required] Port of your Redis instance
      port: 6379,
      options: { password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81" },
    }),
  ],

  onAuthenticate: async ({ token }) => {
    const { userId, editorKey } = jwt.verify(
      token,
      JWT_SECRET
    ) as UserInterface;
    // console.log({ userId });

    if (!userId || !editorKey) throw Error();
    await prisma.user.findFirstOrThrow({
      where: {
        AND: [
          { userId: { equals: userId } },
          { editorKey: { equals: editorKey } },
        ],
      },
    });
  },
  async onChange() {
    console.log("triggered");
  },

  async onLoadDocument({
    documentName,
    document,
  }: onLoadDocumentPayload): Promise<any> {
    // console.log({ documentName });
    const [patientId, documentType] = documentName.split("-");
    const documentStore = await prisma.documentStore.findFirst({
      where: {
        patientId,
        patientDocumentType: documentType as PatientDocumentType,
      },
    });

    if (documentStore?.content) {
      Y.applyUpdate(document, new Uint8Array(documentStore.content));
    } else {
      const insertDelta = slateNodesToInsertDelta([
        {
          //@ts-expect-error
          type: "p",
          children: [{ text: "" }],
        },
      ]);
      const sharedRoot = document.get("content", Y.XmlText) as Y.XmlText;
      sharedRoot.applyDelta(insertDelta);
    }

    return document;
  },

  /**
   * Store new updates in the database.
   */
  async onStoreDocument({ document, documentName }: onChangePayload) {
    try {
      console.log("stored");
      const textContent = JSON.stringify(
        yTextToSlateElement(document.get("content", Y.XmlText) as Y.XmlText)
      );

      const state = Buffer.from(Y.encodeStateAsUpdate(document));
      const [patientId, documentType] = documentName.split("-");

      await prisma.documentStore.upsert({
        create: {
          patientId,
          patientDocumentType: documentType as PatientDocumentType,
          content: Buffer.from(state),
          textContent,
        },
        update: {
          content: { set: Buffer.from(state) },
          textContent: { set: textContent },
        },
        where: {
          patientId_patientDocumentType: {
            patientId,
            patientDocumentType: documentType as PatientDocumentType,
          },
        },
      });
    } catch (error) {
      console.log({ error });
    }
  },
});

// Start the server

// server.enableMessageLogging();
server.listen();
