import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentWhereUniqueInput } from "../../../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PatientScannedDocumentWhereUniqueInput;
}
