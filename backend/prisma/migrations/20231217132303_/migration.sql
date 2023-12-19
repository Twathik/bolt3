-- AlterTable
ALTER TABLE "User" ADD COLUMN     "searchApiKey" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "searchApiKeyId" TEXT;
