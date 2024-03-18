-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "clinicalData" DROP NOT NULL,
ALTER COLUMN "clinicalData" DROP DEFAULT;
