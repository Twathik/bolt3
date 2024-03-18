/*
  Warnings:

  - You are about to drop the column `diagnosticId` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `historyId` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "diagnosticId",
DROP COLUMN "historyId";
