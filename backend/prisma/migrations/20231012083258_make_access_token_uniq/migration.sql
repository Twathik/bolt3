/*
  Warnings:

  - A unique constraint covering the columns `[accessToken]` on the table `MobileDevice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MobileDevice_accessToken_key" ON "MobileDevice"("accessToken");
