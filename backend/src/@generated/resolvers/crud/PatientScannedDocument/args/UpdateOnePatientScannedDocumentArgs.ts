import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentUpdateInput } from "../../../inputs/PatientScannedDocumentUpdateInput";
import { PatientScannedDocumentWhereUniqueInput } from "../../../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateInput, {
    nullable: false
  })
  data!: PatientScannedDocumentUpdateInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PatientScannedDocumentWhereUniqueInput;
}
