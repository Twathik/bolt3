import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyUserInputEnvelope } from "../inputs/WorkingListCreateManyUserInputEnvelope";
import { WorkingListCreateOrConnectWithoutUserInput } from "../inputs/WorkingListCreateOrConnectWithoutUserInput";
import { WorkingListCreateWithoutUserInput } from "../inputs/WorkingListCreateWithoutUserInput";
import { WorkingListScalarWhereInput } from "../inputs/WorkingListScalarWhereInput";
import { WorkingListUpdateManyWithWhereWithoutUserInput } from "../inputs/WorkingListUpdateManyWithWhereWithoutUserInput";
import { WorkingListUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WorkingListUpdateWithWhereUniqueWithoutUserInput";
import { WorkingListUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WorkingListUpsertWithWhereUniqueWithoutUserInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateManyWithoutUserNestedInput", {})
export class WorkingListUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutUserInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: WorkingListUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  set?: WorkingListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WorkingListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  delete?: WorkingListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkingListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: WorkingListUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: WorkingListUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkingListScalarWhereInput[] | undefined;
}
