import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.InputType("DocumentStoreCreateWithoutPatientInput", {})
export class DocumentStoreCreateWithoutPatientInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: false
  })
  patientDocumentType!: "folder" | "document";

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  content?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  textContent?: string | undefined;
}
