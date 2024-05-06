import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentWhereInput } from "../../inputs/PatientScannedDocumentWhereInput";

@TypeGraphQL.ArgsType()
export class PatientCountPatientScanedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  where?: PatientScannedDocumentWhereInput | undefined;
}
