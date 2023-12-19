-- CreateTable
CREATE TABLE "Economizer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "eventType" "EventTypes" NOT NULL,
    "template" TEXT NOT NULL,

    CONSTRAINT "Economizer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Economizer_eventType_key" ON "Economizer"("eventType");
