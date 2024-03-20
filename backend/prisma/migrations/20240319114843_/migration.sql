/*
  Warnings:

  - The values [FOLDDER,DOCUMENT] on the enum `PatientDocumentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PatientDocumentType_new" AS ENUM ('folder', 'document');
ALTER TABLE "DocumentStore" ALTER COLUMN "patientDocumentType" TYPE "PatientDocumentType_new" USING ("patientDocumentType"::text::"PatientDocumentType_new");
ALTER TYPE "PatientDocumentType" RENAME TO "PatientDocumentType_old";
ALTER TYPE "PatientDocumentType_new" RENAME TO "PatientDocumentType";
DROP TYPE "PatientDocumentType_old";
COMMIT;
