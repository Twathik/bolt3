/*
  Warnings:

  - You are about to drop the column `allowedMoblieDivices` on the `Setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "allowedMoblieDivices",
ADD COLUMN     "allowedMobileDivices" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "MobileDivice" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MobileDivice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MobileDivice_uuid_expireAt_key" ON "MobileDivice"("uuid", "expireAt");
