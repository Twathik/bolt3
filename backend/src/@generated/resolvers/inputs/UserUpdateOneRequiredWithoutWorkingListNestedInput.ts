import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWorkingListInput } from "../inputs/UserCreateOrConnectWithoutWorkingListInput";
import { UserCreateWithoutWorkingListInput } from "../inputs/UserCreateWithoutWorkingListInput";
import { UserUpdateToOneWithWhereWithoutWorkingListInput } from "../inputs/UserUpdateToOneWithWhereWithoutWorkingListInput";
import { UserUpsertWithoutWorkingListInput } from "../inputs/UserUpsertWithoutWorkingListInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutWorkingListNestedInput", {})
export class UserUpdateOneRequiredWithoutWorkingListNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWorkingListInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutWorkingListInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutWorkingListInput | undefined;
}
