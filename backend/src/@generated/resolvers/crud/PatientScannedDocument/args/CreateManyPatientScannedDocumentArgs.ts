import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentCreateManyInput } from "../../../inputs/PatientScannedDocumentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentCreateManyInput], {
    nullable: false
  })
  data!: PatientScannedDocumentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
