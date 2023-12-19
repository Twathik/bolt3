import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerOrderByWithAggregationInput } from "../../../inputs/EconomizerOrderByWithAggregationInput";
import { EconomizerScalarWhereWithAggregatesInput } from "../../../inputs/EconomizerScalarWhereWithAggregatesInput";
import { EconomizerWhereInput } from "../../../inputs/EconomizerWhereInput";
import { EconomizerScalarFieldEnum } from "../../../../enums/EconomizerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerWhereInput, {
    nullable: true
  })
  where?: EconomizerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EconomizerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EconomizerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EconomizerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "eventType" | "template">;

  @TypeGraphQL.Field(_type => EconomizerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EconomizerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
