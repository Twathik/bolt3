/*
  Warnings:

  - The values [DIAGNOSTICS,HISTORY,CLINICALEXAM,ECG,SONOGRAPHY,BIOLOGY] on the enum `EventTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventTypes_new" AS ENUM ('CLINICAL_VISIT', 'PRESCRIPTION', 'GENERAL_SONO');
ALTER TABLE "Setting" ALTER COLUMN "allowedEventTypes" TYPE "EventTypes_new"[] USING ("allowedEventTypes"::text::"EventTypes_new"[]);
ALTER TABLE "ClinicalEvent" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TABLE "DocumentTemplate" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TABLE "Economizer" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TYPE "EventTypes" RENAME TO "EventTypes_old";
ALTER TYPE "EventTypes_new" RENAME TO "EventTypes";
DROP TYPE "EventTypes_old";
COMMIT;

-- AlterTable
ALTER TABLE "ClinicalEvent" ADD COLUMN     "createdReport" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "empty" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "onTrash" BOOLEAN NOT NULL DEFAULT false;
