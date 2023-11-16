/*
  Warnings:

  - You are about to drop the column `eventId` on the `ClinicalEvent` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ClinicalEvent_eventId_eventType_key";

-- AlterTable
ALTER TABLE "ClinicalEvent" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "ClinicalDiagnostic" (
    "id" TEXT NOT NULL,
    "clinicalEventId" TEXT NOT NULL,
    "repport" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClinicalDiagnostic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClinicalDiagnostic" ADD CONSTRAINT "ClinicalDiagnostic_clinicalEventId_fkey" FOREIGN KEY ("clinicalEventId") REFERENCES "ClinicalEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
