import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityType } from "../../enums/ModalityType";

@TypeGraphQL.ObjectType("ModalityMaxAggregate", {})
export class ModalityMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityPseudo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityAETitle!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityIpAddress!: string | null;

  @TypeGraphQL.Field(_type => ModalityType, {
    nullable: true
  })
  modalityType!: "AR" | "ASMT" | "AU" | "BDUS" | "BI" | "BMD" | "CR" | "CT" | "CTPROTOCOL" | "DG" | "DOC" | "DX" | "ECG" | "EPS" | "ES" | "FID" | "GM" | "HC" | "HD" | "IO" | "IOL" | "IVOCT" | "IVUS" | "KER" | "KO" | "LEN" | "LS" | "MG" | "MR" | "M3D" | "NM" | "OAM" | "OCT" | "OP" | "OPM" | "OPT" | "OPTBSV" | "OPTENF" | "OPV" | "OSS" | "OT" | "PLAN" | "PR" | "PT" | "PX" | "REG" | "RESP" | "RF" | "RG" | "RTDOSE" | "RTIMAGE" | "RTINTENT" | "RTPLAN" | "RTRAD" | "RTRECORD" | "RTSEGANN" | "RTSTRUCT" | "RWV" | "SEG" | "SM" | "SMR" | "SR" | "SRF" | "STAIN" | "TEXTUREMAP" | "TG" | "US" | "VA" | "XA" | "XC" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  modalityPort!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  activated!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enabled!: boolean | null;
}
