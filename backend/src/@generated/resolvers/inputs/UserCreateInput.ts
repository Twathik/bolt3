import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateNestedManyWithoutUserInput } from "../inputs/ClinicalEventCreateNestedManyWithoutUserInput";
import { UserCreatephoneNumbersInput } from "../inputs/UserCreatephoneNumbersInput";
import { WorkingListCreateNestedManyWithoutUserInput } from "../inputs/WorkingListCreateNestedManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarUrl?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => UserCreatephoneNumbersInput, {
    nullable: true
  })
  phoneNumbers?: UserCreatephoneNumbersInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastConnection?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  searchApiKeyId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchApiKey?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ClinicalEvent?: ClinicalEventCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  WorkingList?: WorkingListCreateNestedManyWithoutUserInput | undefined;
}
