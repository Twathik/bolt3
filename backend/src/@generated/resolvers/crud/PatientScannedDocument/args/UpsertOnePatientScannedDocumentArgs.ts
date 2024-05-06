import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentCreateInput } from "../../../inputs/PatientScannedDocumentCreateInput";
import { PatientScannedDocumentUpdateInput } from "../../../inputs/PatientScannedDocumentUpdateInput";
import { PatientScannedDocumentWhereUniqueInput } from "../../../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PatientScannedDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateInput, {
    nullable: false
  })
  create!: PatientScannedDocumentCreateInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateInput, {
    nullable: false
  })
  update!: PatientScannedDocumentUpdateInput;
}
