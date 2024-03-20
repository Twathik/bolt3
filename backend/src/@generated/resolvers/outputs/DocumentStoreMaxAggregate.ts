import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.ObjectType("DocumentStoreMaxAggregate", {})
export class DocumentStoreMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId!: string | null;

  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: true
  })
  patientDocumentType!: "folder" | "document" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;
}
