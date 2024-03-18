/*
  Warnings:

  - The values [CLINICAL_VISIT,PRESCRIPTION,GENERAL_SONO] on the enum `EventTypes` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `createdReport` on the `ClinicalEvent` table. All the data in the column will be lost.
  - You are about to drop the column `empty` on the `ClinicalEvent` table. All the data in the column will be lost.
  - You are about to drop the column `onTrash` on the `ClinicalEvent` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventTypes_new" AS ENUM ('DIAGNOSTICS', 'HISTORY', 'CLINICALEXAM', 'ECG', 'SONOGRAPHY', 'BIOLOGY');
ALTER TABLE "Setting" ALTER COLUMN "allowedEventTypes" TYPE "EventTypes_new"[] USING ("allowedEventTypes"::text::"EventTypes_new"[]);
ALTER TABLE "ClinicalEvent" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TABLE "DocumentTemplate" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TABLE "Economizer" ALTER COLUMN "eventType" TYPE "EventTypes_new" USING ("eventType"::text::"EventTypes_new");
ALTER TYPE "EventTypes" RENAME TO "EventTypes_old";
ALTER TYPE "EventTypes_new" RENAME TO "EventTypes";
DROP TYPE "EventTypes_old";
COMMIT;

-- AlterTable
ALTER TABLE "ClinicalEvent" DROP COLUMN "createdReport",
DROP COLUMN "empty",
DROP COLUMN "onTrash";
