import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCategory } from "../../enums/EventCategory";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("ClinicalEventMaxAggregate", {})
export class ClinicalEventMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  eventType!: "DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT" | null;

  @TypeGraphQL.Field(_type => EventCategory, {
    nullable: true
  })
  eventCategory!: "FOLDER" | "DOCUMENT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedReport!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedByUserId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dicom!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dicomId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalDiagnosticId!: string | null;
}
