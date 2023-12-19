import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyUserInputEnvelope } from "../inputs/WorkingListCreateManyUserInputEnvelope";
import { WorkingListCreateOrConnectWithoutUserInput } from "../inputs/WorkingListCreateOrConnectWithoutUserInput";
import { WorkingListCreateWithoutUserInput } from "../inputs/WorkingListCreateWithoutUserInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateNestedManyWithoutUserInput", {})
export class WorkingListCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutUserInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkingListWhereUniqueInput[] | undefined;
}
