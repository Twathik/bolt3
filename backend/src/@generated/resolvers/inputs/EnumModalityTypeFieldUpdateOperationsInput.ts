import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityType } from "../../enums/ModalityType";

@TypeGraphQL.InputType("EnumModalityTypeFieldUpdateOperationsInput", {})
export class EnumModalityTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ModalityType, {
    nullable: true
  })
  set?: "AR" | "ASMT" | "AU" | "BDUS" | "BI" | "BMD" | "CR" | "CT" | "CTPROTOCOL" | "DG" | "DOC" | "DX" | "ECG" | "EPS" | "ES" | "FID" | "GM" | "HC" | "HD" | "IO" | "IOL" | "IVOCT" | "IVUS" | "KER" | "KO" | "LEN" | "LS" | "MG" | "MR" | "M3D" | "NM" | "OAM" | "OCT" | "OP" | "OPM" | "OPT" | "OPTBSV" | "OPTENF" | "OPV" | "OSS" | "OT" | "PLAN" | "PR" | "PT" | "PX" | "REG" | "RESP" | "RF" | "RG" | "RTDOSE" | "RTIMAGE" | "RTINTENT" | "RTPLAN" | "RTRAD" | "RTRECORD" | "RTSEGANN" | "RTSTRUCT" | "RWV" | "SEG" | "SM" | "SMR" | "SR" | "SRF" | "STAIN" | "TEXTUREMAP" | "TG" | "US" | "VA" | "XA" | "XC" | undefined;
}
