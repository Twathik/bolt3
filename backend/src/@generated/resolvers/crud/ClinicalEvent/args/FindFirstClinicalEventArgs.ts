import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventOrderByWithRelationInput } from "../../../inputs/ClinicalEventOrderByWithRelationInput";
import { ClinicalEventWhereInput } from "../../../inputs/ClinicalEventWhereInput";
import { ClinicalEventWhereUniqueInput } from "../../../inputs/ClinicalEventWhereUniqueInput";
import { ClinicalEventScalarFieldEnum } from "../../../../enums/ClinicalEventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ClinicalEventOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClinicalEventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "eventType" | "userId" | "patientId" | "createdAt" | "updatedAt" | "onTrash" | "deleted" | "empty" | "createdReport" | "report" | "dicom" | "dicomId" | "clinicalDiagnosticId"> | undefined;
}
