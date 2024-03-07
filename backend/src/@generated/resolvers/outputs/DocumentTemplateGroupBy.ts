import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTemplateCountAggregate } from "../outputs/DocumentTemplateCountAggregate";
import { DocumentTemplateMaxAggregate } from "../outputs/DocumentTemplateMaxAggregate";
import { DocumentTemplateMinAggregate } from "../outputs/DocumentTemplateMinAggregate";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("DocumentTemplateGroupBy", {})
export class DocumentTemplateGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  template!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  empty!: boolean;

  @TypeGraphQL.Field(_type => DocumentTemplateCountAggregate, {
    nullable: true
  })
  _count!: DocumentTemplateCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateMinAggregate, {
    nullable: true
  })
  _min!: DocumentTemplateMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTemplateMaxAggregate, {
    nullable: true
  })
  _max!: DocumentTemplateMaxAggregate | null;
}
