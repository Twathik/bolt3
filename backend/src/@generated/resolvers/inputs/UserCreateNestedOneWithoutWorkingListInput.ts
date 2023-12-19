import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWorkingListInput } from "../inputs/UserCreateOrConnectWithoutWorkingListInput";
import { UserCreateWithoutWorkingListInput } from "../inputs/UserCreateWithoutWorkingListInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutWorkingListInput", {})
export class UserCreateNestedOneWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: UserCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
