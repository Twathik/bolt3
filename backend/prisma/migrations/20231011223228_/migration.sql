/*
  Warnings:

  - You are about to drop the column `key` on the `Setting` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Setting_key_key";

-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "key";
