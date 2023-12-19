import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWorkingListInput } from "../inputs/UserCreateWithoutWorkingListInput";
import { UserUpdateWithoutWorkingListInput } from "../inputs/UserUpdateWithoutWorkingListInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutWorkingListInput", {})
export class UserUpsertWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWorkingListInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWorkingListInput, {
    nullable: false
  })
  create!: UserCreateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
