import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutClinicalEventInput } from "../inputs/UserUpdateWithoutClinicalEventInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutClinicalEventInput", {})
export class UserUpdateToOneWithWhereWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  data!: UserUpdateWithoutClinicalEventInput;
}
