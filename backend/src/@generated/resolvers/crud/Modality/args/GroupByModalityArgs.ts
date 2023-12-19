import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModalityOrderByWithAggregationInput } from "../../../inputs/ModalityOrderByWithAggregationInput";
import { ModalityScalarWhereWithAggregatesInput } from "../../../inputs/ModalityScalarWhereWithAggregatesInput";
import { ModalityWhereInput } from "../../../inputs/ModalityWhereInput";
import { ModalityScalarFieldEnum } from "../../../../enums/ModalityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByModalityArgs {
  @TypeGraphQL.Field(_type => ModalityWhereInput, {
    nullable: true
  })
  where?: ModalityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ModalityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ModalityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModalityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "modalityName" | "modalityPseudo" | "modalityAETitle" | "modalityIpAddress" | "modalityType" | "modalityPort" | "deleted" | "activated" | "enabled">;

  @TypeGraphQL.Field(_type => ModalityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ModalityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
