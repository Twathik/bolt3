import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListScalarWhereInput } from "../inputs/WorkingListScalarWhereInput";
import { WorkingListUpdateManyMutationInput } from "../inputs/WorkingListUpdateManyMutationInput";

@TypeGraphQL.InputType("WorkingListUpdateManyWithWhereWithoutUserInput", {})
export class WorkingListUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkingListScalarWhereInput, {
    nullable: false
  })
  where!: WorkingListScalarWhereInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkingListUpdateManyMutationInput;
}
