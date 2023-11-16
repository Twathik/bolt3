-- CreateEnum
CREATE TYPE "EventTypes" AS ENUM ('DIAGNOSTIC', 'PRESCRIPTION');

-- CreateTable
CREATE TABLE "ClinicalEvent" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" "EventTypes" NOT NULL,
    "userId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onTrash" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "empty" BOOLEAN NOT NULL DEFAULT true,
    "repport" BOOLEAN NOT NULL DEFAULT false,
    "dicom" BOOLEAN NOT NULL DEFAULT false,
    "dicomId" TEXT,

    CONSTRAINT "ClinicalEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClinicalEvent_eventId_eventType_key" ON "ClinicalEvent"("eventId", "eventType");

-- AddForeignKey
ALTER TABLE "ClinicalEvent" ADD CONSTRAINT "ClinicalEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalEvent" ADD CONSTRAINT "ClinicalEvent_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
