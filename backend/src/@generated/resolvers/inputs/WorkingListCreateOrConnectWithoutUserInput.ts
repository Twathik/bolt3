import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutUserInput } from "../inputs/WorkingListCreateWithoutUserInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateOrConnectWithoutUserInput", {})
export class WorkingListCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutUserInput;
}
