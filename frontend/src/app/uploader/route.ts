import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/generalUtils/prismaClient";
import { s3Client } from "@/lib/minioClient";

export async function POST(req: NextRequest, _res: NextResponse) {
  const formData = await req.formData();

  const file = formData.get("file") as any;
  const id = formData.get("patientId") as string;

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    await s3Client.putObject("uploads", file.name, buffer);
    if (id) {
      await prisma.patient.update({
        where: { id },
        data: { patientAvatar: { set: file.name } },
      });
    }

    return NextResponse.json({ error: "success" }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error: "success" }, { status: 200 });
  }
}
