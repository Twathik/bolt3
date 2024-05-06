import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/generalUtils/prismaClient";
import redisClient from "@/lib/redisClient";
import { notificationTopic } from "@/components/Websockets/interfaces/MessageTypesInterface";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { v4 as uuid } from "uuid";
import { s3Client } from "@/lib/minioClient";

export async function POST(req: NextRequest, _res: NextResponse) {
  const publisher = await redisClient.connect();
  const formData = await req.formData();

  const documentId = formData.get("documentId") as string;

  if (!documentId) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  try {
    const patientScannedDocument =
      await prisma.patientScannedDocument.findFirstOrThrow({
        where: { id: documentId },
      });
    const remove = new Promise<Boolean>((resolve, reject) => {
      s3Client.removeObjects(
        "uploads",
        patientScannedDocument.documentCollectionUrls.map((doc) =>
          doc.replace("http://storage.bolt3.local/uploads/", "")
        ),
        (err) => {
          if (err) return reject(false);
          resolve(true);
        }
      );
    });
    const deleted = await remove;
    if (!deleted) throw Error();

    if (deleted)
      await prisma.patientScannedDocument.delete({ where: { id: documentId } });

    const message: WebsocketMessageInterface = {
      type: "patientScannedDocument",
      destination: ["patientScannedDocument"],
      global: true,
      id: uuid(),
      subscriptionIds: [patientScannedDocument.patientId],
      payload: {
        operation: "remove",
        patientScannedDocument: {
          ...patientScannedDocument,
          documentCollectionDate:
            patientScannedDocument.documentCollectionDate.toISOString(),
        },
      },
    };
    await publisher.publish(notificationTopic, JSON.stringify(message));
    publisher.disconnect();

    return NextResponse.json({ error: "success" }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: "success" }, { status: 200 });
  }
}
