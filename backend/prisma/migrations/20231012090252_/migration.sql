-- CreateEnum
CREATE TYPE "MobileDeviceType" AS ENUM ('DOCTOR', 'SECRETARY');

-- AlterTable
ALTER TABLE "MobileDevice" ADD COLUMN     "mobileDeviceType" "MobileDeviceType" NOT NULL DEFAULT 'SECRETARY';
