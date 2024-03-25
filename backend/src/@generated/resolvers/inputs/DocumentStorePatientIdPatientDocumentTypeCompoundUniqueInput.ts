import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientDocumentType } from "../../enums/PatientDocumentType";

@TypeGraphQL.InputType("DocumentStorePatientIdPatientDocumentTypeCompoundUniqueInput", {})
export class DocumentStorePatientIdPatientDocumentTypeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => PatientDocumentType, {
    nullable: false
  })
  patientDocumentType!: "folder" | "document";
}
