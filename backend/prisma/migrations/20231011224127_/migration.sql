/*
  Warnings:

  - You are about to drop the `MobileDivice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MobileDivice";

-- CreateTable
CREATE TABLE "MobileDevice" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MobileDevice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MobileDevice_uuid_expireAt_key" ON "MobileDevice"("uuid", "expireAt");
