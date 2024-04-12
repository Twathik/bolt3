/*
  Warnings:

  - You are about to drop the column `consultationId` on the `ConsultationList` table. All the data in the column will be lost.
  - You are about to drop the `Consultation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ConsultationList" DROP CONSTRAINT "ConsultationList_consultationId_fkey";

-- DropIndex
DROP INDEX "ConsultationList_patientId_consultationId_key";

-- AlterTable
ALTER TABLE "ConsultationList" DROP COLUMN "consultationId";

-- DropTable
DROP TABLE "Consultation";
