import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityAvgAggregate } from "../outputs/ModalityAvgAggregate";
import { ModalityCountAggregate } from "../outputs/ModalityCountAggregate";
import { ModalityMaxAggregate } from "../outputs/ModalityMaxAggregate";
import { ModalityMinAggregate } from "../outputs/ModalityMinAggregate";
import { ModalitySumAggregate } from "../outputs/ModalitySumAggregate";
import { ModalityType } from "../../enums/ModalityType";

@TypeGraphQL.ObjectType("ModalityGroupBy", {})
export class ModalityGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modalityName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityPseudo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modalityAETitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modalityIpAddress!: string;

  @TypeGraphQL.Field(_type => ModalityType, {
    nullable: false
  })
  modalityType!: "AR" | "ASMT" | "AU" | "BDUS" | "BI" | "BMD" | "CR" | "CT" | "CTPROTOCOL" | "DG" | "DOC" | "DX" | "ECG" | "EPS" | "ES" | "FID" | "GM" | "HC" | "HD" | "IO" | "IOL" | "IVOCT" | "IVUS" | "KER" | "KO" | "LEN" | "LS" | "MG" | "MR" | "M3D" | "NM" | "OAM" | "OCT" | "OP" | "OPM" | "OPT" | "OPTBSV" | "OPTENF" | "OPV" | "OSS" | "OT" | "PLAN" | "PR" | "PT" | "PX" | "REG" | "RESP" | "RF" | "RG" | "RTDOSE" | "RTIMAGE" | "RTINTENT" | "RTPLAN" | "RTRAD" | "RTRECORD" | "RTSEGANN" | "RTSTRUCT" | "RWV" | "SEG" | "SM" | "SMR" | "SR" | "SRF" | "STAIN" | "TEXTUREMAP" | "TG" | "US" | "VA" | "XA" | "XC";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  modalityPort!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  activated!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  @TypeGraphQL.Field(_type => ModalityCountAggregate, {
    nullable: true
  })
  _count!: ModalityCountAggregate | null;

  @TypeGraphQL.Field(_type => ModalityAvgAggregate, {
    nullable: true
  })
  _avg!: ModalityAvgAggregate | null;

  @TypeGraphQL.Field(_type => ModalitySumAggregate, {
    nullable: true
  })
  _sum!: ModalitySumAggregate | null;

  @TypeGraphQL.Field(_type => ModalityMinAggregate, {
    nullable: true
  })
  _min!: ModalityMinAggregate | null;

  @TypeGraphQL.Field(_type => ModalityMaxAggregate, {
    nullable: true
  })
  _max!: ModalityMaxAggregate | null;
}
