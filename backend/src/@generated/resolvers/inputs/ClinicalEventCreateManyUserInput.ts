import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCategory } from "../../enums/EventCategory";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("ClinicalEventCreateManyUserInput", {})
export class ClinicalEventCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT";

  @TypeGraphQL.Field(_type => EventCategory, {
    nullable: true
  })
  eventCategory?: "FOLDER" | "DOCUMENT" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedReport?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedByUserId?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dicom?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dicomId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalDiagnosticId?: string | undefined;
}
