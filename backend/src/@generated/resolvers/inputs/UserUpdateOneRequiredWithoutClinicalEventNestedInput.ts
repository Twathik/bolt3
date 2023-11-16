import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutClinicalEventInput } from "../inputs/UserCreateOrConnectWithoutClinicalEventInput";
import { UserCreateWithoutClinicalEventInput } from "../inputs/UserCreateWithoutClinicalEventInput";
import { UserUpdateToOneWithWhereWithoutClinicalEventInput } from "../inputs/UserUpdateToOneWithWhereWithoutClinicalEventInput";
import { UserUpsertWithoutClinicalEventInput } from "../inputs/UserUpsertWithoutClinicalEventInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutClinicalEventNestedInput", {})
export class UserUpdateOneRequiredWithoutClinicalEventNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutClinicalEventInput, {
    nullable: true
  })
  create?: UserCreateWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutClinicalEventInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutClinicalEventInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutClinicalEventInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutClinicalEventInput | undefined;
}
