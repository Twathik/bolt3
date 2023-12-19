-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ModalityType" ADD VALUE 'AR';
ALTER TYPE "ModalityType" ADD VALUE 'ASMT';
ALTER TYPE "ModalityType" ADD VALUE 'AU';
ALTER TYPE "ModalityType" ADD VALUE 'BDUS';
ALTER TYPE "ModalityType" ADD VALUE 'BI';
ALTER TYPE "ModalityType" ADD VALUE 'BMD';
ALTER TYPE "ModalityType" ADD VALUE 'CR';
ALTER TYPE "ModalityType" ADD VALUE 'CT';
ALTER TYPE "ModalityType" ADD VALUE 'CTPROTOCOL';
ALTER TYPE "ModalityType" ADD VALUE 'DG';
ALTER TYPE "ModalityType" ADD VALUE 'DOC';
ALTER TYPE "ModalityType" ADD VALUE 'DX';
ALTER TYPE "ModalityType" ADD VALUE 'ECG';
ALTER TYPE "ModalityType" ADD VALUE 'EPS';
ALTER TYPE "ModalityType" ADD VALUE 'ES';
ALTER TYPE "ModalityType" ADD VALUE 'FID';
ALTER TYPE "ModalityType" ADD VALUE 'GM';
ALTER TYPE "ModalityType" ADD VALUE 'HC';
ALTER TYPE "ModalityType" ADD VALUE 'HD';
ALTER TYPE "ModalityType" ADD VALUE 'IO';
ALTER TYPE "ModalityType" ADD VALUE 'IOL';
ALTER TYPE "ModalityType" ADD VALUE 'IVOCT';
ALTER TYPE "ModalityType" ADD VALUE 'IVUS';
ALTER TYPE "ModalityType" ADD VALUE 'KER';
ALTER TYPE "ModalityType" ADD VALUE 'KO';
ALTER TYPE "ModalityType" ADD VALUE 'LEN';
ALTER TYPE "ModalityType" ADD VALUE 'LS';
ALTER TYPE "ModalityType" ADD VALUE 'MG';
ALTER TYPE "ModalityType" ADD VALUE 'MR';
ALTER TYPE "ModalityType" ADD VALUE 'M3D';
ALTER TYPE "ModalityType" ADD VALUE 'NM';
ALTER TYPE "ModalityType" ADD VALUE 'OAM';
ALTER TYPE "ModalityType" ADD VALUE 'OCT';
ALTER TYPE "ModalityType" ADD VALUE 'OP';
ALTER TYPE "ModalityType" ADD VALUE 'OPM';
ALTER TYPE "ModalityType" ADD VALUE 'OPT';
ALTER TYPE "ModalityType" ADD VALUE 'OPTBSV';
ALTER TYPE "ModalityType" ADD VALUE 'OPTENF';
ALTER TYPE "ModalityType" ADD VALUE 'OPV';
ALTER TYPE "ModalityType" ADD VALUE 'OSS';
ALTER TYPE "ModalityType" ADD VALUE 'OT';
ALTER TYPE "ModalityType" ADD VALUE 'PLAN';
ALTER TYPE "ModalityType" ADD VALUE 'PR';
ALTER TYPE "ModalityType" ADD VALUE 'PT';
ALTER TYPE "ModalityType" ADD VALUE 'PX';
ALTER TYPE "ModalityType" ADD VALUE 'REG';
ALTER TYPE "ModalityType" ADD VALUE 'RESP';
ALTER TYPE "ModalityType" ADD VALUE 'RF';
ALTER TYPE "ModalityType" ADD VALUE 'RG';
ALTER TYPE "ModalityType" ADD VALUE 'RTDOSE';
ALTER TYPE "ModalityType" ADD VALUE 'RTIMAGE';
ALTER TYPE "ModalityType" ADD VALUE 'RTINTENT';
ALTER TYPE "ModalityType" ADD VALUE 'RTPLAN';
ALTER TYPE "ModalityType" ADD VALUE 'RTRAD';
ALTER TYPE "ModalityType" ADD VALUE 'RTRECORD';
ALTER TYPE "ModalityType" ADD VALUE 'RTSEGANN';
ALTER TYPE "ModalityType" ADD VALUE 'RTSTRUCT';
ALTER TYPE "ModalityType" ADD VALUE 'RWV';
ALTER TYPE "ModalityType" ADD VALUE 'SEG';
ALTER TYPE "ModalityType" ADD VALUE 'SM';
ALTER TYPE "ModalityType" ADD VALUE 'SMR';
ALTER TYPE "ModalityType" ADD VALUE 'SR';
ALTER TYPE "ModalityType" ADD VALUE 'SRF';
ALTER TYPE "ModalityType" ADD VALUE 'STAIN';
ALTER TYPE "ModalityType" ADD VALUE 'TEXTUREMAP';
ALTER TYPE "ModalityType" ADD VALUE 'TG';
ALTER TYPE "ModalityType" ADD VALUE 'VA';
ALTER TYPE "ModalityType" ADD VALUE 'XC';
