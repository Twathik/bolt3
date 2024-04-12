/*
  Warnings:

  - You are about to drop the `ConsultationList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ConsultationList" DROP CONSTRAINT "ConsultationList_patientId_fkey";

-- DropTable
DROP TABLE "ConsultationList";
