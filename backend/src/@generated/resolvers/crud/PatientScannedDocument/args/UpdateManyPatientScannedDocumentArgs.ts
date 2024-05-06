import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentUpdateManyMutationInput } from "../../../inputs/PatientScannedDocumentUpdateManyMutationInput";
import { PatientScannedDocumentWhereInput } from "../../../inputs/PatientScannedDocumentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PatientScannedDocumentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  where?: PatientScannedDocumentWhereInput | undefined;
}
