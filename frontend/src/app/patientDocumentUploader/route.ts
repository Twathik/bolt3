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

  const filesLength = parseInt((formData.get("fileLength") as string) ?? 0, 0);
  const patientId = formData.get("patientId") as string;
  const documentCollectionName = formData.get(
    "documentCollectionName"
  ) as string;
  const documentCollectionDate = formData.get(
    "documentCollectionDate"
  ) as string;

  if (!filesLength || filesLength === 0) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  try {
    const documentCollectionUrls: any[] = [];
    const uploads: Promise<any>[] = [];
    for (let index = 0; index < filesLength; index++) {
      const file = formData.get(`file${index}`) as any;
      const buffer = Buffer.from(await file.arrayBuffer());
      uploads.push(s3Client.putObject("uploads", file.name, buffer));
      documentCollectionUrls.push(
        `http://storage.bolt3.local/uploads/${file.name}`
      );
    }
    await Promise.all(uploads);

    const patientScannedDocument = await prisma.patientScannedDocument.create({
      data: {
        documentCollectionName,
        documentCollectionDate,
        patientId,
        documentCollectionUrls,
      },
    });
    const message: WebsocketMessageInterface = {
      type: "patientScannedDocument",
      destination: ["patientScannedDocument"],
      global: true,
      id: uuid(),
      subscriptionIds: [patientId],
      payload: {
        operation: "add",
        patientScannedDocument: {
          ...patientScannedDocument,
          documentCollectionDate,
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
