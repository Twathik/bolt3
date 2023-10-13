/*
  Warnings:

  - You are about to drop the column `allowedMobileDivices` on the `Setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "allowedMobileDivices",
ADD COLUMN     "allowedMobileDevices" INTEGER NOT NULL DEFAULT 1;
