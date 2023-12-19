/*
  Warnings:

  - Added the required column `clinicalEventId` to the `WorkingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `WorkingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Setting" ADD COLUMN     "allowedDICOMmodalities" INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE "WorkingList" ADD COLUMN     "clinicalEventId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_clinicalEventId_fkey" FOREIGN KEY ("clinicalEventId") REFERENCES "ClinicalEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
