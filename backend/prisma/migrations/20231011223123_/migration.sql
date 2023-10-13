/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Setting` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Setting" ADD COLUMN     "key" TEXT NOT NULL DEFAULT 'settings';

-- CreateIndex
CREATE UNIQUE INDEX "Setting_key_key" ON "Setting"("key");