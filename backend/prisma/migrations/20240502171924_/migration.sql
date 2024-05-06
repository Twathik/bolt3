-- CreateTable
CREATE TABLE "PatientScanedDocument" (
    "id" TEXT NOT NULL,
    "documentCollectionName" TEXT NOT NULL,
    "documentCollectionUrls" TEXT[],
    "documentCollectionDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PatientScanedDocument_pkey" PRIMARY KEY ("id")
);
