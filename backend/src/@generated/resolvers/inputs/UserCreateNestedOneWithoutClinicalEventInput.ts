import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutClinicalEventInput } from "../inputs/UserCreateOrConnectWithoutClinicalEventInput";
import { UserCreateWithoutClinicalEventInput } from "../inputs/UserCreateWithoutClinicalEventInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutClinicalEventInput", {})
export class UserCreateNestedOneWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutClinicalEventInput, {
    nullable: true
  })
  create?: UserCreateWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutClinicalEventInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
