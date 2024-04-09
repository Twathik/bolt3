/*
  Warnings:

  - You are about to drop the column `A4paddingBottom` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A4paddingLeft` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A4paddingRight` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A4paddingTop` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A5paddingBottom` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A5paddingLeft` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A5paddingRight` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `A5paddingTop` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `defaultTemplate` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `selectedTemplate` on the `DocumentTemplate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DocumentTemplate" DROP COLUMN "A4paddingBottom",
DROP COLUMN "A4paddingLeft",
DROP COLUMN "A4paddingRight",
DROP COLUMN "A4paddingTop",
DROP COLUMN "A5paddingBottom",
DROP COLUMN "A5paddingLeft",
DROP COLUMN "A5paddingRight",
DROP COLUMN "A5paddingTop",
DROP COLUMN "defaultTemplate",
DROP COLUMN "selectedTemplate";

-- AlterTable
ALTER TABLE "Setting" ADD COLUMN     "documentPaddings" TEXT;
