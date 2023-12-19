/*
  Warnings:

  - A unique constraint covering the columns `[modalityName]` on the table `Modality` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Modality_modalityName_key" ON "Modality"("modalityName");
