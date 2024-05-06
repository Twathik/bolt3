import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentWhereInput } from "../inputs/PatientScannedDocumentWhereInput";

@TypeGraphQL.InputType("PatientScannedDocumentListRelationFilter", {})
export class PatientScannedDocumentListRelationFilter {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  every?: PatientScannedDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  some?: PatientScannedDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  none?: PatientScannedDocumentWhereInput | undefined;
}
