/*
  Warnings:

  - You are about to drop the column `documentPaddings` on the `Setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "documentPaddings",
ADD COLUMN     "documentTemplateConfiguration" TEXT;
