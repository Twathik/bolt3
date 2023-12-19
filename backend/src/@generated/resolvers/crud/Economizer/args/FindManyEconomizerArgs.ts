import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EconomizerOrderByWithRelationInput } from "../../../inputs/EconomizerOrderByWithRelationInput";
import { EconomizerWhereInput } from "../../../inputs/EconomizerWhereInput";
import { EconomizerWhereUniqueInput } from "../../../inputs/EconomizerWhereUniqueInput";
import { EconomizerScalarFieldEnum } from "../../../../enums/EconomizerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEconomizerArgs {
  @TypeGraphQL.Field(_type => EconomizerWhereInput, {
    nullable: true
  })
  where?: EconomizerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EconomizerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EconomizerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EconomizerWhereUniqueInput, {
    nullable: true
  })
  cursor?: EconomizerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EconomizerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "eventType" | "template"> | undefined;
}
