import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClinicalEventOrderByWithAggregationInput } from "../../../inputs/ClinicalEventOrderByWithAggregationInput";
import { ClinicalEventScalarWhereWithAggregatesInput } from "../../../inputs/ClinicalEventScalarWhereWithAggregatesInput";
import { ClinicalEventWhereInput } from "../../../inputs/ClinicalEventWhereInput";
import { ClinicalEventScalarFieldEnum } from "../../../../enums/ClinicalEventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClinicalEventArgs {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ClinicalEventOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "eventType" | "eventCategory" | "userId" | "patientId" | "createdAt" | "updatedAt" | "deleted" | "report" | "dicom" | "dicomId" | "clinicalDiagnosticId">;

  @TypeGraphQL.Field(_type => ClinicalEventScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ClinicalEventScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
