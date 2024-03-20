/*
  Warnings:

  - Made the column `content` on table `DocumentStore` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DocumentStore" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;
