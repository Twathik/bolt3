/*
  Warnings:

  - Added the required column `patientDocumentType` to the `DocumentStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentStore" ADD COLUMN     "patientDocumentType" "PatientDocumentType" NOT NULL;
