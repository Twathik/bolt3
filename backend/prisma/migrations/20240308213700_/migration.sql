/*
  Warnings:

  - Added the required column `clinicalData` to the `DocumentStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentData` to the `DocumentStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentStore" DROP COLUMN "clinicalData",
ADD COLUMN     "clinicalData" BYTEA NOT NULL,
DROP COLUMN "documentData",
ADD COLUMN     "documentData" BYTEA NOT NULL;
