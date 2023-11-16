import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutClinicalEventInput } from "../inputs/UserCreateWithoutClinicalEventInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutClinicalEventInput", {})
export class UserCreateOrConnectWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: UserCreateWithoutClinicalEventInput;
}
