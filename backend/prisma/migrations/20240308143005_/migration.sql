/*
  Warnings:

  - You are about to drop the column `editorApiKey` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "editorApiKey",
ADD COLUMN     "editorKey" TEXT NOT NULL DEFAULT '';
