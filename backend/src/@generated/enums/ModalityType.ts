import * as TypeGraphQL from "type-graphql";

export enum ModalityType {
  AR = "AR",
  ASMT = "ASMT",
  AU = "AU",
  BDUS = "BDUS",
  BI = "BI",
  BMD = "BMD",
  CR = "CR",
  CT = "CT",
  CTPROTOCOL = "CTPROTOCOL",
  DG = "DG",
  DOC = "DOC",
  DX = "DX",
  ECG = "ECG",
  EPS = "EPS",
  ES = "ES",
  FID = "FID",
  GM = "GM",
  HC = "HC",
  HD = "HD",
  IO = "IO",
  IOL = "IOL",
  IVOCT = "IVOCT",
  IVUS = "IVUS",
  KER = "KER",
  KO = "KO",
  LEN = "LEN",
  LS = "LS",
  MG = "MG",
  MR = "MR",
  M3D = "M3D",
  NM = "NM",
  OAM = "OAM",
  OCT = "OCT",
  OP = "OP",
  OPM = "OPM",
  OPT = "OPT",
  OPTBSV = "OPTBSV",
  OPTENF = "OPTENF",
  OPV = "OPV",
  OSS = "OSS",
  OT = "OT",
  PLAN = "PLAN",
  PR = "PR",
  PT = "PT",
  PX = "PX",
  REG = "REG",
  RESP = "RESP",
  RF = "RF",
  RG = "RG",
  RTDOSE = "RTDOSE",
  RTIMAGE = "RTIMAGE",
  RTINTENT = "RTINTENT",
  RTPLAN = "RTPLAN",
  RTRAD = "RTRAD",
  RTRECORD = "RTRECORD",
  RTSEGANN = "RTSEGANN",
  RTSTRUCT = "RTSTRUCT",
  RWV = "RWV",
  SEG = "SEG",
  SM = "SM",
  SMR = "SMR",
  SR = "SR",
  SRF = "SRF",
  STAIN = "STAIN",
  TEXTUREMAP = "TEXTUREMAP",
  TG = "TG",
  US = "US",
  VA = "VA",
  XA = "XA",
  XC = "XC"
}
TypeGraphQL.registerEnumType(ModalityType, {
  name: "ModalityType",
  description: undefined,
});
