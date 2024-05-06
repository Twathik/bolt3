import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentUpdateWithoutPatientInput } from "../inputs/PatientScannedDocumentUpdateWithoutPatientInput";
import { PatientScannedDocumentWhereUniqueInput } from "../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.InputType("PatientScannedDocumentUpdateWithWhereUniqueWithoutPatientInput", {})
export class PatientScannedDocumentUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PatientScannedDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: PatientScannedDocumentUpdateWithoutPatientInput;
}
