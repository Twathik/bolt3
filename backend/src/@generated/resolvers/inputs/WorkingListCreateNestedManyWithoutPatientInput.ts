import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyPatientInputEnvelope } from "../inputs/WorkingListCreateManyPatientInputEnvelope";
import { WorkingListCreateOrConnectWithoutPatientInput } from "../inputs/WorkingListCreateOrConnectWithoutPatientInput";
import { WorkingListCreateWithoutPatientInput } from "../inputs/WorkingListCreateWithoutPatientInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateNestedManyWithoutPatientInput", {})
export class WorkingListCreateNestedManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutPatientInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkingListWhereUniqueInput[] | undefined;
}
