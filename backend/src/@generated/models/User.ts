import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ClinicalEvent } from "../models/ClinicalEvent";
import { WorkingList } from "../models/WorkingList";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  searchApiKeyId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  searchApiKey!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  editorKey!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  ClinicalEvent?: ClinicalEvent[];

  WorkingList?: WorkingList[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
