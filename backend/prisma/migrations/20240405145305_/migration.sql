/*
  Warnings:

  - Added the required column `templateSpeciality` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TemplateSpeciality" AS ENUM ('CARDIOLOGY', 'GYNECOLOGY');

-- AlterTable
ALTER TABLE "DocumentTemplate" ADD COLUMN     "templateSpeciality" "TemplateSpeciality" NOT NULL;
