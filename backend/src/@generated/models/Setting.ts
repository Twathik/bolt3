import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EventTypes } from "../enums/EventTypes";

@TypeGraphQL.ObjectType("Setting", {})
export class Setting {
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
    nullable: false
  })
  allowedEventTypes!: Array<"DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT">;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  documentTemplateConfiguration?: string | null;
}
