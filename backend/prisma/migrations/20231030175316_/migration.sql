/*
  Warnings:

  - A unique constraint covering the columns `[clinicalEventId]` on the table `ClinicalDiagnostic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ClinicalEvent" ADD COLUMN     "clinicalDiagnosticId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ClinicalDiagnostic_clinicalEventId_key" ON "ClinicalDiagnostic"("clinicalEventId");
