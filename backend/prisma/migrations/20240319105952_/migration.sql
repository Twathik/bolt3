/*
  Warnings:

  - You are about to drop the column `clinicalData` on the `DocumentStore` table. All the data in the column will be lost.
  - You are about to drop the column `documentData` on the `DocumentStore` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PatientDocumentType" AS ENUM ('FOLDDER', 'DOCUMENT');

-- AlterTable
ALTER TABLE "DocumentStore" DROP COLUMN "clinicalData",
DROP COLUMN "documentData",
ADD COLUMN     "content" BYTEA;
