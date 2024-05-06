import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientScannedDocumentOrderByWithRelationInput } from "../../../inputs/PatientScannedDocumentOrderByWithRelationInput";
import { PatientScannedDocumentWhereInput } from "../../../inputs/PatientScannedDocumentWhereInput";
import { PatientScannedDocumentWhereUniqueInput } from "../../../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePatientScannedDocumentArgs {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereInput, {
    nullable: true
  })
  where?: PatientScannedDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PatientScannedDocumentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: PatientScannedDocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
