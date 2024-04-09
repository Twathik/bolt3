import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TemplateSpeciality } from "../../enums/TemplateSpeciality";

@TypeGraphQL.InputType("DocumentTemplateCreateInput", {})
export class DocumentTemplateCreateInput {
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
  eventDoxTemplate?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  oddTemplateUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oddDoxTemplate?: string | undefined;

  @TypeGraphQL.Field(_type => TemplateSpeciality, {
    nullable: false
  })
  templateSpeciality!: "CARDIOLOGY" | "GYNECOLOGY";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
