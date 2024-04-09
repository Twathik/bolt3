import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { TemplateSpeciality } from "../enums/TemplateSpeciality";

@TypeGraphQL.ObjectType("DocumentTemplate", {})
export class DocumentTemplate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  templateName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  evenTemplateUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventDoxTemplate?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  oddTemplateUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oddDoxTemplate?: string | null;

  @TypeGraphQL.Field(_type => TemplateSpeciality, {
    nullable: false
  })
  templateSpeciality!: "CARDIOLOGY" | "GYNECOLOGY";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
