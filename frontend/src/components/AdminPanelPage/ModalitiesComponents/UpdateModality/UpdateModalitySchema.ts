import { z } from "zod";

const UpdateModalitySchema = z.object({
  modalityPseudo: z
    .string({ required_error: "Champ requis!" })
    .max(50, "50 charactères max")
    .min(2, "2 charactères minimum"),
  modalityAETitle: z
    .string({ required_error: "Champ requis!" })
    .max(50, "50 charactères max")
    .min(2, "2 charactères minimum"),
  modalityIpAddress: z
    .string({ required_error: "Champ requis!" })
    .max(16, "16 charactères max")
    .min(8, "16 charactères minimum"),
  modalityPort: z.coerce.number({ required_error: "Champ requis!" }),
  modalityType: z.enum(
    [
      "AR",
      "ASMT",
      "AU",
      "BDUS",
      "BI",
      "BMD",
      "CR",
      "CT",
      "CTPROTOCOL",
      "DG",
      "DOC",
      "DX",
      "ECG",
      "EPS",
      "ES",
      "FID",
      "GM",
      "HC",
      "HD",
      "IO",
      "IOL",
      "IVOCT",
      "IVUS",
      "KER",
      "KO",
      "LEN",
      "LS",
      "M3D",
      "MG",
      "MR",
      "NM",
      "OAM",
      "OCT",
      "OP",
      "OPM",
      "OPT",
      "OPTBSV",
      "OPTENF",
      "OPV",
      "OSS",
      "OT",
      "PLAN",
      "PR",
      "PT",
      "PX",
      "REG",
      "RESP",
      "RF",
      "RG",
      "RTDOSE",
      "RTIMAGE",
      "RTINTENT",
      "RTPLAN",
      "RTRAD",
      "RTRECORD",
      "RTSEGANN",
      "RTSTRUCT",
      "RWV",
      "SEG",
      "SM",
      "SMR",
      "SR",
      "SRF",
      "STAIN",
      "TEXTUREMAP",
      "TG",
      "US",
      "VA",
      "XA",
      "XC",
    ],
    {
      required_error: "Champ requis!",
      invalid_type_error: "valeur erronée!",
    }
  ),
});

export default UpdateModalitySchema;
