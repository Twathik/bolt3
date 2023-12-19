import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutWorkingListInput } from "../inputs/UserUpdateWithoutWorkingListInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutWorkingListInput", {})
export class UserUpdateToOneWithWhereWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWorkingListInput, {
    nullable: false
  })
  data!: UserUpdateWithoutWorkingListInput;
}
