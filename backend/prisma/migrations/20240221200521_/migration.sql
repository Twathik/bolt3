-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('FOLDER', 'DOCUMENT');

-- AlterTable
ALTER TABLE "ClinicalEvent" ADD COLUMN     "eventCategory" "EventCategory" NOT NULL DEFAULT 'FOLDER';
