import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("UserMinAggregate", {})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarUrl!: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role!: "USER" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastConnection!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  searchApiKeyId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  searchApiKey!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  editorKey!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
