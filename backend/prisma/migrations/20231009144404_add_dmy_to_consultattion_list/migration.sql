/*
  Warnings:

  - Added the required column `day` to the `ConsultationList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `ConsultationList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `ConsultationList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConsultationList" ADD COLUMN     "day" INTEGER NOT NULL,
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;