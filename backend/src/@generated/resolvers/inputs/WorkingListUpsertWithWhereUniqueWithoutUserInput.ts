import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutUserInput } from "../inputs/WorkingListCreateWithoutUserInput";
import { WorkingListUpdateWithoutUserInput } from "../inputs/WorkingListUpdateWithoutUserInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpsertWithWhereUniqueWithoutUserInput", {})
export class WorkingListUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WorkingListUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutUserInput;
}
