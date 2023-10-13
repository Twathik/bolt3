import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationOrderByWithRelationInput } from "../../../inputs/ConsultationOrderByWithRelationInput";
import { ConsultationWhereInput } from "../../../inputs/ConsultationWhereInput";
import { ConsultationWhereUniqueInput } from "../../../inputs/ConsultationWhereUniqueInput";
import { ConsultationScalarFieldEnum } from "../../../../enums/ConsultationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstConsultationOrThrowArgs {
  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  where?: ConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ConsultationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: true
  })
  cursor?: ConsultationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ConsultationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "day" | "month" | "year" | "createdAt"> | undefined;
}
