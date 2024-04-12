/*
  Warnings:

  - A unique constraint covering the columns `[patientId,consultationDate]` on the table `ConsultationList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "ConsultationList_consultationDate_idx" ON "ConsultationList"("consultationDate");

-- CreateIndex
CREATE UNIQUE INDEX "ConsultationList_patientId_consultationDate_key" ON "ConsultationList"("patientId", "consultationDate");
