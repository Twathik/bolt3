/*
  Warnings:

  - You are about to drop the column `empty` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `eventType` on the `DocumentTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `template` on the `DocumentTemplate` table. All the data in the column will be lost.
  - Added the required column `A4paddingBottom` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A4paddingLeft` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A4paddingRight` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A4paddingTop` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A5paddingBottom` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A5paddingLeft` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A5paddingRight` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A5paddingTop` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `evenTemplateUrl` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oddTemplateUrl` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DocumentTemplate_eventType_key";

-- AlterTable
ALTER TABLE "DocumentTemplate" DROP COLUMN "empty",
DROP COLUMN "eventType",
DROP COLUMN "template",
ADD COLUMN     "A4paddingBottom" INTEGER NOT NULL,
ADD COLUMN     "A4paddingLeft" INTEGER NOT NULL,
ADD COLUMN     "A4paddingRight" INTEGER NOT NULL,
ADD COLUMN     "A4paddingTop" INTEGER NOT NULL,
ADD COLUMN     "A5paddingBottom" INTEGER NOT NULL,
ADD COLUMN     "A5paddingLeft" INTEGER NOT NULL,
ADD COLUMN     "A5paddingRight" INTEGER NOT NULL,
ADD COLUMN     "A5paddingTop" INTEGER NOT NULL,
ADD COLUMN     "evenTemplateUrl" TEXT NOT NULL,
ADD COLUMN     "oddTemplateUrl" TEXT NOT NULL;
