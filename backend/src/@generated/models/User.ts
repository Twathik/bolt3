import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType("User", {})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  lastName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarUrl?: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  phoneNumbers!: string[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastConnection!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typesenseApiKey?: string | null;
}
