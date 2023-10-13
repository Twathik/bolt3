/*
  Warnings:

  - You are about to drop the column `allowedMobileDevices` on the `Setting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "allowedMobileDevices",
ADD COLUMN     "allowedMobileDevices_doctors" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "allowedMobileDevices_secretary" INTEGER NOT NULL DEFAULT 1;
