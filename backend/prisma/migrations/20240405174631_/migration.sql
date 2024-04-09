/*
  Warnings:

  - Added the required column `templateName` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentTemplate" ADD COLUMN     "templateName" TEXT NOT NULL;
