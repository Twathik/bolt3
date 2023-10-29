/*
  Warnings:

  - A unique constraint covering the columns `[patientId,consultationId,active]` on the table `ConsultationList` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ConsultationList_patientId_consultationId_key";

-- CreateIndex
CREATE UNIQUE INDEX "ConsultationList_patientId_consultationId_active_key" ON "ConsultationList"("patientId", "consultationId", "active");
