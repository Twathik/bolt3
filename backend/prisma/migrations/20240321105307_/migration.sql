/*
  Warnings:

  - The `content` column on the `DocumentStore` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DocumentStore" ADD COLUMN     "textContent" TEXT,
DROP COLUMN "content",
ADD COLUMN     "content" BYTEA;
