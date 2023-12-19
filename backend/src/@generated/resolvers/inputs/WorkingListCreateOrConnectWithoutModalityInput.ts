import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutModalityInput } from "../inputs/WorkingListCreateWithoutModalityInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateOrConnectWithoutModalityInput", {})
export class WorkingListCreateOrConnectWithoutModalityInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutModalityInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutModalityInput;
}
