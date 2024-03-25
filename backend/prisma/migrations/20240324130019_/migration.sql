-- DropIndex
DROP INDEX "DocumentStore_patientId_key";

-- AddForeignKey
ALTER TABLE "DocumentStore" ADD CONSTRAINT "DocumentStore_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
