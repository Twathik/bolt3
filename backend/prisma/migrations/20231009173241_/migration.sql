/*
  Warnings:

  - You are about to drop the column `actibe` on the `ConsultationList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ConsultationList" DROP COLUMN "actibe",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
