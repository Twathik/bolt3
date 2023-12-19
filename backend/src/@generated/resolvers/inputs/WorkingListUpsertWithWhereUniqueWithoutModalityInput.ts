import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutModalityInput } from "../inputs/WorkingListCreateWithoutModalityInput";
import { WorkingListUpdateWithoutModalityInput } from "../inputs/WorkingListUpdateWithoutModalityInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpsertWithWhereUniqueWithoutModalityInput", {})
export class WorkingListUpsertWithWhereUniqueWithoutModalityInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutModalityInput, {
    nullable: false
  })
  update!: WorkingListUpdateWithoutModalityInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutModalityInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutModalityInput;
}
