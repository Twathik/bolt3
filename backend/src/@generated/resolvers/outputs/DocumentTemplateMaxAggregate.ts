import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TemplateSpeciality } from "../../enums/TemplateSpeciality";

@TypeGraphQL.ObjectType("DocumentTemplateMaxAggregate", {})
export class DocumentTemplateMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  templateName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  evenTemplateUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  eventDoxTemplate!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oddTemplateUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  oddDoxTemplate!: string | null;

  @TypeGraphQL.Field(_type => TemplateSpeciality, {
    nullable: true
  })
  templateSpeciality!: "CARDIOLOGY" | "GYNECOLOGY" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
