import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentScalarWhereInput } from "../inputs/PatientScannedDocumentScalarWhereInput";
import { PatientScannedDocumentUpdateManyMutationInput } from "../inputs/PatientScannedDocumentUpdateManyMutationInput";

@TypeGraphQL.InputType("PatientScannedDocumentUpdateManyWithWhereWithoutPatientInput", {})
export class PatientScannedDocumentUpdateManyWithWhereWithoutPatientInput {
  @TypeGraphQL.Field(_type => PatientScannedDocumentScalarWhereInput, {
    nullable: false
  })
  where!: PatientScannedDocumentScalarWhereInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PatientScannedDocumentUpdateManyMutationInput;
}
