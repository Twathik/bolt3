/*
  Warnings:

  - A unique constraint covering the columns `[uuid,accessToken]` on the table `MobileDevice` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "MobileDevice_uuid_expireAt_key";

-- CreateIndex
CREATE UNIQUE INDEX "MobileDevice_uuid_accessToken_key" ON "MobileDevice"("uuid", "accessToken");
