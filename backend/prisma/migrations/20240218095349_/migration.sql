/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Economizer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Economizer_eventType_key";

-- CreateIndex
CREATE UNIQUE INDEX "Economizer_name_key" ON "Economizer"("name");
