-- CreateEnum
CREATE TYPE "ModalityType" AS ENUM ('XA', 'US');

-- CreateEnum
CREATE TYPE "ModalityExamStatus" AS ENUM ('CREATED', 'INPROGRESS', 'REALIZED', 'REPORT_DONE', 'CLOSED');

-- CreateTable
CREATE TABLE "Modality" (
    "id" TEXT NOT NULL,
    "modalityName" TEXT NOT NULL,
    "modalityAETitle" TEXT NOT NULL,
    "modalityIpAddress" TEXT NOT NULL,
    "modalityType" "ModalityType" NOT NULL,
    "modalityPort" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Modality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingList" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "modalityId" TEXT NOT NULL,
    "modalityExamStatus" "ModalityExamStatus" NOT NULL DEFAULT 'CREATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkingList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_modalityId_fkey" FOREIGN KEY ("modalityId") REFERENCES "Modality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
