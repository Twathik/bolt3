-- CreateTable
CREATE TABLE "Prescription" (
    "id" TEXT NOT NULL,
    "clinicalEventId" TEXT NOT NULL,
    "savedPrescription" JSONB NOT NULL DEFAULT '{}',
    "repport" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prescription_clinicalEventId_key" ON "Prescription"("clinicalEventId");

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_clinicalEventId_fkey" FOREIGN KEY ("clinicalEventId") REFERENCES "ClinicalEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
