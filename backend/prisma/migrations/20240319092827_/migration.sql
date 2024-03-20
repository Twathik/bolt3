/*
  Warnings:

  - You are about to drop the column `clinicalData` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `documentData` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "clinicalData",
DROP COLUMN "documentData";
