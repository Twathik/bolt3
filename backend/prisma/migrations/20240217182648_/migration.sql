/*
  Warnings:

  - The values [DIAGNOSTICS,HISTORY] on the enum `EventTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventTypes_new" AS ENUM ('CLINICALEXAM', 'ECG', 'SONOGRAPHY', 'BIOLOGY');
ALTER TABLE "Setting" ALTER COLUMN "allowedEventTypes" TYPE "EventTypes_new"[] USING ("allowedEventTypes"::text::"EventTypes_new"[]);
ALTER TABLE "ClinicalEvent" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TABLE "DocumentTemplate" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TABLE "Economizer" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TYPE "EventTypes" RENAME TO "EventTypes_old";
ALTER TYPE "EventTypes_new" RENAME TO "EventTypes";
DROP TYPE "EventTypes_old";
COMMIT;
