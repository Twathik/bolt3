/*
  Warnings:

  - You are about to drop the column `createdRepport` on the `ClinicalEvent` table. All the data in the column will be lost.
  - You are about to drop the column `repport` on the `ClinicalEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClinicalEvent" DROP COLUMN "createdRepport",
DROP COLUMN "repport",
ADD COLUMN     "createdReport" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "report" TEXT;
