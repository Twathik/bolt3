/*
  Warnings:

  - You are about to drop the column `repport` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the `ClinicalDiagnostic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClinicalDiagnostic" DROP CONSTRAINT "ClinicalDiagnostic_clinicalEventId_fkey";

-- AlterTable
ALTER TABLE "ClinicalEvent" ADD COLUMN     "createdRepport" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "repport" DROP NOT NULL,
ALTER COLUMN "repport" DROP DEFAULT,
ALTER COLUMN "repport" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Prescription" DROP COLUMN "repport";

-- DropTable
DROP TABLE "ClinicalDiagnostic";
