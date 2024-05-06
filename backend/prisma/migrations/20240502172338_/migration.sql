/*
  Warnings:

  - You are about to drop the `PatientScanedDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PatientScanedDocument" DROP CONSTRAINT "PatientScanedDocument_patientId_fkey";

-- DropTable
DROP TABLE "PatientScanedDocument";

-- CreateTable
CREATE TABLE "PatientScannedDocument" (
    "id" TEXT NOT NULL,
    "documentCollectionName" TEXT NOT NULL,
    "documentCollectionUrls" TEXT[],
    "documentCollectionDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "PatientScannedDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PatientScannedDocument" ADD CONSTRAINT "PatientScannedDocument_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
