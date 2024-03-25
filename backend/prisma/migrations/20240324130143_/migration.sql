/*
  Warnings:

  - A unique constraint covering the columns `[patientId,patientDocumentType]` on the table `DocumentStore` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DocumentStore_patientId_patientDocumentType_key" ON "DocumentStore"("patientId", "patientDocumentType");
