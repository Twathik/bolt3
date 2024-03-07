/*
  Warnings:

  - The required column `diagnosticId` was added to the `Patient` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `historyId` was added to the `Patient` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "diagnosticId" TEXT NOT NULL,
ADD COLUMN     "historyId" TEXT NOT NULL;
