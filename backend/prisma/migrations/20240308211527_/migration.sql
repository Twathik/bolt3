-- CreateTable
CREATE TABLE "DocumentStore" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "clinicalData" TEXT NOT NULL,
    "documentData" TEXT,

    CONSTRAINT "DocumentStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentStore_patientId_key" ON "DocumentStore"("patientId");
