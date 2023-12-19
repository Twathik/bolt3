import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyPatientInputEnvelope } from "../inputs/WorkingListCreateManyPatientInputEnvelope";
import { WorkingListCreateOrConnectWithoutPatientInput } from "../inputs/WorkingListCreateOrConnectWithoutPatientInput";
import { WorkingListCreateWithoutPatientInput } from "../inputs/WorkingListCreateWithoutPatientInput";
import { WorkingListScalarWhereInput } from "../inputs/WorkingListScalarWhereInput";
import { WorkingListUpdateManyWithWhereWithoutPatientInput } from "../inputs/WorkingListUpdateManyWithWhereWithoutPatientInput";
import { WorkingListUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/WorkingListUpdateWithWhereUniqueWithoutPatientInput";
import { WorkingListUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/WorkingListUpsertWithWhereUniqueWithoutPatientInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateManyWithoutPatientNestedInput", {})
export class WorkingListUpdateManyWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutPatientInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  upsert?: WorkingListUpsertWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyPatientInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkingListUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  update?: WorkingListUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListUpdateManyWithWhereWithoutPatientInput], {
    nullable: true
  })
  updateMany?: WorkingListUpdateManyWithWhereWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkingListScalarWhereInput[] | undefined;
}
