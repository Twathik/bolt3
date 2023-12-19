import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyModalityInputEnvelope } from "../inputs/WorkingListCreateManyModalityInputEnvelope";
import { WorkingListCreateOrConnectWithoutModalityInput } from "../inputs/WorkingListCreateOrConnectWithoutModalityInput";
import { WorkingListCreateWithoutModalityInput } from "../inputs/WorkingListCreateWithoutModalityInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateNestedManyWithoutModalityInput", {})
export class WorkingListCreateNestedManyWithoutModalityInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutModalityInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutModalityInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutModalityInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyModalityInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyModalityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkingListWhereUniqueInput[] | undefined;
}
