import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListWhereInput } from "../inputs/WorkingListWhereInput";

@TypeGraphQL.InputType("WorkingListListRelationFilter", {})
export class WorkingListListRelationFilter {
  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  every?: WorkingListWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  some?: WorkingListWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  none?: WorkingListWhereInput | undefined;
}
