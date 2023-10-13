/*
  Warnings:

  - You are about to drop the column `created` on the `ConsultationList` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `ConsultationList` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `ConsultationList` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `ConsultationList` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the `_ConsultationListToPatient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `consultationId` to the `ConsultationList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `ConsultationList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ConsultationList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ConsultationListToPatient" DROP CONSTRAINT "_ConsultationListToPatient_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConsultationListToPatient" DROP CONSTRAINT "_ConsultationListToPatient_B_fkey";

-- AlterTable
ALTER TABLE "ConsultationList" DROP COLUMN "created",
DROP COLUMN "day",
DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "actibe" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "consultationId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "patientId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "created",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_ConsultationListToPatient";

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConsultationList" ADD CONSTRAINT "ConsultationList_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultationList" ADD CONSTRAINT "ConsultationList_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "Consultation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
