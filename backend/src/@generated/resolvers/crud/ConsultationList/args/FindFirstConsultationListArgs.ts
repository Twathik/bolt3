import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListOrderByWithRelationInput } from "../../../inputs/ConsultationListOrderByWithRelationInput";
import { ConsultationListWhereInput } from "../../../inputs/ConsultationListWhereInput";
import { ConsultationListWhereUniqueInput } from "../../../inputs/ConsultationListWhereUniqueInput";
import { ConsultationListScalarFieldEnum } from "../../../../enums/ConsultationListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  where?: ConsultationListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ConsultationListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: true
  })
  cursor?: ConsultationListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "patientId" | "active" | "consultationDate" | "createdAt" | "updatedAt"> | undefined;
}
