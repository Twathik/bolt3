import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("ClinicalEventMinAggregate", {})
export class ClinicalEventMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  eventType!: "DIAGNOSTIC" | "PRESCRIPTION" | null;

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
  onTrash!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  empty!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  createdReport!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  report!: string | null;

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
