-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "allowedMoblieDivices" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);
