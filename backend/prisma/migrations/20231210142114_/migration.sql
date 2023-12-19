-- AlterTable
ALTER TABLE "WorkingList" ADD COLUMN     "linkId" TEXT,
ADD COLUMN     "linked" BOOLEAN NOT NULL DEFAULT false;
