import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutClinicalEventInput } from "../inputs/UserCreateWithoutClinicalEventInput";
import { UserUpdateWithoutClinicalEventInput } from "../inputs/UserUpdateWithoutClinicalEventInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutClinicalEventInput", {})
export class UserUpsertWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  update!: UserUpdateWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: UserCreateWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
