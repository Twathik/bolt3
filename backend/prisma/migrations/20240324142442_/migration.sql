/*
  Warnings:

  - You are about to drop the column `report` on the `ClinicalEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClinicalEvent" DROP COLUMN "report",
ADD COLUMN     "deletedReport" TEXT;
