import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentCreateInput } from "../../../inputs/PatientScannedDocumentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateInput, {
    nullable: false
  })
  data!: PatientScannedDocumentCreateInput;
}
