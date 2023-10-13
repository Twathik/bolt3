/*
  Warnings:

  - A unique constraint covering the columns `[patientId,consultationId]` on the table `ConsultationList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ConsultationList_patientId_consultationId_key" ON "ConsultationList"("patientId", "consultationId");
