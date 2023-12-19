import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyClinicalEventInputEnvelope } from "../inputs/WorkingListCreateManyClinicalEventInputEnvelope";
import { WorkingListCreateOrConnectWithoutClinicalEventInput } from "../inputs/WorkingListCreateOrConnectWithoutClinicalEventInput";
import { WorkingListCreateWithoutClinicalEventInput } from "../inputs/WorkingListCreateWithoutClinicalEventInput";
import { WorkingListScalarWhereInput } from "../inputs/WorkingListScalarWhereInput";
import { WorkingListUpdateManyWithWhereWithoutClinicalEventInput } from "../inputs/WorkingListUpdateManyWithWhereWithoutClinicalEventInput";
import { WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput } from "../inputs/WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput";
import { WorkingListUpsertWithWhereUniqueWithoutClinicalEventInput } from "../inputs/WorkingListUpsertWithWhereUniqueWithoutClinicalEventInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateManyWithoutClinicalEventNestedInput", {})
export class WorkingListUpdateManyWithoutClinicalEventNestedInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutClinicalEventInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutClinicalEventInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpsertWithWhereUniqueWithoutClinicalEventInput], {
    nullable: true
  })
  upsert?: WorkingListUpsertWithWhereUniqueWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyClinicalEventInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyClinicalEventInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput], {
    nullable: true
  })
  update?: WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpdateManyWithWhereWithoutClinicalEventInput], {
    nullable: true
  })
  updateMany?: WorkingListUpdateManyWithWhereWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkingListScalarWhereInput[] | undefined;
}
