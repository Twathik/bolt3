import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListUpdateWithoutUserInput } from "../inputs/WorkingListUpdateWithoutUserInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateWithWhereUniqueWithoutUserInput", {})
export class WorkingListUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutUserInput, {
    nullable: false
  })
  data!: WorkingListUpdateWithoutUserInput;
}
