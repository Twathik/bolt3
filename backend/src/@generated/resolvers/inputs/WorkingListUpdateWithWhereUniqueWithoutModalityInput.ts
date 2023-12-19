import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListUpdateWithoutModalityInput } from "../inputs/WorkingListUpdateWithoutModalityInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateWithWhereUniqueWithoutModalityInput", {})
export class WorkingListUpdateWithWhereUniqueWithoutModalityInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutModalityInput, {
    nullable: false
  })
  data!: WorkingListUpdateWithoutModalityInput;
}
