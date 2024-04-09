import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingAvgAggregate } from "../outputs/SettingAvgAggregate";
import { SettingCountAggregate } from "../outputs/SettingCountAggregate";
import { SettingMaxAggregate } from "../outputs/SettingMaxAggregate";
import { SettingMinAggregate } from "../outputs/SettingMinAggregate";
import { SettingSumAggregate } from "../outputs/SettingSumAggregate";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("SettingGroupBy", {})
export class SettingGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allowedMobileDevices_doctors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allowedMobileDevices_secretary!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allowedDICOMmodalities!: number;

  @TypeGraphQL.Field(_type => [EventTypes], {
    nullable: true
  })
  allowedEventTypes!: Array<"DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT"> | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  documentTemplateConfiguration!: string | null;

  @TypeGraphQL.Field(_type => SettingCountAggregate, {
    nullable: true
  })
  _count!: SettingCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingAvgAggregate, {
    nullable: true
  })
  _avg!: SettingAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingSumAggregate, {
    nullable: true
  })
  _sum!: SettingSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingMinAggregate, {
    nullable: true
  })
  _min!: SettingMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingMaxAggregate, {
    nullable: true
  })
  _max!: SettingMaxAggregate | null;
}
