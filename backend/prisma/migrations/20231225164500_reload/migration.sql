-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Sexe" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "MobileDeviceType" AS ENUM ('DOCTOR', 'SECRETARY');

-- CreateEnum
CREATE TYPE "EventTypes" AS ENUM ('CLINICAL_VISIT', 'PRESCRIPTION', 'GENERAL_SONO');

-- CreateEnum
CREATE TYPE "ModalityType" AS ENUM ('AR', 'ASMT', 'AU', 'BDUS', 'BI', 'BMD', 'CR', 'CT', 'CTPROTOCOL', 'DG', 'DOC', 'DX', 'ECG', 'EPS', 'ES', 'FID', 'GM', 'HC', 'HD', 'IO', 'IOL', 'IVOCT', 'IVUS', 'KER', 'KO', 'LEN', 'LS', 'MG', 'MR', 'M3D', 'NM', 'OAM', 'OCT', 'OP', 'OPM', 'OPT', 'OPTBSV', 'OPTENF', 'OPV', 'OSS', 'OT', 'PLAN', 'PR', 'PT', 'PX', 'REG', 'RESP', 'RF', 'RG', 'RTDOSE', 'RTIMAGE', 'RTINTENT', 'RTPLAN', 'RTRAD', 'RTRECORD', 'RTSEGANN', 'RTSTRUCT', 'RWV', 'SEG', 'SM', 'SMR', 'SR', 'SRF', 'STAIN', 'TEXTUREMAP', 'TG', 'US', 'VA', 'XA', 'XC');

-- CreateEnum
CREATE TYPE "ModalityExamStatus" AS ENUM ('CREATED', 'INPROGRESS', 'REALIZED', 'REPORT_DONE', 'CLOSED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "fullName" TEXT,
    "avatarUrl" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "phoneNumbers" TEXT[],
    "lastConnection" TIMESTAMP(3) NOT NULL,
    "searchApiKeyId" INTEGER,
    "searchApiKey" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "allowedMobileDevices_doctors" INTEGER NOT NULL DEFAULT 1,
    "allowedMobileDevices_secretary" INTEGER NOT NULL DEFAULT 1,
    "allowedDICOMmodalities" INTEGER NOT NULL DEFAULT 2,
    "allowedEventTypes" "EventTypes"[],

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MobileDevice" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "mobileDeviceType" "MobileDeviceType" NOT NULL DEFAULT 'SECRETARY',
    "expireAt" TIMESTAMP(3) NOT NULL,
    "connected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MobileDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "ddn" TIMESTAMP(3) NOT NULL,
    "sexe" "Sexe" NOT NULL,
    "nTel" TEXT,
    "address" TEXT,
    "height" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "onTrash" BOOLEAN NOT NULL DEFAULT false,
    "informationsConfirmed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationList" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "consultationId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsultationList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicalEvent" (
    "id" TEXT NOT NULL,
    "eventType" "EventTypes" NOT NULL,
    "userId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onTrash" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "empty" BOOLEAN NOT NULL DEFAULT true,
    "createdReport" BOOLEAN NOT NULL DEFAULT false,
    "report" TEXT,
    "dicom" BOOLEAN NOT NULL DEFAULT false,
    "dicomId" TEXT,
    "clinicalDiagnosticId" TEXT,

    CONSTRAINT "ClinicalEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prescription" (
    "id" TEXT NOT NULL,
    "clinicalEventId" TEXT NOT NULL,
    "savedPrescription" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTemplate" (
    "id" TEXT NOT NULL,
    "eventType" "EventTypes" NOT NULL,
    "template" TEXT NOT NULL,
    "empty" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "DocumentTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Economizer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "eventType" "EventTypes" NOT NULL,
    "template" TEXT NOT NULL,

    CONSTRAINT "Economizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modality" (
    "id" TEXT NOT NULL,
    "modalityName" TEXT NOT NULL,
    "modalityPseudo" TEXT,
    "modalityAETitle" TEXT NOT NULL,
    "modalityIpAddress" TEXT NOT NULL,
    "modalityType" "ModalityType" NOT NULL,
    "modalityPort" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "enabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Modality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingList" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "modalityId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "clinicalEventId" TEXT NOT NULL,
    "modalityExamStatus" "ModalityExamStatus" NOT NULL DEFAULT 'CREATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "linked" BOOLEAN NOT NULL DEFAULT false,
    "linkId" TEXT,
    "locked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "WorkingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE UNIQUE INDEX "MobileDevice_accessToken_key" ON "MobileDevice"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "MobileDevice_uuid_accessToken_key" ON "MobileDevice"("uuid", "accessToken");

-- CreateIndex
CREATE INDEX "Patient_sexe_idx" ON "Patient"("sexe");

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_day_month_year_key" ON "Consultation"("day", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "ConsultationList_patientId_consultationId_key" ON "ConsultationList"("patientId", "consultationId");

-- CreateIndex
CREATE UNIQUE INDEX "Prescription_clinicalEventId_key" ON "Prescription"("clinicalEventId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentTemplate_eventType_key" ON "DocumentTemplate"("eventType");

-- CreateIndex
CREATE UNIQUE INDEX "Economizer_eventType_key" ON "Economizer"("eventType");

-- CreateIndex
CREATE UNIQUE INDEX "Modality_modalityName_key" ON "Modality"("modalityName");

-- AddForeignKey
ALTER TABLE "ConsultationList" ADD CONSTRAINT "ConsultationList_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultationList" ADD CONSTRAINT "ConsultationList_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "Consultation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalEvent" ADD CONSTRAINT "ClinicalEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalEvent" ADD CONSTRAINT "ClinicalEvent_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_clinicalEventId_fkey" FOREIGN KEY ("clinicalEventId") REFERENCES "ClinicalEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_modalityId_fkey" FOREIGN KEY ("modalityId") REFERENCES "Modality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkingList" ADD CONSTRAINT "WorkingList_clinicalEventId_fkey" FOREIGN KEY ("clinicalEventId") REFERENCES "ClinicalEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
