import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyModalityInputEnvelope } from "../inputs/WorkingListCreateManyModalityInputEnvelope";
import { WorkingListCreateOrConnectWithoutModalityInput } from "../inputs/WorkingListCreateOrConnectWithoutModalityInput";
import { WorkingListCreateWithoutModalityInput } from "../inputs/WorkingListCreateWithoutModalityInput";
import { WorkingListScalarWhereInput } from "../inputs/WorkingListScalarWhereInput";
import { WorkingListUpdateManyWithWhereWithoutModalityInput } from "../inputs/WorkingListUpdateManyWithWhereWithoutModalityInput";
import { WorkingListUpdateWithWhereUniqueWithoutModalityInput } from "../inputs/WorkingListUpdateWithWhereUniqueWithoutModalityInput";
import { WorkingListUpsertWithWhereUniqueWithoutModalityInput } from "../inputs/WorkingListUpsertWithWhereUniqueWithoutModalityInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateManyWithoutModalityNestedInput", {})
export class WorkingListUpdateManyWithoutModalityNestedInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutModalityInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutModalityInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpsertWithWhereUniqueWithoutModalityInput], {
    nullable: true
  })
  upsert?: WorkingListUpsertWithWhereUniqueWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyModalityInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyModalityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkingListUpdateWithWhereUniqueWithoutModalityInput], {
    nullable: true
  })
  update?: WorkingListUpdateWithWhereUniqueWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpdateManyWithWhereWithoutModalityInput], {
    nullable: true
  })
  updateMany?: WorkingListUpdateManyWithWhereWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkingListScalarWhereInput[] | undefined;
}
