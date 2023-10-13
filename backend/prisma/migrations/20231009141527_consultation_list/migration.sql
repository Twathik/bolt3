-- CreateTable
CREATE TABLE "ConsultationList" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConsultationList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConsultationListToPatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultationListToPatient_AB_unique" ON "_ConsultationListToPatient"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultationListToPatient_B_index" ON "_ConsultationListToPatient"("B");

-- AddForeignKey
ALTER TABLE "_ConsultationListToPatient" ADD CONSTRAINT "_ConsultationListToPatient_A_fkey" FOREIGN KEY ("A") REFERENCES "ConsultationList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConsultationListToPatient" ADD CONSTRAINT "_ConsultationListToPatient_B_fkey" FOREIGN KEY ("B") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
