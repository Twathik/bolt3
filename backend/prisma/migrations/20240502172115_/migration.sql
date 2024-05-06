/*
  Warnings:

  - Added the required column `patientId` to the `PatientScanedDocument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatientScanedDocument" ADD COLUMN     "patientId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PatientScanedDocument" ADD CONSTRAINT "PatientScanedDocument_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
