-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "address" TEXT,
ALTER COLUMN "nTel" DROP NOT NULL,
ALTER COLUMN "nTel" SET DATA TYPE TEXT;
