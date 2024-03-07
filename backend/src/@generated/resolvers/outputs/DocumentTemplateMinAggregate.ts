import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("DocumentTemplateMinAggregate", {})
export class DocumentTemplateMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  eventType!: "DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  template!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  empty!: boolean | null;
}
