-- AlterTable
ALTER TABLE "DocumentStore" ALTER COLUMN "clinicalData" DROP NOT NULL,
ALTER COLUMN "documentData" DROP NOT NULL;
